(ns std-board.repository
  (require [std-board.db :as db]
           [korma.core :refer :all]))

(defn get-stories []
  (select db/story
          (with db/task)))
