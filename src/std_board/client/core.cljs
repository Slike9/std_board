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

(em/defsnippet story "html/template.html" ".b-story" [data]
  ".b-story__title" (ef/content (:title data))
  ".b-story__delete" (ev/listen "click" #(delete-story (:id data)))
  ".b-story__status[data-status='new']" (ef/content (map task (:task data))))

(em/defsnippet task "html/template.html" ".b-task" [data]
  ".b-task__title" (ef/content (:title data)))

(defn render-stories [data]
  (ef/at "#dashboard .b-dashboard__body" (ef/content (map story data))))

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

(defn start []
  (ef/at "#container" (ef/do->
                        (ef/content "")
                        (ef/append (toolbar))
                        (ef/append (dashboard))))
  (load-stories))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))

