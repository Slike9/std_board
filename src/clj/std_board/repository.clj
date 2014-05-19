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

(defn get-user [id]
  (first (select db/user
                 (with db/project)
                 (where (= :id id)))))

(defn create-user []
  (let [user (insert db/user (values {:name "guest"})) ]
    (insert db/project (values {:title "guest-project"
                                :user_id (:id user)}))
    user))

(defn get-user-stories [user-id]
  (let [project (first (select db/project
                               (where (= :user_id user-id))))]
    (println project)
    (println user-id)
    (select db/story
            (with db/task)
            (where (= :project_id (:id project))))))

(defn create-user-story [user-id story]
  (let [project (first (select db/project
                               (with db/story)
                               (where (= :user_id user-id))))]
    (create-story (assoc story :project_id (:id project)))))

;; projects

(defn get-projects []
  (select db/project
          (order :id :DESC)))

(defn get-project-stories [id]
  (select db/story
          (with db/task)
          (where (= :project_id id))))

(defn create-project [project-attrs]
  (insert db/project (values project-attrs)))

(defn update-project [id project-attrs]
  (update db/project
          (set-fields project-attrs)
          (where {:id id})))

(defn delete-project [id]
  (delete db/project
          (where {:id id})))
