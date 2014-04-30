(ns std-board.core
  (:require [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty])
  (:use compojure.core
        compojure.handler
        ring.middleware.edn
        carica.core))

(defn response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defroutes compojure-handler
  (GET "/" [] (slurp (io/resource "public/html/index.html")))
  (GET "/req" request (str request))
  (route/resources "/")
  (route/files "/" {:root (config :external-resources)})
  (route/not-found "Not found!"))

(def app
  (-> compojure-handler
      site
      wrap-edn-params))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "5000"))]
    (jetty/run-jetty app {:port port :join? false})))
