const oe=function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&l(y)}).observe(document,{childList:!0,subtree:!0});function r(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerpolicy&&(p.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?p.credentials="include":c.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(c){if(c.ep)return;c.ep=!0;const p=r(c);fetch(c.href,p)}};oe();const J=[`
 /******************************************
  * Hi\u6211\u662F\u9759\u9ED8,\u4E00\u540D\u540E\u7AEF\u5F00\u53D1\u4EBA\u5458              *
  * \u5E73\u5E38\u90FD\u5728\u5199\u4E0B\u9762\u7684Java\u4EE3\u7801                 *
  *****************************************/
class Main{
    public staic void main(String[] args){
        System.out.println("Hello World");
    }
}
`,`
/**
 *  \u4F46\u662F\u5BF9\u524D\u7AEF\u5F88\u611F\u5174\u8DA3\uFF0C\u73B0\u5728\u5B66\u4F1A\u4E86\u5199typescript
 */
 const app = document.getElementById('app')! as HTMLElement
`,`
/** \u770B\u5230\u4E00\u4E2A\u6709\u8DA3\u7684demo,https://github.com/yacan8/valentine\u73B0\u5728\u81EA\u5DF1\u7528css\u5199\u4E00\u4E0B */
/** \u9996\u5148\u6211\u5728\u53F3\u8FB9\u5F00\u8F9F\u51FA\u4E00\u5757\u533A\u57DF\uFF0C\u4EE5\u4FBF\u89C2\u5BDF\u6548\u679C */
/** \u7ED9\u5B83\u4E00\u4E2A\u80CC\u666F\u8272 */
body .show-box{
    background-color: purple;
}

/** \u9996\u5148\u753B\u4E00\u4E2A\u65B9\u5757\u4F5C\u4E3A\u4E3B\u9898 */
.heart{
    position:absolute;
    width: 100px;
    height: 100px;
    background-color: rgb(250, 12, 12);
    border-radius: 20px;
    transform: rotateZ(45deg);
}

/** \u753B\u5DE6\u5FC3\u623F */
.heart::before{
    content: " ";
    position: absolute;
    top: 0;
    left: -38px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(250, 12, 12);
}

/** \u753B\u53F3\u8FB9\u5FC3\u623F */
.heart::after{
    content: " ";
    position: absolute;
    top: -38px;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(250, 12, 12);
}

/**\u8BBE\u7F6E\u52A8\u753B\u7684\u5E27*/
@keyframes dance {
    0% {
        transform: scale(1) rotate(45deg);
        opacity: 1;
    }
    100% {
        transform: scale(1.65) rotate(45deg);
        opacity: 0
    }
}
/** \u6DFB\u52A0\u52A8\u753B */
.bounce{
    animation: dance 1s linear infinite;
}
/******************************************
 *               \u5B8C\u7ED3\u6492\u82B1                  *
 *****************************************/
`];var X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee={exports:{}};(function(d){var f=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(l){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,y={},s={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof F?new F(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++p}),t.__id},clone:function t(e,a){a=a||{};var n,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),a[i])return a[i];n={},a[i]=n;for(var o in e)e.hasOwnProperty(o)&&(n[o]=t(e[o],a));return n;case"Array":return i=s.util.objId(e),a[i]?a[i]:(n=[],a[i]=n,e.forEach(function(g,u){n[u]=t(g,a)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=c.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(c,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var n="no-"+e;t;){var i=t.classList;if(i.contains(e))return!0;if(i.contains(n))return!1;t=t.parentElement}return!!a}},languages:{plain:y,plaintext:y,text:y,txt:y,extend:function(t,e){var a=s.util.clone(s.languages[t]);for(var n in e)a[n]=e[n];return a},insertBefore:function(t,e,a,n){n=n||s.languages;var i=n[t],o={};for(var g in i)if(i.hasOwnProperty(g)){if(g==e)for(var u in a)a.hasOwnProperty(u)&&(o[u]=a[u]);a.hasOwnProperty(g)||(o[g]=i[g])}var m=n[t];return n[t]=o,s.languages.DFS(s.languages,function(w,k){k===m&&w!=t&&(this[w]=o)}),o},DFS:function t(e,a,n,i){i=i||{};var o=s.util.objId;for(var g in e)if(e.hasOwnProperty(g)){a.call(e,g,e[g],n||g);var u=e[g],m=s.util.type(u);m==="Object"&&!i[o(u)]?(i[o(u)]=!0,t(u,a,null,i)):m==="Array"&&!i[o(u)]&&(i[o(u)]=!0,t(u,a,g,i))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var n={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var i=0,o;o=n.elements[i++];)s.highlightElement(o,e===!0,n.callback)},highlightElement:function(t,e,a){var n=s.util.getLanguage(t),i=s.languages[n];s.util.setLanguage(t,n);var o=t.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(o,n);var g=t.textContent,u={element:t,language:n,grammar:i,code:g};function m(k){u.highlightedCode=k,s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s.hooks.run("after-highlight",u),s.hooks.run("complete",u),a&&a.call(u.element)}if(s.hooks.run("before-sanity-check",u),o=u.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!u.code){s.hooks.run("complete",u),a&&a.call(u.element);return}if(s.hooks.run("before-highlight",u),!u.grammar){m(s.util.encode(u.code));return}if(e&&l.Worker){var w=new Worker(s.filename);w.onmessage=function(k){m(k.data)},w.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else m(s.highlight(u.code,u.grammar,u.language))},highlight:function(t,e,a){var n={code:t,grammar:e,language:a};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),F.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var n in a)e[n]=a[n];delete e.rest}var i=new _;return $(i,i.head,t),L(t,i,e,i.head,0),D(i)},hooks:{all:{},add:function(t,e){var a=s.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=s.hooks.all[t];if(!(!a||!a.length))for(var n=0,i;i=a[n++];)i(e)}},Token:F};l.Prism=s;function F(t,e,a,n){this.type=t,this.content=e,this.alias=a,this.length=(n||"").length|0}F.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(m){n+=t(m,a)}),n}var i={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),s.hooks.run("wrap",i);var g="";for(var u in i.attributes)g+=" "+u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+g+">"+i.content+"</"+i.tag+">"};function T(t,e,a,n){t.lastIndex=e;var i=t.exec(a);if(i&&n&&i[1]){var o=i[1].length;i.index+=o,i[0]=i[0].slice(o)}return i}function L(t,e,a,n,i,o){for(var g in a)if(!(!a.hasOwnProperty(g)||!a[g])){var u=a[g];u=Array.isArray(u)?u:[u];for(var m=0;m<u.length;++m){if(o&&o.cause==g+","+m)return;var w=u[m],k=w.inside,G=!!w.lookbehind,U=!!w.greedy,re=w.alias;if(U&&!w.pattern.global){var ie=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,ie+"g")}for(var W=w.pattern||w,x=n.next,E=i;x!==e.tail&&!(o&&E>=o.reach);E+=x.value.length,x=x.next){var B=x.value;if(e.length>t.length)return;if(!(B instanceof F)){var z=1,A;if(U){if(A=T(W,E,t,G),!A||A.index>=t.length)break;var M=A.index,se=A.index+A[0].length,S=E;for(S+=x.value.length;M>=S;)x=x.next,S+=x.value.length;if(S-=x.value.length,E=S,x.value instanceof F)continue;for(var C=x;C!==e.tail&&(S<se||typeof C.value=="string");C=C.next)z++,S+=C.value.length;z--,B=t.slice(E,S),A.index-=E}else if(A=T(W,0,B,G),!A)continue;var M=A.index,I=A[0],H=B.slice(0,M),N=B.slice(M+I.length),Z=E+B.length;o&&Z>o.reach&&(o.reach=Z);var j=x.prev;H&&(j=$(e,j,H),E+=H.length),O(e,j,z);var ue=new F(g,k?s.tokenize(I,k):I,re,I);if(x=$(e,j,ue),N&&$(e,x,N),z>1){var q={cause:g+","+m,reach:Z};L(t,e,a,x.prev,E,q),o&&q.reach>o.reach&&(o.reach=q.reach)}}}}}}function _(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function $(t,e,a){var n=e.next,i={value:a,prev:e,next:n};return e.next=i,n.prev=i,t.length++,i}function O(t,e,a){for(var n=e.next,i=0;i<a&&n!==t.tail;i++)n=n.next;e.next=n,n.prev=e,t.length-=i}function D(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}if(!l.document)return l.addEventListener&&(s.disableWorkerMessageHandler||l.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,n=e.code,i=e.immediateClose;l.postMessage(s.highlight(n,s.languages[a],a)),i&&l.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function h(){s.manual||s.highlightAll()}if(!s.manual){var b=document.readyState;b==="loading"||b==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return s}(f);d.exports&&(d.exports=r),typeof X<"u"&&(X.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(c,p){var y={};y["language-"+p]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[p]},y.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:y}};s["language-"+p]={pattern:/[\s\S]+/,inside:r.languages[p]};var F={};F[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",F)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(l,c){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:r.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(l){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var p=l.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading\u2026",c=function(v,h){return"\u2716 Error "+v+" while fetching file: "+h},p="\u2716 Error: File does not exist or is empty",y={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",F="loading",T="loaded",L="failed",_="pre[data-src]:not(["+s+'="'+T+'"]):not(['+s+'="'+F+'"])';function $(v,h,b){var t=new XMLHttpRequest;t.open("GET",v,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?h(t.responseText):t.status>=400?b(c(t.status,t.statusText)):b(p))},t.send(null)}function O(v){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(h){var b=Number(h[1]),t=h[2],e=h[3];return t?e?[b,Number(e)]:[b,void 0]:[b,b]}}r.hooks.add("before-highlightall",function(v){v.selector+=", "+_}),r.hooks.add("before-sanity-check",function(v){var h=v.element;if(h.matches(_)){v.code="",h.setAttribute(s,F);var b=h.appendChild(document.createElement("CODE"));b.textContent=l;var t=h.getAttribute("data-src"),e=v.language;if(e==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=y[a]||a}r.util.setLanguage(b,e),r.util.setLanguage(h,e);var n=r.plugins.autoloader;n&&n.loadLanguages(e),$(t,function(i){h.setAttribute(s,T);var o=O(h.getAttribute("data-range"));if(o){var g=i.split(/\r\n?|\n/g),u=o[0],m=o[1]==null?g.length:o[1];u<0&&(u+=g.length),u=Math.max(0,Math.min(u-1,g.length)),m<0&&(m+=g.length),m=Math.max(0,Math.min(m,g.length)),i=g.slice(u,m).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(u+1))}b.textContent=i,r.highlightElement(b)},function(i){h.setAttribute(s,L),b.textContent=i})}}),r.plugins.fileHighlight={highlight:function(h){for(var b=(h||document).querySelectorAll(_),t=0,e;e=b[t++];)r.highlightElement(e)}};var D=!1;r.fileHighlight=function(){D||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),D=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ee);const R=ee.exports;(function(d){var f=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,l={pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};d.languages.java=d.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[l,{pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:l.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+r+/[A-Z]\w*\b/.source),lookbehind:!0,inside:l.inside}],keyword:f,function:[d.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),d.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),d.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":l,keyword:f,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+r+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:l.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+r+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:l.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return f.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);const Y=["\u{1F389}","\u2764\uFE0F"],{innerWidth:K,innerHeight:le}=window;function ce(){let d=Math.floor(Math.random()*Y.length);return Y[d]}function P(d,f){return d+Math.random()*(f-d)}function Q(){for(let d=0;d<30;d++){let f=document.createElement("div");f.classList.add("celebrate"),f.innerHTML=ce(),f.style.top=`${-50}px`,f.style.left=`${P(0,K)}px`,f.style.transform=`rotateZ(${P(-90,0)}deg)`,document.body.appendChild(f),setTimeout(()=>{f.style.top=`${le}px`,f.style.left=`${P(0,K)}px`},P(0,3e3)),setTimeout(()=>{f.remove()},8e3)}}const te=document.querySelectorAll("code"),ge=document.getElementById("show-box"),ae=document.getElementById("code-box"),de=document.getElementById("update"),pe=document.querySelectorAll(".heart"),fe=[R.languages.java,R.languages.javascript,R.languages.css],he=["java","javascript","css"];let V=!1;for(let d=0;d<te.length;d++)d===2?(ae.scrollTop=1e6,me(d,J[d])):await ne(d,J[d],!1);async function me(d,f){await ne(d,f,!0),Q(),pe.forEach(r=>{r.addEventListener("click",Q)})}function ne(d,f,r){let l=0;const c=p=>new Promise(y=>{let s=f[p];if(p<=f.length-1){s===`
`&&(l++,l>2&&!V&&r&&(V=!0,ge.classList.add("show")),ae.scrollTop=1e6);let F=f.substring(0,p+1);te[d].innerHTML=R.highlight(F,fe[d],he[d]),r&&(de.innerHTML=F),setTimeout(()=>y(c(++p)),30)}else console.log("finished"),y(null)});return c(0)}
