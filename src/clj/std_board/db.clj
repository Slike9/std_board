(ns std-board.db
  (require [korma.db :refer [defdb postgres]]
           [korma.core :refer :all])
  (use [carica.core])
  (import (java.net URI)))

(defdb db
  (if (System/getenv "DATABASE_URL")
    (let [db-uri (java.net.URI. (System/getenv "DATABASE_URL"))
          user-and-password (clojure.string/split (.getUserInfo db-uri) #":")]
      {:classname "org.postgresql.Driver"
       :subprotocol "postgresql"
       :user (get user-and-password 0)
       :password (get user-and-password 1) ; may be nil
       :subname (if (= -1 (.getPort db-uri))
                  (format "//%s%s" (.getHost db-uri) (.getPath db-uri))
                  (format "//%s:%s%s" (.getHost db-uri) (.getPort db-uri) (.getPath db-uri)))})
    (postgres (config :db))))

(defn migrate-schema []
  (exec-raw (str "CREATE TABLE IF NOT EXISTS story ("
                 "id SERIAL PRIMARY KEY,"
                 "title VARCHAR NOT NULL,"
                 "description VARCHAR,"
                 "project_id INTEGER"
                 ");"))
  (exec-raw (str "CREATE TABLE IF NOT EXISTS task ("
                 "id SERIAL PRIMARY KEY,"
                 "title VARCHAR NOT NULL,"
                 "description VARCHAR,"
                 "story_id INTEGER NOT NULL,"
                 "status VARCHAR NOT NULL DEFAULT 'new'"
                 ");"))
  (exec-raw (str "CREATE TABLE IF NOT EXISTS project ("
                 "id SERIAL PRIMARY KEY,"
                 "title VARCHAR NOT NULL,"
                 "description VARCHAR,"
                 "user_id INTEGER"
                 ");"))
  (exec-raw (str "CREATE TABLE IF NOT EXISTS \"user\" ("
                 "id SERIAL PRIMARY KEY,"
                 "name VARCHAR NOT NULL,"
                 "password_encrypted VARCHAR"
                 ");"))
  (exec-raw (str "DO $$"
                 "  BEGIN"
                 "    BEGIN"
                 "      ALTER TABLE story ADD COLUMN project_id INTEGER;"
                 "    EXCEPTION"
                 "      when duplicate_column THEN RAISE NOTICE 'column <column_name> already exists in <table_name>.';"
                 "    END;"
                 "  END;"
                 "$$")))

(defentity task)

(defentity story
  (has-many task))

(defentity project
  (has-many story))

(defentity user
  (has-many project))

(defn setup []
  (migrate-schema))
