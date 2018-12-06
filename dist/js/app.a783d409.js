(function(t){function e(e){for(var r,c,a=e[0],s=e[1],l=e[2],f=0,m=[];f<a.length;f++)c=a[f],o[c]&&m.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("034f"),n("2877")),a={},s=Object(c["a"])(a,o,i,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Medium.com Tech Scraper")]),r("button",{attrs:{disabled:t.buttonActive},on:{click:function(e){t.$router.push({path:"content/"})}}},[t._v("Click Here To Begin")]),t.buttonActive?r("div",[r("h3",[t._v("Please wait while we gather the latest articles...")]),r("img",{attrs:{src:n("cf1c"),alt:"A spinning loading image."}})]):t._e()])},m=[],p={computed:{buttonActive:function(){return this.$store.getters.getFetching}},beforeRouteLeave:function(t,e,n){this.$store.commit("setFetching"),this.$store.dispatch("scrapeArticles").then(function(t){var e=t.data;e.scraped&&n()})}},d=p,v=Object(c["a"])(d,f,m,!1,null,null,null);v.options.__file="Home.vue";var h=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-grid"},[t._m(0),n("section",{staticClass:"articles"},t._l(t.articles,function(t,e){return n("article-card",{key:e,attrs:{article:t}})})),t.activeArticle?n("section",{staticClass:"comments"},[n("form",[n("h3",[t._v("Post Your Comment!")]),n("label",{attrs:{for:"newCommentTitle"}},[t._v(" Title\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",id:"newCommentTitle"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("label",{attrs:{for:"newCommentBody"}},[t._v(" Comment\n        "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.body,expression:"body"}],attrs:{id:"newCommentBody",cols:"30",rows:"10"},domProps:{value:t.body},on:{input:function(e){e.target.composing||(t.body=e.target.value)}}})]),n("button",{on:{click:function(e){t.postComment({id:t.activeArticle,postedComment:{title:t.title,body:t.body}}).then(t.resetForm)}}},[t._v("Add Comment")])]),t._l(t.comments,function(t,e){return n("comment-card",{key:e,attrs:{comment:t}})})],2):t._e(),t._m(1)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"header"},[n("h1",[t._v("News Page Scraper")]),n("h2",[t._v("All The News That's Fit To Scrape")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("p",[t._v("Copyright 2018 "),n("a",{attrs:{href:"http://natebecker11.com",target:"_blank"}},[t._v("Nate Becker")])])])}],g=n("be94"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:this.article.link,target:"_blank"}},[n("h3",[t._v(" "+t._s(t.article.title)+" ")])]),n("p",[t._v(" "+t._s(t.article.description)+" ")]),n("p",{staticStyle:{"font-weight":"bold"}},[t._v("By "+t._s(t.article.author)+" ")]),n("button",{attrs:{articleId:this.article._id},on:{click:function(e){t.selectArticle({articleId:t.article._id})}}},[t._v("See Comments")])])},C=[],y=n("2f62"),w={props:["article"],methods:Object(g["a"])({},Object(y["b"])(["selectArticle"]),{setA:function(t){return this.$store.commit("setActiveArticle",t)}})},O=w,j=Object(c["a"])(O,A,C,!1,null,null,null);j.options.__file="ArticleCard.vue";var x=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(" "+t._s(t.comment.title)+" ")]),n("p",[t._v(" "+t._s(t.comment.body)+" ")])])},k=[],P={props:["comment"]},S=P,T=Object(c["a"])(S,$,k,!1,null,null,null);T.options.__file="CommentCard.vue";var I=T.exports,E={data:function(){return{title:"",body:""}},computed:{articles:function(){return this.$store.getters.getCurrentArticles},comments:function(){return this.$store.getters.getCurrentComments},activeArticle:function(){return this.$store.getters.getActiveArticleId}},methods:Object(g["a"])({},Object(y["b"])(["postComment","fetchArticles","selectArticle"]),{resetForm:function(t){this.title="",this.body=""}}),components:{articleCard:x,commentCard:I}},F=E,B=(n("de97"),Object(c["a"])(F,b,_,!1,null,"e75dee8e",null));B.options.__file="Content.vue";var M=B.exports,N=n("bc3a"),H=n.n(N);n("3e8f");r["a"].use(y["a"]);var J=new y["a"].Store({state:{currentArticles:[],currentComments:[{title:"Hey brosef",body:"Hey broooosef"},{title:"Wubba",body:"dubba lubba"}],activeArticleId:"",fetching:!1},getters:{getCurrentArticles:function(t){return t.currentArticles},getCurrentComments:function(t){return t.currentComments.slice().reverse()},getActiveArticleId:function(t){return t.activeArticleId},getFetching:function(t){return t.fetching}},mutations:{setCurrentArticles:function(t,e){t.currentArticles=e},setCurrentComments:function(t,e){t.currentComments=e},setActiveArticle:function(t,e){t.activeArticleId=e},setFetching:function(t){t.fetching=!0}},actions:{scrapeArticles:function(){return H.a.post("/api/scrape")},fetchArticles:function(t){var e=t.commit;return H.a.post("/api/get/articles").then(function(t){e("setCurrentArticles",t.data)})},postComment:function(t,e){var n=t.dispatch,r=e.id,o=e.postedComment;return event.preventDefault(),console.log("acticleId",r),H.a.post("/api/post/articles/".concat(r),o).then(function(t){n("selectArticle",{articleId:r})})},selectArticle:function(t,e){var n=t.commit,r=e.articleId;return H.a.post("/api/get/articles/".concat(r)).then(function(t){var e=t.data;console.log(e),n("setCurrentComments",e.comment),n("setActiveArticle",e._id)})}}});r["a"].use(u["a"]);var D=new u["a"]({mode:"history",routes:[{path:"/",name:"home",component:h},{path:"/content",name:"content",component:M,beforeEnter:function(t,e,n){J.dispatch("fetchArticles").then(function(){return n()})}}]});r["a"].config.productionTip=!1,new r["a"]({router:D,store:J,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},cf1c:function(t,e,n){t.exports=n.p+"img/loading.e3c85f4f.gif"},d93b:function(t,e,n){},de97:function(t,e,n){"use strict";var r=n("d93b"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a783d409.js.map