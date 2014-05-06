(ns std-board.core
  (:require [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [net.cgrand.enlive-html :as enlive]
            [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [std-board.db :as db]
            [std-board.repository :as repository])
  (:use compojure.core
        compojure.handler
        ring.middleware.edn
        carica.core))

(defn response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(enlive/deftemplate index-page "public/html/index.html" []
  [:body] (enlive/append
            (enlive/html [:script (browser-connected-repl-js)])))

(defroutes compojure-handler
  (GET "/" [] (index-page))
  (GET "/req" request (str request))
  (GET "/stories" [] (pr-str (repository/get-stories)))
  (route/resources "/")
  (route/files "/" {:root (config :external-resources)})
  (route/not-found "Not found!"))

(def app
  (-> compojure-handler
      site
      wrap-edn-params))

(defn -main [& args]
  (db/setup)
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "5000"))]
    (jetty/run-jetty app {:port port :join? false})))
