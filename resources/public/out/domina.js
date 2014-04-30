// Compiled by ClojureScript 0.0-2202
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_7147 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7148 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7149 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7149,opt_wrapper_7147,table_section_wrapper_7148,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_7147,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_7148,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7148,cell_wrapper_7149,table_section_wrapper_7148,table_section_wrapper_7148]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3469__auto__ = div.firstChild;if(cljs.core.truth_(and__3469__auto__))
{return div.firstChild.childNodes;
} else
{return and__3469__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7154 = cljs.core.seq.call(null,tbody);var chunk__7155 = null;var count__7156 = 0;var i__7157 = 0;while(true){
if((i__7157 < count__7156))
{var child = cljs.core._nth.call(null,chunk__7155,i__7157);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7158 = seq__7154;
var G__7159 = chunk__7155;
var G__7160 = count__7156;
var G__7161 = (i__7157 + 1);
seq__7154 = G__7158;
chunk__7155 = G__7159;
count__7156 = G__7160;
i__7157 = G__7161;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7154);if(temp__4126__auto__)
{var seq__7154__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7154__$1))
{var c__4229__auto__ = cljs.core.chunk_first.call(null,seq__7154__$1);{
var G__7162 = cljs.core.chunk_rest.call(null,seq__7154__$1);
var G__7163 = c__4229__auto__;
var G__7164 = cljs.core.count.call(null,c__4229__auto__);
var G__7165 = 0;
seq__7154 = G__7162;
chunk__7155 = G__7163;
count__7156 = G__7164;
i__7157 = G__7165;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7154__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7166 = cljs.core.next.call(null,seq__7154__$1);
var G__7167 = null;
var G__7168 = 0;
var G__7169 = 0;
seq__7154 = G__7166;
chunk__7155 = G__7167;
count__7156 = G__7168;
i__7157 = G__7169;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7171 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7171,0,null);var start_wrap = cljs.core.nth.call(null,vec__7171,1,null);var end_wrap = cljs.core.nth.call(null,vec__7171,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7172 = wrapper.lastChild;
var G__7173 = (level - 1);
wrapper = G__7172;
level = G__7173;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3469__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3469__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3469__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj7175 = {};return obj7175;
})();
domina.nodes = (function nodes(content){if((function (){var and__3469__auto__ = content;if(and__3469__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3469__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4108__auto__ = (((content == null))?null:content);return (function (){var or__3481__auto__ = (domina.nodes[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (domina.nodes["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3469__auto__ = nodeseq;if(and__3469__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3469__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4108__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3481__auto__ = (domina.single_node[goog.typeOf(x__4108__auto__)]);if(or__3481__auto__)
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = (domina.single_node["_"]);if(or__3481__auto____$1)
{return or__3481__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3469__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3469__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3469__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__7176){
var mesg = cljs.core.seq(arglist__7176);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7177){
var mesg = cljs.core.seq(arglist__7177);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__7178){
var contents = cljs.core.seq(arglist__7178);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7179_SHARP_){return p1__7179_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7180_SHARP_,p2__7181_SHARP_){return goog.dom.insertChildAt(p1__7180_SHARP_,p2__7181_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7183_SHARP_,p2__7182_SHARP_){return goog.dom.insertSiblingBefore(p2__7182_SHARP_,p1__7183_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7185_SHARP_,p2__7184_SHARP_){return goog.dom.insertSiblingAfter(p2__7184_SHARP_,p1__7185_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7187_SHARP_,p2__7186_SHARP_){return goog.dom.replaceNode(p2__7186_SHARP_,p1__7187_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__7192_7196 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7193_7197 = null;var count__7194_7198 = 0;var i__7195_7199 = 0;while(true){
if((i__7195_7199 < count__7194_7198))
{var n_7200 = cljs.core._nth.call(null,chunk__7193_7197,i__7195_7199);goog.style.setStyle(n_7200,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7201 = seq__7192_7196;
var G__7202 = chunk__7193_7197;
var G__7203 = count__7194_7198;
var G__7204 = (i__7195_7199 + 1);
seq__7192_7196 = G__7201;
chunk__7193_7197 = G__7202;
count__7194_7198 = G__7203;
i__7195_7199 = G__7204;
continue;
}
} else
{var temp__4126__auto___7205 = cljs.core.seq.call(null,seq__7192_7196);if(temp__4126__auto___7205)
{var seq__7192_7206__$1 = temp__4126__auto___7205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7192_7206__$1))
{var c__4229__auto___7207 = cljs.core.chunk_first.call(null,seq__7192_7206__$1);{
var G__7208 = cljs.core.chunk_rest.call(null,seq__7192_7206__$1);
var G__7209 = c__4229__auto___7207;
var G__7210 = cljs.core.count.call(null,c__4229__auto___7207);
var G__7211 = 0;
seq__7192_7196 = G__7208;
chunk__7193_7197 = G__7209;
count__7194_7198 = G__7210;
i__7195_7199 = G__7211;
continue;
}
} else
{var n_7212 = cljs.core.first.call(null,seq__7192_7206__$1);goog.style.setStyle(n_7212,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7213 = cljs.core.next.call(null,seq__7192_7206__$1);
var G__7214 = null;
var G__7215 = 0;
var G__7216 = 0;
seq__7192_7196 = G__7213;
chunk__7193_7197 = G__7214;
count__7194_7198 = G__7215;
i__7195_7199 = G__7216;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7217){
var content = cljs.core.first(arglist__7217);
arglist__7217 = cljs.core.next(arglist__7217);
var name = cljs.core.first(arglist__7217);
var value = cljs.core.rest(arglist__7217);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__7222_7226 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7223_7227 = null;var count__7224_7228 = 0;var i__7225_7229 = 0;while(true){
if((i__7225_7229 < count__7224_7228))
{var n_7230 = cljs.core._nth.call(null,chunk__7223_7227,i__7225_7229);n_7230.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7231 = seq__7222_7226;
var G__7232 = chunk__7223_7227;
var G__7233 = count__7224_7228;
var G__7234 = (i__7225_7229 + 1);
seq__7222_7226 = G__7231;
chunk__7223_7227 = G__7232;
count__7224_7228 = G__7233;
i__7225_7229 = G__7234;
continue;
}
} else
{var temp__4126__auto___7235 = cljs.core.seq.call(null,seq__7222_7226);if(temp__4126__auto___7235)
{var seq__7222_7236__$1 = temp__4126__auto___7235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7222_7236__$1))
{var c__4229__auto___7237 = cljs.core.chunk_first.call(null,seq__7222_7236__$1);{
var G__7238 = cljs.core.chunk_rest.call(null,seq__7222_7236__$1);
var G__7239 = c__4229__auto___7237;
var G__7240 = cljs.core.count.call(null,c__4229__auto___7237);
var G__7241 = 0;
seq__7222_7226 = G__7238;
chunk__7223_7227 = G__7239;
count__7224_7228 = G__7240;
i__7225_7229 = G__7241;
continue;
}
} else
{var n_7242 = cljs.core.first.call(null,seq__7222_7236__$1);n_7242.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7243 = cljs.core.next.call(null,seq__7222_7236__$1);
var G__7244 = null;
var G__7245 = 0;
var G__7246 = 0;
seq__7222_7226 = G__7243;
chunk__7223_7227 = G__7244;
count__7224_7228 = G__7245;
i__7225_7229 = G__7246;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7247){
var content = cljs.core.first(arglist__7247);
arglist__7247 = cljs.core.next(arglist__7247);
var name = cljs.core.first(arglist__7247);
var value = cljs.core.rest(arglist__7247);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7252_7256 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7253_7257 = null;var count__7254_7258 = 0;var i__7255_7259 = 0;while(true){
if((i__7255_7259 < count__7254_7258))
{var n_7260 = cljs.core._nth.call(null,chunk__7253_7257,i__7255_7259);n_7260.removeAttribute(cljs.core.name.call(null,name));
{
var G__7261 = seq__7252_7256;
var G__7262 = chunk__7253_7257;
var G__7263 = count__7254_7258;
var G__7264 = (i__7255_7259 + 1);
seq__7252_7256 = G__7261;
chunk__7253_7257 = G__7262;
count__7254_7258 = G__7263;
i__7255_7259 = G__7264;
continue;
}
} else
{var temp__4126__auto___7265 = cljs.core.seq.call(null,seq__7252_7256);if(temp__4126__auto___7265)
{var seq__7252_7266__$1 = temp__4126__auto___7265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7252_7266__$1))
{var c__4229__auto___7267 = cljs.core.chunk_first.call(null,seq__7252_7266__$1);{
var G__7268 = cljs.core.chunk_rest.call(null,seq__7252_7266__$1);
var G__7269 = c__4229__auto___7267;
var G__7270 = cljs.core.count.call(null,c__4229__auto___7267);
var G__7271 = 0;
seq__7252_7256 = G__7268;
chunk__7253_7257 = G__7269;
count__7254_7258 = G__7270;
i__7255_7259 = G__7271;
continue;
}
} else
{var n_7272 = cljs.core.first.call(null,seq__7252_7266__$1);n_7272.removeAttribute(cljs.core.name.call(null,name));
{
var G__7273 = cljs.core.next.call(null,seq__7252_7266__$1);
var G__7274 = null;
var G__7275 = 0;
var G__7276 = 0;
seq__7252_7256 = G__7273;
chunk__7253_7257 = G__7274;
count__7254_7258 = G__7275;
i__7255_7259 = G__7276;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7278 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7278,0,null);var v = cljs.core.nth.call(null,vec__7278,1,null);if(cljs.core.truth_((function (){var and__3469__auto__ = k;if(cljs.core.truth_(and__3469__auto__))
{return v;
} else
{return and__3469__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__7279_SHARP_){var attr = attrs__$1.item(p1__7279_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7286_7292 = cljs.core.seq.call(null,styles);var chunk__7287_7293 = null;var count__7288_7294 = 0;var i__7289_7295 = 0;while(true){
if((i__7289_7295 < count__7288_7294))
{var vec__7290_7296 = cljs.core._nth.call(null,chunk__7287_7293,i__7289_7295);var name_7297 = cljs.core.nth.call(null,vec__7290_7296,0,null);var value_7298 = cljs.core.nth.call(null,vec__7290_7296,1,null);domina.set_style_BANG_.call(null,content,name_7297,value_7298);
{
var G__7299 = seq__7286_7292;
var G__7300 = chunk__7287_7293;
var G__7301 = count__7288_7294;
var G__7302 = (i__7289_7295 + 1);
seq__7286_7292 = G__7299;
chunk__7287_7293 = G__7300;
count__7288_7294 = G__7301;
i__7289_7295 = G__7302;
continue;
}
} else
{var temp__4126__auto___7303 = cljs.core.seq.call(null,seq__7286_7292);if(temp__4126__auto___7303)
{var seq__7286_7304__$1 = temp__4126__auto___7303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7286_7304__$1))
{var c__4229__auto___7305 = cljs.core.chunk_first.call(null,seq__7286_7304__$1);{
var G__7306 = cljs.core.chunk_rest.call(null,seq__7286_7304__$1);
var G__7307 = c__4229__auto___7305;
var G__7308 = cljs.core.count.call(null,c__4229__auto___7305);
var G__7309 = 0;
seq__7286_7292 = G__7306;
chunk__7287_7293 = G__7307;
count__7288_7294 = G__7308;
i__7289_7295 = G__7309;
continue;
}
} else
{var vec__7291_7310 = cljs.core.first.call(null,seq__7286_7304__$1);var name_7311 = cljs.core.nth.call(null,vec__7291_7310,0,null);var value_7312 = cljs.core.nth.call(null,vec__7291_7310,1,null);domina.set_style_BANG_.call(null,content,name_7311,value_7312);
{
var G__7313 = cljs.core.next.call(null,seq__7286_7304__$1);
var G__7314 = null;
var G__7315 = 0;
var G__7316 = 0;
seq__7286_7292 = G__7313;
chunk__7287_7293 = G__7314;
count__7288_7294 = G__7315;
i__7289_7295 = G__7316;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7323_7329 = cljs.core.seq.call(null,attrs);var chunk__7324_7330 = null;var count__7325_7331 = 0;var i__7326_7332 = 0;while(true){
if((i__7326_7332 < count__7325_7331))
{var vec__7327_7333 = cljs.core._nth.call(null,chunk__7324_7330,i__7326_7332);var name_7334 = cljs.core.nth.call(null,vec__7327_7333,0,null);var value_7335 = cljs.core.nth.call(null,vec__7327_7333,1,null);domina.set_attr_BANG_.call(null,content,name_7334,value_7335);
{
var G__7336 = seq__7323_7329;
var G__7337 = chunk__7324_7330;
var G__7338 = count__7325_7331;
var G__7339 = (i__7326_7332 + 1);
seq__7323_7329 = G__7336;
chunk__7324_7330 = G__7337;
count__7325_7331 = G__7338;
i__7326_7332 = G__7339;
continue;
}
} else
{var temp__4126__auto___7340 = cljs.core.seq.call(null,seq__7323_7329);if(temp__4126__auto___7340)
{var seq__7323_7341__$1 = temp__4126__auto___7340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7323_7341__$1))
{var c__4229__auto___7342 = cljs.core.chunk_first.call(null,seq__7323_7341__$1);{
var G__7343 = cljs.core.chunk_rest.call(null,seq__7323_7341__$1);
var G__7344 = c__4229__auto___7342;
var G__7345 = cljs.core.count.call(null,c__4229__auto___7342);
var G__7346 = 0;
seq__7323_7329 = G__7343;
chunk__7324_7330 = G__7344;
count__7325_7331 = G__7345;
i__7326_7332 = G__7346;
continue;
}
} else
{var vec__7328_7347 = cljs.core.first.call(null,seq__7323_7341__$1);var name_7348 = cljs.core.nth.call(null,vec__7328_7347,0,null);var value_7349 = cljs.core.nth.call(null,vec__7328_7347,1,null);domina.set_attr_BANG_.call(null,content,name_7348,value_7349);
{
var G__7350 = cljs.core.next.call(null,seq__7323_7341__$1);
var G__7351 = null;
var G__7352 = 0;
var G__7353 = 0;
seq__7323_7329 = G__7350;
chunk__7324_7330 = G__7351;
count__7325_7331 = G__7352;
i__7326_7332 = G__7353;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7358_7362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7359_7363 = null;var count__7360_7364 = 0;var i__7361_7365 = 0;while(true){
if((i__7361_7365 < count__7360_7364))
{var node_7366 = cljs.core._nth.call(null,chunk__7359_7363,i__7361_7365);goog.dom.classes.add(node_7366,class$);
{
var G__7367 = seq__7358_7362;
var G__7368 = chunk__7359_7363;
var G__7369 = count__7360_7364;
var G__7370 = (i__7361_7365 + 1);
seq__7358_7362 = G__7367;
chunk__7359_7363 = G__7368;
count__7360_7364 = G__7369;
i__7361_7365 = G__7370;
continue;
}
} else
{var temp__4126__auto___7371 = cljs.core.seq.call(null,seq__7358_7362);if(temp__4126__auto___7371)
{var seq__7358_7372__$1 = temp__4126__auto___7371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7358_7372__$1))
{var c__4229__auto___7373 = cljs.core.chunk_first.call(null,seq__7358_7372__$1);{
var G__7374 = cljs.core.chunk_rest.call(null,seq__7358_7372__$1);
var G__7375 = c__4229__auto___7373;
var G__7376 = cljs.core.count.call(null,c__4229__auto___7373);
var G__7377 = 0;
seq__7358_7362 = G__7374;
chunk__7359_7363 = G__7375;
count__7360_7364 = G__7376;
i__7361_7365 = G__7377;
continue;
}
} else
{var node_7378 = cljs.core.first.call(null,seq__7358_7372__$1);goog.dom.classes.add(node_7378,class$);
{
var G__7379 = cljs.core.next.call(null,seq__7358_7372__$1);
var G__7380 = null;
var G__7381 = 0;
var G__7382 = 0;
seq__7358_7362 = G__7379;
chunk__7359_7363 = G__7380;
count__7360_7364 = G__7381;
i__7361_7365 = G__7382;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7387_7391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7388_7392 = null;var count__7389_7393 = 0;var i__7390_7394 = 0;while(true){
if((i__7390_7394 < count__7389_7393))
{var node_7395 = cljs.core._nth.call(null,chunk__7388_7392,i__7390_7394);goog.dom.classes.remove(node_7395,class$);
{
var G__7396 = seq__7387_7391;
var G__7397 = chunk__7388_7392;
var G__7398 = count__7389_7393;
var G__7399 = (i__7390_7394 + 1);
seq__7387_7391 = G__7396;
chunk__7388_7392 = G__7397;
count__7389_7393 = G__7398;
i__7390_7394 = G__7399;
continue;
}
} else
{var temp__4126__auto___7400 = cljs.core.seq.call(null,seq__7387_7391);if(temp__4126__auto___7400)
{var seq__7387_7401__$1 = temp__4126__auto___7400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7387_7401__$1))
{var c__4229__auto___7402 = cljs.core.chunk_first.call(null,seq__7387_7401__$1);{
var G__7403 = cljs.core.chunk_rest.call(null,seq__7387_7401__$1);
var G__7404 = c__4229__auto___7402;
var G__7405 = cljs.core.count.call(null,c__4229__auto___7402);
var G__7406 = 0;
seq__7387_7391 = G__7403;
chunk__7388_7392 = G__7404;
count__7389_7393 = G__7405;
i__7390_7394 = G__7406;
continue;
}
} else
{var node_7407 = cljs.core.first.call(null,seq__7387_7401__$1);goog.dom.classes.remove(node_7407,class$);
{
var G__7408 = cljs.core.next.call(null,seq__7387_7401__$1);
var G__7409 = null;
var G__7410 = 0;
var G__7411 = 0;
seq__7387_7391 = G__7408;
chunk__7388_7392 = G__7409;
count__7389_7393 = G__7410;
i__7390_7394 = G__7411;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7416_7420 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7417_7421 = null;var count__7418_7422 = 0;var i__7419_7423 = 0;while(true){
if((i__7419_7423 < count__7418_7422))
{var node_7424 = cljs.core._nth.call(null,chunk__7417_7421,i__7419_7423);goog.dom.classes.toggle(node_7424,class$);
{
var G__7425 = seq__7416_7420;
var G__7426 = chunk__7417_7421;
var G__7427 = count__7418_7422;
var G__7428 = (i__7419_7423 + 1);
seq__7416_7420 = G__7425;
chunk__7417_7421 = G__7426;
count__7418_7422 = G__7427;
i__7419_7423 = G__7428;
continue;
}
} else
{var temp__4126__auto___7429 = cljs.core.seq.call(null,seq__7416_7420);if(temp__4126__auto___7429)
{var seq__7416_7430__$1 = temp__4126__auto___7429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7416_7430__$1))
{var c__4229__auto___7431 = cljs.core.chunk_first.call(null,seq__7416_7430__$1);{
var G__7432 = cljs.core.chunk_rest.call(null,seq__7416_7430__$1);
var G__7433 = c__4229__auto___7431;
var G__7434 = cljs.core.count.call(null,c__4229__auto___7431);
var G__7435 = 0;
seq__7416_7420 = G__7432;
chunk__7417_7421 = G__7433;
count__7418_7422 = G__7434;
i__7419_7423 = G__7435;
continue;
}
} else
{var node_7436 = cljs.core.first.call(null,seq__7416_7430__$1);goog.dom.classes.toggle(node_7436,class$);
{
var G__7437 = cljs.core.next.call(null,seq__7416_7430__$1);
var G__7438 = null;
var G__7439 = 0;
var G__7440 = 0;
seq__7416_7420 = G__7437;
chunk__7417_7421 = G__7438;
count__7418_7422 = G__7439;
i__7419_7423 = G__7440;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7449__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7445_7450 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7446_7451 = null;var count__7447_7452 = 0;var i__7448_7453 = 0;while(true){
if((i__7448_7453 < count__7447_7452))
{var node_7454 = cljs.core._nth.call(null,chunk__7446_7451,i__7448_7453);goog.dom.classes.set(node_7454,classes_7449__$1);
{
var G__7455 = seq__7445_7450;
var G__7456 = chunk__7446_7451;
var G__7457 = count__7447_7452;
var G__7458 = (i__7448_7453 + 1);
seq__7445_7450 = G__7455;
chunk__7446_7451 = G__7456;
count__7447_7452 = G__7457;
i__7448_7453 = G__7458;
continue;
}
} else
{var temp__4126__auto___7459 = cljs.core.seq.call(null,seq__7445_7450);if(temp__4126__auto___7459)
{var seq__7445_7460__$1 = temp__4126__auto___7459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7445_7460__$1))
{var c__4229__auto___7461 = cljs.core.chunk_first.call(null,seq__7445_7460__$1);{
var G__7462 = cljs.core.chunk_rest.call(null,seq__7445_7460__$1);
var G__7463 = c__4229__auto___7461;
var G__7464 = cljs.core.count.call(null,c__4229__auto___7461);
var G__7465 = 0;
seq__7445_7450 = G__7462;
chunk__7446_7451 = G__7463;
count__7447_7452 = G__7464;
i__7448_7453 = G__7465;
continue;
}
} else
{var node_7466 = cljs.core.first.call(null,seq__7445_7460__$1);goog.dom.classes.set(node_7466,classes_7449__$1);
{
var G__7467 = cljs.core.next.call(null,seq__7445_7460__$1);
var G__7468 = null;
var G__7469 = 0;
var G__7470 = 0;
seq__7445_7450 = G__7467;
chunk__7446_7451 = G__7468;
count__7447_7452 = G__7469;
i__7448_7453 = G__7470;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7475_7479 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7476_7480 = null;var count__7477_7481 = 0;var i__7478_7482 = 0;while(true){
if((i__7478_7482 < count__7477_7481))
{var node_7483 = cljs.core._nth.call(null,chunk__7476_7480,i__7478_7482);goog.dom.setTextContent(node_7483,value);
{
var G__7484 = seq__7475_7479;
var G__7485 = chunk__7476_7480;
var G__7486 = count__7477_7481;
var G__7487 = (i__7478_7482 + 1);
seq__7475_7479 = G__7484;
chunk__7476_7480 = G__7485;
count__7477_7481 = G__7486;
i__7478_7482 = G__7487;
continue;
}
} else
{var temp__4126__auto___7488 = cljs.core.seq.call(null,seq__7475_7479);if(temp__4126__auto___7488)
{var seq__7475_7489__$1 = temp__4126__auto___7488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7475_7489__$1))
{var c__4229__auto___7490 = cljs.core.chunk_first.call(null,seq__7475_7489__$1);{
var G__7491 = cljs.core.chunk_rest.call(null,seq__7475_7489__$1);
var G__7492 = c__4229__auto___7490;
var G__7493 = cljs.core.count.call(null,c__4229__auto___7490);
var G__7494 = 0;
seq__7475_7479 = G__7491;
chunk__7476_7480 = G__7492;
count__7477_7481 = G__7493;
i__7478_7482 = G__7494;
continue;
}
} else
{var node_7495 = cljs.core.first.call(null,seq__7475_7489__$1);goog.dom.setTextContent(node_7495,value);
{
var G__7496 = cljs.core.next.call(null,seq__7475_7489__$1);
var G__7497 = null;
var G__7498 = 0;
var G__7499 = 0;
seq__7475_7479 = G__7496;
chunk__7476_7480 = G__7497;
count__7477_7481 = G__7498;
i__7478_7482 = G__7499;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7504_7508 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7505_7509 = null;var count__7506_7510 = 0;var i__7507_7511 = 0;while(true){
if((i__7507_7511 < count__7506_7510))
{var node_7512 = cljs.core._nth.call(null,chunk__7505_7509,i__7507_7511);goog.dom.forms.setValue(node_7512,value);
{
var G__7513 = seq__7504_7508;
var G__7514 = chunk__7505_7509;
var G__7515 = count__7506_7510;
var G__7516 = (i__7507_7511 + 1);
seq__7504_7508 = G__7513;
chunk__7505_7509 = G__7514;
count__7506_7510 = G__7515;
i__7507_7511 = G__7516;
continue;
}
} else
{var temp__4126__auto___7517 = cljs.core.seq.call(null,seq__7504_7508);if(temp__4126__auto___7517)
{var seq__7504_7518__$1 = temp__4126__auto___7517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7504_7518__$1))
{var c__4229__auto___7519 = cljs.core.chunk_first.call(null,seq__7504_7518__$1);{
var G__7520 = cljs.core.chunk_rest.call(null,seq__7504_7518__$1);
var G__7521 = c__4229__auto___7519;
var G__7522 = cljs.core.count.call(null,c__4229__auto___7519);
var G__7523 = 0;
seq__7504_7508 = G__7520;
chunk__7505_7509 = G__7521;
count__7506_7510 = G__7522;
i__7507_7511 = G__7523;
continue;
}
} else
{var node_7524 = cljs.core.first.call(null,seq__7504_7518__$1);goog.dom.forms.setValue(node_7524,value);
{
var G__7525 = cljs.core.next.call(null,seq__7504_7518__$1);
var G__7526 = null;
var G__7527 = 0;
var G__7528 = 0;
seq__7504_7508 = G__7525;
chunk__7505_7509 = G__7526;
count__7506_7510 = G__7527;
i__7507_7511 = G__7528;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3469__auto__ = allows_inner_html_QMARK_;if(and__3469__auto__)
{var and__3469__auto____$1 = (function (){var or__3481__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3469__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
})()))
{var value_7539 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7535_7540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7536_7541 = null;var count__7537_7542 = 0;var i__7538_7543 = 0;while(true){
if((i__7538_7543 < count__7537_7542))
{var node_7544 = cljs.core._nth.call(null,chunk__7536_7541,i__7538_7543);node_7544.innerHTML = value_7539;
{
var G__7545 = seq__7535_7540;
var G__7546 = chunk__7536_7541;
var G__7547 = count__7537_7542;
var G__7548 = (i__7538_7543 + 1);
seq__7535_7540 = G__7545;
chunk__7536_7541 = G__7546;
count__7537_7542 = G__7547;
i__7538_7543 = G__7548;
continue;
}
} else
{var temp__4126__auto___7549 = cljs.core.seq.call(null,seq__7535_7540);if(temp__4126__auto___7549)
{var seq__7535_7550__$1 = temp__4126__auto___7549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7535_7550__$1))
{var c__4229__auto___7551 = cljs.core.chunk_first.call(null,seq__7535_7550__$1);{
var G__7552 = cljs.core.chunk_rest.call(null,seq__7535_7550__$1);
var G__7553 = c__4229__auto___7551;
var G__7554 = cljs.core.count.call(null,c__4229__auto___7551);
var G__7555 = 0;
seq__7535_7540 = G__7552;
chunk__7536_7541 = G__7553;
count__7537_7542 = G__7554;
i__7538_7543 = G__7555;
continue;
}
} else
{var node_7556 = cljs.core.first.call(null,seq__7535_7550__$1);node_7556.innerHTML = value_7539;
{
var G__7557 = cljs.core.next.call(null,seq__7535_7550__$1);
var G__7558 = null;
var G__7559 = 0;
var G__7560 = 0;
seq__7535_7540 = G__7557;
chunk__7536_7541 = G__7558;
count__7537_7542 = G__7559;
i__7538_7543 = G__7560;
continue;
}
}
} else
{}
}
break;
}
}catch (e7534){if((e7534 instanceof Error))
{var e_7561 = e7534;domina.replace_children_BANG_.call(null,content,value_7539);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7534;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3469__auto__ = bubble;if(cljs.core.truth_(and__3469__auto__))
{return (value == null);
} else
{return and__3469__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3481__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7568_7572 = cljs.core.seq.call(null,children);var chunk__7569_7573 = null;var count__7570_7574 = 0;var i__7571_7575 = 0;while(true){
if((i__7571_7575 < count__7570_7574))
{var child_7576 = cljs.core._nth.call(null,chunk__7569_7573,i__7571_7575);frag.appendChild(child_7576);
{
var G__7577 = seq__7568_7572;
var G__7578 = chunk__7569_7573;
var G__7579 = count__7570_7574;
var G__7580 = (i__7571_7575 + 1);
seq__7568_7572 = G__7577;
chunk__7569_7573 = G__7578;
count__7570_7574 = G__7579;
i__7571_7575 = G__7580;
continue;
}
} else
{var temp__4126__auto___7581 = cljs.core.seq.call(null,seq__7568_7572);if(temp__4126__auto___7581)
{var seq__7568_7582__$1 = temp__4126__auto___7581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7568_7582__$1))
{var c__4229__auto___7583 = cljs.core.chunk_first.call(null,seq__7568_7582__$1);{
var G__7584 = cljs.core.chunk_rest.call(null,seq__7568_7582__$1);
var G__7585 = c__4229__auto___7583;
var G__7586 = cljs.core.count.call(null,c__4229__auto___7583);
var G__7587 = 0;
seq__7568_7572 = G__7584;
chunk__7569_7573 = G__7585;
count__7570_7574 = G__7586;
i__7571_7575 = G__7587;
continue;
}
} else
{var child_7588 = cljs.core.first.call(null,seq__7568_7582__$1);frag.appendChild(child_7588);
{
var G__7589 = cljs.core.next.call(null,seq__7568_7582__$1);
var G__7590 = null;
var G__7591 = 0;
var G__7592 = 0;
seq__7568_7572 = G__7589;
chunk__7569_7573 = G__7590;
count__7570_7574 = G__7591;
i__7571_7575 = G__7592;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__7562_SHARP_,p2__7563_SHARP_){return f.call(null,p1__7562_SHARP_,p2__7563_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3469__auto__ = obj;if(cljs.core.truth_(and__3469__auto__))
{var and__3469__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3469__auto____$1)
{return obj.length;
} else
{return and__3469__auto____$1;
}
} else
{return and__3469__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7594 = list_thing;if(G__7594)
{var bit__4131__auto__ = (G__7594.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4131__auto__) || (G__7594.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7594);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7594);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7595 = content;if(G__7595)
{var bit__4131__auto__ = (G__7595.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4131__auto__) || (G__7595.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7595);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7595);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__7596 = content;if(G__7596)
{var bit__4131__auto__ = (G__7596.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4131__auto__) || (G__7596.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7596.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7596);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map