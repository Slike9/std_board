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
                 [korma "0.3.0-RC5"]
                 [org.postgresql/postgresql "9.2-1002-jdbc4"]
                 [fogus/ring-edn "0.2.0"]
                 [enlive "1.1.5"]
                 ;
                 ;[org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [enfocus "2.1.0-SNAPSHOT"]
                 [cljs-ajax "0.2.3"]]
  :main std-board.core
  :ring {:handler std-board.core/app}
  ;:profiles {:dev {:plugins [;[lein-cljsbuild "1.0.3"]
                             ;[lein-cljsbuild "1.0.1"]
                             ;[com.cemerick/austin "0.1.3"]]
                   ;:source-paths ["src" "dev-utils"]
                   ;:repl-options { :init (use 'std-board.dev-utils.repl) } }}
  :plugins [;[lein-cljsbuild "1.0.3"]
            [lein-cljsbuild "1.0.1"]
            [com.cemerick/austin "0.1.3"]]
  :profiles {:dev {:source-paths ["src" "dev-utils"]
                   :repl-options { :init (use 'std-board.dev-utils.repl) }}}
  :cljsbuild {
              :builds [
                       {:id development
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "resources/public/js/main.dev.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true
                                   :pretty-print true}}
                       {:id production
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "resources/public/js/main.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]}
  ;:hooks [leiningen.cljsbuild]
  )
