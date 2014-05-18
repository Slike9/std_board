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

(defn update-story [id story-attrs]
  (if story-attrs
    (update db/story
            (set-fields story-attrs)
            (where {:id id}))))

(defn delete-story [id]
  (delete db/story
          (where {:id (Integer/parseInt id)})))

(defn create-story-task [story-id task-attrs]
  (insert db/task
          (values (assoc (or task-attrs {}) :story_id story-id))))

(defn update-task [id task-attrs]
  (if task-attrs
    (update db/task
            (set-fields task-attrs)
            (where {:id id}))))

(defn delete-task [id]
  (delete db/task
          (where {:id id})))
