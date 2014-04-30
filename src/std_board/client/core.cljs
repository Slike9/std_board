(ns std-board.client.core
  (:require [enfocus.core :as ef]
            [enfocus.events :as ev])
  (:require-macros [enfocus.macros :as em]))

(defn start []
  (ef/at "#container" (ef/do->
                        (ef/content "Hello world!")
                        (ev/listen :click #(do
                                            (js/alert "Hello")
                                            (.log js/console "World")
                                          )))))


;; (set! (.-onload js/window) start)
(set! (.-onload js/window) #(em/wait-for-load (start)))

