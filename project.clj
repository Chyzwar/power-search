(defproject power-search "0.1.0-SNAPSHOT"
  
  :license{:name "Eclipse Public License"
           :url "http://www.eclipse.org/legal/epl-v10.html"}
  
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [khroma "0.0.2"]
                 [prismatic/dommy "1.1.0"]
                 [racehub/om-bootstrap "0.5.3"]
                 [org.omcljs/om "0.9.0"]]
  
  :source-paths ["src"]
  :profiles
  {:dev {:plugins [[lein-cljsbuild "1.1.0"]
                   [lein-chromebuild "0.2.1"]]
         
         :cljsbuild 
         {:builds 
          {:main
           {:source-paths ["src"]
            :compiler {:output-to "target/unpacked/power_search.js"
                       :output-dir "target/js"
                       
                       :optimizations :whitespace
                       :pretty-print true}}}}}})


