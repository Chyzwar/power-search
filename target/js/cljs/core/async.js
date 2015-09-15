// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t10762 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10762 = (function (fn_handler,f,meta10763){
this.fn_handler = fn_handler;
this.f = f;
this.meta10763 = meta10763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10764,meta10763__$1){
var self__ = this;
var _10764__$1 = this;
return (new cljs.core.async.t10762(self__.fn_handler,self__.f,meta10763__$1));
});

cljs.core.async.t10762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10764){
var self__ = this;
var _10764__$1 = this;
return self__.meta10763;
});

cljs.core.async.t10762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t10762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t10762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta10763","meta10763",934700504,null)], null);
});

cljs.core.async.t10762.cljs$lang$type = true;

cljs.core.async.t10762.cljs$lang$ctorStr = "cljs.core.async/t10762";

cljs.core.async.t10762.cljs$lang$ctorPrWriter = (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t10762");
});

cljs.core.async.__GT_t10762 = (function cljs$core$async$fn_handler_$___GT_t10762(fn_handler__$1,f__$1,meta10763){
return (new cljs.core.async.t10762(fn_handler__$1,f__$1,meta10763));
});

}

return (new cljs.core.async.t10762(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args10767 = [];
var len__5565__auto___10770 = arguments.length;
var i__5566__auto___10771 = (0);
while(true){
if((i__5566__auto___10771 < len__5565__auto___10770)){
args10767.push((arguments[i__5566__auto___10771]));

var G__10772 = (i__5566__auto___10771 + (1));
i__5566__auto___10771 = G__10772;
continue;
} else {
}
break;
}

var G__10769 = args10767.length;
switch (G__10769) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10767.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args10774 = [];
var len__5565__auto___10777 = arguments.length;
var i__5566__auto___10778 = (0);
while(true){
if((i__5566__auto___10778 < len__5565__auto___10777)){
args10774.push((arguments[i__5566__auto___10778]));

var G__10779 = (i__5566__auto___10778 + (1));
i__5566__auto___10778 = G__10779;
continue;
} else {
}
break;
}

var G__10776 = args10774.length;
switch (G__10776) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10774.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10781 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10781);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10781,ret){
return (function (){
return fn1.call(null,val_10781);
});})(val_10781,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args10782 = [];
var len__5565__auto___10785 = arguments.length;
var i__5566__auto___10786 = (0);
while(true){
if((i__5566__auto___10786 < len__5565__auto___10785)){
args10782.push((arguments[i__5566__auto___10786]));

var G__10787 = (i__5566__auto___10786 + (1));
i__5566__auto___10786 = G__10787;
continue;
} else {
}
break;
}

var G__10784 = args10782.length;
switch (G__10784) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10782.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5410__auto___10789 = n;
var x_10790 = (0);
while(true){
if((x_10790 < n__5410__auto___10789)){
(a[x_10790] = (0));

var G__10791 = (x_10790 + (1));
x_10790 = G__10791;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10792 = (i + (1));
i = G__10792;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t10796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10796 = (function (alt_flag,flag,meta10797){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10797 = meta10797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10798,meta10797__$1){
var self__ = this;
var _10798__$1 = this;
return (new cljs.core.async.t10796(self__.alt_flag,self__.flag,meta10797__$1));
});})(flag))
;

cljs.core.async.t10796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10798){
var self__ = this;
var _10798__$1 = this;
return self__.meta10797;
});})(flag))
;

cljs.core.async.t10796.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10796.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t10796.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t10796.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10797","meta10797",-999291810,null)], null);
});})(flag))
;

cljs.core.async.t10796.cljs$lang$type = true;

cljs.core.async.t10796.cljs$lang$ctorStr = "cljs.core.async/t10796";

cljs.core.async.t10796.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t10796");
});})(flag))
;

cljs.core.async.__GT_t10796 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t10796(alt_flag__$1,flag__$1,meta10797){
return (new cljs.core.async.t10796(alt_flag__$1,flag__$1,meta10797));
});})(flag))
;

}

return (new cljs.core.async.t10796(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t10802 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10802 = (function (alt_handler,flag,cb,meta10803){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10803 = meta10803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t10802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10804,meta10803__$1){
var self__ = this;
var _10804__$1 = this;
return (new cljs.core.async.t10802(self__.alt_handler,self__.flag,self__.cb,meta10803__$1));
});

cljs.core.async.t10802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10804){
var self__ = this;
var _10804__$1 = this;
return self__.meta10803;
});

cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t10802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t10802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10803","meta10803",78250054,null)], null);
});

cljs.core.async.t10802.cljs$lang$type = true;

cljs.core.async.t10802.cljs$lang$ctorStr = "cljs.core.async/t10802";

cljs.core.async.t10802.cljs$lang$ctorPrWriter = (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t10802");
});

cljs.core.async.__GT_t10802 = (function cljs$core$async$alt_handler_$___GT_t10802(alt_handler__$1,flag__$1,cb__$1,meta10803){
return (new cljs.core.async.t10802(alt_handler__$1,flag__$1,cb__$1,meta10803));
});

}

return (new cljs.core.async.t10802(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10805_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10805_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10806_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10806_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4526__auto__ = wport;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10807 = (i + (1));
i = G__10807;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4526__auto__ = ret;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4514__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4514__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___10813 = arguments.length;
var i__5566__auto___10814 = (0);
while(true){
if((i__5566__auto___10814 < len__5565__auto___10813)){
args__5572__auto__.push((arguments[i__5566__auto___10814]));

var G__10815 = (i__5566__auto___10814 + (1));
i__5566__auto___10814 = G__10815;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10810){
var map__10811 = p__10810;
var map__10811__$1 = ((((!((map__10811 == null)))?((((map__10811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10811):map__10811);
var opts = map__10811__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10808){
var G__10809 = cljs.core.first.call(null,seq10808);
var seq10808__$1 = cljs.core.next.call(null,seq10808);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10809,seq10808__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args10816 = [];
var len__5565__auto___10866 = arguments.length;
var i__5566__auto___10867 = (0);
while(true){
if((i__5566__auto___10867 < len__5565__auto___10866)){
args10816.push((arguments[i__5566__auto___10867]));

var G__10868 = (i__5566__auto___10867 + (1));
i__5566__auto___10867 = G__10868;
continue;
} else {
}
break;
}

var G__10818 = args10816.length;
switch (G__10818) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10816.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8014__auto___10870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___10870){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___10870){
return (function (state_10842){
var state_val_10843 = (state_10842[(1)]);
if((state_val_10843 === (7))){
var inst_10838 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10844_10871 = state_10842__$1;
(statearr_10844_10871[(2)] = inst_10838);

(statearr_10844_10871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (1))){
var state_10842__$1 = state_10842;
var statearr_10845_10872 = state_10842__$1;
(statearr_10845_10872[(2)] = null);

(statearr_10845_10872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (4))){
var inst_10821 = (state_10842[(7)]);
var inst_10821__$1 = (state_10842[(2)]);
var inst_10822 = (inst_10821__$1 == null);
var state_10842__$1 = (function (){var statearr_10846 = state_10842;
(statearr_10846[(7)] = inst_10821__$1);

return statearr_10846;
})();
if(cljs.core.truth_(inst_10822)){
var statearr_10847_10873 = state_10842__$1;
(statearr_10847_10873[(1)] = (5));

} else {
var statearr_10848_10874 = state_10842__$1;
(statearr_10848_10874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (13))){
var state_10842__$1 = state_10842;
var statearr_10849_10875 = state_10842__$1;
(statearr_10849_10875[(2)] = null);

(statearr_10849_10875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (6))){
var inst_10821 = (state_10842[(7)]);
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10842__$1,(11),to,inst_10821);
} else {
if((state_val_10843 === (3))){
var inst_10840 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10842__$1,inst_10840);
} else {
if((state_val_10843 === (12))){
var state_10842__$1 = state_10842;
var statearr_10850_10876 = state_10842__$1;
(statearr_10850_10876[(2)] = null);

(statearr_10850_10876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (2))){
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10842__$1,(4),from);
} else {
if((state_val_10843 === (11))){
var inst_10831 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10831)){
var statearr_10851_10877 = state_10842__$1;
(statearr_10851_10877[(1)] = (12));

} else {
var statearr_10852_10878 = state_10842__$1;
(statearr_10852_10878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (9))){
var state_10842__$1 = state_10842;
var statearr_10853_10879 = state_10842__$1;
(statearr_10853_10879[(2)] = null);

(statearr_10853_10879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (5))){
var state_10842__$1 = state_10842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10854_10880 = state_10842__$1;
(statearr_10854_10880[(1)] = (8));

} else {
var statearr_10855_10881 = state_10842__$1;
(statearr_10855_10881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (14))){
var inst_10836 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10856_10882 = state_10842__$1;
(statearr_10856_10882[(2)] = inst_10836);

(statearr_10856_10882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (10))){
var inst_10828 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10857_10883 = state_10842__$1;
(statearr_10857_10883[(2)] = inst_10828);

(statearr_10857_10883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (8))){
var inst_10825 = cljs.core.async.close_BANG_.call(null,to);
var state_10842__$1 = state_10842;
var statearr_10858_10884 = state_10842__$1;
(statearr_10858_10884[(2)] = inst_10825);

(statearr_10858_10884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___10870))
;
return ((function (switch__7949__auto__,c__8014__auto___10870){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_10862 = [null,null,null,null,null,null,null,null];
(statearr_10862[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_10862[(1)] = (1));

return statearr_10862;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_10842){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10863){if((e10863 instanceof Object)){
var ex__7953__auto__ = e10863;
var statearr_10864_10885 = state_10842;
(statearr_10864_10885[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10886 = state_10842;
state_10842 = G__10886;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_10842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_10842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___10870))
})();
var state__8016__auto__ = (function (){var statearr_10865 = f__8015__auto__.call(null);
(statearr_10865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___10870);

return statearr_10865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___10870))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11070){
var vec__11071 = p__11070;
var v = cljs.core.nth.call(null,vec__11071,(0),null);
var p = cljs.core.nth.call(null,vec__11071,(1),null);
var job = vec__11071;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8014__auto___11253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___11253,res,vec__11071,v,p,job,jobs,results){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___11253,res,vec__11071,v,p,job,jobs,results){
return (function (state_11076){
var state_val_11077 = (state_11076[(1)]);
if((state_val_11077 === (1))){
var state_11076__$1 = state_11076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11076__$1,(2),res,v);
} else {
if((state_val_11077 === (2))){
var inst_11073 = (state_11076[(2)]);
var inst_11074 = cljs.core.async.close_BANG_.call(null,res);
var state_11076__$1 = (function (){var statearr_11078 = state_11076;
(statearr_11078[(7)] = inst_11073);

return statearr_11078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11076__$1,inst_11074);
} else {
return null;
}
}
});})(c__8014__auto___11253,res,vec__11071,v,p,job,jobs,results))
;
return ((function (switch__7949__auto__,c__8014__auto___11253,res,vec__11071,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0 = (function (){
var statearr_11082 = [null,null,null,null,null,null,null,null];
(statearr_11082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__);

(statearr_11082[(1)] = (1));

return statearr_11082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1 = (function (state_11076){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11083){if((e11083 instanceof Object)){
var ex__7953__auto__ = e11083;
var statearr_11084_11254 = state_11076;
(statearr_11084_11254[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11255 = state_11076;
state_11076 = G__11255;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = function(state_11076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1.call(this,state_11076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___11253,res,vec__11071,v,p,job,jobs,results))
})();
var state__8016__auto__ = (function (){var statearr_11085 = f__8015__auto__.call(null);
(statearr_11085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___11253);

return statearr_11085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___11253,res,vec__11071,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11086){
var vec__11087 = p__11086;
var v = cljs.core.nth.call(null,vec__11087,(0),null);
var p = cljs.core.nth.call(null,vec__11087,(1),null);
var job = vec__11087;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5410__auto___11256 = n;
var __11257 = (0);
while(true){
if((__11257 < n__5410__auto___11256)){
var G__11088_11258 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11088_11258) {
case "compute":
var c__8014__auto___11260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11257,c__8014__auto___11260,G__11088_11258,n__5410__auto___11256,jobs,results,process,async){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (__11257,c__8014__auto___11260,G__11088_11258,n__5410__auto___11256,jobs,results,process,async){
return (function (state_11101){
var state_val_11102 = (state_11101[(1)]);
if((state_val_11102 === (1))){
var state_11101__$1 = state_11101;
var statearr_11103_11261 = state_11101__$1;
(statearr_11103_11261[(2)] = null);

(statearr_11103_11261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11102 === (2))){
var state_11101__$1 = state_11101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11101__$1,(4),jobs);
} else {
if((state_val_11102 === (3))){
var inst_11099 = (state_11101[(2)]);
var state_11101__$1 = state_11101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11101__$1,inst_11099);
} else {
if((state_val_11102 === (4))){
var inst_11091 = (state_11101[(2)]);
var inst_11092 = process.call(null,inst_11091);
var state_11101__$1 = state_11101;
if(cljs.core.truth_(inst_11092)){
var statearr_11104_11262 = state_11101__$1;
(statearr_11104_11262[(1)] = (5));

} else {
var statearr_11105_11263 = state_11101__$1;
(statearr_11105_11263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11102 === (5))){
var state_11101__$1 = state_11101;
var statearr_11106_11264 = state_11101__$1;
(statearr_11106_11264[(2)] = null);

(statearr_11106_11264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11102 === (6))){
var state_11101__$1 = state_11101;
var statearr_11107_11265 = state_11101__$1;
(statearr_11107_11265[(2)] = null);

(statearr_11107_11265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11102 === (7))){
var inst_11097 = (state_11101[(2)]);
var state_11101__$1 = state_11101;
var statearr_11108_11266 = state_11101__$1;
(statearr_11108_11266[(2)] = inst_11097);

(statearr_11108_11266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11257,c__8014__auto___11260,G__11088_11258,n__5410__auto___11256,jobs,results,process,async))
;
return ((function (__11257,switch__7949__auto__,c__8014__auto___11260,G__11088_11258,n__5410__auto___11256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0 = (function (){
var statearr_11112 = [null,null,null,null,null,null,null];
(statearr_11112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__);

(statearr_11112[(1)] = (1));

return statearr_11112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1 = (function (state_11101){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11113){if((e11113 instanceof Object)){
var ex__7953__auto__ = e11113;
var statearr_11114_11267 = state_11101;
(statearr_11114_11267[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11268 = state_11101;
state_11101 = G__11268;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = function(state_11101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1.call(this,state_11101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__;
})()
;})(__11257,switch__7949__auto__,c__8014__auto___11260,G__11088_11258,n__5410__auto___11256,jobs,results,process,async))
})();
var state__8016__auto__ = (function (){var statearr_11115 = f__8015__auto__.call(null);
(statearr_11115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___11260);

return statearr_11115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(__11257,c__8014__auto___11260,G__11088_11258,n__5410__auto___11256,jobs,results,process,async))
);


break;
case "async":
var c__8014__auto___11269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11257,c__8014__auto___11269,G__11088_11258,n__5410__auto___11256,jobs,results,process,async){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (__11257,c__8014__auto___11269,G__11088_11258,n__5410__auto___11256,jobs,results,process,async){
return (function (state_11128){
var state_val_11129 = (state_11128[(1)]);
if((state_val_11129 === (1))){
var state_11128__$1 = state_11128;
var statearr_11130_11270 = state_11128__$1;
(statearr_11130_11270[(2)] = null);

(statearr_11130_11270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (2))){
var state_11128__$1 = state_11128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11128__$1,(4),jobs);
} else {
if((state_val_11129 === (3))){
var inst_11126 = (state_11128[(2)]);
var state_11128__$1 = state_11128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11128__$1,inst_11126);
} else {
if((state_val_11129 === (4))){
var inst_11118 = (state_11128[(2)]);
var inst_11119 = async.call(null,inst_11118);
var state_11128__$1 = state_11128;
if(cljs.core.truth_(inst_11119)){
var statearr_11131_11271 = state_11128__$1;
(statearr_11131_11271[(1)] = (5));

} else {
var statearr_11132_11272 = state_11128__$1;
(statearr_11132_11272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (5))){
var state_11128__$1 = state_11128;
var statearr_11133_11273 = state_11128__$1;
(statearr_11133_11273[(2)] = null);

(statearr_11133_11273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (6))){
var state_11128__$1 = state_11128;
var statearr_11134_11274 = state_11128__$1;
(statearr_11134_11274[(2)] = null);

(statearr_11134_11274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11129 === (7))){
var inst_11124 = (state_11128[(2)]);
var state_11128__$1 = state_11128;
var statearr_11135_11275 = state_11128__$1;
(statearr_11135_11275[(2)] = inst_11124);

(statearr_11135_11275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11257,c__8014__auto___11269,G__11088_11258,n__5410__auto___11256,jobs,results,process,async))
;
return ((function (__11257,switch__7949__auto__,c__8014__auto___11269,G__11088_11258,n__5410__auto___11256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0 = (function (){
var statearr_11139 = [null,null,null,null,null,null,null];
(statearr_11139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__);

(statearr_11139[(1)] = (1));

return statearr_11139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1 = (function (state_11128){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11140){if((e11140 instanceof Object)){
var ex__7953__auto__ = e11140;
var statearr_11141_11276 = state_11128;
(statearr_11141_11276[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11277 = state_11128;
state_11128 = G__11277;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = function(state_11128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1.call(this,state_11128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__;
})()
;})(__11257,switch__7949__auto__,c__8014__auto___11269,G__11088_11258,n__5410__auto___11256,jobs,results,process,async))
})();
var state__8016__auto__ = (function (){var statearr_11142 = f__8015__auto__.call(null);
(statearr_11142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___11269);

return statearr_11142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(__11257,c__8014__auto___11269,G__11088_11258,n__5410__auto___11256,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11278 = (__11257 + (1));
__11257 = G__11278;
continue;
} else {
}
break;
}

var c__8014__auto___11279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___11279,jobs,results,process,async){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___11279,jobs,results,process,async){
return (function (state_11164){
var state_val_11165 = (state_11164[(1)]);
if((state_val_11165 === (1))){
var state_11164__$1 = state_11164;
var statearr_11166_11280 = state_11164__$1;
(statearr_11166_11280[(2)] = null);

(statearr_11166_11280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (2))){
var state_11164__$1 = state_11164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11164__$1,(4),from);
} else {
if((state_val_11165 === (3))){
var inst_11162 = (state_11164[(2)]);
var state_11164__$1 = state_11164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11164__$1,inst_11162);
} else {
if((state_val_11165 === (4))){
var inst_11145 = (state_11164[(7)]);
var inst_11145__$1 = (state_11164[(2)]);
var inst_11146 = (inst_11145__$1 == null);
var state_11164__$1 = (function (){var statearr_11167 = state_11164;
(statearr_11167[(7)] = inst_11145__$1);

return statearr_11167;
})();
if(cljs.core.truth_(inst_11146)){
var statearr_11168_11281 = state_11164__$1;
(statearr_11168_11281[(1)] = (5));

} else {
var statearr_11169_11282 = state_11164__$1;
(statearr_11169_11282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (5))){
var inst_11148 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11164__$1 = state_11164;
var statearr_11170_11283 = state_11164__$1;
(statearr_11170_11283[(2)] = inst_11148);

(statearr_11170_11283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (6))){
var inst_11150 = (state_11164[(8)]);
var inst_11145 = (state_11164[(7)]);
var inst_11150__$1 = cljs.core.async.chan.call(null,(1));
var inst_11151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11152 = [inst_11145,inst_11150__$1];
var inst_11153 = (new cljs.core.PersistentVector(null,2,(5),inst_11151,inst_11152,null));
var state_11164__$1 = (function (){var statearr_11171 = state_11164;
(statearr_11171[(8)] = inst_11150__$1);

return statearr_11171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11164__$1,(8),jobs,inst_11153);
} else {
if((state_val_11165 === (7))){
var inst_11160 = (state_11164[(2)]);
var state_11164__$1 = state_11164;
var statearr_11172_11284 = state_11164__$1;
(statearr_11172_11284[(2)] = inst_11160);

(statearr_11172_11284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11165 === (8))){
var inst_11150 = (state_11164[(8)]);
var inst_11155 = (state_11164[(2)]);
var state_11164__$1 = (function (){var statearr_11173 = state_11164;
(statearr_11173[(9)] = inst_11155);

return statearr_11173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11164__$1,(9),results,inst_11150);
} else {
if((state_val_11165 === (9))){
var inst_11157 = (state_11164[(2)]);
var state_11164__$1 = (function (){var statearr_11174 = state_11164;
(statearr_11174[(10)] = inst_11157);

return statearr_11174;
})();
var statearr_11175_11285 = state_11164__$1;
(statearr_11175_11285[(2)] = null);

(statearr_11175_11285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___11279,jobs,results,process,async))
;
return ((function (switch__7949__auto__,c__8014__auto___11279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0 = (function (){
var statearr_11179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__);

(statearr_11179[(1)] = (1));

return statearr_11179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1 = (function (state_11164){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11180){if((e11180 instanceof Object)){
var ex__7953__auto__ = e11180;
var statearr_11181_11286 = state_11164;
(statearr_11181_11286[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11287 = state_11164;
state_11164 = G__11287;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = function(state_11164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1.call(this,state_11164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___11279,jobs,results,process,async))
})();
var state__8016__auto__ = (function (){var statearr_11182 = f__8015__auto__.call(null);
(statearr_11182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___11279);

return statearr_11182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___11279,jobs,results,process,async))
);


var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__,jobs,results,process,async){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__,jobs,results,process,async){
return (function (state_11220){
var state_val_11221 = (state_11220[(1)]);
if((state_val_11221 === (7))){
var inst_11216 = (state_11220[(2)]);
var state_11220__$1 = state_11220;
var statearr_11222_11288 = state_11220__$1;
(statearr_11222_11288[(2)] = inst_11216);

(statearr_11222_11288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (20))){
var state_11220__$1 = state_11220;
var statearr_11223_11289 = state_11220__$1;
(statearr_11223_11289[(2)] = null);

(statearr_11223_11289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (1))){
var state_11220__$1 = state_11220;
var statearr_11224_11290 = state_11220__$1;
(statearr_11224_11290[(2)] = null);

(statearr_11224_11290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (4))){
var inst_11185 = (state_11220[(7)]);
var inst_11185__$1 = (state_11220[(2)]);
var inst_11186 = (inst_11185__$1 == null);
var state_11220__$1 = (function (){var statearr_11225 = state_11220;
(statearr_11225[(7)] = inst_11185__$1);

return statearr_11225;
})();
if(cljs.core.truth_(inst_11186)){
var statearr_11226_11291 = state_11220__$1;
(statearr_11226_11291[(1)] = (5));

} else {
var statearr_11227_11292 = state_11220__$1;
(statearr_11227_11292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (15))){
var inst_11198 = (state_11220[(8)]);
var state_11220__$1 = state_11220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11220__$1,(18),to,inst_11198);
} else {
if((state_val_11221 === (21))){
var inst_11211 = (state_11220[(2)]);
var state_11220__$1 = state_11220;
var statearr_11228_11293 = state_11220__$1;
(statearr_11228_11293[(2)] = inst_11211);

(statearr_11228_11293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (13))){
var inst_11213 = (state_11220[(2)]);
var state_11220__$1 = (function (){var statearr_11229 = state_11220;
(statearr_11229[(9)] = inst_11213);

return statearr_11229;
})();
var statearr_11230_11294 = state_11220__$1;
(statearr_11230_11294[(2)] = null);

(statearr_11230_11294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (6))){
var inst_11185 = (state_11220[(7)]);
var state_11220__$1 = state_11220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11220__$1,(11),inst_11185);
} else {
if((state_val_11221 === (17))){
var inst_11206 = (state_11220[(2)]);
var state_11220__$1 = state_11220;
if(cljs.core.truth_(inst_11206)){
var statearr_11231_11295 = state_11220__$1;
(statearr_11231_11295[(1)] = (19));

} else {
var statearr_11232_11296 = state_11220__$1;
(statearr_11232_11296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (3))){
var inst_11218 = (state_11220[(2)]);
var state_11220__$1 = state_11220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11220__$1,inst_11218);
} else {
if((state_val_11221 === (12))){
var inst_11195 = (state_11220[(10)]);
var state_11220__$1 = state_11220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11220__$1,(14),inst_11195);
} else {
if((state_val_11221 === (2))){
var state_11220__$1 = state_11220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11220__$1,(4),results);
} else {
if((state_val_11221 === (19))){
var state_11220__$1 = state_11220;
var statearr_11233_11297 = state_11220__$1;
(statearr_11233_11297[(2)] = null);

(statearr_11233_11297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (11))){
var inst_11195 = (state_11220[(2)]);
var state_11220__$1 = (function (){var statearr_11234 = state_11220;
(statearr_11234[(10)] = inst_11195);

return statearr_11234;
})();
var statearr_11235_11298 = state_11220__$1;
(statearr_11235_11298[(2)] = null);

(statearr_11235_11298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (9))){
var state_11220__$1 = state_11220;
var statearr_11236_11299 = state_11220__$1;
(statearr_11236_11299[(2)] = null);

(statearr_11236_11299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (5))){
var state_11220__$1 = state_11220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11237_11300 = state_11220__$1;
(statearr_11237_11300[(1)] = (8));

} else {
var statearr_11238_11301 = state_11220__$1;
(statearr_11238_11301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (14))){
var inst_11198 = (state_11220[(8)]);
var inst_11200 = (state_11220[(11)]);
var inst_11198__$1 = (state_11220[(2)]);
var inst_11199 = (inst_11198__$1 == null);
var inst_11200__$1 = cljs.core.not.call(null,inst_11199);
var state_11220__$1 = (function (){var statearr_11239 = state_11220;
(statearr_11239[(8)] = inst_11198__$1);

(statearr_11239[(11)] = inst_11200__$1);

return statearr_11239;
})();
if(inst_11200__$1){
var statearr_11240_11302 = state_11220__$1;
(statearr_11240_11302[(1)] = (15));

} else {
var statearr_11241_11303 = state_11220__$1;
(statearr_11241_11303[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (16))){
var inst_11200 = (state_11220[(11)]);
var state_11220__$1 = state_11220;
var statearr_11242_11304 = state_11220__$1;
(statearr_11242_11304[(2)] = inst_11200);

(statearr_11242_11304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (10))){
var inst_11192 = (state_11220[(2)]);
var state_11220__$1 = state_11220;
var statearr_11243_11305 = state_11220__$1;
(statearr_11243_11305[(2)] = inst_11192);

(statearr_11243_11305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (18))){
var inst_11203 = (state_11220[(2)]);
var state_11220__$1 = state_11220;
var statearr_11244_11306 = state_11220__$1;
(statearr_11244_11306[(2)] = inst_11203);

(statearr_11244_11306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11221 === (8))){
var inst_11189 = cljs.core.async.close_BANG_.call(null,to);
var state_11220__$1 = state_11220;
var statearr_11245_11307 = state_11220__$1;
(statearr_11245_11307[(2)] = inst_11189);

(statearr_11245_11307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto__,jobs,results,process,async))
;
return ((function (switch__7949__auto__,c__8014__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0 = (function (){
var statearr_11249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__);

(statearr_11249[(1)] = (1));

return statearr_11249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1 = (function (state_11220){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11250){if((e11250 instanceof Object)){
var ex__7953__auto__ = e11250;
var statearr_11251_11308 = state_11220;
(statearr_11251_11308[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11309 = state_11220;
state_11220 = G__11309;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__ = function(state_11220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1.call(this,state_11220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__,jobs,results,process,async))
})();
var state__8016__auto__ = (function (){var statearr_11252 = f__8015__auto__.call(null);
(statearr_11252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_11252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__,jobs,results,process,async))
);

return c__8014__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args11310 = [];
var len__5565__auto___11313 = arguments.length;
var i__5566__auto___11314 = (0);
while(true){
if((i__5566__auto___11314 < len__5565__auto___11313)){
args11310.push((arguments[i__5566__auto___11314]));

var G__11315 = (i__5566__auto___11314 + (1));
i__5566__auto___11314 = G__11315;
continue;
} else {
}
break;
}

var G__11312 = args11310.length;
switch (G__11312) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11310.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args11317 = [];
var len__5565__auto___11320 = arguments.length;
var i__5566__auto___11321 = (0);
while(true){
if((i__5566__auto___11321 < len__5565__auto___11320)){
args11317.push((arguments[i__5566__auto___11321]));

var G__11322 = (i__5566__auto___11321 + (1));
i__5566__auto___11321 = G__11322;
continue;
} else {
}
break;
}

var G__11319 = args11317.length;
switch (G__11319) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11317.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args11324 = [];
var len__5565__auto___11377 = arguments.length;
var i__5566__auto___11378 = (0);
while(true){
if((i__5566__auto___11378 < len__5565__auto___11377)){
args11324.push((arguments[i__5566__auto___11378]));

var G__11379 = (i__5566__auto___11378 + (1));
i__5566__auto___11378 = G__11379;
continue;
} else {
}
break;
}

var G__11326 = args11324.length;
switch (G__11326) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11324.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8014__auto___11381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___11381,tc,fc){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___11381,tc,fc){
return (function (state_11352){
var state_val_11353 = (state_11352[(1)]);
if((state_val_11353 === (7))){
var inst_11348 = (state_11352[(2)]);
var state_11352__$1 = state_11352;
var statearr_11354_11382 = state_11352__$1;
(statearr_11354_11382[(2)] = inst_11348);

(statearr_11354_11382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (1))){
var state_11352__$1 = state_11352;
var statearr_11355_11383 = state_11352__$1;
(statearr_11355_11383[(2)] = null);

(statearr_11355_11383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (4))){
var inst_11329 = (state_11352[(7)]);
var inst_11329__$1 = (state_11352[(2)]);
var inst_11330 = (inst_11329__$1 == null);
var state_11352__$1 = (function (){var statearr_11356 = state_11352;
(statearr_11356[(7)] = inst_11329__$1);

return statearr_11356;
})();
if(cljs.core.truth_(inst_11330)){
var statearr_11357_11384 = state_11352__$1;
(statearr_11357_11384[(1)] = (5));

} else {
var statearr_11358_11385 = state_11352__$1;
(statearr_11358_11385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (13))){
var state_11352__$1 = state_11352;
var statearr_11359_11386 = state_11352__$1;
(statearr_11359_11386[(2)] = null);

(statearr_11359_11386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (6))){
var inst_11329 = (state_11352[(7)]);
var inst_11335 = p.call(null,inst_11329);
var state_11352__$1 = state_11352;
if(cljs.core.truth_(inst_11335)){
var statearr_11360_11387 = state_11352__$1;
(statearr_11360_11387[(1)] = (9));

} else {
var statearr_11361_11388 = state_11352__$1;
(statearr_11361_11388[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (3))){
var inst_11350 = (state_11352[(2)]);
var state_11352__$1 = state_11352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11352__$1,inst_11350);
} else {
if((state_val_11353 === (12))){
var state_11352__$1 = state_11352;
var statearr_11362_11389 = state_11352__$1;
(statearr_11362_11389[(2)] = null);

(statearr_11362_11389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (2))){
var state_11352__$1 = state_11352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11352__$1,(4),ch);
} else {
if((state_val_11353 === (11))){
var inst_11329 = (state_11352[(7)]);
var inst_11339 = (state_11352[(2)]);
var state_11352__$1 = state_11352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11352__$1,(8),inst_11339,inst_11329);
} else {
if((state_val_11353 === (9))){
var state_11352__$1 = state_11352;
var statearr_11363_11390 = state_11352__$1;
(statearr_11363_11390[(2)] = tc);

(statearr_11363_11390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (5))){
var inst_11332 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11333 = cljs.core.async.close_BANG_.call(null,fc);
var state_11352__$1 = (function (){var statearr_11364 = state_11352;
(statearr_11364[(8)] = inst_11332);

return statearr_11364;
})();
var statearr_11365_11391 = state_11352__$1;
(statearr_11365_11391[(2)] = inst_11333);

(statearr_11365_11391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (14))){
var inst_11346 = (state_11352[(2)]);
var state_11352__$1 = state_11352;
var statearr_11366_11392 = state_11352__$1;
(statearr_11366_11392[(2)] = inst_11346);

(statearr_11366_11392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (10))){
var state_11352__$1 = state_11352;
var statearr_11367_11393 = state_11352__$1;
(statearr_11367_11393[(2)] = fc);

(statearr_11367_11393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11353 === (8))){
var inst_11341 = (state_11352[(2)]);
var state_11352__$1 = state_11352;
if(cljs.core.truth_(inst_11341)){
var statearr_11368_11394 = state_11352__$1;
(statearr_11368_11394[(1)] = (12));

} else {
var statearr_11369_11395 = state_11352__$1;
(statearr_11369_11395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___11381,tc,fc))
;
return ((function (switch__7949__auto__,c__8014__auto___11381,tc,fc){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_11373 = [null,null,null,null,null,null,null,null,null];
(statearr_11373[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_11373[(1)] = (1));

return statearr_11373;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_11352){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11374){if((e11374 instanceof Object)){
var ex__7953__auto__ = e11374;
var statearr_11375_11396 = state_11352;
(statearr_11375_11396[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11397 = state_11352;
state_11352 = G__11397;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_11352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_11352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___11381,tc,fc))
})();
var state__8016__auto__ = (function (){var statearr_11376 = f__8015__auto__.call(null);
(statearr_11376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___11381);

return statearr_11376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___11381,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__){
return (function (state_11444){
var state_val_11445 = (state_11444[(1)]);
if((state_val_11445 === (1))){
var inst_11430 = init;
var state_11444__$1 = (function (){var statearr_11446 = state_11444;
(statearr_11446[(7)] = inst_11430);

return statearr_11446;
})();
var statearr_11447_11462 = state_11444__$1;
(statearr_11447_11462[(2)] = null);

(statearr_11447_11462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (2))){
var state_11444__$1 = state_11444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11444__$1,(4),ch);
} else {
if((state_val_11445 === (3))){
var inst_11442 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11444__$1,inst_11442);
} else {
if((state_val_11445 === (4))){
var inst_11433 = (state_11444[(8)]);
var inst_11433__$1 = (state_11444[(2)]);
var inst_11434 = (inst_11433__$1 == null);
var state_11444__$1 = (function (){var statearr_11448 = state_11444;
(statearr_11448[(8)] = inst_11433__$1);

return statearr_11448;
})();
if(cljs.core.truth_(inst_11434)){
var statearr_11449_11463 = state_11444__$1;
(statearr_11449_11463[(1)] = (5));

} else {
var statearr_11450_11464 = state_11444__$1;
(statearr_11450_11464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (5))){
var inst_11430 = (state_11444[(7)]);
var state_11444__$1 = state_11444;
var statearr_11451_11465 = state_11444__$1;
(statearr_11451_11465[(2)] = inst_11430);

(statearr_11451_11465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (6))){
var inst_11433 = (state_11444[(8)]);
var inst_11430 = (state_11444[(7)]);
var inst_11437 = f.call(null,inst_11430,inst_11433);
var inst_11430__$1 = inst_11437;
var state_11444__$1 = (function (){var statearr_11452 = state_11444;
(statearr_11452[(7)] = inst_11430__$1);

return statearr_11452;
})();
var statearr_11453_11466 = state_11444__$1;
(statearr_11453_11466[(2)] = null);

(statearr_11453_11466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11445 === (7))){
var inst_11440 = (state_11444[(2)]);
var state_11444__$1 = state_11444;
var statearr_11454_11467 = state_11444__$1;
(statearr_11454_11467[(2)] = inst_11440);

(statearr_11454_11467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8014__auto__))
;
return ((function (switch__7949__auto__,c__8014__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7950__auto____0 = (function (){
var statearr_11458 = [null,null,null,null,null,null,null,null,null];
(statearr_11458[(0)] = cljs$core$async$reduce_$_state_machine__7950__auto__);

(statearr_11458[(1)] = (1));

return statearr_11458;
});
var cljs$core$async$reduce_$_state_machine__7950__auto____1 = (function (state_11444){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11459){if((e11459 instanceof Object)){
var ex__7953__auto__ = e11459;
var statearr_11460_11468 = state_11444;
(statearr_11460_11468[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11469 = state_11444;
state_11444 = G__11469;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7950__auto__ = function(state_11444){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7950__auto____1.call(this,state_11444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7950__auto____0;
cljs$core$async$reduce_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7950__auto____1;
return cljs$core$async$reduce_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__))
})();
var state__8016__auto__ = (function (){var statearr_11461 = f__8015__auto__.call(null);
(statearr_11461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_11461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__))
);

return c__8014__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args11470 = [];
var len__5565__auto___11522 = arguments.length;
var i__5566__auto___11523 = (0);
while(true){
if((i__5566__auto___11523 < len__5565__auto___11522)){
args11470.push((arguments[i__5566__auto___11523]));

var G__11524 = (i__5566__auto___11523 + (1));
i__5566__auto___11523 = G__11524;
continue;
} else {
}
break;
}

var G__11472 = args11470.length;
switch (G__11472) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11470.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__){
return (function (state_11497){
var state_val_11498 = (state_11497[(1)]);
if((state_val_11498 === (7))){
var inst_11479 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11499_11526 = state_11497__$1;
(statearr_11499_11526[(2)] = inst_11479);

(statearr_11499_11526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (1))){
var inst_11473 = cljs.core.seq.call(null,coll);
var inst_11474 = inst_11473;
var state_11497__$1 = (function (){var statearr_11500 = state_11497;
(statearr_11500[(7)] = inst_11474);

return statearr_11500;
})();
var statearr_11501_11527 = state_11497__$1;
(statearr_11501_11527[(2)] = null);

(statearr_11501_11527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (4))){
var inst_11474 = (state_11497[(7)]);
var inst_11477 = cljs.core.first.call(null,inst_11474);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11497__$1,(7),ch,inst_11477);
} else {
if((state_val_11498 === (13))){
var inst_11491 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11502_11528 = state_11497__$1;
(statearr_11502_11528[(2)] = inst_11491);

(statearr_11502_11528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (6))){
var inst_11482 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
if(cljs.core.truth_(inst_11482)){
var statearr_11503_11529 = state_11497__$1;
(statearr_11503_11529[(1)] = (8));

} else {
var statearr_11504_11530 = state_11497__$1;
(statearr_11504_11530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (3))){
var inst_11495 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11497__$1,inst_11495);
} else {
if((state_val_11498 === (12))){
var state_11497__$1 = state_11497;
var statearr_11505_11531 = state_11497__$1;
(statearr_11505_11531[(2)] = null);

(statearr_11505_11531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (2))){
var inst_11474 = (state_11497[(7)]);
var state_11497__$1 = state_11497;
if(cljs.core.truth_(inst_11474)){
var statearr_11506_11532 = state_11497__$1;
(statearr_11506_11532[(1)] = (4));

} else {
var statearr_11507_11533 = state_11497__$1;
(statearr_11507_11533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (11))){
var inst_11488 = cljs.core.async.close_BANG_.call(null,ch);
var state_11497__$1 = state_11497;
var statearr_11508_11534 = state_11497__$1;
(statearr_11508_11534[(2)] = inst_11488);

(statearr_11508_11534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (9))){
var state_11497__$1 = state_11497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11509_11535 = state_11497__$1;
(statearr_11509_11535[(1)] = (11));

} else {
var statearr_11510_11536 = state_11497__$1;
(statearr_11510_11536[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (5))){
var inst_11474 = (state_11497[(7)]);
var state_11497__$1 = state_11497;
var statearr_11511_11537 = state_11497__$1;
(statearr_11511_11537[(2)] = inst_11474);

(statearr_11511_11537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (10))){
var inst_11493 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11512_11538 = state_11497__$1;
(statearr_11512_11538[(2)] = inst_11493);

(statearr_11512_11538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (8))){
var inst_11474 = (state_11497[(7)]);
var inst_11484 = cljs.core.next.call(null,inst_11474);
var inst_11474__$1 = inst_11484;
var state_11497__$1 = (function (){var statearr_11513 = state_11497;
(statearr_11513[(7)] = inst_11474__$1);

return statearr_11513;
})();
var statearr_11514_11539 = state_11497__$1;
(statearr_11514_11539[(2)] = null);

(statearr_11514_11539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto__))
;
return ((function (switch__7949__auto__,c__8014__auto__){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_11518 = [null,null,null,null,null,null,null,null];
(statearr_11518[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_11518[(1)] = (1));

return statearr_11518;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_11497){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11519){if((e11519 instanceof Object)){
var ex__7953__auto__ = e11519;
var statearr_11520_11540 = state_11497;
(statearr_11520_11540[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11541 = state_11497;
state_11497 = G__11541;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__))
})();
var state__8016__auto__ = (function (){var statearr_11521 = f__8015__auto__.call(null);
(statearr_11521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_11521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__))
);

return c__8014__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5162__auto__ = (((_ == null))?null:_);
var m__5163__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,_);
} else {
var m__5163__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5163__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m,ch);
} else {
var m__5163__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m);
} else {
var m__5163__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t11767 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11767 = (function (mult,ch,cs,meta11768){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11768 = meta11768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11769,meta11768__$1){
var self__ = this;
var _11769__$1 = this;
return (new cljs.core.async.t11767(self__.mult,self__.ch,self__.cs,meta11768__$1));
});})(cs))
;

cljs.core.async.t11767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11769){
var self__ = this;
var _11769__$1 = this;
return self__.meta11768;
});})(cs))
;

cljs.core.async.t11767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t11767.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t11767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t11767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t11767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t11767.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11768","meta11768",1670230043,null)], null);
});})(cs))
;

cljs.core.async.t11767.cljs$lang$type = true;

cljs.core.async.t11767.cljs$lang$ctorStr = "cljs.core.async/t11767";

cljs.core.async.t11767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t11767");
});})(cs))
;

cljs.core.async.__GT_t11767 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t11767(mult__$1,ch__$1,cs__$1,meta11768){
return (new cljs.core.async.t11767(mult__$1,ch__$1,cs__$1,meta11768));
});})(cs))
;

}

return (new cljs.core.async.t11767(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8014__auto___11988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___11988,cs,m,dchan,dctr,done){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___11988,cs,m,dchan,dctr,done){
return (function (state_11900){
var state_val_11901 = (state_11900[(1)]);
if((state_val_11901 === (7))){
var inst_11896 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11902_11989 = state_11900__$1;
(statearr_11902_11989[(2)] = inst_11896);

(statearr_11902_11989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (20))){
var inst_11801 = (state_11900[(7)]);
var inst_11811 = cljs.core.first.call(null,inst_11801);
var inst_11812 = cljs.core.nth.call(null,inst_11811,(0),null);
var inst_11813 = cljs.core.nth.call(null,inst_11811,(1),null);
var state_11900__$1 = (function (){var statearr_11903 = state_11900;
(statearr_11903[(8)] = inst_11812);

return statearr_11903;
})();
if(cljs.core.truth_(inst_11813)){
var statearr_11904_11990 = state_11900__$1;
(statearr_11904_11990[(1)] = (22));

} else {
var statearr_11905_11991 = state_11900__$1;
(statearr_11905_11991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (27))){
var inst_11772 = (state_11900[(9)]);
var inst_11843 = (state_11900[(10)]);
var inst_11841 = (state_11900[(11)]);
var inst_11848 = (state_11900[(12)]);
var inst_11848__$1 = cljs.core._nth.call(null,inst_11841,inst_11843);
var inst_11849 = cljs.core.async.put_BANG_.call(null,inst_11848__$1,inst_11772,done);
var state_11900__$1 = (function (){var statearr_11906 = state_11900;
(statearr_11906[(12)] = inst_11848__$1);

return statearr_11906;
})();
if(cljs.core.truth_(inst_11849)){
var statearr_11907_11992 = state_11900__$1;
(statearr_11907_11992[(1)] = (30));

} else {
var statearr_11908_11993 = state_11900__$1;
(statearr_11908_11993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (1))){
var state_11900__$1 = state_11900;
var statearr_11909_11994 = state_11900__$1;
(statearr_11909_11994[(2)] = null);

(statearr_11909_11994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (24))){
var inst_11801 = (state_11900[(7)]);
var inst_11818 = (state_11900[(2)]);
var inst_11819 = cljs.core.next.call(null,inst_11801);
var inst_11781 = inst_11819;
var inst_11782 = null;
var inst_11783 = (0);
var inst_11784 = (0);
var state_11900__$1 = (function (){var statearr_11910 = state_11900;
(statearr_11910[(13)] = inst_11784);

(statearr_11910[(14)] = inst_11818);

(statearr_11910[(15)] = inst_11782);

(statearr_11910[(16)] = inst_11783);

(statearr_11910[(17)] = inst_11781);

return statearr_11910;
})();
var statearr_11911_11995 = state_11900__$1;
(statearr_11911_11995[(2)] = null);

(statearr_11911_11995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (39))){
var state_11900__$1 = state_11900;
var statearr_11915_11996 = state_11900__$1;
(statearr_11915_11996[(2)] = null);

(statearr_11915_11996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (4))){
var inst_11772 = (state_11900[(9)]);
var inst_11772__$1 = (state_11900[(2)]);
var inst_11773 = (inst_11772__$1 == null);
var state_11900__$1 = (function (){var statearr_11916 = state_11900;
(statearr_11916[(9)] = inst_11772__$1);

return statearr_11916;
})();
if(cljs.core.truth_(inst_11773)){
var statearr_11917_11997 = state_11900__$1;
(statearr_11917_11997[(1)] = (5));

} else {
var statearr_11918_11998 = state_11900__$1;
(statearr_11918_11998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (15))){
var inst_11784 = (state_11900[(13)]);
var inst_11782 = (state_11900[(15)]);
var inst_11783 = (state_11900[(16)]);
var inst_11781 = (state_11900[(17)]);
var inst_11797 = (state_11900[(2)]);
var inst_11798 = (inst_11784 + (1));
var tmp11912 = inst_11782;
var tmp11913 = inst_11783;
var tmp11914 = inst_11781;
var inst_11781__$1 = tmp11914;
var inst_11782__$1 = tmp11912;
var inst_11783__$1 = tmp11913;
var inst_11784__$1 = inst_11798;
var state_11900__$1 = (function (){var statearr_11919 = state_11900;
(statearr_11919[(18)] = inst_11797);

(statearr_11919[(13)] = inst_11784__$1);

(statearr_11919[(15)] = inst_11782__$1);

(statearr_11919[(16)] = inst_11783__$1);

(statearr_11919[(17)] = inst_11781__$1);

return statearr_11919;
})();
var statearr_11920_11999 = state_11900__$1;
(statearr_11920_11999[(2)] = null);

(statearr_11920_11999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (21))){
var inst_11822 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11924_12000 = state_11900__$1;
(statearr_11924_12000[(2)] = inst_11822);

(statearr_11924_12000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (31))){
var inst_11848 = (state_11900[(12)]);
var inst_11852 = done.call(null,null);
var inst_11853 = cljs.core.async.untap_STAR_.call(null,m,inst_11848);
var state_11900__$1 = (function (){var statearr_11925 = state_11900;
(statearr_11925[(19)] = inst_11852);

return statearr_11925;
})();
var statearr_11926_12001 = state_11900__$1;
(statearr_11926_12001[(2)] = inst_11853);

(statearr_11926_12001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (32))){
var inst_11842 = (state_11900[(20)]);
var inst_11843 = (state_11900[(10)]);
var inst_11840 = (state_11900[(21)]);
var inst_11841 = (state_11900[(11)]);
var inst_11855 = (state_11900[(2)]);
var inst_11856 = (inst_11843 + (1));
var tmp11921 = inst_11842;
var tmp11922 = inst_11840;
var tmp11923 = inst_11841;
var inst_11840__$1 = tmp11922;
var inst_11841__$1 = tmp11923;
var inst_11842__$1 = tmp11921;
var inst_11843__$1 = inst_11856;
var state_11900__$1 = (function (){var statearr_11927 = state_11900;
(statearr_11927[(22)] = inst_11855);

(statearr_11927[(20)] = inst_11842__$1);

(statearr_11927[(10)] = inst_11843__$1);

(statearr_11927[(21)] = inst_11840__$1);

(statearr_11927[(11)] = inst_11841__$1);

return statearr_11927;
})();
var statearr_11928_12002 = state_11900__$1;
(statearr_11928_12002[(2)] = null);

(statearr_11928_12002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (40))){
var inst_11868 = (state_11900[(23)]);
var inst_11872 = done.call(null,null);
var inst_11873 = cljs.core.async.untap_STAR_.call(null,m,inst_11868);
var state_11900__$1 = (function (){var statearr_11929 = state_11900;
(statearr_11929[(24)] = inst_11872);

return statearr_11929;
})();
var statearr_11930_12003 = state_11900__$1;
(statearr_11930_12003[(2)] = inst_11873);

(statearr_11930_12003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (33))){
var inst_11859 = (state_11900[(25)]);
var inst_11861 = cljs.core.chunked_seq_QMARK_.call(null,inst_11859);
var state_11900__$1 = state_11900;
if(inst_11861){
var statearr_11931_12004 = state_11900__$1;
(statearr_11931_12004[(1)] = (36));

} else {
var statearr_11932_12005 = state_11900__$1;
(statearr_11932_12005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (13))){
var inst_11791 = (state_11900[(26)]);
var inst_11794 = cljs.core.async.close_BANG_.call(null,inst_11791);
var state_11900__$1 = state_11900;
var statearr_11933_12006 = state_11900__$1;
(statearr_11933_12006[(2)] = inst_11794);

(statearr_11933_12006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (22))){
var inst_11812 = (state_11900[(8)]);
var inst_11815 = cljs.core.async.close_BANG_.call(null,inst_11812);
var state_11900__$1 = state_11900;
var statearr_11934_12007 = state_11900__$1;
(statearr_11934_12007[(2)] = inst_11815);

(statearr_11934_12007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (36))){
var inst_11859 = (state_11900[(25)]);
var inst_11863 = cljs.core.chunk_first.call(null,inst_11859);
var inst_11864 = cljs.core.chunk_rest.call(null,inst_11859);
var inst_11865 = cljs.core.count.call(null,inst_11863);
var inst_11840 = inst_11864;
var inst_11841 = inst_11863;
var inst_11842 = inst_11865;
var inst_11843 = (0);
var state_11900__$1 = (function (){var statearr_11935 = state_11900;
(statearr_11935[(20)] = inst_11842);

(statearr_11935[(10)] = inst_11843);

(statearr_11935[(21)] = inst_11840);

(statearr_11935[(11)] = inst_11841);

return statearr_11935;
})();
var statearr_11936_12008 = state_11900__$1;
(statearr_11936_12008[(2)] = null);

(statearr_11936_12008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (41))){
var inst_11859 = (state_11900[(25)]);
var inst_11875 = (state_11900[(2)]);
var inst_11876 = cljs.core.next.call(null,inst_11859);
var inst_11840 = inst_11876;
var inst_11841 = null;
var inst_11842 = (0);
var inst_11843 = (0);
var state_11900__$1 = (function (){var statearr_11937 = state_11900;
(statearr_11937[(20)] = inst_11842);

(statearr_11937[(10)] = inst_11843);

(statearr_11937[(27)] = inst_11875);

(statearr_11937[(21)] = inst_11840);

(statearr_11937[(11)] = inst_11841);

return statearr_11937;
})();
var statearr_11938_12009 = state_11900__$1;
(statearr_11938_12009[(2)] = null);

(statearr_11938_12009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (43))){
var state_11900__$1 = state_11900;
var statearr_11939_12010 = state_11900__$1;
(statearr_11939_12010[(2)] = null);

(statearr_11939_12010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (29))){
var inst_11884 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11940_12011 = state_11900__$1;
(statearr_11940_12011[(2)] = inst_11884);

(statearr_11940_12011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (44))){
var inst_11893 = (state_11900[(2)]);
var state_11900__$1 = (function (){var statearr_11941 = state_11900;
(statearr_11941[(28)] = inst_11893);

return statearr_11941;
})();
var statearr_11942_12012 = state_11900__$1;
(statearr_11942_12012[(2)] = null);

(statearr_11942_12012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (6))){
var inst_11832 = (state_11900[(29)]);
var inst_11831 = cljs.core.deref.call(null,cs);
var inst_11832__$1 = cljs.core.keys.call(null,inst_11831);
var inst_11833 = cljs.core.count.call(null,inst_11832__$1);
var inst_11834 = cljs.core.reset_BANG_.call(null,dctr,inst_11833);
var inst_11839 = cljs.core.seq.call(null,inst_11832__$1);
var inst_11840 = inst_11839;
var inst_11841 = null;
var inst_11842 = (0);
var inst_11843 = (0);
var state_11900__$1 = (function (){var statearr_11943 = state_11900;
(statearr_11943[(30)] = inst_11834);

(statearr_11943[(29)] = inst_11832__$1);

(statearr_11943[(20)] = inst_11842);

(statearr_11943[(10)] = inst_11843);

(statearr_11943[(21)] = inst_11840);

(statearr_11943[(11)] = inst_11841);

return statearr_11943;
})();
var statearr_11944_12013 = state_11900__$1;
(statearr_11944_12013[(2)] = null);

(statearr_11944_12013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (28))){
var inst_11859 = (state_11900[(25)]);
var inst_11840 = (state_11900[(21)]);
var inst_11859__$1 = cljs.core.seq.call(null,inst_11840);
var state_11900__$1 = (function (){var statearr_11945 = state_11900;
(statearr_11945[(25)] = inst_11859__$1);

return statearr_11945;
})();
if(inst_11859__$1){
var statearr_11946_12014 = state_11900__$1;
(statearr_11946_12014[(1)] = (33));

} else {
var statearr_11947_12015 = state_11900__$1;
(statearr_11947_12015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (25))){
var inst_11842 = (state_11900[(20)]);
var inst_11843 = (state_11900[(10)]);
var inst_11845 = (inst_11843 < inst_11842);
var inst_11846 = inst_11845;
var state_11900__$1 = state_11900;
if(cljs.core.truth_(inst_11846)){
var statearr_11948_12016 = state_11900__$1;
(statearr_11948_12016[(1)] = (27));

} else {
var statearr_11949_12017 = state_11900__$1;
(statearr_11949_12017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (34))){
var state_11900__$1 = state_11900;
var statearr_11950_12018 = state_11900__$1;
(statearr_11950_12018[(2)] = null);

(statearr_11950_12018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (17))){
var state_11900__$1 = state_11900;
var statearr_11951_12019 = state_11900__$1;
(statearr_11951_12019[(2)] = null);

(statearr_11951_12019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (3))){
var inst_11898 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11900__$1,inst_11898);
} else {
if((state_val_11901 === (12))){
var inst_11827 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11952_12020 = state_11900__$1;
(statearr_11952_12020[(2)] = inst_11827);

(statearr_11952_12020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (2))){
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11900__$1,(4),ch);
} else {
if((state_val_11901 === (23))){
var state_11900__$1 = state_11900;
var statearr_11953_12021 = state_11900__$1;
(statearr_11953_12021[(2)] = null);

(statearr_11953_12021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (35))){
var inst_11882 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11954_12022 = state_11900__$1;
(statearr_11954_12022[(2)] = inst_11882);

(statearr_11954_12022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (19))){
var inst_11801 = (state_11900[(7)]);
var inst_11805 = cljs.core.chunk_first.call(null,inst_11801);
var inst_11806 = cljs.core.chunk_rest.call(null,inst_11801);
var inst_11807 = cljs.core.count.call(null,inst_11805);
var inst_11781 = inst_11806;
var inst_11782 = inst_11805;
var inst_11783 = inst_11807;
var inst_11784 = (0);
var state_11900__$1 = (function (){var statearr_11955 = state_11900;
(statearr_11955[(13)] = inst_11784);

(statearr_11955[(15)] = inst_11782);

(statearr_11955[(16)] = inst_11783);

(statearr_11955[(17)] = inst_11781);

return statearr_11955;
})();
var statearr_11956_12023 = state_11900__$1;
(statearr_11956_12023[(2)] = null);

(statearr_11956_12023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (11))){
var inst_11801 = (state_11900[(7)]);
var inst_11781 = (state_11900[(17)]);
var inst_11801__$1 = cljs.core.seq.call(null,inst_11781);
var state_11900__$1 = (function (){var statearr_11957 = state_11900;
(statearr_11957[(7)] = inst_11801__$1);

return statearr_11957;
})();
if(inst_11801__$1){
var statearr_11958_12024 = state_11900__$1;
(statearr_11958_12024[(1)] = (16));

} else {
var statearr_11959_12025 = state_11900__$1;
(statearr_11959_12025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (9))){
var inst_11829 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11960_12026 = state_11900__$1;
(statearr_11960_12026[(2)] = inst_11829);

(statearr_11960_12026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (5))){
var inst_11779 = cljs.core.deref.call(null,cs);
var inst_11780 = cljs.core.seq.call(null,inst_11779);
var inst_11781 = inst_11780;
var inst_11782 = null;
var inst_11783 = (0);
var inst_11784 = (0);
var state_11900__$1 = (function (){var statearr_11961 = state_11900;
(statearr_11961[(13)] = inst_11784);

(statearr_11961[(15)] = inst_11782);

(statearr_11961[(16)] = inst_11783);

(statearr_11961[(17)] = inst_11781);

return statearr_11961;
})();
var statearr_11962_12027 = state_11900__$1;
(statearr_11962_12027[(2)] = null);

(statearr_11962_12027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (14))){
var state_11900__$1 = state_11900;
var statearr_11963_12028 = state_11900__$1;
(statearr_11963_12028[(2)] = null);

(statearr_11963_12028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (45))){
var inst_11890 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11964_12029 = state_11900__$1;
(statearr_11964_12029[(2)] = inst_11890);

(statearr_11964_12029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (26))){
var inst_11832 = (state_11900[(29)]);
var inst_11886 = (state_11900[(2)]);
var inst_11887 = cljs.core.seq.call(null,inst_11832);
var state_11900__$1 = (function (){var statearr_11965 = state_11900;
(statearr_11965[(31)] = inst_11886);

return statearr_11965;
})();
if(inst_11887){
var statearr_11966_12030 = state_11900__$1;
(statearr_11966_12030[(1)] = (42));

} else {
var statearr_11967_12031 = state_11900__$1;
(statearr_11967_12031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (16))){
var inst_11801 = (state_11900[(7)]);
var inst_11803 = cljs.core.chunked_seq_QMARK_.call(null,inst_11801);
var state_11900__$1 = state_11900;
if(inst_11803){
var statearr_11968_12032 = state_11900__$1;
(statearr_11968_12032[(1)] = (19));

} else {
var statearr_11969_12033 = state_11900__$1;
(statearr_11969_12033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (38))){
var inst_11879 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11970_12034 = state_11900__$1;
(statearr_11970_12034[(2)] = inst_11879);

(statearr_11970_12034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (30))){
var state_11900__$1 = state_11900;
var statearr_11971_12035 = state_11900__$1;
(statearr_11971_12035[(2)] = null);

(statearr_11971_12035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (10))){
var inst_11784 = (state_11900[(13)]);
var inst_11782 = (state_11900[(15)]);
var inst_11790 = cljs.core._nth.call(null,inst_11782,inst_11784);
var inst_11791 = cljs.core.nth.call(null,inst_11790,(0),null);
var inst_11792 = cljs.core.nth.call(null,inst_11790,(1),null);
var state_11900__$1 = (function (){var statearr_11972 = state_11900;
(statearr_11972[(26)] = inst_11791);

return statearr_11972;
})();
if(cljs.core.truth_(inst_11792)){
var statearr_11973_12036 = state_11900__$1;
(statearr_11973_12036[(1)] = (13));

} else {
var statearr_11974_12037 = state_11900__$1;
(statearr_11974_12037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (18))){
var inst_11825 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
var statearr_11975_12038 = state_11900__$1;
(statearr_11975_12038[(2)] = inst_11825);

(statearr_11975_12038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (42))){
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11900__$1,(45),dchan);
} else {
if((state_val_11901 === (37))){
var inst_11868 = (state_11900[(23)]);
var inst_11772 = (state_11900[(9)]);
var inst_11859 = (state_11900[(25)]);
var inst_11868__$1 = cljs.core.first.call(null,inst_11859);
var inst_11869 = cljs.core.async.put_BANG_.call(null,inst_11868__$1,inst_11772,done);
var state_11900__$1 = (function (){var statearr_11976 = state_11900;
(statearr_11976[(23)] = inst_11868__$1);

return statearr_11976;
})();
if(cljs.core.truth_(inst_11869)){
var statearr_11977_12039 = state_11900__$1;
(statearr_11977_12039[(1)] = (39));

} else {
var statearr_11978_12040 = state_11900__$1;
(statearr_11978_12040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11901 === (8))){
var inst_11784 = (state_11900[(13)]);
var inst_11783 = (state_11900[(16)]);
var inst_11786 = (inst_11784 < inst_11783);
var inst_11787 = inst_11786;
var state_11900__$1 = state_11900;
if(cljs.core.truth_(inst_11787)){
var statearr_11979_12041 = state_11900__$1;
(statearr_11979_12041[(1)] = (10));

} else {
var statearr_11980_12042 = state_11900__$1;
(statearr_11980_12042[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___11988,cs,m,dchan,dctr,done))
;
return ((function (switch__7949__auto__,c__8014__auto___11988,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7950__auto__ = null;
var cljs$core$async$mult_$_state_machine__7950__auto____0 = (function (){
var statearr_11984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11984[(0)] = cljs$core$async$mult_$_state_machine__7950__auto__);

(statearr_11984[(1)] = (1));

return statearr_11984;
});
var cljs$core$async$mult_$_state_machine__7950__auto____1 = (function (state_11900){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_11900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e11985){if((e11985 instanceof Object)){
var ex__7953__auto__ = e11985;
var statearr_11986_12043 = state_11900;
(statearr_11986_12043[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12044 = state_11900;
state_11900 = G__12044;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7950__auto__ = function(state_11900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7950__auto____1.call(this,state_11900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7950__auto____0;
cljs$core$async$mult_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7950__auto____1;
return cljs$core$async$mult_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___11988,cs,m,dchan,dctr,done))
})();
var state__8016__auto__ = (function (){var statearr_11987 = f__8015__auto__.call(null);
(statearr_11987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___11988);

return statearr_11987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___11988,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args12045 = [];
var len__5565__auto___12048 = arguments.length;
var i__5566__auto___12049 = (0);
while(true){
if((i__5566__auto___12049 < len__5565__auto___12048)){
args12045.push((arguments[i__5566__auto___12049]));

var G__12050 = (i__5566__auto___12049 + (1));
i__5566__auto___12049 = G__12050;
continue;
} else {
}
break;
}

var G__12047 = args12045.length;
switch (G__12047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12045.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m,ch);
} else {
var m__5163__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m,ch);
} else {
var m__5163__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m);
} else {
var m__5163__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m,state_map);
} else {
var m__5163__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5162__auto__ = (((m == null))?null:m);
var m__5163__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,m,mode);
} else {
var m__5163__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___12064 = arguments.length;
var i__5566__auto___12065 = (0);
while(true){
if((i__5566__auto___12065 < len__5565__auto___12064)){
args__5572__auto__.push((arguments[i__5566__auto___12065]));

var G__12066 = (i__5566__auto___12065 + (1));
i__5566__auto___12065 = G__12066;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((3) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5573__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12058){
var map__12059 = p__12058;
var map__12059__$1 = ((((!((map__12059 == null)))?((((map__12059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12059):map__12059);
var opts = map__12059__$1;
var statearr_12061_12067 = state;
(statearr_12061_12067[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__12059,map__12059__$1,opts){
return (function (val){
var statearr_12062_12068 = state;
(statearr_12062_12068[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12059,map__12059__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_12063_12069 = state;
(statearr_12063_12069[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12054){
var G__12055 = cljs.core.first.call(null,seq12054);
var seq12054__$1 = cljs.core.next.call(null,seq12054);
var G__12056 = cljs.core.first.call(null,seq12054__$1);
var seq12054__$2 = cljs.core.next.call(null,seq12054__$1);
var G__12057 = cljs.core.first.call(null,seq12054__$2);
var seq12054__$3 = cljs.core.next.call(null,seq12054__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12055,G__12056,G__12057,seq12054__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t12233 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12233 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12234){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12234 = meta12234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12235,meta12234__$1){
var self__ = this;
var _12235__$1 = this;
return (new cljs.core.async.t12233(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12234__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12235){
var self__ = this;
var _12235__$1 = this;
return self__.meta12234;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12233.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12234","meta12234",-1205112224,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12233.cljs$lang$type = true;

cljs.core.async.t12233.cljs$lang$ctorStr = "cljs.core.async/t12233";

cljs.core.async.t12233.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t12233");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12233 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t12233(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12234){
return (new cljs.core.async.t12233(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12234));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12233(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8014__auto___12396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___12396,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___12396,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12333){
var state_val_12334 = (state_12333[(1)]);
if((state_val_12334 === (7))){
var inst_12251 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12335_12397 = state_12333__$1;
(statearr_12335_12397[(2)] = inst_12251);

(statearr_12335_12397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (20))){
var inst_12263 = (state_12333[(7)]);
var state_12333__$1 = state_12333;
var statearr_12336_12398 = state_12333__$1;
(statearr_12336_12398[(2)] = inst_12263);

(statearr_12336_12398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (27))){
var state_12333__$1 = state_12333;
var statearr_12337_12399 = state_12333__$1;
(statearr_12337_12399[(2)] = null);

(statearr_12337_12399[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (1))){
var inst_12239 = (state_12333[(8)]);
var inst_12239__$1 = calc_state.call(null);
var inst_12241 = (inst_12239__$1 == null);
var inst_12242 = cljs.core.not.call(null,inst_12241);
var state_12333__$1 = (function (){var statearr_12338 = state_12333;
(statearr_12338[(8)] = inst_12239__$1);

return statearr_12338;
})();
if(inst_12242){
var statearr_12339_12400 = state_12333__$1;
(statearr_12339_12400[(1)] = (2));

} else {
var statearr_12340_12401 = state_12333__$1;
(statearr_12340_12401[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (24))){
var inst_12286 = (state_12333[(9)]);
var inst_12307 = (state_12333[(10)]);
var inst_12293 = (state_12333[(11)]);
var inst_12307__$1 = inst_12286.call(null,inst_12293);
var state_12333__$1 = (function (){var statearr_12341 = state_12333;
(statearr_12341[(10)] = inst_12307__$1);

return statearr_12341;
})();
if(cljs.core.truth_(inst_12307__$1)){
var statearr_12342_12402 = state_12333__$1;
(statearr_12342_12402[(1)] = (29));

} else {
var statearr_12343_12403 = state_12333__$1;
(statearr_12343_12403[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (4))){
var inst_12254 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12254)){
var statearr_12344_12404 = state_12333__$1;
(statearr_12344_12404[(1)] = (8));

} else {
var statearr_12345_12405 = state_12333__$1;
(statearr_12345_12405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (15))){
var inst_12280 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12280)){
var statearr_12346_12406 = state_12333__$1;
(statearr_12346_12406[(1)] = (19));

} else {
var statearr_12347_12407 = state_12333__$1;
(statearr_12347_12407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (21))){
var inst_12285 = (state_12333[(12)]);
var inst_12285__$1 = (state_12333[(2)]);
var inst_12286 = cljs.core.get.call(null,inst_12285__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12287 = cljs.core.get.call(null,inst_12285__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12288 = cljs.core.get.call(null,inst_12285__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12333__$1 = (function (){var statearr_12348 = state_12333;
(statearr_12348[(9)] = inst_12286);

(statearr_12348[(12)] = inst_12285__$1);

(statearr_12348[(13)] = inst_12287);

return statearr_12348;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12333__$1,(22),inst_12288);
} else {
if((state_val_12334 === (31))){
var inst_12315 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12315)){
var statearr_12349_12408 = state_12333__$1;
(statearr_12349_12408[(1)] = (32));

} else {
var statearr_12350_12409 = state_12333__$1;
(statearr_12350_12409[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (32))){
var inst_12292 = (state_12333[(14)]);
var state_12333__$1 = state_12333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12333__$1,(35),out,inst_12292);
} else {
if((state_val_12334 === (33))){
var inst_12285 = (state_12333[(12)]);
var inst_12263 = inst_12285;
var state_12333__$1 = (function (){var statearr_12351 = state_12333;
(statearr_12351[(7)] = inst_12263);

return statearr_12351;
})();
var statearr_12352_12410 = state_12333__$1;
(statearr_12352_12410[(2)] = null);

(statearr_12352_12410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (13))){
var inst_12263 = (state_12333[(7)]);
var inst_12270 = inst_12263.cljs$lang$protocol_mask$partition0$;
var inst_12271 = (inst_12270 & (64));
var inst_12272 = inst_12263.cljs$core$ISeq$;
var inst_12273 = (inst_12271) || (inst_12272);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12273)){
var statearr_12353_12411 = state_12333__$1;
(statearr_12353_12411[(1)] = (16));

} else {
var statearr_12354_12412 = state_12333__$1;
(statearr_12354_12412[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (22))){
var inst_12292 = (state_12333[(14)]);
var inst_12293 = (state_12333[(11)]);
var inst_12291 = (state_12333[(2)]);
var inst_12292__$1 = cljs.core.nth.call(null,inst_12291,(0),null);
var inst_12293__$1 = cljs.core.nth.call(null,inst_12291,(1),null);
var inst_12294 = (inst_12292__$1 == null);
var inst_12295 = cljs.core._EQ_.call(null,inst_12293__$1,change);
var inst_12296 = (inst_12294) || (inst_12295);
var state_12333__$1 = (function (){var statearr_12355 = state_12333;
(statearr_12355[(14)] = inst_12292__$1);

(statearr_12355[(11)] = inst_12293__$1);

return statearr_12355;
})();
if(cljs.core.truth_(inst_12296)){
var statearr_12356_12413 = state_12333__$1;
(statearr_12356_12413[(1)] = (23));

} else {
var statearr_12357_12414 = state_12333__$1;
(statearr_12357_12414[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (36))){
var inst_12285 = (state_12333[(12)]);
var inst_12263 = inst_12285;
var state_12333__$1 = (function (){var statearr_12358 = state_12333;
(statearr_12358[(7)] = inst_12263);

return statearr_12358;
})();
var statearr_12359_12415 = state_12333__$1;
(statearr_12359_12415[(2)] = null);

(statearr_12359_12415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (29))){
var inst_12307 = (state_12333[(10)]);
var state_12333__$1 = state_12333;
var statearr_12360_12416 = state_12333__$1;
(statearr_12360_12416[(2)] = inst_12307);

(statearr_12360_12416[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (6))){
var state_12333__$1 = state_12333;
var statearr_12361_12417 = state_12333__$1;
(statearr_12361_12417[(2)] = false);

(statearr_12361_12417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (28))){
var inst_12303 = (state_12333[(2)]);
var inst_12304 = calc_state.call(null);
var inst_12263 = inst_12304;
var state_12333__$1 = (function (){var statearr_12362 = state_12333;
(statearr_12362[(7)] = inst_12263);

(statearr_12362[(15)] = inst_12303);

return statearr_12362;
})();
var statearr_12363_12418 = state_12333__$1;
(statearr_12363_12418[(2)] = null);

(statearr_12363_12418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (25))){
var inst_12329 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12364_12419 = state_12333__$1;
(statearr_12364_12419[(2)] = inst_12329);

(statearr_12364_12419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (34))){
var inst_12327 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12365_12420 = state_12333__$1;
(statearr_12365_12420[(2)] = inst_12327);

(statearr_12365_12420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (17))){
var state_12333__$1 = state_12333;
var statearr_12366_12421 = state_12333__$1;
(statearr_12366_12421[(2)] = false);

(statearr_12366_12421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (3))){
var state_12333__$1 = state_12333;
var statearr_12367_12422 = state_12333__$1;
(statearr_12367_12422[(2)] = false);

(statearr_12367_12422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (12))){
var inst_12331 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12333__$1,inst_12331);
} else {
if((state_val_12334 === (2))){
var inst_12239 = (state_12333[(8)]);
var inst_12244 = inst_12239.cljs$lang$protocol_mask$partition0$;
var inst_12245 = (inst_12244 & (64));
var inst_12246 = inst_12239.cljs$core$ISeq$;
var inst_12247 = (inst_12245) || (inst_12246);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12247)){
var statearr_12368_12423 = state_12333__$1;
(statearr_12368_12423[(1)] = (5));

} else {
var statearr_12369_12424 = state_12333__$1;
(statearr_12369_12424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (23))){
var inst_12292 = (state_12333[(14)]);
var inst_12298 = (inst_12292 == null);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12298)){
var statearr_12370_12425 = state_12333__$1;
(statearr_12370_12425[(1)] = (26));

} else {
var statearr_12371_12426 = state_12333__$1;
(statearr_12371_12426[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (35))){
var inst_12318 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
if(cljs.core.truth_(inst_12318)){
var statearr_12372_12427 = state_12333__$1;
(statearr_12372_12427[(1)] = (36));

} else {
var statearr_12373_12428 = state_12333__$1;
(statearr_12373_12428[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (19))){
var inst_12263 = (state_12333[(7)]);
var inst_12282 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12263);
var state_12333__$1 = state_12333;
var statearr_12374_12429 = state_12333__$1;
(statearr_12374_12429[(2)] = inst_12282);

(statearr_12374_12429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (11))){
var inst_12263 = (state_12333[(7)]);
var inst_12267 = (inst_12263 == null);
var inst_12268 = cljs.core.not.call(null,inst_12267);
var state_12333__$1 = state_12333;
if(inst_12268){
var statearr_12375_12430 = state_12333__$1;
(statearr_12375_12430[(1)] = (13));

} else {
var statearr_12376_12431 = state_12333__$1;
(statearr_12376_12431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (9))){
var inst_12239 = (state_12333[(8)]);
var state_12333__$1 = state_12333;
var statearr_12377_12432 = state_12333__$1;
(statearr_12377_12432[(2)] = inst_12239);

(statearr_12377_12432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (5))){
var state_12333__$1 = state_12333;
var statearr_12378_12433 = state_12333__$1;
(statearr_12378_12433[(2)] = true);

(statearr_12378_12433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (14))){
var state_12333__$1 = state_12333;
var statearr_12379_12434 = state_12333__$1;
(statearr_12379_12434[(2)] = false);

(statearr_12379_12434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (26))){
var inst_12293 = (state_12333[(11)]);
var inst_12300 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12293);
var state_12333__$1 = state_12333;
var statearr_12380_12435 = state_12333__$1;
(statearr_12380_12435[(2)] = inst_12300);

(statearr_12380_12435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (16))){
var state_12333__$1 = state_12333;
var statearr_12381_12436 = state_12333__$1;
(statearr_12381_12436[(2)] = true);

(statearr_12381_12436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (38))){
var inst_12323 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12382_12437 = state_12333__$1;
(statearr_12382_12437[(2)] = inst_12323);

(statearr_12382_12437[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (30))){
var inst_12286 = (state_12333[(9)]);
var inst_12293 = (state_12333[(11)]);
var inst_12287 = (state_12333[(13)]);
var inst_12310 = cljs.core.empty_QMARK_.call(null,inst_12286);
var inst_12311 = inst_12287.call(null,inst_12293);
var inst_12312 = cljs.core.not.call(null,inst_12311);
var inst_12313 = (inst_12310) && (inst_12312);
var state_12333__$1 = state_12333;
var statearr_12383_12438 = state_12333__$1;
(statearr_12383_12438[(2)] = inst_12313);

(statearr_12383_12438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (10))){
var inst_12239 = (state_12333[(8)]);
var inst_12259 = (state_12333[(2)]);
var inst_12260 = cljs.core.get.call(null,inst_12259,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12261 = cljs.core.get.call(null,inst_12259,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12262 = cljs.core.get.call(null,inst_12259,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12263 = inst_12239;
var state_12333__$1 = (function (){var statearr_12384 = state_12333;
(statearr_12384[(16)] = inst_12262);

(statearr_12384[(17)] = inst_12261);

(statearr_12384[(7)] = inst_12263);

(statearr_12384[(18)] = inst_12260);

return statearr_12384;
})();
var statearr_12385_12439 = state_12333__$1;
(statearr_12385_12439[(2)] = null);

(statearr_12385_12439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (18))){
var inst_12277 = (state_12333[(2)]);
var state_12333__$1 = state_12333;
var statearr_12386_12440 = state_12333__$1;
(statearr_12386_12440[(2)] = inst_12277);

(statearr_12386_12440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (37))){
var state_12333__$1 = state_12333;
var statearr_12387_12441 = state_12333__$1;
(statearr_12387_12441[(2)] = null);

(statearr_12387_12441[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12334 === (8))){
var inst_12239 = (state_12333[(8)]);
var inst_12256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12239);
var state_12333__$1 = state_12333;
var statearr_12388_12442 = state_12333__$1;
(statearr_12388_12442[(2)] = inst_12256);

(statearr_12388_12442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___12396,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7949__auto__,c__8014__auto___12396,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7950__auto__ = null;
var cljs$core$async$mix_$_state_machine__7950__auto____0 = (function (){
var statearr_12392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12392[(0)] = cljs$core$async$mix_$_state_machine__7950__auto__);

(statearr_12392[(1)] = (1));

return statearr_12392;
});
var cljs$core$async$mix_$_state_machine__7950__auto____1 = (function (state_12333){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_12333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e12393){if((e12393 instanceof Object)){
var ex__7953__auto__ = e12393;
var statearr_12394_12443 = state_12333;
(statearr_12394_12443[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12444 = state_12333;
state_12333 = G__12444;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7950__auto__ = function(state_12333){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7950__auto____1.call(this,state_12333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7950__auto____0;
cljs$core$async$mix_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7950__auto____1;
return cljs$core$async$mix_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___12396,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8016__auto__ = (function (){var statearr_12395 = f__8015__auto__.call(null);
(statearr_12395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___12396);

return statearr_12395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___12396,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5162__auto__ = (((p == null))?null:p);
var m__5163__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5163__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5162__auto__ = (((p == null))?null:p);
var m__5163__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,p,v,ch);
} else {
var m__5163__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args12447 = [];
var len__5565__auto___12450 = arguments.length;
var i__5566__auto___12451 = (0);
while(true){
if((i__5566__auto___12451 < len__5565__auto___12450)){
args12447.push((arguments[i__5566__auto___12451]));

var G__12452 = (i__5566__auto___12451 + (1));
i__5566__auto___12451 = G__12452;
continue;
} else {
}
break;
}

var G__12449 = args12447.length;
switch (G__12449) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12447.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5162__auto__ = (((p == null))?null:p);
var m__5163__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,p);
} else {
var m__5163__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5162__auto__ = (((p == null))?null:p);
var m__5163__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,p,v);
} else {
var m__5163__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args12455 = [];
var len__5565__auto___12580 = arguments.length;
var i__5566__auto___12581 = (0);
while(true){
if((i__5566__auto___12581 < len__5565__auto___12580)){
args12455.push((arguments[i__5566__auto___12581]));

var G__12582 = (i__5566__auto___12581 + (1));
i__5566__auto___12581 = G__12582;
continue;
} else {
}
break;
}

var G__12457 = args12455.length;
switch (G__12457) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12455.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4526__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4526__auto__,mults){
return (function (p1__12454_SHARP_){
if(cljs.core.truth_(p1__12454_SHARP_.call(null,topic))){
return p1__12454_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12454_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4526__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12458 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12458 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12459){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12459 = meta12459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12460,meta12459__$1){
var self__ = this;
var _12460__$1 = this;
return (new cljs.core.async.t12458(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12459__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12460){
var self__ = this;
var _12460__$1 = this;
return self__.meta12459;
});})(mults,ensure_mult))
;

cljs.core.async.t12458.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12458.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12458.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12458.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t12458.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12458.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12458.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12459","meta12459",-2141144617,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t12458.cljs$lang$type = true;

cljs.core.async.t12458.cljs$lang$ctorStr = "cljs.core.async/t12458";

cljs.core.async.t12458.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t12458");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12458 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t12458(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12459){
return (new cljs.core.async.t12458(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12459));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12458(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8014__auto___12584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___12584,mults,ensure_mult,p){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___12584,mults,ensure_mult,p){
return (function (state_12532){
var state_val_12533 = (state_12532[(1)]);
if((state_val_12533 === (7))){
var inst_12528 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12534_12585 = state_12532__$1;
(statearr_12534_12585[(2)] = inst_12528);

(statearr_12534_12585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (20))){
var state_12532__$1 = state_12532;
var statearr_12535_12586 = state_12532__$1;
(statearr_12535_12586[(2)] = null);

(statearr_12535_12586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (1))){
var state_12532__$1 = state_12532;
var statearr_12536_12587 = state_12532__$1;
(statearr_12536_12587[(2)] = null);

(statearr_12536_12587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (24))){
var inst_12511 = (state_12532[(7)]);
var inst_12520 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12511);
var state_12532__$1 = state_12532;
var statearr_12537_12588 = state_12532__$1;
(statearr_12537_12588[(2)] = inst_12520);

(statearr_12537_12588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (4))){
var inst_12463 = (state_12532[(8)]);
var inst_12463__$1 = (state_12532[(2)]);
var inst_12464 = (inst_12463__$1 == null);
var state_12532__$1 = (function (){var statearr_12538 = state_12532;
(statearr_12538[(8)] = inst_12463__$1);

return statearr_12538;
})();
if(cljs.core.truth_(inst_12464)){
var statearr_12539_12589 = state_12532__$1;
(statearr_12539_12589[(1)] = (5));

} else {
var statearr_12540_12590 = state_12532__$1;
(statearr_12540_12590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (15))){
var inst_12505 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12541_12591 = state_12532__$1;
(statearr_12541_12591[(2)] = inst_12505);

(statearr_12541_12591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (21))){
var inst_12525 = (state_12532[(2)]);
var state_12532__$1 = (function (){var statearr_12542 = state_12532;
(statearr_12542[(9)] = inst_12525);

return statearr_12542;
})();
var statearr_12543_12592 = state_12532__$1;
(statearr_12543_12592[(2)] = null);

(statearr_12543_12592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (13))){
var inst_12487 = (state_12532[(10)]);
var inst_12489 = cljs.core.chunked_seq_QMARK_.call(null,inst_12487);
var state_12532__$1 = state_12532;
if(inst_12489){
var statearr_12544_12593 = state_12532__$1;
(statearr_12544_12593[(1)] = (16));

} else {
var statearr_12545_12594 = state_12532__$1;
(statearr_12545_12594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (22))){
var inst_12517 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
if(cljs.core.truth_(inst_12517)){
var statearr_12546_12595 = state_12532__$1;
(statearr_12546_12595[(1)] = (23));

} else {
var statearr_12547_12596 = state_12532__$1;
(statearr_12547_12596[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (6))){
var inst_12511 = (state_12532[(7)]);
var inst_12513 = (state_12532[(11)]);
var inst_12463 = (state_12532[(8)]);
var inst_12511__$1 = topic_fn.call(null,inst_12463);
var inst_12512 = cljs.core.deref.call(null,mults);
var inst_12513__$1 = cljs.core.get.call(null,inst_12512,inst_12511__$1);
var state_12532__$1 = (function (){var statearr_12548 = state_12532;
(statearr_12548[(7)] = inst_12511__$1);

(statearr_12548[(11)] = inst_12513__$1);

return statearr_12548;
})();
if(cljs.core.truth_(inst_12513__$1)){
var statearr_12549_12597 = state_12532__$1;
(statearr_12549_12597[(1)] = (19));

} else {
var statearr_12550_12598 = state_12532__$1;
(statearr_12550_12598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (25))){
var inst_12522 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12551_12599 = state_12532__$1;
(statearr_12551_12599[(2)] = inst_12522);

(statearr_12551_12599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (17))){
var inst_12487 = (state_12532[(10)]);
var inst_12496 = cljs.core.first.call(null,inst_12487);
var inst_12497 = cljs.core.async.muxch_STAR_.call(null,inst_12496);
var inst_12498 = cljs.core.async.close_BANG_.call(null,inst_12497);
var inst_12499 = cljs.core.next.call(null,inst_12487);
var inst_12473 = inst_12499;
var inst_12474 = null;
var inst_12475 = (0);
var inst_12476 = (0);
var state_12532__$1 = (function (){var statearr_12552 = state_12532;
(statearr_12552[(12)] = inst_12475);

(statearr_12552[(13)] = inst_12474);

(statearr_12552[(14)] = inst_12473);

(statearr_12552[(15)] = inst_12476);

(statearr_12552[(16)] = inst_12498);

return statearr_12552;
})();
var statearr_12553_12600 = state_12532__$1;
(statearr_12553_12600[(2)] = null);

(statearr_12553_12600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (3))){
var inst_12530 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12532__$1,inst_12530);
} else {
if((state_val_12533 === (12))){
var inst_12507 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12554_12601 = state_12532__$1;
(statearr_12554_12601[(2)] = inst_12507);

(statearr_12554_12601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (2))){
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12532__$1,(4),ch);
} else {
if((state_val_12533 === (23))){
var state_12532__$1 = state_12532;
var statearr_12555_12602 = state_12532__$1;
(statearr_12555_12602[(2)] = null);

(statearr_12555_12602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (19))){
var inst_12513 = (state_12532[(11)]);
var inst_12463 = (state_12532[(8)]);
var inst_12515 = cljs.core.async.muxch_STAR_.call(null,inst_12513);
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12532__$1,(22),inst_12515,inst_12463);
} else {
if((state_val_12533 === (11))){
var inst_12487 = (state_12532[(10)]);
var inst_12473 = (state_12532[(14)]);
var inst_12487__$1 = cljs.core.seq.call(null,inst_12473);
var state_12532__$1 = (function (){var statearr_12556 = state_12532;
(statearr_12556[(10)] = inst_12487__$1);

return statearr_12556;
})();
if(inst_12487__$1){
var statearr_12557_12603 = state_12532__$1;
(statearr_12557_12603[(1)] = (13));

} else {
var statearr_12558_12604 = state_12532__$1;
(statearr_12558_12604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (9))){
var inst_12509 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12559_12605 = state_12532__$1;
(statearr_12559_12605[(2)] = inst_12509);

(statearr_12559_12605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (5))){
var inst_12470 = cljs.core.deref.call(null,mults);
var inst_12471 = cljs.core.vals.call(null,inst_12470);
var inst_12472 = cljs.core.seq.call(null,inst_12471);
var inst_12473 = inst_12472;
var inst_12474 = null;
var inst_12475 = (0);
var inst_12476 = (0);
var state_12532__$1 = (function (){var statearr_12560 = state_12532;
(statearr_12560[(12)] = inst_12475);

(statearr_12560[(13)] = inst_12474);

(statearr_12560[(14)] = inst_12473);

(statearr_12560[(15)] = inst_12476);

return statearr_12560;
})();
var statearr_12561_12606 = state_12532__$1;
(statearr_12561_12606[(2)] = null);

(statearr_12561_12606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (14))){
var state_12532__$1 = state_12532;
var statearr_12565_12607 = state_12532__$1;
(statearr_12565_12607[(2)] = null);

(statearr_12565_12607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (16))){
var inst_12487 = (state_12532[(10)]);
var inst_12491 = cljs.core.chunk_first.call(null,inst_12487);
var inst_12492 = cljs.core.chunk_rest.call(null,inst_12487);
var inst_12493 = cljs.core.count.call(null,inst_12491);
var inst_12473 = inst_12492;
var inst_12474 = inst_12491;
var inst_12475 = inst_12493;
var inst_12476 = (0);
var state_12532__$1 = (function (){var statearr_12566 = state_12532;
(statearr_12566[(12)] = inst_12475);

(statearr_12566[(13)] = inst_12474);

(statearr_12566[(14)] = inst_12473);

(statearr_12566[(15)] = inst_12476);

return statearr_12566;
})();
var statearr_12567_12608 = state_12532__$1;
(statearr_12567_12608[(2)] = null);

(statearr_12567_12608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (10))){
var inst_12475 = (state_12532[(12)]);
var inst_12474 = (state_12532[(13)]);
var inst_12473 = (state_12532[(14)]);
var inst_12476 = (state_12532[(15)]);
var inst_12481 = cljs.core._nth.call(null,inst_12474,inst_12476);
var inst_12482 = cljs.core.async.muxch_STAR_.call(null,inst_12481);
var inst_12483 = cljs.core.async.close_BANG_.call(null,inst_12482);
var inst_12484 = (inst_12476 + (1));
var tmp12562 = inst_12475;
var tmp12563 = inst_12474;
var tmp12564 = inst_12473;
var inst_12473__$1 = tmp12564;
var inst_12474__$1 = tmp12563;
var inst_12475__$1 = tmp12562;
var inst_12476__$1 = inst_12484;
var state_12532__$1 = (function (){var statearr_12568 = state_12532;
(statearr_12568[(12)] = inst_12475__$1);

(statearr_12568[(13)] = inst_12474__$1);

(statearr_12568[(14)] = inst_12473__$1);

(statearr_12568[(15)] = inst_12476__$1);

(statearr_12568[(17)] = inst_12483);

return statearr_12568;
})();
var statearr_12569_12609 = state_12532__$1;
(statearr_12569_12609[(2)] = null);

(statearr_12569_12609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (18))){
var inst_12502 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12570_12610 = state_12532__$1;
(statearr_12570_12610[(2)] = inst_12502);

(statearr_12570_12610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (8))){
var inst_12475 = (state_12532[(12)]);
var inst_12476 = (state_12532[(15)]);
var inst_12478 = (inst_12476 < inst_12475);
var inst_12479 = inst_12478;
var state_12532__$1 = state_12532;
if(cljs.core.truth_(inst_12479)){
var statearr_12571_12611 = state_12532__$1;
(statearr_12571_12611[(1)] = (10));

} else {
var statearr_12572_12612 = state_12532__$1;
(statearr_12572_12612[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___12584,mults,ensure_mult,p))
;
return ((function (switch__7949__auto__,c__8014__auto___12584,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_12576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12576[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_12576[(1)] = (1));

return statearr_12576;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_12532){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_12532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e12577){if((e12577 instanceof Object)){
var ex__7953__auto__ = e12577;
var statearr_12578_12613 = state_12532;
(statearr_12578_12613[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12614 = state_12532;
state_12532 = G__12614;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_12532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_12532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___12584,mults,ensure_mult,p))
})();
var state__8016__auto__ = (function (){var statearr_12579 = f__8015__auto__.call(null);
(statearr_12579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___12584);

return statearr_12579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___12584,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args12615 = [];
var len__5565__auto___12618 = arguments.length;
var i__5566__auto___12619 = (0);
while(true){
if((i__5566__auto___12619 < len__5565__auto___12618)){
args12615.push((arguments[i__5566__auto___12619]));

var G__12620 = (i__5566__auto___12619 + (1));
i__5566__auto___12619 = G__12620;
continue;
} else {
}
break;
}

var G__12617 = args12615.length;
switch (G__12617) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12615.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args12622 = [];
var len__5565__auto___12625 = arguments.length;
var i__5566__auto___12626 = (0);
while(true){
if((i__5566__auto___12626 < len__5565__auto___12625)){
args12622.push((arguments[i__5566__auto___12626]));

var G__12627 = (i__5566__auto___12626 + (1));
i__5566__auto___12626 = G__12627;
continue;
} else {
}
break;
}

var G__12624 = args12622.length;
switch (G__12624) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12622.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args12629 = [];
var len__5565__auto___12700 = arguments.length;
var i__5566__auto___12701 = (0);
while(true){
if((i__5566__auto___12701 < len__5565__auto___12700)){
args12629.push((arguments[i__5566__auto___12701]));

var G__12702 = (i__5566__auto___12701 + (1));
i__5566__auto___12701 = G__12702;
continue;
} else {
}
break;
}

var G__12631 = args12629.length;
switch (G__12631) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12629.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8014__auto___12704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12670){
var state_val_12671 = (state_12670[(1)]);
if((state_val_12671 === (7))){
var state_12670__$1 = state_12670;
var statearr_12672_12705 = state_12670__$1;
(statearr_12672_12705[(2)] = null);

(statearr_12672_12705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (1))){
var state_12670__$1 = state_12670;
var statearr_12673_12706 = state_12670__$1;
(statearr_12673_12706[(2)] = null);

(statearr_12673_12706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (4))){
var inst_12634 = (state_12670[(7)]);
var inst_12636 = (inst_12634 < cnt);
var state_12670__$1 = state_12670;
if(cljs.core.truth_(inst_12636)){
var statearr_12674_12707 = state_12670__$1;
(statearr_12674_12707[(1)] = (6));

} else {
var statearr_12675_12708 = state_12670__$1;
(statearr_12675_12708[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (15))){
var inst_12666 = (state_12670[(2)]);
var state_12670__$1 = state_12670;
var statearr_12676_12709 = state_12670__$1;
(statearr_12676_12709[(2)] = inst_12666);

(statearr_12676_12709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (13))){
var inst_12659 = cljs.core.async.close_BANG_.call(null,out);
var state_12670__$1 = state_12670;
var statearr_12677_12710 = state_12670__$1;
(statearr_12677_12710[(2)] = inst_12659);

(statearr_12677_12710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (6))){
var state_12670__$1 = state_12670;
var statearr_12678_12711 = state_12670__$1;
(statearr_12678_12711[(2)] = null);

(statearr_12678_12711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (3))){
var inst_12668 = (state_12670[(2)]);
var state_12670__$1 = state_12670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12670__$1,inst_12668);
} else {
if((state_val_12671 === (12))){
var inst_12656 = (state_12670[(8)]);
var inst_12656__$1 = (state_12670[(2)]);
var inst_12657 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12656__$1);
var state_12670__$1 = (function (){var statearr_12679 = state_12670;
(statearr_12679[(8)] = inst_12656__$1);

return statearr_12679;
})();
if(cljs.core.truth_(inst_12657)){
var statearr_12680_12712 = state_12670__$1;
(statearr_12680_12712[(1)] = (13));

} else {
var statearr_12681_12713 = state_12670__$1;
(statearr_12681_12713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (2))){
var inst_12633 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12634 = (0);
var state_12670__$1 = (function (){var statearr_12682 = state_12670;
(statearr_12682[(9)] = inst_12633);

(statearr_12682[(7)] = inst_12634);

return statearr_12682;
})();
var statearr_12683_12714 = state_12670__$1;
(statearr_12683_12714[(2)] = null);

(statearr_12683_12714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (11))){
var inst_12634 = (state_12670[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12670,(10),Object,null,(9));
var inst_12643 = chs__$1.call(null,inst_12634);
var inst_12644 = done.call(null,inst_12634);
var inst_12645 = cljs.core.async.take_BANG_.call(null,inst_12643,inst_12644);
var state_12670__$1 = state_12670;
var statearr_12684_12715 = state_12670__$1;
(statearr_12684_12715[(2)] = inst_12645);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12670__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (9))){
var inst_12634 = (state_12670[(7)]);
var inst_12647 = (state_12670[(2)]);
var inst_12648 = (inst_12634 + (1));
var inst_12634__$1 = inst_12648;
var state_12670__$1 = (function (){var statearr_12685 = state_12670;
(statearr_12685[(7)] = inst_12634__$1);

(statearr_12685[(10)] = inst_12647);

return statearr_12685;
})();
var statearr_12686_12716 = state_12670__$1;
(statearr_12686_12716[(2)] = null);

(statearr_12686_12716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (5))){
var inst_12654 = (state_12670[(2)]);
var state_12670__$1 = (function (){var statearr_12687 = state_12670;
(statearr_12687[(11)] = inst_12654);

return statearr_12687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12670__$1,(12),dchan);
} else {
if((state_val_12671 === (14))){
var inst_12656 = (state_12670[(8)]);
var inst_12661 = cljs.core.apply.call(null,f,inst_12656);
var state_12670__$1 = state_12670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12670__$1,(16),out,inst_12661);
} else {
if((state_val_12671 === (16))){
var inst_12663 = (state_12670[(2)]);
var state_12670__$1 = (function (){var statearr_12688 = state_12670;
(statearr_12688[(12)] = inst_12663);

return statearr_12688;
})();
var statearr_12689_12717 = state_12670__$1;
(statearr_12689_12717[(2)] = null);

(statearr_12689_12717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (10))){
var inst_12638 = (state_12670[(2)]);
var inst_12639 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12670__$1 = (function (){var statearr_12690 = state_12670;
(statearr_12690[(13)] = inst_12638);

return statearr_12690;
})();
var statearr_12691_12718 = state_12670__$1;
(statearr_12691_12718[(2)] = inst_12639);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12670__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12671 === (8))){
var inst_12652 = (state_12670[(2)]);
var state_12670__$1 = state_12670;
var statearr_12692_12719 = state_12670__$1;
(statearr_12692_12719[(2)] = inst_12652);

(statearr_12692_12719[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7949__auto__,c__8014__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_12696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12696[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_12696[(1)] = (1));

return statearr_12696;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_12670){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_12670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e12697){if((e12697 instanceof Object)){
var ex__7953__auto__ = e12697;
var statearr_12698_12720 = state_12670;
(statearr_12698_12720[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12721 = state_12670;
state_12670 = G__12721;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_12670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_12670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8016__auto__ = (function (){var statearr_12699 = f__8015__auto__.call(null);
(statearr_12699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___12704);

return statearr_12699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args12723 = [];
var len__5565__auto___12779 = arguments.length;
var i__5566__auto___12780 = (0);
while(true){
if((i__5566__auto___12780 < len__5565__auto___12779)){
args12723.push((arguments[i__5566__auto___12780]));

var G__12781 = (i__5566__auto___12780 + (1));
i__5566__auto___12780 = G__12781;
continue;
} else {
}
break;
}

var G__12725 = args12723.length;
switch (G__12725) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12723.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8014__auto___12783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___12783,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___12783,out){
return (function (state_12755){
var state_val_12756 = (state_12755[(1)]);
if((state_val_12756 === (7))){
var inst_12735 = (state_12755[(7)]);
var inst_12734 = (state_12755[(8)]);
var inst_12734__$1 = (state_12755[(2)]);
var inst_12735__$1 = cljs.core.nth.call(null,inst_12734__$1,(0),null);
var inst_12736 = cljs.core.nth.call(null,inst_12734__$1,(1),null);
var inst_12737 = (inst_12735__$1 == null);
var state_12755__$1 = (function (){var statearr_12757 = state_12755;
(statearr_12757[(7)] = inst_12735__$1);

(statearr_12757[(9)] = inst_12736);

(statearr_12757[(8)] = inst_12734__$1);

return statearr_12757;
})();
if(cljs.core.truth_(inst_12737)){
var statearr_12758_12784 = state_12755__$1;
(statearr_12758_12784[(1)] = (8));

} else {
var statearr_12759_12785 = state_12755__$1;
(statearr_12759_12785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (1))){
var inst_12726 = cljs.core.vec.call(null,chs);
var inst_12727 = inst_12726;
var state_12755__$1 = (function (){var statearr_12760 = state_12755;
(statearr_12760[(10)] = inst_12727);

return statearr_12760;
})();
var statearr_12761_12786 = state_12755__$1;
(statearr_12761_12786[(2)] = null);

(statearr_12761_12786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (4))){
var inst_12727 = (state_12755[(10)]);
var state_12755__$1 = state_12755;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12755__$1,(7),inst_12727);
} else {
if((state_val_12756 === (6))){
var inst_12751 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12762_12787 = state_12755__$1;
(statearr_12762_12787[(2)] = inst_12751);

(statearr_12762_12787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (3))){
var inst_12753 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12755__$1,inst_12753);
} else {
if((state_val_12756 === (2))){
var inst_12727 = (state_12755[(10)]);
var inst_12729 = cljs.core.count.call(null,inst_12727);
var inst_12730 = (inst_12729 > (0));
var state_12755__$1 = state_12755;
if(cljs.core.truth_(inst_12730)){
var statearr_12764_12788 = state_12755__$1;
(statearr_12764_12788[(1)] = (4));

} else {
var statearr_12765_12789 = state_12755__$1;
(statearr_12765_12789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (11))){
var inst_12727 = (state_12755[(10)]);
var inst_12744 = (state_12755[(2)]);
var tmp12763 = inst_12727;
var inst_12727__$1 = tmp12763;
var state_12755__$1 = (function (){var statearr_12766 = state_12755;
(statearr_12766[(10)] = inst_12727__$1);

(statearr_12766[(11)] = inst_12744);

return statearr_12766;
})();
var statearr_12767_12790 = state_12755__$1;
(statearr_12767_12790[(2)] = null);

(statearr_12767_12790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (9))){
var inst_12735 = (state_12755[(7)]);
var state_12755__$1 = state_12755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12755__$1,(11),out,inst_12735);
} else {
if((state_val_12756 === (5))){
var inst_12749 = cljs.core.async.close_BANG_.call(null,out);
var state_12755__$1 = state_12755;
var statearr_12768_12791 = state_12755__$1;
(statearr_12768_12791[(2)] = inst_12749);

(statearr_12768_12791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (10))){
var inst_12747 = (state_12755[(2)]);
var state_12755__$1 = state_12755;
var statearr_12769_12792 = state_12755__$1;
(statearr_12769_12792[(2)] = inst_12747);

(statearr_12769_12792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12756 === (8))){
var inst_12735 = (state_12755[(7)]);
var inst_12736 = (state_12755[(9)]);
var inst_12734 = (state_12755[(8)]);
var inst_12727 = (state_12755[(10)]);
var inst_12739 = (function (){var cs = inst_12727;
var vec__12732 = inst_12734;
var v = inst_12735;
var c = inst_12736;
return ((function (cs,vec__12732,v,c,inst_12735,inst_12736,inst_12734,inst_12727,state_val_12756,c__8014__auto___12783,out){
return (function (p1__12722_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12722_SHARP_);
});
;})(cs,vec__12732,v,c,inst_12735,inst_12736,inst_12734,inst_12727,state_val_12756,c__8014__auto___12783,out))
})();
var inst_12740 = cljs.core.filterv.call(null,inst_12739,inst_12727);
var inst_12727__$1 = inst_12740;
var state_12755__$1 = (function (){var statearr_12770 = state_12755;
(statearr_12770[(10)] = inst_12727__$1);

return statearr_12770;
})();
var statearr_12771_12793 = state_12755__$1;
(statearr_12771_12793[(2)] = null);

(statearr_12771_12793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___12783,out))
;
return ((function (switch__7949__auto__,c__8014__auto___12783,out){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_12775 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12775[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_12775[(1)] = (1));

return statearr_12775;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_12755){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_12755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e12776){if((e12776 instanceof Object)){
var ex__7953__auto__ = e12776;
var statearr_12777_12794 = state_12755;
(statearr_12777_12794[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12795 = state_12755;
state_12755 = G__12795;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_12755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_12755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___12783,out))
})();
var state__8016__auto__ = (function (){var statearr_12778 = f__8015__auto__.call(null);
(statearr_12778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___12783);

return statearr_12778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___12783,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args12796 = [];
var len__5565__auto___12845 = arguments.length;
var i__5566__auto___12846 = (0);
while(true){
if((i__5566__auto___12846 < len__5565__auto___12845)){
args12796.push((arguments[i__5566__auto___12846]));

var G__12847 = (i__5566__auto___12846 + (1));
i__5566__auto___12846 = G__12847;
continue;
} else {
}
break;
}

var G__12798 = args12796.length;
switch (G__12798) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12796.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8014__auto___12849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___12849,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___12849,out){
return (function (state_12822){
var state_val_12823 = (state_12822[(1)]);
if((state_val_12823 === (7))){
var inst_12804 = (state_12822[(7)]);
var inst_12804__$1 = (state_12822[(2)]);
var inst_12805 = (inst_12804__$1 == null);
var inst_12806 = cljs.core.not.call(null,inst_12805);
var state_12822__$1 = (function (){var statearr_12824 = state_12822;
(statearr_12824[(7)] = inst_12804__$1);

return statearr_12824;
})();
if(inst_12806){
var statearr_12825_12850 = state_12822__$1;
(statearr_12825_12850[(1)] = (8));

} else {
var statearr_12826_12851 = state_12822__$1;
(statearr_12826_12851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (1))){
var inst_12799 = (0);
var state_12822__$1 = (function (){var statearr_12827 = state_12822;
(statearr_12827[(8)] = inst_12799);

return statearr_12827;
})();
var statearr_12828_12852 = state_12822__$1;
(statearr_12828_12852[(2)] = null);

(statearr_12828_12852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (4))){
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12822__$1,(7),ch);
} else {
if((state_val_12823 === (6))){
var inst_12817 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12829_12853 = state_12822__$1;
(statearr_12829_12853[(2)] = inst_12817);

(statearr_12829_12853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (3))){
var inst_12819 = (state_12822[(2)]);
var inst_12820 = cljs.core.async.close_BANG_.call(null,out);
var state_12822__$1 = (function (){var statearr_12830 = state_12822;
(statearr_12830[(9)] = inst_12819);

return statearr_12830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12822__$1,inst_12820);
} else {
if((state_val_12823 === (2))){
var inst_12799 = (state_12822[(8)]);
var inst_12801 = (inst_12799 < n);
var state_12822__$1 = state_12822;
if(cljs.core.truth_(inst_12801)){
var statearr_12831_12854 = state_12822__$1;
(statearr_12831_12854[(1)] = (4));

} else {
var statearr_12832_12855 = state_12822__$1;
(statearr_12832_12855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (11))){
var inst_12799 = (state_12822[(8)]);
var inst_12809 = (state_12822[(2)]);
var inst_12810 = (inst_12799 + (1));
var inst_12799__$1 = inst_12810;
var state_12822__$1 = (function (){var statearr_12833 = state_12822;
(statearr_12833[(8)] = inst_12799__$1);

(statearr_12833[(10)] = inst_12809);

return statearr_12833;
})();
var statearr_12834_12856 = state_12822__$1;
(statearr_12834_12856[(2)] = null);

(statearr_12834_12856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (9))){
var state_12822__$1 = state_12822;
var statearr_12835_12857 = state_12822__$1;
(statearr_12835_12857[(2)] = null);

(statearr_12835_12857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (5))){
var state_12822__$1 = state_12822;
var statearr_12836_12858 = state_12822__$1;
(statearr_12836_12858[(2)] = null);

(statearr_12836_12858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (10))){
var inst_12814 = (state_12822[(2)]);
var state_12822__$1 = state_12822;
var statearr_12837_12859 = state_12822__$1;
(statearr_12837_12859[(2)] = inst_12814);

(statearr_12837_12859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12823 === (8))){
var inst_12804 = (state_12822[(7)]);
var state_12822__$1 = state_12822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12822__$1,(11),out,inst_12804);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___12849,out))
;
return ((function (switch__7949__auto__,c__8014__auto___12849,out){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_12841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12841[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_12841[(1)] = (1));

return statearr_12841;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_12822){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_12822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e12842){if((e12842 instanceof Object)){
var ex__7953__auto__ = e12842;
var statearr_12843_12860 = state_12822;
(statearr_12843_12860[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12861 = state_12822;
state_12822 = G__12861;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_12822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_12822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___12849,out))
})();
var state__8016__auto__ = (function (){var statearr_12844 = f__8015__auto__.call(null);
(statearr_12844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___12849);

return statearr_12844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___12849,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t12869 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12869 = (function (map_LT_,f,ch,meta12870){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12870 = meta12870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12871,meta12870__$1){
var self__ = this;
var _12871__$1 = this;
return (new cljs.core.async.t12869(self__.map_LT_,self__.f,self__.ch,meta12870__$1));
});

cljs.core.async.t12869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12871){
var self__ = this;
var _12871__$1 = this;
return self__.meta12870;
});

cljs.core.async.t12869.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12869.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12869.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12869.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12869.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t12872 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12872 = (function (map_LT_,f,ch,meta12870,_,fn1,meta12873){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12870 = meta12870;
this._ = _;
this.fn1 = fn1;
this.meta12873 = meta12873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12874,meta12873__$1){
var self__ = this;
var _12874__$1 = this;
return (new cljs.core.async.t12872(self__.map_LT_,self__.f,self__.ch,self__.meta12870,self__._,self__.fn1,meta12873__$1));
});})(___$1))
;

cljs.core.async.t12872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12874){
var self__ = this;
var _12874__$1 = this;
return self__.meta12873;
});})(___$1))
;

cljs.core.async.t12872.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t12872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12862_SHARP_){
return f1.call(null,(((p1__12862_SHARP_ == null))?null:self__.f.call(null,p1__12862_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t12872.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12870","meta12870",220202806,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t12869","cljs.core.async/t12869",-1532024740,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12873","meta12873",-462451747,null)], null);
});})(___$1))
;

cljs.core.async.t12872.cljs$lang$type = true;

cljs.core.async.t12872.cljs$lang$ctorStr = "cljs.core.async/t12872";

cljs.core.async.t12872.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t12872");
});})(___$1))
;

cljs.core.async.__GT_t12872 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t12872(map_LT___$1,f__$1,ch__$1,meta12870__$1,___$2,fn1__$1,meta12873){
return (new cljs.core.async.t12872(map_LT___$1,f__$1,ch__$1,meta12870__$1,___$2,fn1__$1,meta12873));
});})(___$1))
;

}

return (new cljs.core.async.t12872(self__.map_LT_,self__.f,self__.ch,self__.meta12870,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4514__auto__ = ret;
if(cljs.core.truth_(and__4514__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4514__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t12869.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12869.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t12869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12870","meta12870",220202806,null)], null);
});

cljs.core.async.t12869.cljs$lang$type = true;

cljs.core.async.t12869.cljs$lang$ctorStr = "cljs.core.async/t12869";

cljs.core.async.t12869.cljs$lang$ctorPrWriter = (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t12869");
});

cljs.core.async.__GT_t12869 = (function cljs$core$async$map_LT__$___GT_t12869(map_LT___$1,f__$1,ch__$1,meta12870){
return (new cljs.core.async.t12869(map_LT___$1,f__$1,ch__$1,meta12870));
});

}

return (new cljs.core.async.t12869(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t12878 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12878 = (function (map_GT_,f,ch,meta12879){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12879 = meta12879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12880,meta12879__$1){
var self__ = this;
var _12880__$1 = this;
return (new cljs.core.async.t12878(self__.map_GT_,self__.f,self__.ch,meta12879__$1));
});

cljs.core.async.t12878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12880){
var self__ = this;
var _12880__$1 = this;
return self__.meta12879;
});

cljs.core.async.t12878.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12878.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12878.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t12878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12879","meta12879",94962899,null)], null);
});

cljs.core.async.t12878.cljs$lang$type = true;

cljs.core.async.t12878.cljs$lang$ctorStr = "cljs.core.async/t12878";

cljs.core.async.t12878.cljs$lang$ctorPrWriter = (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t12878");
});

cljs.core.async.__GT_t12878 = (function cljs$core$async$map_GT__$___GT_t12878(map_GT___$1,f__$1,ch__$1,meta12879){
return (new cljs.core.async.t12878(map_GT___$1,f__$1,ch__$1,meta12879));
});

}

return (new cljs.core.async.t12878(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t12884 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12884 = (function (filter_GT_,p,ch,meta12885){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12885 = meta12885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12886,meta12885__$1){
var self__ = this;
var _12886__$1 = this;
return (new cljs.core.async.t12884(self__.filter_GT_,self__.p,self__.ch,meta12885__$1));
});

cljs.core.async.t12884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12886){
var self__ = this;
var _12886__$1 = this;
return self__.meta12885;
});

cljs.core.async.t12884.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12884.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12884.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12884.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12884.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12884.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12884.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t12884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12885","meta12885",-1270374521,null)], null);
});

cljs.core.async.t12884.cljs$lang$type = true;

cljs.core.async.t12884.cljs$lang$ctorStr = "cljs.core.async/t12884";

cljs.core.async.t12884.cljs$lang$ctorPrWriter = (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"cljs.core.async/t12884");
});

cljs.core.async.__GT_t12884 = (function cljs$core$async$filter_GT__$___GT_t12884(filter_GT___$1,p__$1,ch__$1,meta12885){
return (new cljs.core.async.t12884(filter_GT___$1,p__$1,ch__$1,meta12885));
});

}

return (new cljs.core.async.t12884(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args12887 = [];
var len__5565__auto___12931 = arguments.length;
var i__5566__auto___12932 = (0);
while(true){
if((i__5566__auto___12932 < len__5565__auto___12931)){
args12887.push((arguments[i__5566__auto___12932]));

var G__12933 = (i__5566__auto___12932 + (1));
i__5566__auto___12932 = G__12933;
continue;
} else {
}
break;
}

var G__12889 = args12887.length;
switch (G__12889) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12887.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8014__auto___12935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___12935,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___12935,out){
return (function (state_12910){
var state_val_12911 = (state_12910[(1)]);
if((state_val_12911 === (7))){
var inst_12906 = (state_12910[(2)]);
var state_12910__$1 = state_12910;
var statearr_12912_12936 = state_12910__$1;
(statearr_12912_12936[(2)] = inst_12906);

(statearr_12912_12936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (1))){
var state_12910__$1 = state_12910;
var statearr_12913_12937 = state_12910__$1;
(statearr_12913_12937[(2)] = null);

(statearr_12913_12937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (4))){
var inst_12892 = (state_12910[(7)]);
var inst_12892__$1 = (state_12910[(2)]);
var inst_12893 = (inst_12892__$1 == null);
var state_12910__$1 = (function (){var statearr_12914 = state_12910;
(statearr_12914[(7)] = inst_12892__$1);

return statearr_12914;
})();
if(cljs.core.truth_(inst_12893)){
var statearr_12915_12938 = state_12910__$1;
(statearr_12915_12938[(1)] = (5));

} else {
var statearr_12916_12939 = state_12910__$1;
(statearr_12916_12939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (6))){
var inst_12892 = (state_12910[(7)]);
var inst_12897 = p.call(null,inst_12892);
var state_12910__$1 = state_12910;
if(cljs.core.truth_(inst_12897)){
var statearr_12917_12940 = state_12910__$1;
(statearr_12917_12940[(1)] = (8));

} else {
var statearr_12918_12941 = state_12910__$1;
(statearr_12918_12941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (3))){
var inst_12908 = (state_12910[(2)]);
var state_12910__$1 = state_12910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12910__$1,inst_12908);
} else {
if((state_val_12911 === (2))){
var state_12910__$1 = state_12910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12910__$1,(4),ch);
} else {
if((state_val_12911 === (11))){
var inst_12900 = (state_12910[(2)]);
var state_12910__$1 = state_12910;
var statearr_12919_12942 = state_12910__$1;
(statearr_12919_12942[(2)] = inst_12900);

(statearr_12919_12942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (9))){
var state_12910__$1 = state_12910;
var statearr_12920_12943 = state_12910__$1;
(statearr_12920_12943[(2)] = null);

(statearr_12920_12943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (5))){
var inst_12895 = cljs.core.async.close_BANG_.call(null,out);
var state_12910__$1 = state_12910;
var statearr_12921_12944 = state_12910__$1;
(statearr_12921_12944[(2)] = inst_12895);

(statearr_12921_12944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (10))){
var inst_12903 = (state_12910[(2)]);
var state_12910__$1 = (function (){var statearr_12922 = state_12910;
(statearr_12922[(8)] = inst_12903);

return statearr_12922;
})();
var statearr_12923_12945 = state_12910__$1;
(statearr_12923_12945[(2)] = null);

(statearr_12923_12945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12911 === (8))){
var inst_12892 = (state_12910[(7)]);
var state_12910__$1 = state_12910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12910__$1,(11),out,inst_12892);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___12935,out))
;
return ((function (switch__7949__auto__,c__8014__auto___12935,out){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_12927 = [null,null,null,null,null,null,null,null,null];
(statearr_12927[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_12927[(1)] = (1));

return statearr_12927;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_12910){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_12910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e12928){if((e12928 instanceof Object)){
var ex__7953__auto__ = e12928;
var statearr_12929_12946 = state_12910;
(statearr_12929_12946[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12947 = state_12910;
state_12910 = G__12947;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_12910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_12910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___12935,out))
})();
var state__8016__auto__ = (function (){var statearr_12930 = f__8015__auto__.call(null);
(statearr_12930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___12935);

return statearr_12930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___12935,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args12948 = [];
var len__5565__auto___12951 = arguments.length;
var i__5566__auto___12952 = (0);
while(true){
if((i__5566__auto___12952 < len__5565__auto___12951)){
args12948.push((arguments[i__5566__auto___12952]));

var G__12953 = (i__5566__auto___12952 + (1));
i__5566__auto___12952 = G__12953;
continue;
} else {
}
break;
}

var G__12950 = args12948.length;
switch (G__12950) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12948.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__){
return (function (state_13120){
var state_val_13121 = (state_13120[(1)]);
if((state_val_13121 === (7))){
var inst_13116 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
var statearr_13122_13163 = state_13120__$1;
(statearr_13122_13163[(2)] = inst_13116);

(statearr_13122_13163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (20))){
var inst_13086 = (state_13120[(7)]);
var inst_13097 = (state_13120[(2)]);
var inst_13098 = cljs.core.next.call(null,inst_13086);
var inst_13072 = inst_13098;
var inst_13073 = null;
var inst_13074 = (0);
var inst_13075 = (0);
var state_13120__$1 = (function (){var statearr_13123 = state_13120;
(statearr_13123[(8)] = inst_13097);

(statearr_13123[(9)] = inst_13075);

(statearr_13123[(10)] = inst_13074);

(statearr_13123[(11)] = inst_13073);

(statearr_13123[(12)] = inst_13072);

return statearr_13123;
})();
var statearr_13124_13164 = state_13120__$1;
(statearr_13124_13164[(2)] = null);

(statearr_13124_13164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (1))){
var state_13120__$1 = state_13120;
var statearr_13125_13165 = state_13120__$1;
(statearr_13125_13165[(2)] = null);

(statearr_13125_13165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (4))){
var inst_13061 = (state_13120[(13)]);
var inst_13061__$1 = (state_13120[(2)]);
var inst_13062 = (inst_13061__$1 == null);
var state_13120__$1 = (function (){var statearr_13126 = state_13120;
(statearr_13126[(13)] = inst_13061__$1);

return statearr_13126;
})();
if(cljs.core.truth_(inst_13062)){
var statearr_13127_13166 = state_13120__$1;
(statearr_13127_13166[(1)] = (5));

} else {
var statearr_13128_13167 = state_13120__$1;
(statearr_13128_13167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (15))){
var state_13120__$1 = state_13120;
var statearr_13132_13168 = state_13120__$1;
(statearr_13132_13168[(2)] = null);

(statearr_13132_13168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (21))){
var state_13120__$1 = state_13120;
var statearr_13133_13169 = state_13120__$1;
(statearr_13133_13169[(2)] = null);

(statearr_13133_13169[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (13))){
var inst_13075 = (state_13120[(9)]);
var inst_13074 = (state_13120[(10)]);
var inst_13073 = (state_13120[(11)]);
var inst_13072 = (state_13120[(12)]);
var inst_13082 = (state_13120[(2)]);
var inst_13083 = (inst_13075 + (1));
var tmp13129 = inst_13074;
var tmp13130 = inst_13073;
var tmp13131 = inst_13072;
var inst_13072__$1 = tmp13131;
var inst_13073__$1 = tmp13130;
var inst_13074__$1 = tmp13129;
var inst_13075__$1 = inst_13083;
var state_13120__$1 = (function (){var statearr_13134 = state_13120;
(statearr_13134[(14)] = inst_13082);

(statearr_13134[(9)] = inst_13075__$1);

(statearr_13134[(10)] = inst_13074__$1);

(statearr_13134[(11)] = inst_13073__$1);

(statearr_13134[(12)] = inst_13072__$1);

return statearr_13134;
})();
var statearr_13135_13170 = state_13120__$1;
(statearr_13135_13170[(2)] = null);

(statearr_13135_13170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (22))){
var state_13120__$1 = state_13120;
var statearr_13136_13171 = state_13120__$1;
(statearr_13136_13171[(2)] = null);

(statearr_13136_13171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (6))){
var inst_13061 = (state_13120[(13)]);
var inst_13070 = f.call(null,inst_13061);
var inst_13071 = cljs.core.seq.call(null,inst_13070);
var inst_13072 = inst_13071;
var inst_13073 = null;
var inst_13074 = (0);
var inst_13075 = (0);
var state_13120__$1 = (function (){var statearr_13137 = state_13120;
(statearr_13137[(9)] = inst_13075);

(statearr_13137[(10)] = inst_13074);

(statearr_13137[(11)] = inst_13073);

(statearr_13137[(12)] = inst_13072);

return statearr_13137;
})();
var statearr_13138_13172 = state_13120__$1;
(statearr_13138_13172[(2)] = null);

(statearr_13138_13172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (17))){
var inst_13086 = (state_13120[(7)]);
var inst_13090 = cljs.core.chunk_first.call(null,inst_13086);
var inst_13091 = cljs.core.chunk_rest.call(null,inst_13086);
var inst_13092 = cljs.core.count.call(null,inst_13090);
var inst_13072 = inst_13091;
var inst_13073 = inst_13090;
var inst_13074 = inst_13092;
var inst_13075 = (0);
var state_13120__$1 = (function (){var statearr_13139 = state_13120;
(statearr_13139[(9)] = inst_13075);

(statearr_13139[(10)] = inst_13074);

(statearr_13139[(11)] = inst_13073);

(statearr_13139[(12)] = inst_13072);

return statearr_13139;
})();
var statearr_13140_13173 = state_13120__$1;
(statearr_13140_13173[(2)] = null);

(statearr_13140_13173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (3))){
var inst_13118 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13120__$1,inst_13118);
} else {
if((state_val_13121 === (12))){
var inst_13106 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
var statearr_13141_13174 = state_13120__$1;
(statearr_13141_13174[(2)] = inst_13106);

(statearr_13141_13174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (2))){
var state_13120__$1 = state_13120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13120__$1,(4),in$);
} else {
if((state_val_13121 === (23))){
var inst_13114 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
var statearr_13142_13175 = state_13120__$1;
(statearr_13142_13175[(2)] = inst_13114);

(statearr_13142_13175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (19))){
var inst_13101 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
var statearr_13143_13176 = state_13120__$1;
(statearr_13143_13176[(2)] = inst_13101);

(statearr_13143_13176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (11))){
var inst_13086 = (state_13120[(7)]);
var inst_13072 = (state_13120[(12)]);
var inst_13086__$1 = cljs.core.seq.call(null,inst_13072);
var state_13120__$1 = (function (){var statearr_13144 = state_13120;
(statearr_13144[(7)] = inst_13086__$1);

return statearr_13144;
})();
if(inst_13086__$1){
var statearr_13145_13177 = state_13120__$1;
(statearr_13145_13177[(1)] = (14));

} else {
var statearr_13146_13178 = state_13120__$1;
(statearr_13146_13178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (9))){
var inst_13108 = (state_13120[(2)]);
var inst_13109 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13120__$1 = (function (){var statearr_13147 = state_13120;
(statearr_13147[(15)] = inst_13108);

return statearr_13147;
})();
if(cljs.core.truth_(inst_13109)){
var statearr_13148_13179 = state_13120__$1;
(statearr_13148_13179[(1)] = (21));

} else {
var statearr_13149_13180 = state_13120__$1;
(statearr_13149_13180[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (5))){
var inst_13064 = cljs.core.async.close_BANG_.call(null,out);
var state_13120__$1 = state_13120;
var statearr_13150_13181 = state_13120__$1;
(statearr_13150_13181[(2)] = inst_13064);

(statearr_13150_13181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (14))){
var inst_13086 = (state_13120[(7)]);
var inst_13088 = cljs.core.chunked_seq_QMARK_.call(null,inst_13086);
var state_13120__$1 = state_13120;
if(inst_13088){
var statearr_13151_13182 = state_13120__$1;
(statearr_13151_13182[(1)] = (17));

} else {
var statearr_13152_13183 = state_13120__$1;
(statearr_13152_13183[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (16))){
var inst_13104 = (state_13120[(2)]);
var state_13120__$1 = state_13120;
var statearr_13153_13184 = state_13120__$1;
(statearr_13153_13184[(2)] = inst_13104);

(statearr_13153_13184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13121 === (10))){
var inst_13075 = (state_13120[(9)]);
var inst_13073 = (state_13120[(11)]);
var inst_13080 = cljs.core._nth.call(null,inst_13073,inst_13075);
var state_13120__$1 = state_13120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13120__$1,(13),out,inst_13080);
} else {
if((state_val_13121 === (18))){
var inst_13086 = (state_13120[(7)]);
var inst_13095 = cljs.core.first.call(null,inst_13086);
var state_13120__$1 = state_13120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13120__$1,(20),out,inst_13095);
} else {
if((state_val_13121 === (8))){
var inst_13075 = (state_13120[(9)]);
var inst_13074 = (state_13120[(10)]);
var inst_13077 = (inst_13075 < inst_13074);
var inst_13078 = inst_13077;
var state_13120__$1 = state_13120;
if(cljs.core.truth_(inst_13078)){
var statearr_13154_13185 = state_13120__$1;
(statearr_13154_13185[(1)] = (10));

} else {
var statearr_13155_13186 = state_13120__$1;
(statearr_13155_13186[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto__))
;
return ((function (switch__7949__auto__,c__8014__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7950__auto____0 = (function (){
var statearr_13159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13159[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7950__auto__);

(statearr_13159[(1)] = (1));

return statearr_13159;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7950__auto____1 = (function (state_13120){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_13120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e13160){if((e13160 instanceof Object)){
var ex__7953__auto__ = e13160;
var statearr_13161_13187 = state_13120;
(statearr_13161_13187[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13188 = state_13120;
state_13120 = G__13188;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7950__auto__ = function(state_13120){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7950__auto____1.call(this,state_13120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__))
})();
var state__8016__auto__ = (function (){var statearr_13162 = f__8015__auto__.call(null);
(statearr_13162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_13162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__))
);

return c__8014__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args13189 = [];
var len__5565__auto___13192 = arguments.length;
var i__5566__auto___13193 = (0);
while(true){
if((i__5566__auto___13193 < len__5565__auto___13192)){
args13189.push((arguments[i__5566__auto___13193]));

var G__13194 = (i__5566__auto___13193 + (1));
i__5566__auto___13193 = G__13194;
continue;
} else {
}
break;
}

var G__13191 = args13189.length;
switch (G__13191) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13189.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args13196 = [];
var len__5565__auto___13199 = arguments.length;
var i__5566__auto___13200 = (0);
while(true){
if((i__5566__auto___13200 < len__5565__auto___13199)){
args13196.push((arguments[i__5566__auto___13200]));

var G__13201 = (i__5566__auto___13200 + (1));
i__5566__auto___13200 = G__13201;
continue;
} else {
}
break;
}

var G__13198 = args13196.length;
switch (G__13198) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13196.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args13203 = [];
var len__5565__auto___13254 = arguments.length;
var i__5566__auto___13255 = (0);
while(true){
if((i__5566__auto___13255 < len__5565__auto___13254)){
args13203.push((arguments[i__5566__auto___13255]));

var G__13256 = (i__5566__auto___13255 + (1));
i__5566__auto___13255 = G__13256;
continue;
} else {
}
break;
}

var G__13205 = args13203.length;
switch (G__13205) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13203.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8014__auto___13258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___13258,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___13258,out){
return (function (state_13229){
var state_val_13230 = (state_13229[(1)]);
if((state_val_13230 === (7))){
var inst_13224 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
var statearr_13231_13259 = state_13229__$1;
(statearr_13231_13259[(2)] = inst_13224);

(statearr_13231_13259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (1))){
var inst_13206 = null;
var state_13229__$1 = (function (){var statearr_13232 = state_13229;
(statearr_13232[(7)] = inst_13206);

return statearr_13232;
})();
var statearr_13233_13260 = state_13229__$1;
(statearr_13233_13260[(2)] = null);

(statearr_13233_13260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (4))){
var inst_13209 = (state_13229[(8)]);
var inst_13209__$1 = (state_13229[(2)]);
var inst_13210 = (inst_13209__$1 == null);
var inst_13211 = cljs.core.not.call(null,inst_13210);
var state_13229__$1 = (function (){var statearr_13234 = state_13229;
(statearr_13234[(8)] = inst_13209__$1);

return statearr_13234;
})();
if(inst_13211){
var statearr_13235_13261 = state_13229__$1;
(statearr_13235_13261[(1)] = (5));

} else {
var statearr_13236_13262 = state_13229__$1;
(statearr_13236_13262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (6))){
var state_13229__$1 = state_13229;
var statearr_13237_13263 = state_13229__$1;
(statearr_13237_13263[(2)] = null);

(statearr_13237_13263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (3))){
var inst_13226 = (state_13229[(2)]);
var inst_13227 = cljs.core.async.close_BANG_.call(null,out);
var state_13229__$1 = (function (){var statearr_13238 = state_13229;
(statearr_13238[(9)] = inst_13226);

return statearr_13238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13229__$1,inst_13227);
} else {
if((state_val_13230 === (2))){
var state_13229__$1 = state_13229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13229__$1,(4),ch);
} else {
if((state_val_13230 === (11))){
var inst_13209 = (state_13229[(8)]);
var inst_13218 = (state_13229[(2)]);
var inst_13206 = inst_13209;
var state_13229__$1 = (function (){var statearr_13239 = state_13229;
(statearr_13239[(7)] = inst_13206);

(statearr_13239[(10)] = inst_13218);

return statearr_13239;
})();
var statearr_13240_13264 = state_13229__$1;
(statearr_13240_13264[(2)] = null);

(statearr_13240_13264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (9))){
var inst_13209 = (state_13229[(8)]);
var state_13229__$1 = state_13229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13229__$1,(11),out,inst_13209);
} else {
if((state_val_13230 === (5))){
var inst_13206 = (state_13229[(7)]);
var inst_13209 = (state_13229[(8)]);
var inst_13213 = cljs.core._EQ_.call(null,inst_13209,inst_13206);
var state_13229__$1 = state_13229;
if(inst_13213){
var statearr_13242_13265 = state_13229__$1;
(statearr_13242_13265[(1)] = (8));

} else {
var statearr_13243_13266 = state_13229__$1;
(statearr_13243_13266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (10))){
var inst_13221 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
var statearr_13244_13267 = state_13229__$1;
(statearr_13244_13267[(2)] = inst_13221);

(statearr_13244_13267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (8))){
var inst_13206 = (state_13229[(7)]);
var tmp13241 = inst_13206;
var inst_13206__$1 = tmp13241;
var state_13229__$1 = (function (){var statearr_13245 = state_13229;
(statearr_13245[(7)] = inst_13206__$1);

return statearr_13245;
})();
var statearr_13246_13268 = state_13229__$1;
(statearr_13246_13268[(2)] = null);

(statearr_13246_13268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___13258,out))
;
return ((function (switch__7949__auto__,c__8014__auto___13258,out){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_13250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13250[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_13250[(1)] = (1));

return statearr_13250;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_13229){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_13229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e13251){if((e13251 instanceof Object)){
var ex__7953__auto__ = e13251;
var statearr_13252_13269 = state_13229;
(statearr_13252_13269[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13270 = state_13229;
state_13229 = G__13270;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_13229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_13229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___13258,out))
})();
var state__8016__auto__ = (function (){var statearr_13253 = f__8015__auto__.call(null);
(statearr_13253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___13258);

return statearr_13253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___13258,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args13271 = [];
var len__5565__auto___13341 = arguments.length;
var i__5566__auto___13342 = (0);
while(true){
if((i__5566__auto___13342 < len__5565__auto___13341)){
args13271.push((arguments[i__5566__auto___13342]));

var G__13343 = (i__5566__auto___13342 + (1));
i__5566__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var G__13273 = args13271.length;
switch (G__13273) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13271.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8014__auto___13345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___13345,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___13345,out){
return (function (state_13311){
var state_val_13312 = (state_13311[(1)]);
if((state_val_13312 === (7))){
var inst_13307 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
var statearr_13313_13346 = state_13311__$1;
(statearr_13313_13346[(2)] = inst_13307);

(statearr_13313_13346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (1))){
var inst_13274 = (new Array(n));
var inst_13275 = inst_13274;
var inst_13276 = (0);
var state_13311__$1 = (function (){var statearr_13314 = state_13311;
(statearr_13314[(7)] = inst_13276);

(statearr_13314[(8)] = inst_13275);

return statearr_13314;
})();
var statearr_13315_13347 = state_13311__$1;
(statearr_13315_13347[(2)] = null);

(statearr_13315_13347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (4))){
var inst_13279 = (state_13311[(9)]);
var inst_13279__$1 = (state_13311[(2)]);
var inst_13280 = (inst_13279__$1 == null);
var inst_13281 = cljs.core.not.call(null,inst_13280);
var state_13311__$1 = (function (){var statearr_13316 = state_13311;
(statearr_13316[(9)] = inst_13279__$1);

return statearr_13316;
})();
if(inst_13281){
var statearr_13317_13348 = state_13311__$1;
(statearr_13317_13348[(1)] = (5));

} else {
var statearr_13318_13349 = state_13311__$1;
(statearr_13318_13349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (15))){
var inst_13301 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
var statearr_13319_13350 = state_13311__$1;
(statearr_13319_13350[(2)] = inst_13301);

(statearr_13319_13350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (13))){
var state_13311__$1 = state_13311;
var statearr_13320_13351 = state_13311__$1;
(statearr_13320_13351[(2)] = null);

(statearr_13320_13351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (6))){
var inst_13276 = (state_13311[(7)]);
var inst_13297 = (inst_13276 > (0));
var state_13311__$1 = state_13311;
if(cljs.core.truth_(inst_13297)){
var statearr_13321_13352 = state_13311__$1;
(statearr_13321_13352[(1)] = (12));

} else {
var statearr_13322_13353 = state_13311__$1;
(statearr_13322_13353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (3))){
var inst_13309 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13311__$1,inst_13309);
} else {
if((state_val_13312 === (12))){
var inst_13275 = (state_13311[(8)]);
var inst_13299 = cljs.core.vec.call(null,inst_13275);
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13311__$1,(15),out,inst_13299);
} else {
if((state_val_13312 === (2))){
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13311__$1,(4),ch);
} else {
if((state_val_13312 === (11))){
var inst_13291 = (state_13311[(2)]);
var inst_13292 = (new Array(n));
var inst_13275 = inst_13292;
var inst_13276 = (0);
var state_13311__$1 = (function (){var statearr_13323 = state_13311;
(statearr_13323[(7)] = inst_13276);

(statearr_13323[(10)] = inst_13291);

(statearr_13323[(8)] = inst_13275);

return statearr_13323;
})();
var statearr_13324_13354 = state_13311__$1;
(statearr_13324_13354[(2)] = null);

(statearr_13324_13354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (9))){
var inst_13275 = (state_13311[(8)]);
var inst_13289 = cljs.core.vec.call(null,inst_13275);
var state_13311__$1 = state_13311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13311__$1,(11),out,inst_13289);
} else {
if((state_val_13312 === (5))){
var inst_13276 = (state_13311[(7)]);
var inst_13275 = (state_13311[(8)]);
var inst_13279 = (state_13311[(9)]);
var inst_13284 = (state_13311[(11)]);
var inst_13283 = (inst_13275[inst_13276] = inst_13279);
var inst_13284__$1 = (inst_13276 + (1));
var inst_13285 = (inst_13284__$1 < n);
var state_13311__$1 = (function (){var statearr_13325 = state_13311;
(statearr_13325[(11)] = inst_13284__$1);

(statearr_13325[(12)] = inst_13283);

return statearr_13325;
})();
if(cljs.core.truth_(inst_13285)){
var statearr_13326_13355 = state_13311__$1;
(statearr_13326_13355[(1)] = (8));

} else {
var statearr_13327_13356 = state_13311__$1;
(statearr_13327_13356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (14))){
var inst_13304 = (state_13311[(2)]);
var inst_13305 = cljs.core.async.close_BANG_.call(null,out);
var state_13311__$1 = (function (){var statearr_13329 = state_13311;
(statearr_13329[(13)] = inst_13304);

return statearr_13329;
})();
var statearr_13330_13357 = state_13311__$1;
(statearr_13330_13357[(2)] = inst_13305);

(statearr_13330_13357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (10))){
var inst_13295 = (state_13311[(2)]);
var state_13311__$1 = state_13311;
var statearr_13331_13358 = state_13311__$1;
(statearr_13331_13358[(2)] = inst_13295);

(statearr_13331_13358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13312 === (8))){
var inst_13275 = (state_13311[(8)]);
var inst_13284 = (state_13311[(11)]);
var tmp13328 = inst_13275;
var inst_13275__$1 = tmp13328;
var inst_13276 = inst_13284;
var state_13311__$1 = (function (){var statearr_13332 = state_13311;
(statearr_13332[(7)] = inst_13276);

(statearr_13332[(8)] = inst_13275__$1);

return statearr_13332;
})();
var statearr_13333_13359 = state_13311__$1;
(statearr_13333_13359[(2)] = null);

(statearr_13333_13359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___13345,out))
;
return ((function (switch__7949__auto__,c__8014__auto___13345,out){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_13337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13337[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_13337[(1)] = (1));

return statearr_13337;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_13311){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_13311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e13338){if((e13338 instanceof Object)){
var ex__7953__auto__ = e13338;
var statearr_13339_13360 = state_13311;
(statearr_13339_13360[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13361 = state_13311;
state_13311 = G__13361;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_13311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_13311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___13345,out))
})();
var state__8016__auto__ = (function (){var statearr_13340 = f__8015__auto__.call(null);
(statearr_13340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___13345);

return statearr_13340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___13345,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args13362 = [];
var len__5565__auto___13436 = arguments.length;
var i__5566__auto___13437 = (0);
while(true){
if((i__5566__auto___13437 < len__5565__auto___13436)){
args13362.push((arguments[i__5566__auto___13437]));

var G__13438 = (i__5566__auto___13437 + (1));
i__5566__auto___13437 = G__13438;
continue;
} else {
}
break;
}

var G__13364 = args13362.length;
switch (G__13364) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13362.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8014__auto___13440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___13440,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___13440,out){
return (function (state_13406){
var state_val_13407 = (state_13406[(1)]);
if((state_val_13407 === (7))){
var inst_13402 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
var statearr_13408_13441 = state_13406__$1;
(statearr_13408_13441[(2)] = inst_13402);

(statearr_13408_13441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (1))){
var inst_13365 = [];
var inst_13366 = inst_13365;
var inst_13367 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13406__$1 = (function (){var statearr_13409 = state_13406;
(statearr_13409[(7)] = inst_13366);

(statearr_13409[(8)] = inst_13367);

return statearr_13409;
})();
var statearr_13410_13442 = state_13406__$1;
(statearr_13410_13442[(2)] = null);

(statearr_13410_13442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (4))){
var inst_13370 = (state_13406[(9)]);
var inst_13370__$1 = (state_13406[(2)]);
var inst_13371 = (inst_13370__$1 == null);
var inst_13372 = cljs.core.not.call(null,inst_13371);
var state_13406__$1 = (function (){var statearr_13411 = state_13406;
(statearr_13411[(9)] = inst_13370__$1);

return statearr_13411;
})();
if(inst_13372){
var statearr_13412_13443 = state_13406__$1;
(statearr_13412_13443[(1)] = (5));

} else {
var statearr_13413_13444 = state_13406__$1;
(statearr_13413_13444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (15))){
var inst_13396 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
var statearr_13414_13445 = state_13406__$1;
(statearr_13414_13445[(2)] = inst_13396);

(statearr_13414_13445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (13))){
var state_13406__$1 = state_13406;
var statearr_13415_13446 = state_13406__$1;
(statearr_13415_13446[(2)] = null);

(statearr_13415_13446[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (6))){
var inst_13366 = (state_13406[(7)]);
var inst_13391 = inst_13366.length;
var inst_13392 = (inst_13391 > (0));
var state_13406__$1 = state_13406;
if(cljs.core.truth_(inst_13392)){
var statearr_13416_13447 = state_13406__$1;
(statearr_13416_13447[(1)] = (12));

} else {
var statearr_13417_13448 = state_13406__$1;
(statearr_13417_13448[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (3))){
var inst_13404 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13406__$1,inst_13404);
} else {
if((state_val_13407 === (12))){
var inst_13366 = (state_13406[(7)]);
var inst_13394 = cljs.core.vec.call(null,inst_13366);
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13406__$1,(15),out,inst_13394);
} else {
if((state_val_13407 === (2))){
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13406__$1,(4),ch);
} else {
if((state_val_13407 === (11))){
var inst_13374 = (state_13406[(10)]);
var inst_13370 = (state_13406[(9)]);
var inst_13384 = (state_13406[(2)]);
var inst_13385 = [];
var inst_13386 = inst_13385.push(inst_13370);
var inst_13366 = inst_13385;
var inst_13367 = inst_13374;
var state_13406__$1 = (function (){var statearr_13418 = state_13406;
(statearr_13418[(11)] = inst_13384);

(statearr_13418[(7)] = inst_13366);

(statearr_13418[(8)] = inst_13367);

(statearr_13418[(12)] = inst_13386);

return statearr_13418;
})();
var statearr_13419_13449 = state_13406__$1;
(statearr_13419_13449[(2)] = null);

(statearr_13419_13449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (9))){
var inst_13366 = (state_13406[(7)]);
var inst_13382 = cljs.core.vec.call(null,inst_13366);
var state_13406__$1 = state_13406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13406__$1,(11),out,inst_13382);
} else {
if((state_val_13407 === (5))){
var inst_13374 = (state_13406[(10)]);
var inst_13367 = (state_13406[(8)]);
var inst_13370 = (state_13406[(9)]);
var inst_13374__$1 = f.call(null,inst_13370);
var inst_13375 = cljs.core._EQ_.call(null,inst_13374__$1,inst_13367);
var inst_13376 = cljs.core.keyword_identical_QMARK_.call(null,inst_13367,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13377 = (inst_13375) || (inst_13376);
var state_13406__$1 = (function (){var statearr_13420 = state_13406;
(statearr_13420[(10)] = inst_13374__$1);

return statearr_13420;
})();
if(cljs.core.truth_(inst_13377)){
var statearr_13421_13450 = state_13406__$1;
(statearr_13421_13450[(1)] = (8));

} else {
var statearr_13422_13451 = state_13406__$1;
(statearr_13422_13451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (14))){
var inst_13399 = (state_13406[(2)]);
var inst_13400 = cljs.core.async.close_BANG_.call(null,out);
var state_13406__$1 = (function (){var statearr_13424 = state_13406;
(statearr_13424[(13)] = inst_13399);

return statearr_13424;
})();
var statearr_13425_13452 = state_13406__$1;
(statearr_13425_13452[(2)] = inst_13400);

(statearr_13425_13452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (10))){
var inst_13389 = (state_13406[(2)]);
var state_13406__$1 = state_13406;
var statearr_13426_13453 = state_13406__$1;
(statearr_13426_13453[(2)] = inst_13389);

(statearr_13426_13453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13407 === (8))){
var inst_13374 = (state_13406[(10)]);
var inst_13366 = (state_13406[(7)]);
var inst_13370 = (state_13406[(9)]);
var inst_13379 = inst_13366.push(inst_13370);
var tmp13423 = inst_13366;
var inst_13366__$1 = tmp13423;
var inst_13367 = inst_13374;
var state_13406__$1 = (function (){var statearr_13427 = state_13406;
(statearr_13427[(14)] = inst_13379);

(statearr_13427[(7)] = inst_13366__$1);

(statearr_13427[(8)] = inst_13367);

return statearr_13427;
})();
var statearr_13428_13454 = state_13406__$1;
(statearr_13428_13454[(2)] = null);

(statearr_13428_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8014__auto___13440,out))
;
return ((function (switch__7949__auto__,c__8014__auto___13440,out){
return (function() {
var cljs$core$async$state_machine__7950__auto__ = null;
var cljs$core$async$state_machine__7950__auto____0 = (function (){
var statearr_13432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13432[(0)] = cljs$core$async$state_machine__7950__auto__);

(statearr_13432[(1)] = (1));

return statearr_13432;
});
var cljs$core$async$state_machine__7950__auto____1 = (function (state_13406){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_13406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e13433){if((e13433 instanceof Object)){
var ex__7953__auto__ = e13433;
var statearr_13434_13455 = state_13406;
(statearr_13434_13455[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13456 = state_13406;
state_13406 = G__13456;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
cljs$core$async$state_machine__7950__auto__ = function(state_13406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7950__auto____1.call(this,state_13406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7950__auto____0;
cljs$core$async$state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7950__auto____1;
return cljs$core$async$state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___13440,out))
})();
var state__8016__auto__ = (function (){var statearr_13435 = f__8015__auto__.call(null);
(statearr_13435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___13440);

return statearr_13435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___13440,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
