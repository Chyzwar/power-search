(ns power-search.repl-connect
  (:require [clojure.browser.repl :as repl]))

(defn init []
  (repl/connect "http://localhost:9000/repl"))