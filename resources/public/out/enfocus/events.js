// Compiled by ClojureScript 0.0-2202
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.object');
goog.require('enfocus.core');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){var obj = (new Object());obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){var callback = enfocus.events.mouse_enter_leave.call(null,func);callback.listen = func;
callback.scope = opt_scope;
if(cljs.core.truth_(opt_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else
{return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});})(obj))
;
obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__7611_7615 = cljs.core.seq.call(null,listeners);var chunk__7612_7616 = null;var count__7613_7617 = 0;var i__7614_7618 = 0;while(true){
if((i__7614_7618 < count__7613_7617))
{var obj_7619__$1 = cljs.core._nth.call(null,chunk__7612_7616,i__7614_7618);var listener_7620 = obj_7619__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_7620.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_7620.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_7620);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_7620);
}
} else
{}
{
var G__7621 = seq__7611_7615;
var G__7622 = chunk__7612_7616;
var G__7623 = count__7613_7617;
var G__7624 = (i__7614_7618 + 1);
seq__7611_7615 = G__7621;
chunk__7612_7616 = G__7622;
count__7613_7617 = G__7623;
i__7614_7618 = G__7624;
continue;
}
} else
{var temp__4126__auto___7625 = cljs.core.seq.call(null,seq__7611_7615);if(temp__4126__auto___7625)
{var seq__7611_7626__$1 = temp__4126__auto___7625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7611_7626__$1))
{var c__4229__auto___7627 = cljs.core.chunk_first.call(null,seq__7611_7626__$1);{
var G__7628 = cljs.core.chunk_rest.call(null,seq__7611_7626__$1);
var G__7629 = c__4229__auto___7627;
var G__7630 = cljs.core.count.call(null,c__4229__auto___7627);
var G__7631 = 0;
seq__7611_7615 = G__7628;
chunk__7612_7616 = G__7629;
count__7613_7617 = G__7630;
i__7614_7618 = G__7631;
continue;
}
} else
{var obj_7632__$1 = cljs.core.first.call(null,seq__7611_7626__$1);var listener_7633 = obj_7632__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_7633.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_7633.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_7633);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_7633);
}
} else
{}
{
var G__7634 = cljs.core.next.call(null,seq__7611_7626__$1);
var G__7635 = null;
var G__7636 = 0;
var G__7637 = 0;
seq__7611_7615 = G__7634;
chunk__7612_7616 = G__7635;
count__7613_7617 = G__7636;
i__7614_7618 = G__7637;
continue;
}
}
} else
{}
}
break;
}
return listeners;
});})(obj))
;
return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963)),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))], null);
/**
* adding an event to the selected nodes
*/
enfocus.events.listen = (function listen(event,func){var wrapper = enfocus.events.wrapper_register.call(null,event);return ((function (wrapper){
return (function (pnod){if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",4374433830),event)) && ((window === pnod)))
{return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else
{if((wrapper == null))
{return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});
;})(wrapper))
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.events.remove_listeners = (function() { 
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__7638_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__7638_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__7638_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__7638_SHARP_:null))));
});return ((function (get_name){
return (function (pnod){var seq__7643 = cljs.core.seq.call(null,event_list);var chunk__7644 = null;var count__7645 = 0;var i__7646 = 0;while(true){
if((i__7646 < count__7645))
{var ev = cljs.core._nth.call(null,chunk__7644,i__7646);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__7647 = seq__7643;
var G__7648 = chunk__7644;
var G__7649 = count__7645;
var G__7650 = (i__7646 + 1);
seq__7643 = G__7647;
chunk__7644 = G__7648;
count__7645 = G__7649;
i__7646 = G__7650;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7643);if(temp__4126__auto__)
{var seq__7643__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7643__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__7643__$1);{
var G__7651 = cljs.core.chunk_rest.call(null,seq__7643__$1);
var G__7652 = c__4229__auto__;
var G__7653 = cljs.core.count.call(null,c__4229__auto__);
var G__7654 = 0;
seq__7643 = G__7651;
chunk__7644 = G__7652;
count__7645 = G__7653;
i__7646 = G__7654;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__7643__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__7655 = cljs.core.next.call(null,seq__7643__$1);
var G__7656 = null;
var G__7657 = 0;
var G__7658 = 0;
seq__7643 = G__7655;
chunk__7644 = G__7656;
count__7645 = G__7657;
i__7646 = G__7658;
continue;
}
}
} else
{return null;
}
}
break;
}
});
;})(get_name))
};
var remove_listeners = function (var_args){
var event_list = null;if (arguments.length > 0) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__7659){
var event_list = cljs.core.seq(arglist__7659);
return remove_listeners__delegate(event_list);
});
remove_listeners.cljs$core$IFn$_invoke$arity$variadic = remove_listeners__delegate;
return remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.events.unlisten = (function() {
var unlisten = null;
var unlisten__1 = (function (event){return enfocus.events.remove_listeners.call(null,event);
});
var unlisten__2 = (function (event,func){var wrapper = enfocus.events.wrapper_register.call(null,event);return ((function (wrapper){
return (function (pnod){if((wrapper == null))
{return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});
;})(wrapper))
});
unlisten = function(event,func){
switch(arguments.length){
case 1:
return unlisten__1.call(this,event);
case 2:
return unlisten__2.call(this,event,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$1 = unlisten__1;
unlisten.cljs$core$IFn$_invoke$arity$2 = unlisten__2;
return unlisten;
})()
;
enfocus.events.get_node_chain = (function get_node_chain(top,node){if(((node == null)) || (cljs.core._EQ_.call(null,node,top)))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.conj.call(null,get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function create_event(cur,cur_event){var event = goog.object.clone(cur_event);event.currentTarget = cur;
return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__7660_SHARP_){var seq__7665 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__7660_SHARP_.target));var chunk__7666 = null;var count__7667 = 0;var i__7668 = 0;while(true){
if((i__7668 < count__7667))
{var el = cljs.core._nth.call(null,chunk__7666,i__7668);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__7665,chunk__7666,count__7667,i__7668,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,el,p1__7660_SHARP_);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__7660_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__7660_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__7665,chunk__7666,count__7667,i__7668,el))
));
{
var G__7669 = seq__7665;
var G__7670 = chunk__7666;
var G__7671 = count__7667;
var G__7672 = (i__7668 + 1);
seq__7665 = G__7669;
chunk__7666 = G__7670;
count__7667 = G__7671;
i__7668 = G__7672;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7665);if(temp__4126__auto__)
{var seq__7665__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7665__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__7665__$1);{
var G__7673 = cljs.core.chunk_rest.call(null,seq__7665__$1);
var G__7674 = c__4229__auto__;
var G__7675 = cljs.core.count.call(null,c__4229__auto__);
var G__7676 = 0;
seq__7665 = G__7673;
chunk__7666 = G__7674;
count__7667 = G__7675;
i__7668 = G__7676;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__7665__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__7665,chunk__7666,count__7667,i__7668,el,seq__7665__$1,temp__4126__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,el,p1__7660_SHARP_);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__7660_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__7660_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__7665,chunk__7666,count__7667,i__7668,el,seq__7665__$1,temp__4126__auto__))
));
{
var G__7677 = cljs.core.next.call(null,seq__7665__$1);
var G__7678 = null;
var G__7679 = 0;
var G__7680 = 0;
seq__7665 = G__7677;
chunk__7666 = G__7678;
count__7667 = G__7679;
i__7668 = G__7680;
continue;
}
}
} else
{return null;
}
}
break;
}
})));
});
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){while(true){
if(cljs.core.not.call(null,child))
{return false;
} else
{if((parent === child))
{return false;
} else
{if((child.parentNode === parent))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__7681 = parent;
var G__7682 = child.parentNode;
parent = G__7681;
child = G__7682;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.events.mouse_enter_leave = (function mouse_enter_leave(func){return (function (e){var re = e.relatedTarget;var this$ = e.currentTarget;if((!((re === this$))) && (!(enfocus.events.child_of_QMARK_.call(null,this$,re))))
{return func.call(null,e);
} else
{return null;
}
});
});

//# sourceMappingURL=events.js.map