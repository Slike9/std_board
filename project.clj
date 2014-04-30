(defproject std-board "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.6"]
                 [ring/ring-jetty-adapter "1.1.6"]
                 [sonian/carica "1.1.0" :exclusions [[cheshire]]]
                 [korma "0.3.1"]
                 [mysql/mysql-connector-java "5.1.30"]
                 [fogus/ring-edn "0.2.0"]
                 ;
                 [org.clojure/clojurescript "0.0-2202"]
                 [enfocus "2.1.0-SNAPSHOT"]
                 [cljs-ajax "0.2.3"]]
  :main std-board.core
  :ring {:handler std-board.core/app}
  :profiles {:dev {:plugins [[lein-cljsbuild "1.0.3"]]}}
  :cljsbuild {
    :builds [{
        :source-paths ["src"]
        :compiler {
          :output-to "resources/public/js/main.js"
          :output-dir "resources/public/out"
          :optimizations :none
          :source-map true
          :pretty-print true}}]})