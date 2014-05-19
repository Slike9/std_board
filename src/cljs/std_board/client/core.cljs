(ns std-board.client.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as ev]
            [clojure.browser.repl]
            [clojure.string :as string]
            [ajax.core :refer [GET POST PUT DELETE]])
  (:require-macros [enfocus.macros :as em]))

(em/defsnippet toolbar "html/template.html" "#toolbar" []
  "#create-story-btn" (ev/listen "click" create-story)
  "#project-list" (ev/listen "change" load-stories)
  ".b-project__edit" (ev/listen "click" edit-project)
  ".b-project__create" (ev/listen "click" create-project)
  ".b-project__title-edit" (ev/listen "keydown" (fn [event]
                                                  (case (.-keyCode event)
                                                    13 (save-project)
                                                    :default)))
  ".b-project__save" (ev/listen "click" save-project)
  ".b-project__cancel" (ev/listen "click" cancel-edit-project)
  ".b-project__delete" (ev/listen "click" delete-project))

(em/defsnippet dashboard "html/template.html" "#dashboard" []
  ".b-dashboard__body" (ef/content ""))

(defn render-story-tasks-with-status
  [story status]
  (let [tasks (:task story)
        tasks (filter #(= (:status %) status) tasks)]
    (map task-snippet tasks)))

(em/defsnippet story-snippet "html/template.html" ".b-story" [story]
  ".b-story" (ef/set-attr :data-story-id (:id story))
  ".b-story__title" (ef/do->
                      (ef/content (:title story))
                      (ev/listen "click" #(edit-story (:id story))))
  ".b-story__title-edit" (ef/do->
                           (ef/set-form-input (:title story))
                           ;(ev/listen "blur" #(cancel-edit-story (:id story)))
                           (ev/listen "keydown" (fn [event]
                                                  (case (.-keyCode event)
                                                    13 (save-story (:id story))
                                                    27 (cancel-edit-story (:id story))
                                                    :default))))
  ".b-story__save" (ev/listen "click" #(save-story (:id story)))
  ".b-story__cancel" (ev/listen "click" #(cancel-edit-story (:id story)))
  ".b-story__delete" (ev/listen "click" #(delete-story (:id story)))
  ".b-story__add-task" (ev/listen "click" #(create-story-task (:id story)))
  ".b-story__status[data-status='new']" (ef/content (render-story-tasks-with-status story "new"))
  ".b-story__status[data-status='progress']" (ef/content (render-story-tasks-with-status story "progress"))
  ".b-story__status[data-status='done']" (ef/content (render-story-tasks-with-status story "done"))
  )

(defn edit-story [story-id]
  (let [story-sel (str ".b-story[data-story-id=" story-id "] ")]
    (ef/at (str story-sel) (ef/add-class "b-story_edit"))
    (ef/at (str story-sel ".b-story__title-edit") (ef/focus) )))

(defn cancel-edit-story [story-id]
  (let [story-sel (str ".b-story[data-story-id=" story-id "] ")]
    (ef/at (str story-sel) (ef/remove-class "b-story_edit"))))

(defn save-story [story-id]
  (cancel-edit-story story-id)
  (let [new-title (ef/from (str ".b-story[data-story-id=" story-id "] .b-story__title-edit")
                              (ef/read-form-input))]
    (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__title")
           (ef/content new-title))
    (PUT (str "stories/" story-id)
         {:params {:story {:title new-title}}
          :error-handler error-handler })))

(em/defsnippet task-snippet "html/template.html" ".b-task" [task]
  ".b-task" (ef/set-attr :data-task-id (:id task))
  ".b-task__title" (ef/do->
                     (ef/content (:title task))
                     (ev/listen "click" #(edit-task task)) )
  ".b-task__title-edit" (ef/do->
                         (ef/set-form-input (:title task))
                         (ev/listen "keydown" (fn [event]
                                              (case (.-keyCode event)
                                                13 (do
                                                     (.preventDefault event)
                                                     (save-task task) )
                                                :default))) )
  ".b-task__save" (ev/listen "click" #(save-task task))
  ".b-task__start" (ef/do->
                     (ev/listen "click" #(set-task-status task "progress"))
                     (if (not= (:status task) "new")
                       (ef/set-style :display "none")))
  ".b-task__finish" (ef/do->
                     (ev/listen "click" #(set-task-status task "done"))
                     (if (not= (:status task) "progress")
                       (ef/set-style :display "none")))
  ".b-task__reopen" (ef/do->
                     (ev/listen "click" #(set-task-status task "new"))
                     (if (not= (:status task) "done")
                       (ef/set-style :display "none")))
  ".b-task__delete" (ev/listen "click" #(delete-task task)))

(defn edit-task [task]
  (let [task-id (:id task)
        task-sel (str ".b-task[data-task-id=" task-id "] ") ]
    (ef/at (str task-sel) (ef/add-class "b-task_edit") )
    (ef/at (str task-sel ".b-task__title-edit") (ef/focus) )))

(defn cancel-edit-task [task]
  (let [task-id (:id task)
        task-sel (str ".b-task[data-task-id=" task-id "] ") ]
    (ef/at (str task-sel) (ef/remove-class "b-task_edit") )))

(defn save-task [task]
  (let [task-id (:id task)
        task-sel (str ".b-task[data-task-id=" task-id "] ")
        new-title (ef/from (str task-sel ".b-task__title-edit") (ef/read-form-input)) ]
    (cancel-edit-task task)
    (ef/at (str task-sel ".b-task__title") (ef/content new-title))
    (PUT (str "/stories/" (:story_id task) "/tasks/" (:id task))
         {:params {:task {:title new-title}}
          :error-handler error-handler })))

(defn render-stories [stories]
  (ef/at "#dashboard .b-dashboard__body" (ef/content (map story-snippet stories))))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Something bad happened: " status " " status-text)))

(defn load-project-stories [project-id]
  (GET (str "/projects/" project-id "/stories")
       {:handler render-stories
        :error-handler error-handler}))

(def projects (atom []))

(defn current-project-id []
  (js/parseInt (ef/from "#project-list" (ef/read-form-input))))

(defn current-project []
  (first (filter #(= (:id %) (current-project-id)) @projects)))

(defn load-stories []
  (load-project-stories (current-project-id)))

(defn create-story []
  (POST "/stories"
        {:params {:story {:title "New Story", :project_id (current-project-id)}}
         :handler load-stories
         :error-handler error-handler }))

(defn delete-story [story-id]
  (if (js/confirm "Delete the story?")
    (ajax.core/ajax-request (str "/stories/" story-id)
                            "DELETE"
                            (ajax.core/transform-opts
                              {:handler load-stories
                               :error-handler error-handler }))))

(defn create-story-task [story-id]
  (POST (str "/stories/" story-id "/tasks")
        {:params {:task {:title "New Task"}}
         :handler load-stories
         :error-handler error-handler }))

(defn set-task-status [task status]
  (PUT (str "/stories/" (:story_id task) "/tasks/" (:id task))
        {:params {:task {:status status}}
         :handler load-stories
         :error-handler error-handler }))

(defn delete-task [task]
  (if (js/confirm "Delete the task?")
    (ajax.core/ajax-request (str "/stories/" (:story_id task) "/tasks/" (:id task))
                            "DELETE"
                            (ajax.core/transform-opts
                              {:handler load-stories
                               :error-handler error-handler }))))

(defn render-projects []
  (ef/at "#project-list" (ef/do->
                           (ef/content (string/join (map #(str "<option value=\"" (:id %) "\">" (:title %) "</option>")
                                                         @projects))))))
(defn render-current-project []
  (ef/at (str "#project-list option[value='" (current-project-id) "']") (ef/content (:title (current-project)))))

(defn load-projects []
  (GET "/projects"
       {:handler #(do
                    (reset! projects %)
                    (render-projects)
                    (load-stories))
        :error-handler error-handler}))

(defn create-project []
  (POST "/projects"
        {:params {:project {:title "New Project"}}
         :handler load-projects
         :error-handler error-handler}))

(defn edit-project []
  (ef/at ".b-project" (ef/add-class "b-project_edit"))
  (ef/at ".b-project__title-edit" (ef/set-form-input (:title (current-project)))))

(defn cancel-edit-project []
  (ef/at ".b-project" (ef/remove-class "b-project_edit")))

(defn save-project []
  (cancel-edit-project)
  (let [project-attrs {:title (ef/from ".b-project__title-edit" (ef/read-form-input))}
        project-id (current-project-id)]
    (PUT (str "/projects/" project-id)
         {:params {:project {:title (ef/from ".b-project__title-edit" (ef/read-form-input))}}
          :handler #(do
                      (swap! projects (fn [old-projects] (map (fn [item] (if (= (:id item) project-id)
                                                                    (merge item project-attrs)
                                                                    item))
                                                       old-projects)))
                      (render-current-project))
          :error-handler error-handler})))

(defn delete-project []
  (when (js/confirm "Delete the project?")
    (cancel-edit-project)
    (ajax.core/ajax-request (str "/projects/" (current-project-id))
                            "DELETE"
                            (ajax.core/transform-opts
                              {:handler load-projects
                               :error-handler error-handler }))))

(defn start []
  (ef/at "#container" (ef/do->
                        (ef/content "")
                        (ef/append (toolbar))
                        (ef/append (dashboard))))
  (load-projects))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))

