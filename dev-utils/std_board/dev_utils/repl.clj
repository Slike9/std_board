(ns std-board.dev-utils.repl
  (:require [std-board.core]
            [cemerick.austin]
            [cemerick.austin.repls]))

(defn run-with-repl []
  (std-board.core/-main)
  (let [repl-env (reset! cemerick.austin.repls/browser-repl-env
                        (cemerick.austin/repl-env))]
    (cemerick.austin.repls/cljs-repl repl-env)))
