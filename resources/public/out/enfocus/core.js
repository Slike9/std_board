// Compiled by ClojureScript 0.0-2202
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom.forms');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('domina.css');
goog.require('goog.Timer');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('domina.css');
goog.require('goog.Timer');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.style');
goog.require('goog.style');
goog.require('enfocus.enlive.syntax');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.query');
goog.require('enfocus.enlive.syntax');
goog.require('goog.async.Delay');
enfocus.core.ISelector = (function (){var obj6535 = {};return obj6535;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__3469__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (enfocus.core.select[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (enfocus.core.select["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (enfocus.core.select[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (enfocus.core.select["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__3469__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (enfocus.core.select[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (enfocus.core.select["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;
enfocus.core.ITransform = (function (){var obj6537 = {};return obj6537;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__3469__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__3469__auto__ = this$;if(and__3469__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__3469__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__4108__auto__ = (((this$ == null))?null:this$);return (function (){var or__3481__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;
enfocus.core.debug = false;
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__3469__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__3469__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3469__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if((nl === window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__6538_SHARP_){if(typeof p1__6538_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__6538_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__6538_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__6545_6551 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__6546_6552 = null;var count__6547_6553 = 0;var i__6548_6554 = 0;while(true){
if((i__6548_6554 < count__6547_6553))
{var vec__6549_6555 = cljs.core._nth.call(null,chunk__6546_6552,i__6548_6554);var attr_6556 = cljs.core.nth.call(null,vec__6549_6555,0,null);var value_6557 = cljs.core.nth.call(null,vec__6549_6555,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_6556),value_6557);
{
var G__6558 = seq__6545_6551;
var G__6559 = chunk__6546_6552;
var G__6560 = count__6547_6553;
var G__6561 = (i__6548_6554 + 1);
seq__6545_6551 = G__6558;
chunk__6546_6552 = G__6559;
count__6547_6553 = G__6560;
i__6548_6554 = G__6561;
continue;
}
} else
{var temp__4126__auto___6562 = cljs.core.seq.call(null,seq__6545_6551);if(temp__4126__auto___6562)
{var seq__6545_6563__$1 = temp__4126__auto___6562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6545_6563__$1))
{var c__4229__auto___6564 = cljs.core.chunk_first.call(null,seq__6545_6563__$1);{
var G__6565 = cljs.core.chunk_rest.call(null,seq__6545_6563__$1);
var G__6566 = c__4229__auto___6564;
var G__6567 = cljs.core.count.call(null,c__4229__auto___6564);
var G__6568 = 0;
seq__6545_6551 = G__6565;
chunk__6546_6552 = G__6566;
count__6547_6553 = G__6567;
i__6548_6554 = G__6568;
continue;
}
} else
{var vec__6550_6569 = cljs.core.first.call(null,seq__6545_6563__$1);var attr_6570 = cljs.core.nth.call(null,vec__6550_6569,0,null);var value_6571 = cljs.core.nth.call(null,vec__6550_6569,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_6570),value_6571);
{
var G__6572 = cljs.core.next.call(null,seq__6545_6563__$1);
var G__6573 = null;
var G__6574 = 0;
var G__6575 = 0;
seq__6545_6551 = G__6572;
chunk__6546_6552 = G__6573;
count__6547_6553 = G__6574;
i__6548_6554 = G__6575;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){var seq__6580 = cljs.core.seq.call(null,values);var chunk__6581 = null;var count__6582 = 0;var i__6583 = 0;while(true){
if((i__6583 < count__6582))
{var attr = cljs.core._nth.call(null,chunk__6581,i__6583);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__6584 = seq__6580;
var G__6585 = chunk__6581;
var G__6586 = count__6582;
var G__6587 = (i__6583 + 1);
seq__6580 = G__6584;
chunk__6581 = G__6585;
count__6582 = G__6586;
i__6583 = G__6587;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6580);if(temp__4126__auto__)
{var seq__6580__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6580__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6580__$1);{
var G__6588 = cljs.core.chunk_rest.call(null,seq__6580__$1);
var G__6589 = c__4229__auto__;
var G__6590 = cljs.core.count.call(null,c__4229__auto__);
var G__6591 = 0;
seq__6580 = G__6588;
chunk__6581 = G__6589;
count__6582 = G__6590;
i__6583 = G__6591;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__6580__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__6592 = cljs.core.next.call(null,seq__6580__$1);
var G__6593 = null;
var G__6594 = 0;
var G__6595 = 0;
seq__6580 = G__6592;
chunk__6581 = G__6593;
count__6582 = G__6594;
i__6583 = G__6595;
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
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var seq__6602_6608 = cljs.core.seq.call(null,ats);var chunk__6603_6609 = null;var count__6604_6610 = 0;var i__6605_6611 = 0;while(true){
if((i__6605_6611 < count__6604_6610))
{var vec__6606_6612 = cljs.core._nth.call(null,chunk__6603_6609,i__6605_6611);var k_6613 = cljs.core.nth.call(null,vec__6606_6612,0,null);var v_6614 = cljs.core.nth.call(null,vec__6606_6612,1,null);add_map_attrs.call(null,elem,k_6613,v_6614);
{
var G__6615 = seq__6602_6608;
var G__6616 = chunk__6603_6609;
var G__6617 = count__6604_6610;
var G__6618 = (i__6605_6611 + 1);
seq__6602_6608 = G__6615;
chunk__6603_6609 = G__6616;
count__6604_6610 = G__6617;
i__6605_6611 = G__6618;
continue;
}
} else
{var temp__4126__auto___6619 = cljs.core.seq.call(null,seq__6602_6608);if(temp__4126__auto___6619)
{var seq__6602_6620__$1 = temp__4126__auto___6619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6602_6620__$1))
{var c__4229__auto___6621 = cljs.core.chunk_first.call(null,seq__6602_6620__$1);{
var G__6622 = cljs.core.chunk_rest.call(null,seq__6602_6620__$1);
var G__6623 = c__4229__auto___6621;
var G__6624 = cljs.core.count.call(null,c__4229__auto___6621);
var G__6625 = 0;
seq__6602_6608 = G__6622;
chunk__6603_6609 = G__6623;
count__6604_6610 = G__6624;
i__6605_6611 = G__6625;
continue;
}
} else
{var vec__6607_6626 = cljs.core.first.call(null,seq__6602_6620__$1);var k_6627 = cljs.core.nth.call(null,vec__6607_6626,0,null);var v_6628 = cljs.core.nth.call(null,vec__6607_6626,1,null);add_map_attrs.call(null,elem,k_6627,v_6628);
{
var G__6629 = cljs.core.next.call(null,seq__6602_6620__$1);
var G__6630 = null;
var G__6631 = 0;
var G__6632 = 0;
seq__6602_6608 = G__6629;
chunk__6603_6609 = G__6630;
count__6604_6610 = G__6631;
i__6605_6611 = G__6632;
continue;
}
}
} else
{}
}
break;
}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.call(null,child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var seq__6637_6641 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__6638_6642 = null;var count__6639_6643 = 0;var i__6640_6644 = 0;while(true){
if((i__6640_6644 < count__6639_6643))
{var node_6645 = cljs.core._nth.call(null,chunk__6638_6642,i__6640_6644);goog.dom.appendChild(div,node_6645);
{
var G__6646 = seq__6637_6641;
var G__6647 = chunk__6638_6642;
var G__6648 = count__6639_6643;
var G__6649 = (i__6640_6644 + 1);
seq__6637_6641 = G__6646;
chunk__6638_6642 = G__6647;
count__6639_6643 = G__6648;
i__6640_6644 = G__6649;
continue;
}
} else
{var temp__4126__auto___6650 = cljs.core.seq.call(null,seq__6637_6641);if(temp__4126__auto___6650)
{var seq__6637_6651__$1 = temp__4126__auto___6650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6637_6651__$1))
{var c__4229__auto___6652 = cljs.core.chunk_first.call(null,seq__6637_6651__$1);{
var G__6653 = cljs.core.chunk_rest.call(null,seq__6637_6651__$1);
var G__6654 = c__4229__auto___6652;
var G__6655 = cljs.core.count.call(null,c__4229__auto___6652);
var G__6656 = 0;
seq__6637_6641 = G__6653;
chunk__6638_6642 = G__6654;
count__6639_6643 = G__6655;
i__6640_6644 = G__6656;
continue;
}
} else
{var node_6657 = cljs.core.first.call(null,seq__6637_6651__$1);goog.dom.appendChild(div,node_6657);
{
var G__6658 = cljs.core.next.call(null,seq__6637_6651__$1);
var G__6659 = null;
var G__6660 = 0;
var G__6661 = 0;
seq__6637_6641 = G__6658;
chunk__6638_6642 = G__6659;
count__6639_6643 = G__6660;
i__6640_6644 = G__6661;
continue;
}
}
} else
{}
}
break;
}
}
goog.dom.appendChild(goog.dom.getDocument().documentElement,div);
return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){var child = div.childNodes;var frag = document.createDocumentFragment();goog.dom.append(frag,child);
goog.dom.removeNode(div);
return frag;
});
enfocus.core.last_element_child = (function last_element_child(node){return goog.dom.getLastElementChild(node);
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,((function (re){
return (function (a,b,c,d){return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
});})(re))
)], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__6662_SHARP_){var id = p1__6662_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__6662_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__6664 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__6664,0,null);var txt = cljs.core.nth.call(null,vec__6664,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){callback.call(null,req);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));var frag = document.createDocumentFragment();enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));
var seq__6669_6673 = cljs.core.seq.call(null,dfa);var chunk__6670_6674 = null;var count__6671_6675 = 0;var i__6672_6676 = 0;while(true){
if((i__6672_6676 < count__6671_6675))
{var df_6677 = cljs.core._nth.call(null,chunk__6670_6674,i__6672_6676);goog.dom.append(frag,df_6677);
{
var G__6678 = seq__6669_6673;
var G__6679 = chunk__6670_6674;
var G__6680 = count__6671_6675;
var G__6681 = (i__6672_6676 + 1);
seq__6669_6673 = G__6678;
chunk__6670_6674 = G__6679;
count__6671_6675 = G__6680;
i__6672_6676 = G__6681;
continue;
}
} else
{var temp__4126__auto___6682 = cljs.core.seq.call(null,seq__6669_6673);if(temp__4126__auto___6682)
{var seq__6669_6683__$1 = temp__4126__auto___6682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6669_6683__$1))
{var c__4229__auto___6684 = cljs.core.chunk_first.call(null,seq__6669_6683__$1);{
var G__6685 = cljs.core.chunk_rest.call(null,seq__6669_6683__$1);
var G__6686 = c__4229__auto___6684;
var G__6687 = cljs.core.count.call(null,c__4229__auto___6684);
var G__6688 = 0;
seq__6669_6673 = G__6685;
chunk__6670_6674 = G__6686;
count__6671_6675 = G__6687;
i__6672_6676 = G__6688;
continue;
}
} else
{var df_6689 = cljs.core.first.call(null,seq__6669_6683__$1);goog.dom.append(frag,df_6689);
{
var G__6690 = cljs.core.next.call(null,seq__6669_6683__$1);
var G__6691 = null;
var G__6692 = 0;
var G__6693 = 0;
seq__6669_6673 = G__6690;
chunk__6670_6674 = G__6691;
count__6671_6675 = G__6692;
i__6672_6676 = G__6693;
continue;
}
}
} else
{}
}
break;
}
return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = enfocus.core.create_sel_str.call(null,sel);var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else
{var vec__6696 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__6696,0,null);var tdom = cljs.core.nth.call(null,vec__6696,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__6696,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__6694_SHARP_){return p1__6694_SHARP_.outerHTML;
});})(vec__6696,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));enfocus.core.remove_node_return_child.call(null,dom);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to
* all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function() {
var extr_multi_node = null;
var extr_multi_node__1 = (function (func){return extr_multi_node.call(null,func,null);
});
var extr_multi_node__2 = (function (func,filt){var trans = (function trans(pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var result = cljs.core.map.call(null,func,pnod_col);var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);if((cljs.core.count.call(null,result__$1) <= 1))
{return cljs.core.first.call(null,result__$1);
} else
{return result__$1;
}
});if(typeof enfocus.core.t6701 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6701 = (function (trans,filt,func,extr_multi_node,meta6702){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta6702 = meta6702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6701.cljs$lang$type = true;
enfocus.core.t6701.cljs$lang$ctorStr = "enfocus.core/t6701";
enfocus.core.t6701.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"enfocus.core/t6701");
});})(trans))
;
enfocus.core.t6701.prototype.call = ((function (trans){
return (function() {
var G__6705 = null;
var G__6705__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6705__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6705 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6705__2.call(this,self__,nodes);
case 3:
return G__6705__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6705;
})()
;})(trans))
;
enfocus.core.t6701.prototype.apply = ((function (trans){
return (function (self__,args6704){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6704)));
});})(trans))
;
enfocus.core.t6701.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t6701.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t6701.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6701.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t6701.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t6701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_6703){var self__ = this;
var _6703__$1 = this;return self__.meta6702;
});})(trans))
;
enfocus.core.t6701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_6703,meta6702__$1){var self__ = this;
var _6703__$1 = this;return (new enfocus.core.t6701(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta6702__$1));
});})(trans))
;
enfocus.core.__GT_t6701 = ((function (trans){
return (function __GT_t6701(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta6702){return (new enfocus.core.t6701(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta6702));
});})(trans))
;
}
return (new enfocus.core.t6701(trans,filt,func,extr_multi_node,null));
});
extr_multi_node = function(func,filt){
switch(arguments.length){
case 1:
return extr_multi_node__1.call(this,func);
case 2:
return extr_multi_node__2.call(this,func,filt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extr_multi_node.cljs$core$IFn$_invoke$arity$1 = extr_multi_node__1;
extr_multi_node.cljs$core$IFn$_invoke$arity$2 = extr_multi_node__2;
return extr_multi_node;
})()
;
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = func.call(null,nodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t6715 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6715 = (function (trans,func,multi_node_chain,meta6716){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta6716 = meta6716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6715.cljs$lang$type = true;
enfocus.core.t6715.cljs$lang$ctorStr = "enfocus.core/t6715";
enfocus.core.t6715.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"enfocus.core/t6715");
});})(trans))
;
enfocus.core.t6715.prototype.call = ((function (trans){
return (function() {
var G__6723 = null;
var G__6723__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6723__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6723 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6723__2.call(this,self__,nodes);
case 3:
return G__6723__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6723;
})()
;})(trans))
;
enfocus.core.t6715.prototype.apply = ((function (trans){
return (function (self__,args6718){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6718)));
});})(trans))
;
enfocus.core.t6715.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t6715.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t6715.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6715.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t6715.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t6715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_6717){var self__ = this;
var _6717__$1 = this;return self__.meta6716;
});})(trans))
;
enfocus.core.t6715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_6717,meta6716__$1){var self__ = this;
var _6717__$1 = this;return (new enfocus.core.t6715(self__.trans,self__.func,self__.multi_node_chain,meta6716__$1));
});})(trans))
;
enfocus.core.__GT_t6715 = ((function (trans){
return (function __GT_t6715(trans__$1,func__$1,multi_node_chain__$1,meta6716){return (new enfocus.core.t6715(trans__$1,func__$1,multi_node_chain__$1,meta6716));
});})(trans))
;
}
return (new enfocus.core.t6715(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__6706_SHARP_){return domina.nodes.call(null,p1__6706_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t6719 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t6719 = (function (trans,func,values,multi_node_chain,meta6720){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta6720 = meta6720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t6719.cljs$lang$type = true;
enfocus.core.t6719.cljs$lang$ctorStr = "enfocus.core/t6719";
enfocus.core.t6719.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"enfocus.core/t6719");
});})(trans))
;
enfocus.core.t6719.prototype.call = ((function (trans){
return (function() {
var G__6724 = null;
var G__6724__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__6724__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__6724 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__6724__2.call(this,self__,nodes);
case 3:
return G__6724__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__6724;
})()
;})(trans))
;
enfocus.core.t6719.prototype.apply = ((function (trans){
return (function (self__,args6722){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args6722)));
});})(trans))
;
enfocus.core.t6719.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t6719.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t6719.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t6719.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t6719.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t6719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_6721){var self__ = this;
var _6721__$1 = this;return self__.meta6720;
});})(trans))
;
enfocus.core.t6719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_6721,meta6720__$1){var self__ = this;
var _6721__$1 = this;return (new enfocus.core.t6719(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta6720__$1));
});})(trans))
;
enfocus.core.__GT_t6719 = ((function (trans){
return (function __GT_t6719(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta6720){return (new enfocus.core.t6719(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta6720));
});})(trans))
;
}
return (new enfocus.core.t6719(trans,func,values,multi_node_chain,null));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6725_SHARP_,p2__6726_SHARP_){domina.destroy_children_BANG_.call(null,p1__6725_SHARP_);
return domina.append_BANG_.call(null,p1__6725_SHARP_,p2__6726_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__6727){
var values = cljs.core.seq(arglist__6727);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__6728_SHARP_){return domina.set_html_BANG_.call(null,p1__6728_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__6729_SHARP_){var seq__6736 = cljs.core.seq.call(null,pairs);var chunk__6737 = null;var count__6738 = 0;var i__6739 = 0;while(true){
if((i__6739 < count__6738))
{var vec__6740 = cljs.core._nth.call(null,chunk__6737,i__6739);var name = cljs.core.nth.call(null,vec__6740,0,null);var value = cljs.core.nth.call(null,vec__6740,1,null);domina.set_attr_BANG_.call(null,p1__6729_SHARP_,name,value);
{
var G__6742 = seq__6736;
var G__6743 = chunk__6737;
var G__6744 = count__6738;
var G__6745 = (i__6739 + 1);
seq__6736 = G__6742;
chunk__6737 = G__6743;
count__6738 = G__6744;
i__6739 = G__6745;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6736);if(temp__4126__auto__)
{var seq__6736__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6736__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6736__$1);{
var G__6746 = cljs.core.chunk_rest.call(null,seq__6736__$1);
var G__6747 = c__4229__auto__;
var G__6748 = cljs.core.count.call(null,c__4229__auto__);
var G__6749 = 0;
seq__6736 = G__6746;
chunk__6737 = G__6747;
count__6738 = G__6748;
i__6739 = G__6749;
continue;
}
} else
{var vec__6741 = cljs.core.first.call(null,seq__6736__$1);var name = cljs.core.nth.call(null,vec__6741,0,null);var value = cljs.core.nth.call(null,vec__6741,1,null);domina.set_attr_BANG_.call(null,p1__6729_SHARP_,name,value);
{
var G__6750 = cljs.core.next.call(null,seq__6736__$1);
var G__6751 = null;
var G__6752 = 0;
var G__6753 = 0;
seq__6736 = G__6750;
chunk__6737 = G__6751;
count__6738 = G__6752;
i__6739 = G__6753;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(pairs))
);
};
var set_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__6754){
var values = cljs.core.seq(arglist__6754);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6755_SHARP_){var seq__6760 = cljs.core.seq.call(null,values);var chunk__6761 = null;var count__6762 = 0;var i__6763 = 0;while(true){
if((i__6763 < count__6762))
{var name = cljs.core._nth.call(null,chunk__6761,i__6763);domina.remove_attr_BANG_.call(null,p1__6755_SHARP_,name);
{
var G__6764 = seq__6760;
var G__6765 = chunk__6761;
var G__6766 = count__6762;
var G__6767 = (i__6763 + 1);
seq__6760 = G__6764;
chunk__6761 = G__6765;
count__6762 = G__6766;
i__6763 = G__6767;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6760);if(temp__4126__auto__)
{var seq__6760__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6760__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6760__$1);{
var G__6768 = cljs.core.chunk_rest.call(null,seq__6760__$1);
var G__6769 = c__4229__auto__;
var G__6770 = cljs.core.count.call(null,c__4229__auto__);
var G__6771 = 0;
seq__6760 = G__6768;
chunk__6761 = G__6769;
count__6762 = G__6770;
i__6763 = G__6771;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__6760__$1);domina.remove_attr_BANG_.call(null,p1__6755_SHARP_,name);
{
var G__6772 = cljs.core.next.call(null,seq__6760__$1);
var G__6773 = null;
var G__6774 = 0;
var G__6775 = 0;
seq__6760 = G__6772;
chunk__6761 = G__6773;
count__6762 = G__6774;
i__6763 = G__6775;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__6776){
var values = cljs.core.seq(arglist__6776);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__6779){var vec__6780 = p__6779;var n = cljs.core.nth.call(null,vec__6780,0,null);var v = cljs.core.nth.call(null,vec__6780,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__6781){
var forms = cljs.core.seq(arglist__6781);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6782_SHARP_){var seq__6787 = cljs.core.seq.call(null,values);var chunk__6788 = null;var count__6789 = 0;var i__6790 = 0;while(true){
if((i__6790 < count__6789))
{var val = cljs.core._nth.call(null,chunk__6788,i__6790);domina.add_class_BANG_.call(null,p1__6782_SHARP_,val);
{
var G__6791 = seq__6787;
var G__6792 = chunk__6788;
var G__6793 = count__6789;
var G__6794 = (i__6790 + 1);
seq__6787 = G__6791;
chunk__6788 = G__6792;
count__6789 = G__6793;
i__6790 = G__6794;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6787);if(temp__4126__auto__)
{var seq__6787__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6787__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6787__$1);{
var G__6795 = cljs.core.chunk_rest.call(null,seq__6787__$1);
var G__6796 = c__4229__auto__;
var G__6797 = cljs.core.count.call(null,c__4229__auto__);
var G__6798 = 0;
seq__6787 = G__6795;
chunk__6788 = G__6796;
count__6789 = G__6797;
i__6790 = G__6798;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__6787__$1);domina.add_class_BANG_.call(null,p1__6782_SHARP_,val);
{
var G__6799 = cljs.core.next.call(null,seq__6787__$1);
var G__6800 = null;
var G__6801 = 0;
var G__6802 = 0;
seq__6787 = G__6799;
chunk__6788 = G__6800;
count__6789 = G__6801;
i__6790 = G__6802;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__6803){
var values = cljs.core.seq(arglist__6803);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6804_SHARP_){var seq__6809 = cljs.core.seq.call(null,values);var chunk__6810 = null;var count__6811 = 0;var i__6812 = 0;while(true){
if((i__6812 < count__6811))
{var val = cljs.core._nth.call(null,chunk__6810,i__6812);domina.remove_class_BANG_.call(null,p1__6804_SHARP_,val);
{
var G__6813 = seq__6809;
var G__6814 = chunk__6810;
var G__6815 = count__6811;
var G__6816 = (i__6812 + 1);
seq__6809 = G__6813;
chunk__6810 = G__6814;
count__6811 = G__6815;
i__6812 = G__6816;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6809);if(temp__4126__auto__)
{var seq__6809__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6809__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6809__$1);{
var G__6817 = cljs.core.chunk_rest.call(null,seq__6809__$1);
var G__6818 = c__4229__auto__;
var G__6819 = cljs.core.count.call(null,c__4229__auto__);
var G__6820 = 0;
seq__6809 = G__6817;
chunk__6810 = G__6818;
count__6811 = G__6819;
i__6812 = G__6820;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__6809__$1);domina.remove_class_BANG_.call(null,p1__6804_SHARP_,val);
{
var G__6821 = cljs.core.next.call(null,seq__6809__$1);
var G__6822 = null;
var G__6823 = 0;
var G__6824 = 0;
seq__6809 = G__6821;
chunk__6810 = G__6822;
count__6811 = G__6823;
i__6812 = G__6824;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__6825){
var values = cljs.core.seq(arglist__6825);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__6826_SHARP_){return domina.set_classes_BANG_.call(null,p1__6826_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__6827){
var values = cljs.core.seq(arglist__6827);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){return (function (pnod){var seq__6832 = cljs.core.seq.call(null,forms);var chunk__6833 = null;var count__6834 = 0;var i__6835 = 0;while(true){
if((i__6835 < count__6834))
{var fun = cljs.core._nth.call(null,chunk__6833,i__6835);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__6836 = seq__6832;
var G__6837 = chunk__6833;
var G__6838 = count__6834;
var G__6839 = (i__6835 + 1);
seq__6832 = G__6836;
chunk__6833 = G__6837;
count__6834 = G__6838;
i__6835 = G__6839;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6832);if(temp__4126__auto__)
{var seq__6832__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6832__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6832__$1);{
var G__6840 = cljs.core.chunk_rest.call(null,seq__6832__$1);
var G__6841 = c__4229__auto__;
var G__6842 = cljs.core.count.call(null,c__4229__auto__);
var G__6843 = 0;
seq__6832 = G__6840;
chunk__6833 = G__6841;
count__6834 = G__6842;
i__6835 = G__6843;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__6832__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__6844 = cljs.core.next.call(null,seq__6832__$1);
var G__6845 = null;
var G__6846 = 0;
var G__6847 = 0;
seq__6832 = G__6844;
chunk__6833 = G__6845;
count__6834 = G__6846;
i__6835 = G__6847;
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
};
var do__GT_ = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__6848){
var forms = cljs.core.seq(arglist__6848);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6849_SHARP_,p2__6850_SHARP_){return domina.append_BANG_.call(null,p1__6849_SHARP_,p2__6850_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__6851){
var values = cljs.core.seq(arglist__6851);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6852_SHARP_,p2__6853_SHARP_){return domina.prepend_BANG_.call(null,p1__6852_SHARP_,p2__6853_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__6854){
var values = cljs.core.seq(arglist__6854);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6855_SHARP_,p2__6856_SHARP_){return domina.insert_before_BANG_.call(null,p1__6855_SHARP_,p2__6856_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__6857){
var values = cljs.core.seq(arglist__6857);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6858_SHARP_,p2__6859_SHARP_){return domina.insert_after_BANG_.call(null,p1__6858_SHARP_,p2__6859_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__6860){
var values = cljs.core.seq(arglist__6860);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__6861_SHARP_,p2__6862_SHARP_){return domina.swap_content_BANG_.call(null,p1__6861_SHARP_,p2__6862_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__6863){
var values = cljs.core.seq(arglist__6863);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__6864_SHARP_){return domina.detach_BANG_.call(null,p1__6864_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name.call(null,elm));enfocus.core.add_map_attrs.call(null,elem,mattr);
enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){return (function (pnod){var frag = document.createDocumentFragment();goog.dom.append(frag,pnod.childNodes);
return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__6865_SHARP_){var seq__6872 = cljs.core.seq.call(null,pairs);var chunk__6873 = null;var count__6874 = 0;var i__6875 = 0;while(true){
if((i__6875 < count__6874))
{var vec__6876 = cljs.core._nth.call(null,chunk__6873,i__6875);var name = cljs.core.nth.call(null,vec__6876,0,null);var value = cljs.core.nth.call(null,vec__6876,1,null);domina.set_style_BANG_.call(null,p1__6865_SHARP_,name,value);
{
var G__6878 = seq__6872;
var G__6879 = chunk__6873;
var G__6880 = count__6874;
var G__6881 = (i__6875 + 1);
seq__6872 = G__6878;
chunk__6873 = G__6879;
count__6874 = G__6880;
i__6875 = G__6881;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6872);if(temp__4126__auto__)
{var seq__6872__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6872__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6872__$1);{
var G__6882 = cljs.core.chunk_rest.call(null,seq__6872__$1);
var G__6883 = c__4229__auto__;
var G__6884 = cljs.core.count.call(null,c__4229__auto__);
var G__6885 = 0;
seq__6872 = G__6882;
chunk__6873 = G__6883;
count__6874 = G__6884;
i__6875 = G__6885;
continue;
}
} else
{var vec__6877 = cljs.core.first.call(null,seq__6872__$1);var name = cljs.core.nth.call(null,vec__6877,0,null);var value = cljs.core.nth.call(null,vec__6877,1,null);domina.set_style_BANG_.call(null,p1__6865_SHARP_,name,value);
{
var G__6886 = cljs.core.next.call(null,seq__6872__$1);
var G__6887 = null;
var G__6888 = 0;
var G__6889 = 0;
seq__6872 = G__6886;
chunk__6873 = G__6887;
count__6874 = G__6888;
i__6875 = G__6889;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(pairs))
);
};
var set_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__6890){
var values = cljs.core.seq(arglist__6890);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__6891){
var values = cljs.core.seq(arglist__6891);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){return (function (node){return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){return (function (node){return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__6892_SHARP_){return domina.set_data_BANG_.call(null,p1__6892_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout.call(null,(function (){return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__6893){
var ttime = cljs.core.first(arglist__6893);
var funcs = cljs.core.rest(arglist__6893);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__6895_SHARP_,p2__6894_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__6894_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__6920_6928 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__6921_6929 = null;var count__6922_6930 = 0;var i__6923_6931 = 0;while(true){
if((i__6923_6931 < count__6922_6930))
{var idx_6932 = cljs.core._nth.call(null,chunk__6921_6929,i__6923_6931);var attr_6933 = pnod.attributes.item(idx_6932);if(cljs.core.truth_(attr_6933.specified))
{attr_6933.value = rep_str.call(null,attr_6933.value);
} else
{}
{
var G__6934 = seq__6920_6928;
var G__6935 = chunk__6921_6929;
var G__6936 = count__6922_6930;
var G__6937 = (i__6923_6931 + 1);
seq__6920_6928 = G__6934;
chunk__6921_6929 = G__6935;
count__6922_6930 = G__6936;
i__6923_6931 = G__6937;
continue;
}
} else
{var temp__4126__auto___6938 = cljs.core.seq.call(null,seq__6920_6928);if(temp__4126__auto___6938)
{var seq__6920_6939__$1 = temp__4126__auto___6938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6920_6939__$1))
{var c__4229__auto___6940 = cljs.core.chunk_first.call(null,seq__6920_6939__$1);{
var G__6941 = cljs.core.chunk_rest.call(null,seq__6920_6939__$1);
var G__6942 = c__4229__auto___6940;
var G__6943 = cljs.core.count.call(null,c__4229__auto___6940);
var G__6944 = 0;
seq__6920_6928 = G__6941;
chunk__6921_6929 = G__6942;
count__6922_6930 = G__6943;
i__6923_6931 = G__6944;
continue;
}
} else
{var idx_6945 = cljs.core.first.call(null,seq__6920_6939__$1);var attr_6946 = pnod.attributes.item(idx_6945);if(cljs.core.truth_(attr_6946.specified))
{attr_6946.value = rep_str.call(null,attr_6946.value);
} else
{}
{
var G__6947 = cljs.core.next.call(null,seq__6920_6939__$1);
var G__6948 = null;
var G__6949 = 0;
var G__6950 = 0;
seq__6920_6928 = G__6947;
chunk__6921_6929 = G__6948;
count__6922_6930 = G__6949;
i__6923_6931 = G__6950;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core._EQ_.call(null,pnod.nodeType,3))
{return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else
{var seq__6924 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__6925 = null;var count__6926 = 0;var i__6927 = 0;while(true){
if((i__6927 < count__6926))
{var cnode = cljs.core._nth.call(null,chunk__6925,i__6927);rep_node.call(null,cnode);
{
var G__6951 = seq__6924;
var G__6952 = chunk__6925;
var G__6953 = count__6926;
var G__6954 = (i__6927 + 1);
seq__6924 = G__6951;
chunk__6925 = G__6952;
count__6926 = G__6953;
i__6927 = G__6954;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6924);if(temp__4126__auto__)
{var seq__6924__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6924__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6924__$1);{
var G__6955 = cljs.core.chunk_rest.call(null,seq__6924__$1);
var G__6956 = c__4229__auto__;
var G__6957 = cljs.core.count.call(null,c__4229__auto__);
var G__6958 = 0;
seq__6924 = G__6955;
chunk__6925 = G__6956;
count__6926 = G__6957;
i__6927 = G__6958;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__6924__$1);rep_node.call(null,cnode);
{
var G__6959 = cljs.core.next.call(null,seq__6924__$1);
var G__6960 = null;
var G__6961 = 0;
var G__6962 = 0;
seq__6924 = G__6959;
chunk__6925 = G__6960;
count__6926 = G__6961;
i__6927 = G__6962;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function exists_in_QMARK_(col_or_val,val){if(cljs.core.coll_QMARK_.call(null,col_or_val))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([val], true),col_or_val);
} else
{return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
* sets the value of a form input (text,select,checkbox,etc...)
* format (at node (set-form-input value))
*/
enfocus.core.set_form_input = (function set_form_input(val){return (function (el){if((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio")))
{return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else
{var nval = (((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string')))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
* sets the values of a form based on a map
* (set-form {:val1 'val' :val2 'val'})
*/
enfocus.core.set_form = (function set_form(value_map){return (function (form_node){if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM"))
{var seq__6967 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));var chunk__6968 = null;var count__6969 = 0;var i__6970 = 0;while(true){
if((i__6970 < count__6969))
{var idx = cljs.core._nth.call(null,chunk__6968,i__6970);var el_6971 = (form_node.elements[idx]);var ky_6972 = cljs.core.keyword.call(null,el_6971.name);var val_6973 = ky_6972.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_6972))
{var val_6974__$1 = (cljs.core.truth_(val_6973)?val_6973:"");enfocus.core.set_form_input.call(null,val_6974__$1).call(null,el_6971);
} else
{}
{
var G__6975 = seq__6967;
var G__6976 = chunk__6968;
var G__6977 = count__6969;
var G__6978 = (i__6970 + 1);
seq__6967 = G__6975;
chunk__6968 = G__6976;
count__6969 = G__6977;
i__6970 = G__6978;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6967);if(temp__4126__auto__)
{var seq__6967__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6967__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__6967__$1);{
var G__6979 = cljs.core.chunk_rest.call(null,seq__6967__$1);
var G__6980 = c__4229__auto__;
var G__6981 = cljs.core.count.call(null,c__4229__auto__);
var G__6982 = 0;
seq__6967 = G__6979;
chunk__6968 = G__6980;
count__6969 = G__6981;
i__6970 = G__6982;
continue;
}
} else
{var idx = cljs.core.first.call(null,seq__6967__$1);var el_6983 = (form_node.elements[idx]);var ky_6984 = cljs.core.keyword.call(null,el_6983.name);var val_6985 = ky_6984.call(null,value_map);if(cljs.core.contains_QMARK_.call(null,value_map,ky_6984))
{var val_6986__$1 = (cljs.core.truth_(val_6985)?val_6985:"");enfocus.core.set_form_input.call(null,val_6986__$1).call(null,el_6983);
} else
{}
{
var G__6987 = cljs.core.next.call(null,seq__6967__$1);
var G__6988 = null;
var G__6989 = 0;
var G__6990 = 0;
seq__6967 = G__6987;
chunk__6968 = G__6988;
count__6969 = G__6989;
i__6970 = G__6990;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){if(typeof node_spec === 'string')
{return document.createTextNode(node_spec);
} else
{if(cljs.core.vector_QMARK_.call(null,node_spec))
{var vec__7000 = node_spec;var tag = cljs.core.nth.call(null,vec__7000,0,null);var vec__7001 = cljs.core.nthnext.call(null,vec__7000,1);var m = cljs.core.nth.call(null,vec__7001,0,null);var ms = cljs.core.nthnext.call(null,vec__7001,1);var more = vec__7001;var vec__7002 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__7002,0,null);var segments = cljs.core.nthnext.call(null,vec__7002,1);var id = cljs.core.some.call(null,((function (vec__7000,tag,vec__7001,m,ms,more,vec__7002,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__7000,tag,vec__7001,m,ms,more,vec__7002,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__7000,tag,vec__7001,m,ms,more,vec__7002,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__7000,tag,vec__7001,m,ms,more,vec__7002,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__7003_7009 = cljs.core.seq.call(null,attrs__$2);var chunk__7004_7010 = null;var count__7005_7011 = 0;var i__7006_7012 = 0;while(true){
if((i__7006_7012 < count__7005_7011))
{var vec__7007_7013 = cljs.core._nth.call(null,chunk__7004_7010,i__7006_7012);var key_7014 = cljs.core.nth.call(null,vec__7007_7013,0,null);var val_7015 = cljs.core.nth.call(null,vec__7007_7013,1,null);node.setAttribute(cljs.core.name.call(null,key_7014),val_7015);
{
var G__7016 = seq__7003_7009;
var G__7017 = chunk__7004_7010;
var G__7018 = count__7005_7011;
var G__7019 = (i__7006_7012 + 1);
seq__7003_7009 = G__7016;
chunk__7004_7010 = G__7017;
count__7005_7011 = G__7018;
i__7006_7012 = G__7019;
continue;
}
} else
{var temp__4126__auto___7020 = cljs.core.seq.call(null,seq__7003_7009);if(temp__4126__auto___7020)
{var seq__7003_7021__$1 = temp__4126__auto___7020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7003_7021__$1))
{var c__4229__auto___7022 = cljs.core.chunk_first.call(null,seq__7003_7021__$1);{
var G__7023 = cljs.core.chunk_rest.call(null,seq__7003_7021__$1);
var G__7024 = c__4229__auto___7022;
var G__7025 = cljs.core.count.call(null,c__4229__auto___7022);
var G__7026 = 0;
seq__7003_7009 = G__7023;
chunk__7004_7010 = G__7024;
count__7005_7011 = G__7025;
i__7006_7012 = G__7026;
continue;
}
} else
{var vec__7008_7027 = cljs.core.first.call(null,seq__7003_7021__$1);var key_7028 = cljs.core.nth.call(null,vec__7008_7027,0,null);var val_7029 = cljs.core.nth.call(null,vec__7008_7027,1,null);node.setAttribute(cljs.core.name.call(null,key_7028),val_7029);
{
var G__7030 = cljs.core.next.call(null,seq__7003_7021__$1);
var G__7031 = null;
var G__7032 = 0;
var G__7033 = 0;
seq__7003_7009 = G__7030;
chunk__7004_7010 = G__7031;
count__7005_7011 = G__7032;
i__7006_7012 = G__7033;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_.call(null,node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_.call(null,node_spec))
{return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return document.createTextNode([cljs.core.str(node_spec)].join(''));
} else
{return null;
}
}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node.call(null,(function (pnod){return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node.call(null,(function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node.call(null,(function (node){return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node.call(null,(function (pnod){return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = form_map.call(null,ky);if(cljs.core.truth_(val))
{if((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val)))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else
{if(cljs.core.coll_QMARK_.call(null,mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.fromArray([mval,val], true));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.assoc.call(null,form_map,ky,val);
} else
{return null;
}
}
}
}
} else
{return form_map;
}
});
/**
* returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
*/
enfocus.core.read_form_input = (function read_form_input(){var trans = (function (nodes,chain){var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__7035_SHARP_,p2__7034_SHARP_){var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__7034_SHARP_));if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals)))
{return cljs.core.into.call(null,p1__7035_SHARP_,vals);
} else
{if(cljs.core.truth_(vals))
{return cljs.core.conj.call(null,p1__7035_SHARP_,vals);
} else
{return p1__7035_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);if(cljs.core.empty_QMARK_.call(null,result))
{return null;
} else
{if((cljs.core._EQ_.call(null,1,cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first.call(null,nod_col).type))))
{return cljs.core.first.call(null,result);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return result;
} else
{return null;
}
}
}
});if(typeof enfocus.core.t7040 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t7040 = (function (trans,read_form_input,meta7041){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta7041 = meta7041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t7040.cljs$lang$type = true;
enfocus.core.t7040.cljs$lang$ctorStr = "enfocus.core/t7040";
enfocus.core.t7040.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"enfocus.core/t7040");
});})(trans))
;
enfocus.core.t7040.prototype.call = ((function (trans){
return (function() {
var G__7044 = null;
var G__7044__2 = (function (self__,nodes){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,null);
});
var G__7044__3 = (function (self__,nodes,chain){var self__ = this;
var self____$1 = this;var _ = self____$1;return self__.trans.call(null,nodes,chain);
});
G__7044 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__7044__2.call(this,self__,nodes);
case 3:
return G__7044__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7044;
})()
;})(trans))
;
enfocus.core.t7040.prototype.apply = ((function (trans){
return (function (self__,args7043){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7043)));
});})(trans))
;
enfocus.core.t7040.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t7040.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){var self__ = this;
var _ = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t7040.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t7040.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});})(trans))
;
enfocus.core.t7040.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});})(trans))
;
enfocus.core.t7040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_7042){var self__ = this;
var _7042__$1 = this;return self__.meta7041;
});})(trans))
;
enfocus.core.t7040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_7042,meta7041__$1){var self__ = this;
var _7042__$1 = this;return (new enfocus.core.t7040(self__.trans,self__.read_form_input,meta7041__$1));
});})(trans))
;
enfocus.core.__GT_t7040 = ((function (trans){
return (function __GT_t7040(trans__$1,read_form_input__$1,meta7041){return (new enfocus.core.t7040(trans__$1,read_form_input__$1,meta7041));
});})(trans))
;
}
return (new enfocus.core.t7040(trans,read_form_input,null));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__7046_SHARP_,p2__7045_SHARP_){if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__7045_SHARP_).name)))
{return enfocus.core.merge_form_val.call(null,p1__7046_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__7045_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__7045_SHARP_)));
} else
{return p1__7046_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter.call(null,ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.call(null,trans,res);
} else
{return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",1756218137),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){return (function (node){if(cljs.core.truth_((node["matches"])))
{return node.matches(selector);
} else
{if(cljs.core.truth_((node["matchesSelector"])))
{return node.matchesSelector(selector);
} else
{if(cljs.core.truth_((node["msMatchesSelector"])))
{return node.msMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["mozMatchesSelector"])))
{return node.mozMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["webkitMatchesSelector"])))
{return node.webkitMatchesSelector(selector);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));
} else
{return null;
}
}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__7047_SHARP_){if((p1__7047_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__7047_SHARP_);
} else
{if((p1__7047_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__7047_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__7047_SHARP_))
{return create_sel_str.call(null,p1__7047_SHARP_);
} else
{if(typeof p1__7047_SHARP_ === 'string')
{return p1__7047_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));var ret = domina.css.sel.call(null,dom_node,sel);return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){var or__3481__auto__ = func;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__3469__auto__ = !((node == null));if(and__3469__auto__)
{var G__7058 = node;if(G__7058)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__7058.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__7058.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7058);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7058);
}
} else
{return and__3469__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__7059 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__7059,0,null);var trans__$1 = cljs.core.nth.call(null,vec__7059,1,null);var seq__7060 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__7061 = null;var count__7062 = 0;var i__7063 = 0;while(true){
if((i__7063 < count__7062))
{var vec__7064 = cljs.core._nth.call(null,chunk__7061,i__7063);var sel = cljs.core.nth.call(null,vec__7064,0,null);var t = cljs.core.nth.call(null,vec__7064,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__7066 = seq__7060;
var G__7067 = chunk__7061;
var G__7068 = count__7062;
var G__7069 = (i__7063 + 1);
seq__7060 = G__7066;
chunk__7061 = G__7067;
count__7062 = G__7068;
i__7063 = G__7069;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7060);if(temp__4126__auto__)
{var seq__7060__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7060__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__7060__$1);{
var G__7070 = cljs.core.chunk_rest.call(null,seq__7060__$1);
var G__7071 = c__4229__auto__;
var G__7072 = cljs.core.count.call(null,c__4229__auto__);
var G__7073 = 0;
seq__7060 = G__7070;
chunk__7061 = G__7071;
count__7062 = G__7072;
i__7063 = G__7073;
continue;
}
} else
{var vec__7065 = cljs.core.first.call(null,seq__7060__$1);var sel = cljs.core.nth.call(null,vec__7065,0,null);var t = cljs.core.nth.call(null,vec__7065,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__7074 = cljs.core.next.call(null,seq__7060__$1);
var G__7075 = null;
var G__7076 = 0;
var G__7077 = 0;
seq__7060 = G__7074;
chunk__7061 = G__7075;
count__7062 = G__7076;
i__7063 = G__7077;
continue;
}
}
} else
{return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__7078){
var id_mask = cljs.core.first(arglist__7078);
arglist__7078 = cljs.core.next(arglist__7078);
var node = cljs.core.first(arglist__7078);
var trans = cljs.core.rest(arglist__7078);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__7079){
var node = cljs.core.first(arglist__7079);
var trans = cljs.core.rest(arglist__7079);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__7084 = node;if(G__7084)
{var bit__4131__auto__ = null;if(cljs.core.truth_((function (){var or__3481__auto__ = bit__4131__auto__;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return G__7084.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__7084.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7084);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__7084);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__7085 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__7085,0,null);var trans__$1 = cljs.core.nth.call(null,vec__7085,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__7085,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__7086){var vec__7087 = p__7086;var ky = cljs.core.nth.call(null,vec__7087,0,null);var sel = cljs.core.nth.call(null,vec__7087,1,null);var ext = cljs.core.nth.call(null,vec__7087,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__7085,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,3,trans__$1)));
} else
{return null;
}
}
}
};
var from = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__7088){
var node = cljs.core.first(arglist__7088);
var trans = cljs.core.rest(arglist__7088);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_.call(null,id_mask))
{return domina.xpath.xpath.call(null,root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){return root;
});
if(cljs.core.truth_((typeof Text != 'undefined')))
{Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
} else
{}
(enfocus.core.ISelector["null"] = true);
(enfocus.core.select["null"] = (function() {
var G__7089 = null;
var G__7089__1 = (function (this$){return cljs.core.List.EMPTY;
});
var G__7089__2 = (function (this$,root){return cljs.core.List.EMPTY;
});
var G__7089__3 = (function (this$,root,id_mask){return cljs.core.List.EMPTY;
});
G__7089 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7089__1.call(this,this$);
case 2:
return G__7089__2.call(this,this$,root);
case 3:
return G__7089__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7089;
})()
);
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__7090 = null;
var G__7090__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__7090__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__7090__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__7090 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7090__1.call(this,this$);
case 2:
return G__7090__2.call(this,this$,root);
case 3:
return G__7090__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7090;
})()
);
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function() {
var G__7091 = null;
var G__7091__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__7091__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__7091__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__7091 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__7091__1.call(this,this$);
case 2:
return G__7091__2.call(this,this$,root);
case 3:
return G__7091__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7091;
})()
);
(enfocus.core.ITransform["null"] = true);
(enfocus.core.apply_transform["null"] = (function() {
var G__7092 = null;
var G__7092__2 = (function (trans,nodes){return nodes;
});
var G__7092__3 = (function (trans,nodes,chain){return nodes;
});
G__7092 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__7092__2.call(this,trans,nodes);
case 3:
return G__7092__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7092;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__7093 = null;
var G__7093__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__7093__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__7093 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__7093__2.call(this,trans,nodes);
case 3:
return G__7093__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__7093;
})()
);

//# sourceMappingURL=core.js.map