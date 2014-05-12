(ns std-board.client.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as ev]
            [clojure.browser.repl]
            [ajax.core :refer [GET POST PUT DELETE]])
  (:require-macros [enfocus.macros :as em]))

(em/defsnippet toolbar "html/template.html" "#toolbar" []
  "#create-story-btn" (ev/listen "click" create-story))

(em/defsnippet dashboard "html/template.html" "#dashboard" []
  ".b-dashboard__body" (ef/content ""))

(defn render-story-tasks-with-status
  [story status]
  (let [tasks (:task story)
        tasks (filter #(= (:status %) status) tasks)]
    (map task-snippet tasks)))

(em/defsnippet story-snippet "html/template.html" ".b-story" [story]
  ".b-story" (ef/set-attr :data-story-id (:id story))
  ".b-story__title" (ef/content (:title story))
  ".b-story__title-edit" (ef/set-form-input (:title story))
  ".b-story__edit" (ev/listen "click" #(edit-story (:id story)))
  ".b-story__save" (ev/listen "click" #(save-story (:id story)))
  ".b-story__delete" (ev/listen "click" #(delete-story (:id story)))
  ".b-story__add-task" (ev/listen "click" #(create-story-task (:id story)))
  ".b-story__status[data-status='new']" (ef/content (render-story-tasks-with-status story "new"))
  ".b-story__status[data-status='progress']" (ef/content (render-story-tasks-with-status story "progress"))
  ".b-story__status[data-status='done']" (ef/content (render-story-tasks-with-status story "done"))
  )

(defn edit-story [story-id]
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__edit") (ef/add-class "hidden"))
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__save") (ef/remove-class "hidden"))
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__title") (ef/add-class "hidden"))
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__title-edit") (ef/remove-class "hidden")))

(defn save-story [story-id]
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__edit") (ef/remove-class "hidden"))
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__save") (ef/add-class "hidden"))
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__title") (ef/remove-class "hidden"))
  (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__title-edit") (ef/add-class "hidden"))
  (let [new-title (ef/from (str ".b-story[data-story-id=" story-id "] .b-story__title-edit")
                              (ef/read-form-input))]
    (ef/at (str ".b-story[data-story-id=" story-id "] .b-story__title")
           (ef/content new-title))
    (PUT (str "stories/" story-id)
         {:params {:story {:title new-title}}
          :error-handler error-handler })))

(em/defsnippet task-snippet "html/template.html" ".b-task" [task]
  ".b-task" (ef/set-attr :data-task-id (:id task))
  ".b-task__title" (ef/content (:title task))
  ".b-task__title-edit" (ef/set-form-input (:title task))
  ".b-task__edit" (ev/listen "click" #(edit-task task))
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
                       (ef/set-style :display "none"))))
(defn edit-task [task]
  (let [task-id (:id task)
        story-id (:story_id task)]
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__edit")
           (ef/add-class "hidden"))
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__save")
           (ef/remove-class "hidden"))
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__title")
           (ef/add-class "hidden"))
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__title-edit")
           (ef/remove-class "hidden"))
    ))

(defn save-task [task]
  (let [task-id (:id task)
        story-id (:story_id task)
        new-title (ef/from (str ".b-task[data-task-id=" task-id "] .b-task__title-edit")
                           (ef/read-form-input)) ]
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__edit")
           (ef/remove-class "hidden"))
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__save")
           (ef/add-class "hidden"))
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__title")
           (ef/remove-class "hidden"))
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__title-edit")
           (ef/add-class "hidden"))
    (ef/at (str ".b-task[data-task-id=" task-id "] .b-task__title")
           (ef/content new-title))
    (PUT (str "/stories/" (:story_id task) "/tasks/" (:id task))
         {:params {:task {:title new-title}}
          :error-handler error-handler })))

(defn render-stories [stories]
  (ef/at "#dashboard .b-dashboard__body" (ef/content (map story-snippet stories))))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "Something bad happened: " status " " status-text)))

(defn load-stories []
  (GET "/stories"
       {:handler render-stories
        :error-handler error-handler}))

(defn create-story []
  (POST "/stories"
        {:params {:story {:title "New Story"}}
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

(defn start []
  (ef/at "#container" (ef/do->
                        (ef/content "")
                        (ef/append (toolbar))
                        (ef/append (dashboard))))
  (load-stories))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))

