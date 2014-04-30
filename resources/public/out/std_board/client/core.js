// Compiled by ClojureScript 0.0-2202
goog.provide('std_board.client.core');
goog.require('cljs.core');
goog.require('enfocus.events');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('enfocus.core');
std_board.client.core.start = (function start(){return enfocus.core.at.call(null,"#container",enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,"Hello world!"),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){alert("Hello");
return console.log("World");
}))));
});
window.onload = (function (){return enfocus.core.setTimeout.call(null,(function check__4545__auto__(){if((cljs.core.deref.call(null,enfocus.core.tpl_load_cnt) === 0))
{return std_board.client.core.start.call(null);
} else
{return enfocus.core.setTimeout.call(null,(function (){return check__4545__auto__.call(null);
}),10);
}
}),0);
});

//# sourceMappingURL=core.js.map