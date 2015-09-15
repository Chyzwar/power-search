// Compiled by ClojureScript 1.7.48 {}
goog.provide('power_search.popup');
goog.require('cljs.core');
goog.require('khroma.runtime');
goog.require('khroma.log');
goog.require('cljs.core.async');
power_search.popup.init = (function power_search$popup$init(){
var bg = khroma.runtime.connect.call(null);
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__,bg){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__,bg){
return (function (state_10535){
var state_val_10536 = (state_10535[(1)]);
if((state_val_10536 === (1))){
var state_10535__$1 = state_10535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10535__$1,(2),bg,new cljs.core.Keyword(null,"lol-i-am-a-popup","lol-i-am-a-popup",1982310068));
} else {
if((state_val_10536 === (2))){
var inst_10530 = (state_10535[(2)]);
var state_10535__$1 = (function (){var statearr_10537 = state_10535;
(statearr_10537[(7)] = inst_10530);

return statearr_10537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10535__$1,(3),bg);
} else {
if((state_val_10536 === (3))){
var inst_10532 = (state_10535[(2)]);
var inst_10533 = khroma.log.log.call(null,"Background said: ",inst_10532);
var state_10535__$1 = state_10535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10535__$1,inst_10533);
} else {
return null;
}
}
}
});})(c__8014__auto__,bg))
;
return ((function (switch__7949__auto__,c__8014__auto__,bg){
return (function() {
var power_search$popup$init_$_state_machine__7950__auto__ = null;
var power_search$popup$init_$_state_machine__7950__auto____0 = (function (){
var statearr_10541 = [null,null,null,null,null,null,null,null];
(statearr_10541[(0)] = power_search$popup$init_$_state_machine__7950__auto__);

(statearr_10541[(1)] = (1));

return statearr_10541;
});
var power_search$popup$init_$_state_machine__7950__auto____1 = (function (state_10535){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10542){if((e10542 instanceof Object)){
var ex__7953__auto__ = e10542;
var statearr_10543_10545 = state_10535;
(statearr_10543_10545[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10546 = state_10535;
state_10535 = G__10546;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
power_search$popup$init_$_state_machine__7950__auto__ = function(state_10535){
switch(arguments.length){
case 0:
return power_search$popup$init_$_state_machine__7950__auto____0.call(this);
case 1:
return power_search$popup$init_$_state_machine__7950__auto____1.call(this,state_10535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
power_search$popup$init_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = power_search$popup$init_$_state_machine__7950__auto____0;
power_search$popup$init_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = power_search$popup$init_$_state_machine__7950__auto____1;
return power_search$popup$init_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__,bg))
})();
var state__8016__auto__ = (function (){var statearr_10544 = f__8015__auto__.call(null);
(statearr_10544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_10544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__,bg))
);

return c__8014__auto__;
});
