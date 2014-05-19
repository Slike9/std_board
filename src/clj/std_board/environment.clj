(ns std-board.environment)

(defn production? []
  (= (System/getenv "CLJ_ENV") "production"))
