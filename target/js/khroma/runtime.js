// Compiled by ClojureScript 1.7.48 {}
goog.provide('khroma.runtime');
goog.require('cljs.core');
goog.require('khroma.log');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
khroma.runtime.available_QMARK_ = !((chrome.runtime == null));
khroma.runtime.manifest = (new cljs.core.Delay((function (){
return cljs.core.js__GT_clj.call(null,chrome.runtime.getManifest());
}),null));
khroma.runtime.options__GT_jsparams = (function khroma$runtime$options__GT_jsparams(options){
return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),options)));
});
khroma.runtime.chan = cljs.core.partial.call(null,cljs.core.async.chan,(100));

khroma.runtime.IChromePort = {};

khroma.runtime.port_name = (function khroma$runtime$port_name(this$){
if((!((this$ == null))) && (!((this$.khroma$runtime$IChromePort$port_name$arity$1 == null)))){
return this$.khroma$runtime$IChromePort$port_name$arity$1(this$);
} else {
var x__5162__auto__ = (((this$ == null))?null:this$);
var m__5163__auto__ = (khroma.runtime.port_name[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,this$);
} else {
var m__5163__auto____$1 = (khroma.runtime.port_name["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IChromePort.port-name",this$);
}
}
}
});

khroma.runtime.channel_from_port = (function khroma$runtime$channel_from_port(port){
var in$ = khroma.runtime.chan.call(null);
var out = khroma.runtime.chan.call(null);
var c__8014__auto___10651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto___10651,in$,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto___10651,in$,out){
return (function (state_10617){
var state_val_10618 = (state_10617[(1)]);
if((state_val_10618 === (1))){
var state_10617__$1 = state_10617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10617__$1,(2),out);
} else {
if((state_val_10618 === (2))){
var inst_10602 = (state_10617[(2)]);
var inst_10603 = inst_10602;
var state_10617__$1 = (function (){var statearr_10619 = state_10617;
(statearr_10619[(7)] = inst_10603);

return statearr_10619;
})();
var statearr_10620_10652 = state_10617__$1;
(statearr_10620_10652[(2)] = null);

(statearr_10620_10652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (3))){
var inst_10603 = (state_10617[(7)]);
var state_10617__$1 = state_10617;
if(cljs.core.truth_(inst_10603)){
var statearr_10621_10653 = state_10617__$1;
(statearr_10621_10653[(1)] = (5));

} else {
var statearr_10622_10654 = state_10617__$1;
(statearr_10622_10654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (4))){
var inst_10615 = (state_10617[(2)]);
var state_10617__$1 = state_10617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10617__$1,inst_10615);
} else {
if((state_val_10618 === (5))){
var inst_10603 = (state_10617[(7)]);
var inst_10606 = cljs.core.clj__GT_js.call(null,inst_10603);
var inst_10607 = port.postMessage(inst_10606);
var state_10617__$1 = (function (){var statearr_10623 = state_10617;
(statearr_10623[(8)] = inst_10607);

return statearr_10623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10617__$1,(8),out);
} else {
if((state_val_10618 === (6))){
var state_10617__$1 = state_10617;
var statearr_10624_10655 = state_10617__$1;
(statearr_10624_10655[(2)] = null);

(statearr_10624_10655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (7))){
var inst_10613 = (state_10617[(2)]);
var state_10617__$1 = state_10617;
var statearr_10625_10656 = state_10617__$1;
(statearr_10625_10656[(2)] = inst_10613);

(statearr_10625_10656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (8))){
var inst_10609 = (state_10617[(2)]);
var inst_10603 = inst_10609;
var state_10617__$1 = (function (){var statearr_10626 = state_10617;
(statearr_10626[(7)] = inst_10603);

return statearr_10626;
})();
var statearr_10627_10657 = state_10617__$1;
(statearr_10627_10657[(2)] = null);

(statearr_10627_10657[(1)] = (3));


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
});})(c__8014__auto___10651,in$,out))
;
return ((function (switch__7949__auto__,c__8014__auto___10651,in$,out){
return (function() {
var khroma$runtime$channel_from_port_$_state_machine__7950__auto__ = null;
var khroma$runtime$channel_from_port_$_state_machine__7950__auto____0 = (function (){
var statearr_10631 = [null,null,null,null,null,null,null,null,null];
(statearr_10631[(0)] = khroma$runtime$channel_from_port_$_state_machine__7950__auto__);

(statearr_10631[(1)] = (1));

return statearr_10631;
});
var khroma$runtime$channel_from_port_$_state_machine__7950__auto____1 = (function (state_10617){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10632){if((e10632 instanceof Object)){
var ex__7953__auto__ = e10632;
var statearr_10633_10658 = state_10617;
(statearr_10633_10658[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10659 = state_10617;
state_10617 = G__10659;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
khroma$runtime$channel_from_port_$_state_machine__7950__auto__ = function(state_10617){
switch(arguments.length){
case 0:
return khroma$runtime$channel_from_port_$_state_machine__7950__auto____0.call(this);
case 1:
return khroma$runtime$channel_from_port_$_state_machine__7950__auto____1.call(this,state_10617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
khroma$runtime$channel_from_port_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = khroma$runtime$channel_from_port_$_state_machine__7950__auto____0;
khroma$runtime$channel_from_port_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = khroma$runtime$channel_from_port_$_state_machine__7950__auto____1;
return khroma$runtime$channel_from_port_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto___10651,in$,out))
})();
var state__8016__auto__ = (function (){var statearr_10634 = f__8015__auto__.call(null);
(statearr_10634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto___10651);

return statearr_10634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto___10651,in$,out))
);


port.onMessage.addListener(((function (in$,out){
return (function (message,sender,response_fn){
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__,in$,out){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__,in$,out){
return (function (state_10639){
var state_val_10640 = (state_10639[(1)]);
if((state_val_10640 === (1))){
var inst_10635 = cljs.core.js__GT_clj.call(null,message);
var state_10639__$1 = state_10639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10639__$1,(2),in$,inst_10635);
} else {
if((state_val_10640 === (2))){
var inst_10637 = (state_10639[(2)]);
var state_10639__$1 = state_10639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10639__$1,inst_10637);
} else {
return null;
}
}
});})(c__8014__auto__,in$,out))
;
return ((function (switch__7949__auto__,c__8014__auto__,in$,out){
return (function() {
var khroma$runtime$channel_from_port_$_state_machine__7950__auto__ = null;
var khroma$runtime$channel_from_port_$_state_machine__7950__auto____0 = (function (){
var statearr_10644 = [null,null,null,null,null,null,null];
(statearr_10644[(0)] = khroma$runtime$channel_from_port_$_state_machine__7950__auto__);

(statearr_10644[(1)] = (1));

return statearr_10644;
});
var khroma$runtime$channel_from_port_$_state_machine__7950__auto____1 = (function (state_10639){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10645){if((e10645 instanceof Object)){
var ex__7953__auto__ = e10645;
var statearr_10646_10660 = state_10639;
(statearr_10646_10660[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10661 = state_10639;
state_10639 = G__10661;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
khroma$runtime$channel_from_port_$_state_machine__7950__auto__ = function(state_10639){
switch(arguments.length){
case 0:
return khroma$runtime$channel_from_port_$_state_machine__7950__auto____0.call(this);
case 1:
return khroma$runtime$channel_from_port_$_state_machine__7950__auto____1.call(this,state_10639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
khroma$runtime$channel_from_port_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = khroma$runtime$channel_from_port_$_state_machine__7950__auto____0;
khroma$runtime$channel_from_port_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = khroma$runtime$channel_from_port_$_state_machine__7950__auto____1;
return khroma$runtime$channel_from_port_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__,in$,out))
})();
var state__8016__auto__ = (function (){var statearr_10647 = f__8015__auto__.call(null);
(statearr_10647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_10647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__,in$,out))
);

return c__8014__auto__;
});})(in$,out))
);

port.onDisconnect.addListener(((function (in$,out){
return (function (){
cljs.core.async.close_BANG_.call(null,in$);

return cljs.core.async.close_BANG_.call(null,out);
});})(in$,out))
);

if(typeof khroma.runtime.t10648 !== 'undefined'){
} else {

/**
* @constructor
*/
khroma.runtime.t10648 = (function (channel_from_port,port,in$,out,meta10649){
this.channel_from_port = channel_from_port;
this.port = port;
this.in$ = in$;
this.out = out;
this.meta10649 = meta10649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
khroma.runtime.t10648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (in$,out){
return (function (_10650,meta10649__$1){
var self__ = this;
var _10650__$1 = this;
return (new khroma.runtime.t10648(self__.channel_from_port,self__.port,self__.in$,self__.out,meta10649__$1));
});})(in$,out))
;

khroma.runtime.t10648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (in$,out){
return (function (_10650){
var self__ = this;
var _10650__$1 = this;
return self__.meta10649;
});})(in$,out))
;

khroma.runtime.t10648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

khroma.runtime.t10648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (in$,out){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.in$,handler);
});})(in$,out))
;

khroma.runtime.t10648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

khroma.runtime.t10648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (in$,out){
return (function (_,message,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.out,message,handler);
});})(in$,out))
;

khroma.runtime.t10648.prototype.cljs$core$async$impl$protocols$Channel$ = true;

khroma.runtime.t10648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (in$,out){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.in$);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.out);

return self__.port.disconnect();
});})(in$,out))
;

khroma.runtime.t10648.prototype.khroma$runtime$IChromePort$ = true;

khroma.runtime.t10648.prototype.khroma$runtime$IChromePort$port_name$arity$1 = ((function (in$,out){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.port.name;
});})(in$,out))
;

khroma.runtime.t10648.getBasis = ((function (in$,out){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"channel-from-port","channel-from-port",-1134747206,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",-1119498507,null)], null)))], null)),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"meta10649","meta10649",2110817673,null)], null);
});})(in$,out))
;

khroma.runtime.t10648.cljs$lang$type = true;

khroma.runtime.t10648.cljs$lang$ctorStr = "khroma.runtime/t10648";

khroma.runtime.t10648.cljs$lang$ctorPrWriter = ((function (in$,out){
return (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"khroma.runtime/t10648");
});})(in$,out))
;

khroma.runtime.__GT_t10648 = ((function (in$,out){
return (function khroma$runtime$channel_from_port_$___GT_t10648(channel_from_port__$1,port__$1,in$__$1,out__$1,meta10649){
return (new khroma.runtime.t10648(channel_from_port__$1,port__$1,in$__$1,out__$1,meta10649));
});})(in$,out))
;

}

return (new khroma.runtime.t10648(khroma$runtime$channel_from_port,port,in$,out,cljs.core.PersistentArrayMap.EMPTY));
});
khroma.runtime.connect = (function khroma$runtime$connect(){
var args__5572__auto__ = [];
var len__5565__auto___10665 = arguments.length;
var i__5566__auto___10666 = (0);
while(true){
if((i__5566__auto___10666 < len__5565__auto___10665)){
args__5572__auto__.push((arguments[i__5566__auto___10666]));

var G__10667 = (i__5566__auto___10666 + (1));
i__5566__auto___10666 = G__10667;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return khroma.runtime.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

khroma.runtime.connect.cljs$core$IFn$_invoke$arity$variadic = (function (options){
return khroma.runtime.channel_from_port.call(null,(function (){var map__10663 = cljs.core.apply.call(null,cljs.core.hash_map,options);
var map__10663__$1 = ((((!((map__10663 == null)))?((((map__10663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10663):map__10663);
var extensionId = cljs.core.get.call(null,map__10663__$1,new cljs.core.Keyword(null,"extensionId","extensionId",-1340958256));
var connectInfo = cljs.core.get.call(null,map__10663__$1,new cljs.core.Keyword(null,"connectInfo","connectInfo",1971889406));
return chrome.runtime.connect.apply(chrome.runtime,khroma.runtime.options__GT_jsparams.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [extensionId,connectInfo], null)));
})());
});

khroma.runtime.connect.cljs$lang$maxFixedArity = (0);

khroma.runtime.connect.cljs$lang$applyTo = (function (seq10662){
return khroma.runtime.connect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10662));
});
khroma.runtime.connections = (function khroma$runtime$connections(){
var c = khroma.runtime.chan.call(null);
chrome.runtime.onConnect.addListener(((function (c){
return (function (port){
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__,c){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__,c){
return (function (state_10685){
var state_val_10686 = (state_10685[(1)]);
if((state_val_10686 === (1))){
var inst_10681 = khroma.runtime.channel_from_port.call(null,port);
var state_10685__$1 = state_10685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10685__$1,(2),c,inst_10681);
} else {
if((state_val_10686 === (2))){
var inst_10683 = (state_10685[(2)]);
var state_10685__$1 = state_10685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10685__$1,inst_10683);
} else {
return null;
}
}
});})(c__8014__auto__,c))
;
return ((function (switch__7949__auto__,c__8014__auto__,c){
return (function() {
var khroma$runtime$connections_$_state_machine__7950__auto__ = null;
var khroma$runtime$connections_$_state_machine__7950__auto____0 = (function (){
var statearr_10690 = [null,null,null,null,null,null,null];
(statearr_10690[(0)] = khroma$runtime$connections_$_state_machine__7950__auto__);

(statearr_10690[(1)] = (1));

return statearr_10690;
});
var khroma$runtime$connections_$_state_machine__7950__auto____1 = (function (state_10685){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10691){if((e10691 instanceof Object)){
var ex__7953__auto__ = e10691;
var statearr_10692_10694 = state_10685;
(statearr_10692_10694[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10695 = state_10685;
state_10685 = G__10695;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
khroma$runtime$connections_$_state_machine__7950__auto__ = function(state_10685){
switch(arguments.length){
case 0:
return khroma$runtime$connections_$_state_machine__7950__auto____0.call(this);
case 1:
return khroma$runtime$connections_$_state_machine__7950__auto____1.call(this,state_10685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
khroma$runtime$connections_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = khroma$runtime$connections_$_state_machine__7950__auto____0;
khroma$runtime$connections_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = khroma$runtime$connections_$_state_machine__7950__auto____1;
return khroma$runtime$connections_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__,c))
})();
var state__8016__auto__ = (function (){var statearr_10693 = f__8015__auto__.call(null);
(statearr_10693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_10693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__,c))
);

return c__8014__auto__;
});})(c))
);

return c;
});
khroma.runtime.message_event = (function khroma$runtime$message_event(message,sender,response_fn){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.js__GT_clj.call(null,message),new cljs.core.Keyword(null,"sender","sender",1557303285),cljs.core.js__GT_clj.call(null,sender),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),response_fn], null);
});
khroma.runtime.messages = (function khroma$runtime$messages(){
var ch = khroma.runtime.chan.call(null);
chrome.runtime.onMessage.addListener(((function (ch){
return (function (message,sender,reply_fn){
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__,ch){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__,ch){
return (function (state_10713){
var state_val_10714 = (state_10713[(1)]);
if((state_val_10714 === (1))){
var inst_10709 = khroma.runtime.message_event.call(null,message,sender,reply_fn);
var state_10713__$1 = state_10713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10713__$1,(2),ch,inst_10709);
} else {
if((state_val_10714 === (2))){
var inst_10711 = (state_10713[(2)]);
var state_10713__$1 = state_10713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10713__$1,inst_10711);
} else {
return null;
}
}
});})(c__8014__auto__,ch))
;
return ((function (switch__7949__auto__,c__8014__auto__,ch){
return (function() {
var khroma$runtime$messages_$_state_machine__7950__auto__ = null;
var khroma$runtime$messages_$_state_machine__7950__auto____0 = (function (){
var statearr_10718 = [null,null,null,null,null,null,null];
(statearr_10718[(0)] = khroma$runtime$messages_$_state_machine__7950__auto__);

(statearr_10718[(1)] = (1));

return statearr_10718;
});
var khroma$runtime$messages_$_state_machine__7950__auto____1 = (function (state_10713){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10719){if((e10719 instanceof Object)){
var ex__7953__auto__ = e10719;
var statearr_10720_10722 = state_10713;
(statearr_10720_10722[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10723 = state_10713;
state_10713 = G__10723;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
khroma$runtime$messages_$_state_machine__7950__auto__ = function(state_10713){
switch(arguments.length){
case 0:
return khroma$runtime$messages_$_state_machine__7950__auto____0.call(this);
case 1:
return khroma$runtime$messages_$_state_machine__7950__auto____1.call(this,state_10713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
khroma$runtime$messages_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = khroma$runtime$messages_$_state_machine__7950__auto____0;
khroma$runtime$messages_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = khroma$runtime$messages_$_state_machine__7950__auto____1;
return khroma$runtime$messages_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__,ch))
})();
var state__8016__auto__ = (function (){var statearr_10721 = f__8015__auto__.call(null);
(statearr_10721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_10721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__,ch))
);

return c__8014__auto__;
});})(ch))
);

return ch;
});
khroma.runtime.send_message = (function khroma$runtime$send_message(){
var args__5572__auto__ = [];
var len__5565__auto___10728 = arguments.length;
var i__5566__auto___10729 = (0);
while(true){
if((i__5566__auto___10729 < len__5565__auto___10728)){
args__5572__auto__.push((arguments[i__5566__auto___10729]));

var G__10730 = (i__5566__auto___10729 + (1));
i__5566__auto___10729 = G__10730;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return khroma.runtime.send_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

khroma.runtime.send_message.cljs$core$IFn$_invoke$arity$variadic = (function (message,options){
var map__10726 = cljs.core.apply.call(null,cljs.core.hash_map,options);
var map__10726__$1 = ((((!((map__10726 == null)))?((((map__10726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10726):map__10726);
var extensionId = cljs.core.get.call(null,map__10726__$1,new cljs.core.Keyword(null,"extensionId","extensionId",-1340958256));
var options__$1 = cljs.core.get.call(null,map__10726__$1,new cljs.core.Keyword(null,"options","options",99638489));
var responseCallback = cljs.core.get.call(null,map__10726__$1,new cljs.core.Keyword(null,"responseCallback","responseCallback",1804251354));
return chrome.runtime.sendMessage.apply(chrome.runtime,khroma.runtime.options__GT_jsparams.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [extensionId,message,options__$1,responseCallback], null)));
});

khroma.runtime.send_message.cljs$lang$maxFixedArity = (1);

khroma.runtime.send_message.cljs$lang$applyTo = (function (seq10724){
var G__10725 = cljs.core.first.call(null,seq10724);
var seq10724__$1 = cljs.core.next.call(null,seq10724);
return khroma.runtime.send_message.cljs$core$IFn$_invoke$arity$variadic(G__10725,seq10724__$1);
});
