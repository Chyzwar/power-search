// Compiled by ClojureScript 1.7.48 {}
goog.provide('power_search.content');
goog.require('cljs.core');
goog.require('khroma.runtime');
goog.require('khroma.log');
goog.require('cljs.core.async');
power_search.content.init = (function power_search$content$init(){
var bg = khroma.runtime.connect.call(null);
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__,bg){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__,bg){
return (function (state_10451){
var state_val_10452 = (state_10451[(1)]);
if((state_val_10452 === (1))){
var state_10451__$1 = state_10451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10451__$1,(2),bg,new cljs.core.Keyword(null,"lol-i-am-a-content-script","lol-i-am-a-content-script",446041273));
} else {
if((state_val_10452 === (2))){
var inst_10446 = (state_10451[(2)]);
var state_10451__$1 = (function (){var statearr_10453 = state_10451;
(statearr_10453[(7)] = inst_10446);

return statearr_10453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10451__$1,(3),bg);
} else {
if((state_val_10452 === (3))){
var inst_10448 = (state_10451[(2)]);
var inst_10449 = khroma.log.log.call(null,"Background said: ",inst_10448);
var state_10451__$1 = state_10451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10451__$1,inst_10449);
} else {
return null;
}
}
}
});})(c__8014__auto__,bg))
;
return ((function (switch__7949__auto__,c__8014__auto__,bg){
return (function() {
var power_search$content$init_$_state_machine__7950__auto__ = null;
var power_search$content$init_$_state_machine__7950__auto____0 = (function (){
var statearr_10457 = [null,null,null,null,null,null,null,null];
(statearr_10457[(0)] = power_search$content$init_$_state_machine__7950__auto__);

(statearr_10457[(1)] = (1));

return statearr_10457;
});
var power_search$content$init_$_state_machine__7950__auto____1 = (function (state_10451){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10458){if((e10458 instanceof Object)){
var ex__7953__auto__ = e10458;
var statearr_10459_10461 = state_10451;
(statearr_10459_10461[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10462 = state_10451;
state_10451 = G__10462;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
power_search$content$init_$_state_machine__7950__auto__ = function(state_10451){
switch(arguments.length){
case 0:
return power_search$content$init_$_state_machine__7950__auto____0.call(this);
case 1:
return power_search$content$init_$_state_machine__7950__auto____1.call(this,state_10451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
power_search$content$init_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = power_search$content$init_$_state_machine__7950__auto____0;
power_search$content$init_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = power_search$content$init_$_state_machine__7950__auto____1;
return power_search$content$init_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__,bg))
})();
var state__8016__auto__ = (function (){var statearr_10460 = f__8015__auto__.call(null);
(statearr_10460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_10460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__,bg))
);

return c__8014__auto__;
});
