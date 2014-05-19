(ns std-board.core
  (:require [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [net.cgrand.enlive-html :as enlive]
            ;[cemerick.austin.repls :refer (browser-connected-repl-js)]
            [std-board.db :as db]
            [std-board.repository :as repository]
            [std-board.environment :as environment])
  (:use compojure.core
        compojure.handler
        ring.middleware.edn
        carica.core))

(defn response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(if (environment/production?)
  (enlive/deftemplate index-page "public/html/index.html" [])
  (do
    (enlive/deftemplate index-page "public/html/index.dev.html" []
      ;[:body] (enlive/append
                ;(enlive/html [:script (browser-connected-repl-js)]))
      )))

(defroutes story-tasks-routes
  (POST "/tasks" [story-id task] (let [story-id (Integer/parseInt story-id)]
                                   (if (repository/create-story-task story-id task)
                                     (response nil)
                                     (response nil 420))))
  (PUT "/tasks/:id" [id task] (let [id (Integer/parseInt id)]
                                   (if (repository/update-task id task)
                                     (response nil)
                                     (response nil 420))))
  (DELETE "/tasks/:id" [id] (let [id (Integer/parseInt id)]
                              (if (repository/delete-task id)
                                (response nil)
                                (response nil 420)))))

(defroutes stories-routes
  (GET "/" {user :user} (response (repository/get-stories)))
  (GET "/:id" [id] (response (repository/get-story id)))
  (POST "/" [story] (if (repository/create-story story)
                      (response nil)
                      (response nil 420)))
  (PUT "/:id" [id story] (let [id (Integer/parseInt id)]
                           (if (repository/update-story id story)
                             (response nil)
                             (response nil 420))))
  (DELETE "/:id" [id] (response (repository/delete-story id)))
  (context "/:story-id" [story-id] story-tasks-routes))

(defroutes projects-routes
  (GET "/" [] (response (repository/get-projects)))
  (POST "/" [project] (if (repository/create-project project)
                      (response nil)
                      (response nil 420)))
  (PUT "/:id" [id project] (response (repository/update-project (Integer/parseInt id) project)))
  (DELETE "/:id" [id] (response (repository/delete-project (Integer/parseInt id))))
  (context "/:project-id" [project-id]
           (GET "/stories" [] (response (repository/get-project-stories (Integer/parseInt project-id))))))

(defroutes compojure-handler
  (GET "/" [] (index-page))
  (GET "/req" request (str request))
  (context "/projects" [] projects-routes)
  (context "/stories" [] stories-routes)
  (route/resources "/")
  (route/files "/" {:root (config :external-resources)})
  (route/not-found "Not found!"))

;(defn wrap-user [handler]
  ;(fn [request]
    ;(let [user (if-let [user-id (get-in request [:session "user-id"])]
                 ;(repository/get-user user-id)
                 ;(repository/create-user))]
      ;(let [request (assoc request :user user)
            ;response (handler request)]
        ;(assoc-in response [:session "user-id"] (:id user))))))

(def app
  (-> compojure-handler
      ;wrap-user
      site
      wrap-edn-params))

(defn -main [& args]
  (db/setup)
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "5000"))]
    (jetty/run-jetty app {:port port :join? false})))
