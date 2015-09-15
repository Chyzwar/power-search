// Compiled by ClojureScript 1.7.48 {}
goog.provide('power_search.background');
goog.require('cljs.core');
goog.require('khroma.log');
goog.require('khroma.runtime');
goog.require('cljs.core.async');
power_search.background.init = (function power_search$background$init(){
var c__8014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8014__auto__){
return (function (){
var f__8015__auto__ = (function (){var switch__7949__auto__ = ((function (c__8014__auto__){
return (function (state_10497){
var state_val_10498 = (state_10497[(1)]);
if((state_val_10498 === (1))){
var inst_10487 = khroma.runtime.connections.call(null);
var state_10497__$1 = state_10497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10497__$1,(2),inst_10487);
} else {
if((state_val_10498 === (2))){
var inst_10489 = (state_10497[(7)]);
var inst_10489__$1 = (state_10497[(2)]);
var state_10497__$1 = (function (){var statearr_10499 = state_10497;
(statearr_10499[(7)] = inst_10489__$1);

return statearr_10499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10497__$1,(3),inst_10489__$1);
} else {
if((state_val_10498 === (3))){
var inst_10489 = (state_10497[(7)]);
var inst_10491 = (state_10497[(2)]);
var inst_10492 = khroma.log.log.call(null,"Content script said: ",inst_10491);
var state_10497__$1 = (function (){var statearr_10500 = state_10497;
(statearr_10500[(8)] = inst_10492);

return statearr_10500;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10497__$1,(4),inst_10489,new cljs.core.Keyword(null,"fml-i-am-the-background-script","fml-i-am-the-background-script",-314269142));
} else {
if((state_val_10498 === (4))){
var inst_10494 = (state_10497[(2)]);
var inst_10495 = power_search$background$init.call(null);
var state_10497__$1 = (function (){var statearr_10501 = state_10497;
(statearr_10501[(9)] = inst_10494);

return statearr_10501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10497__$1,inst_10495);
} else {
return null;
}
}
}
}
});})(c__8014__auto__))
;
return ((function (switch__7949__auto__,c__8014__auto__){
return (function() {
var power_search$background$init_$_state_machine__7950__auto__ = null;
var power_search$background$init_$_state_machine__7950__auto____0 = (function (){
var statearr_10505 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10505[(0)] = power_search$background$init_$_state_machine__7950__auto__);

(statearr_10505[(1)] = (1));

return statearr_10505;
});
var power_search$background$init_$_state_machine__7950__auto____1 = (function (state_10497){
while(true){
var ret_value__7951__auto__ = (function (){try{while(true){
var result__7952__auto__ = switch__7949__auto__.call(null,state_10497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7952__auto__;
}
break;
}
}catch (e10506){if((e10506 instanceof Object)){
var ex__7953__auto__ = e10506;
var statearr_10507_10509 = state_10497;
(statearr_10507_10509[(5)] = ex__7953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10510 = state_10497;
state_10497 = G__10510;
continue;
} else {
return ret_value__7951__auto__;
}
break;
}
});
power_search$background$init_$_state_machine__7950__auto__ = function(state_10497){
switch(arguments.length){
case 0:
return power_search$background$init_$_state_machine__7950__auto____0.call(this);
case 1:
return power_search$background$init_$_state_machine__7950__auto____1.call(this,state_10497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
power_search$background$init_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$0 = power_search$background$init_$_state_machine__7950__auto____0;
power_search$background$init_$_state_machine__7950__auto__.cljs$core$IFn$_invoke$arity$1 = power_search$background$init_$_state_machine__7950__auto____1;
return power_search$background$init_$_state_machine__7950__auto__;
})()
;})(switch__7949__auto__,c__8014__auto__))
})();
var state__8016__auto__ = (function (){var statearr_10508 = f__8015__auto__.call(null);
(statearr_10508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8014__auto__);

return statearr_10508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8016__auto__);
});})(c__8014__auto__))
);

return c__8014__auto__;
});
