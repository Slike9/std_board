(ns std-board.client.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as ev]
            [clojure.browser.repl])
  (:require-macros [enfocus.macros :as em]))

(em/defsnippet toolbar "html/template.html" "#toolbar" [])

(em/defsnippet dashboard-header "html/template.html" "#dashboard-header" [])

(em/defsnippet story "html/template.html" ".b-story" []
  ".b-task" (ef/remove-node))

(em/defsnippet task "html/template.html" ".b-task" [])

(defn start []
  (ef/at "#container" (ef/do->
                        (ef/content "")
                        (ef/append (toolbar))
                        (ef/append (dashboard-header))
                        (ef/append (story))))
  (ef/at ".b-story__status[data-status='progress']" (ef/append (task))))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))

