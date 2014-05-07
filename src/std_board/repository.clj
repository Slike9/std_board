(ns std-board.repository
  (require [std-board.db :as db]
           [korma.core :refer :all]))

(defn get-stories []
  (select db/story
          (with db/task)
          (order :id :DESC)))

(defn get-story [id]
  (first (select db/story
                 (with db/task)
                 (where (= :id id)))))

(defn create-story [story-attrs]
  (insert db/story
          (values story-attrs)))

(defn delete-story [id]
  (delete db/story
          (where {:id (Integer/parseInt id)})))

(defn create-task [story-id, task-attrs]
  (insert db/task
          (values (assoc task-attrs :story_id story-id))))
