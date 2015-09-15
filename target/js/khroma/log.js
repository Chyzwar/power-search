// Compiled by ClojureScript 1.7.48 {}
goog.provide('khroma.log');
goog.require('cljs.core');
khroma.log.console_fn = (function khroma$log$console_fn(f){
return (function() { 
var G__10754__delegate = function (args){
return f.apply(console,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,args)));
};
var G__10754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10755__i = 0, G__10755__a = new Array(arguments.length -  0);
while (G__10755__i < G__10755__a.length) {G__10755__a[G__10755__i] = arguments[G__10755__i + 0]; ++G__10755__i;}
  args = new cljs.core.IndexedSeq(G__10755__a,0);
} 
return G__10754__delegate.call(this,args);};
G__10754.cljs$lang$maxFixedArity = 0;
G__10754.cljs$lang$applyTo = (function (arglist__10756){
var args = cljs.core.seq(arglist__10756);
return G__10754__delegate(args);
});
G__10754.cljs$core$IFn$_invoke$arity$variadic = G__10754__delegate;
return G__10754;
})()
;
});
khroma.log.assert = khroma.log.console_fn.call(null,console.assert);
khroma.log.clear = khroma.log.console_fn.call(null,console.clear);
khroma.log.count = khroma.log.console_fn.call(null,console.count);
khroma.log.debug = khroma.log.console_fn.call(null,console.debug);
khroma.log.dir = khroma.log.console_fn.call(null,console.dir);
khroma.log.dirxml = khroma.log.console_fn.call(null,console.dirxml);
khroma.log.error = khroma.log.console_fn.call(null,console.error);
khroma.log.group = khroma.log.console_fn.call(null,console.group);
khroma.log.group_collapsed = khroma.log.console_fn.call(null,console.groupCollapsed);
khroma.log.group_end = khroma.log.console_fn.call(null,console.groupEnd);
khroma.log.info = khroma.log.console_fn.call(null,console.info);
khroma.log.log = khroma.log.console_fn.call(null,console.log);
khroma.log.profile = khroma.log.console_fn.call(null,console.profile);
khroma.log.profile_end = khroma.log.console_fn.call(null,console.profileEnd);
khroma.log.time = khroma.log.console_fn.call(null,console.time);
khroma.log.time_end = khroma.log.console_fn.call(null,console.timeEnd);
khroma.log.time_stamp = khroma.log.console_fn.call(null,console.timeStamp);
khroma.log.trace = khroma.log.console_fn.call(null,console.trace);
khroma.log.warn = khroma.log.console_fn.call(null,console.warn);
