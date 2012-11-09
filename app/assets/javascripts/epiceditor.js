/**
 * EpicEditor - An Embeddable JavaScript Markdown Editor (https://github.com/OscarGodson/EpicEditor)
 * Copyright (c) 2011-2012, Oscar Godson. (MIT Licensed)
 */(function(a,b){function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a.style[c]=b[c])}function e(b,c){var d=b,e=null;return a.getComputedStyle?e=document.defaultView.getComputedStyle(d,null).getPropertyValue(c):d.currentStyle&&(e=d.currentStyle[c]),e}function f(a,b,c){var f={},g;if(b==="save"){for(g in c)c.hasOwnProperty(g)&&(f[g]=e(a,g));d(a,c)}else b==="apply"&&d(a,c);return f}function g(a){var b=parseInt(e(a,"border-left-width"),10)+parseInt(e(a,"border-right-width"),10),c=parseInt(e(a,"padding-left"),10)+parseInt(e(a,"padding-right"),10),d=a.offsetWidth,f;return isNaN(b)&&(b=0),f=b+c+d,f}function h(a){var b=parseInt(e(a,"border-top-width"),10)+parseInt(e(a,"border-bottom-width"),10),c=parseInt(e(a,"padding-top"),10)+parseInt(e(a,"padding-bottom"),10),d=a.offsetHeight,f;return isNaN(b)&&(b=0),f=b+c+d,f}function i(a,b,d){d=d||"";var e=b.getElementsByTagName("head")[0],f=b.createElement("link");c(f,{type:"text/css",id:d,rel:"stylesheet",href:a,name:a,media:"screen"}),e.appendChild(f)}function j(a,b,c){a.className=a.className.replace(b,c)}function k(a){return a.contentDocument||a.contentWindow.document}function l(a){var b;return document.body.innerText?b=a.innerText:(b=a.innerHTML.replace(/<br>/gi,"\n"),b=b.replace(/<(?:.|\n)*?>/gm,""),b=b.replace(/&lt;/gi,"<"),b=b.replace(/&gt;/gi,">")),b}function m(a,b){return document.body.innerText?a.innerText=b:a.innerHTML=b.replace(/\n/g,"<br>"),!0}function n(){var a=-1,b=navigator.userAgent,c;return navigator.appName=="Microsoft Internet Explorer"&&(c=/MSIE ([0-9]{1,}[\.0-9]{0,})/,c.exec(b)!=null&&(a=parseFloat(RegExp.$1,10))),a}function o(a){var b={};return a&&b.toString.call(a)==="[object Function]"}function p(){var a=arguments[0]||{},c=1,d=arguments.length,e=!1,f,g,h,i;typeof a=="boolean"&&(e=a,a=arguments[1]||{},c=2),typeof a!="object"&&!o(a)&&(a={}),d===c&&(a=this,--c);for(;c<d;c++)if((f=arguments[c])!=null)for(g in f)if(f.hasOwnProperty(g)){h=a[g],i=f[g];if(a===i)continue;e&&i&&typeof i=="object"&&!i.nodeType?a[g]=p(e,h||(i.length!=null?[]:{}),i):i!==b&&(a[g]=i)}return a}function q(a){var c=this,d=a||{},e,f,g={container:"epiceditor",basePath:"epiceditor",clientSideStorage:!0,localStorageName:"epiceditor",file:{name:null,defaultContent:"",autoSave:100},theme:{base:"/themes/base/epiceditor.css",preview:"/themes/preview/github.css",editor:"/themes/editor/epic-dark.css"},focusOnLoad:!1,shortcut:{modifier:18,fullscreen:70,preview:80,edit:79},parser:typeof marked=="function"?marked:null},h;c.settings=p(!0,g,d);if(typeof c.settings.parser!="function"||typeof c.settings.parser("TEST")!="string")c.settings.parser=function(a){return a};return typeof c.settings.container=="string"?c.element=document.getElementById(c.settings.container):typeof c.settings.container=="object"&&(c.element=c.settings.container),c.settings.file.name||(typeof c.settings.container=="string"?c.settings.file.name=c.settings.container:typeof c.settings.container=="object"&&(c.element.id?c.settings.file.name=c.element.id:(q._data.unnamedEditors||(q._data.unnamedEditors=[]),q._data.unnamedEditors.push(c),c.settings.file.name="__epiceditor-untitled-"+q._data.unnamedEditors.length))),c._instanceId="epiceditor-"+Math.round(Math.random()*1e5),c._storage={},c._canSave=!0,c._defaultFileSchema=function(){return{content:c.settings.file.defaultContent,created:new Date,modified:new Date}},localStorage&&c.settings.clientSideStorage&&(this._storage=localStorage,this._storage[c.settings.localStorageName]&&c.getFiles(c.settings.file.name)===b&&(f=c.getFiles(c.settings.file.name),f=c._defaultFileSchema(),f.content=c.settings.file.defaultContent)),this._storage[c.settings.localStorageName]||(h={},h[c.settings.file.name]=c._defaultFileSchema(),h=JSON.stringify(h),this._storage[c.settings.localStorageName]=h),c.events||(c.events={}),this}q.prototype.load=function(b){function G(a){for(var b=0;b<a.length;b++)a[b].style.width=c.element.offsetWidth-o+"px",a[b].style.height=c.element.offsetHeight-p+"px"}function H(a){o=g(c.element)-c.element.offsetWidth;for(var b=0;b<a.length;b++)a[b].style.width=c.element.offsetWidth-o+"px"}function I(b){if(Math.abs(u.y-b.pageY)>=5||Math.abs(u.x-b.pageX)>=5)r.style.display="block",s&&clearTimeout(s),s=a.setTimeout(function(){r.style.display="none"},1e3);u={y:b.pageY,x:b.pageX}}function J(a){a.keyCode==c.settings.shortcut.modifier&&(C=!0),a.keyCode==17&&(D=!0),C===!0&&a.keyCode==c.settings.shortcut.preview&&!c.eeState.fullscreen&&(a.preventDefault(),c.preview()),C===!0&&a.keyCode==c.settings.shortcut.edit&&(a.preventDefault(),c.eeState.fullscreen||c.edit()),C===!0&&a.keyCode==c.settings.shortcut.fullscreen&&(a.preventDefault(),y(B)),C===!0&&a.keyCode!==c.settings.shortcut.modifier&&(C=!1),a.keyCode==27&&c.eeState.fullscreen&&(document.body.webkitRequestFullScreen||z(B)),D===!0&&a.keyCode==83&&(c.save(),a.preventDefault(),D=!1),a.metaKey&&a.keyCode==83&&(c.save(),a.preventDefault())}function K(a){a.keyCode==c.settings.shortcut.modifier&&(C=!1),a.keyCode==17&&(D=!1)}var c=this,j,l,m,o,p,q,r,s,t,u={y:-1,x:-1},v,w,x=document.body.webkitRequestFullScreen?!0:!1,y,z,A,B,C=!1,D=!1,E,F;b=b||function(){},c.eeState={fullscreen:!1,preview:!1,edit:!0,loaded:!1,unloaded:!1},j={chrome:'<div id="epiceditor-wrapper" class="epiceditor-edit-mode"><iframe frameborder="0" id="epiceditor-editor-frame"></iframe><iframe frameborder="0" id="epiceditor-previewer-frame"></iframe><div id="epiceditor-utilbar"><img width="30" src="'+this.settings.basePath+'/images/preview.png" title="Toggle Preview Mode" class="epiceditor-toggle-btn epiceditor-toggle-preview-btn"> '+'<img width="30" src="'+this.settings.basePath+'/images/edit.png" title="Toggle Edit Mode" class="epiceditor-toggle-btn epiceditor-toggle-edit-btn"> '+'<img width="30" src="'+this.settings.basePath+'/images/fullscreen.png" title="Enter Fullscreen" class="epiceditor-fullscreen-btn">'+"</div>"+"</div>",previewer:'<div id="epiceditor-preview"></div>'},c.element.innerHTML='<iframe scrolling="no" frameborder="0" id= "'+c._instanceId+'"></iframe>',l=document.getElementById(c._instanceId),c.iframeElement=l,c.iframe=k(l),c.iframe.open(),c.iframe.write(j.chrome),c.editorIframe=c.iframe.getElementById("epiceditor-editor-frame"),c.previewerIframe=c.iframe.getElementById("epiceditor-previewer-frame"),c.editorIframeDocument=k(c.editorIframe),c.editorIframeDocument.open(),c.editorIframeDocument.write(""),c.editorIframeDocument.close(),c.previewerIframeDocument=k(c.previewerIframe),c.previewerIframeDocument.open(),c.previewerIframeDocument.write(j.previewer),m=c.previewerIframeDocument.createElement("base"),m.target="_blank",c.previewerIframeDocument.getElementsByTagName("head")[0].appendChild(m),c.previewerIframeDocument.close(),o=g(c.element)-c.element.offsetWidth,p=h(c.element)-c.element.offsetHeight,A=[c.iframeElement,c.editorIframe,c.previewerIframe],G(A),i(c.settings.basePath+c.settings.theme.base,c.iframe,"theme"),i(c.settings.basePath+c.settings.theme.editor,c.editorIframeDocument,"theme"),i(c.settings.basePath+c.settings.theme.preview,c.previewerIframeDocument,"theme"),c.iframe.getElementById("epiceditor-wrapper").style.position="relative",c.editor=c.editorIframeDocument.body,c.previewer=c.previewerIframeDocument.getElementById("epiceditor-preview"),c.editor.contentEditable=!0,c.iframe.body.style.height=this.element.offsetHeight+"px",this.previewerIframe.style.display="none",n()>-1&&(this.previewer.style.height=parseInt(e(this.previewer,"height"),10)+2),this.open(c.settings.file.name),c.settings.focusOnLoad&&c.iframe.addEventListener("readystatechange",function(){c.iframe.readyState=="complete"&&c.editorIframeDocument.body.focus()}),q=c.iframe.getElementById("epiceditor-utilbar"),v={},y=function(b){if(c.eeState.fullscreen){z(b);return}x&&b.webkitRequestFullScreen(),w=c.eeState.edit,c.eeState.fullscreen=!0,c.eeState.edit=!0,c.eeState.preview=!0;var d=a.innerWidth,g=a.innerHeight,h=a.outerWidth,i=a.outerHeight;x||(i=a.innerHeight),v.editorIframe=f(c.editorIframe,"save",{width:h/2+"px",height:i+"px","float":"left",cssFloat:"left",styleFloat:"left",display:"block"}),v.previewerIframe=f(c.previewerIframe,"save",{width:h/2+"px",height:i+"px","float":"right",cssFloat:"right",styleFloat:"right",display:"block"}),v.element=f(c.element,"save",{position:"fixed",top:"0",left:"0",width:"100%","z-index":"9999",zIndex:"9999",border:"none",margin:"0",background:e(c.editor,"background-color"),height:g+"px"}),v.iframeElement=f(c.iframeElement,"save",{width:h+"px",height:g+"px"}),q.style.visibility="hidden",x||(document.body.style.overflow="hidden"),c.preview(),c.editorIframeDocument.body.focus()},z=function(a){f(c.element,"apply",v.element),f(c.iframeElement,"apply",v.iframeElement),f(c.editorIframe,"apply",v.editorIframe),f(c.previewerIframe,"apply",v.previewerIframe),c.element.style.width="",c.element.style.height="",q.style.visibility="visible",x?document.webkitCancelFullScreen():document.body.style.overflow="auto",c.eeState.fullscreen=!1,w?c.edit():c.preview(),H(A)},c.editor.addEventListener("keyup",function(){t&&a.clearTimeout(t),t=a.setTimeout(function(){c.eeState.fullscreen&&c.preview()},250)}),B=c.iframeElement,q.addEventListener("click",function(a){var b=a.target.className;b.indexOf("epiceditor-toggle-preview-btn")>-1?c.preview():b.indexOf("epiceditor-toggle-edit-btn")>-1?c.edit():b.indexOf("epiceditor-fullscreen-btn")>-1&&y(B)}),document.body.webkitRequestFullScreen&&B.addEventListener("webkitfullscreenchange",function(){document.webkitIsFullScreen||z(B)},!1),r=c.iframe.getElementById("epiceditor-utilbar"),r.style.display="none",r.addEventListener("mouseover",function(){s&&clearTimeout(s)}),E=[c.previewerIframeDocument,c.editorIframeDocument];for(F=0;F<E.length;F++)E[F].addEventListener("mousemove",function(a){I(a)}),E[F].addEventListener("scroll",function(a){I(a)}),E[F].addEventListener("keyup",function(a){K(a)}),E[F].addEventListener("keydown",function(a){J(a)});return c.settings.file.autoSave&&(c.saveInterval=a.setInterval(function(){if(!c._canSave)return;c.save()},c.settings.file.autoSave)),a.addEventListener("resize",function(){!c.iframe.webkitRequestFullScreen&&c.eeState.fullscreen?(d(c.iframeElement,{width:a.outerWidth+"px",height:a.innerHeight+"px"}),d(c.element,{height:a.innerHeight+"px"}),d(c.previewerIframe,{width:a.outerWidth/2+"px",height:a.innerHeight+"px"}),d(c.editorIframe,{width:a.outerWidth/2+"px",height:a.innerHeight+"px"})):c.eeState.fullscreen||H(A)}),c.iframe.close(),c.eeState.loaded=!0,c.eeState.unloaded=!1,b.call(this),this.emit("load"),this},q.prototype.unload=function(b){if(this.eeState.unloaded)throw new Error("Editor isn't loaded");var c=this,d=a.parent.document.getElementById(c._instanceId);return d.parentNode.removeChild(d),c.eeState.loaded=!1,c.eeState.unloaded=!0,b=b||function(){},c.saveInterval&&a.clearInterval(c.saveInterval),b.call(this),c.emit("unload"),c},q.prototype.preview=function(a){var b=this;return a=a||b.settings.basePath+b.settings.theme.preview,j(b.getElement("wrapper"),"epiceditor-edit-mode","epiceditor-preview-mode"),b.previewerIframeDocument.getElementById("theme")?b.previewerIframeDocument.getElementById("theme").name!==a&&(b.previewerIframeDocument.getElementById("theme").href=a):i(a,b.previewerIframeDocument,"theme"),b.previewer.innerHTML=b.exportFile(null,"html"),b.eeState.fullscreen||(b.editorIframe.style.display="none",b.previewerIframe.style.display="block",b.eeState.preview=!0,b.eeState.edit=!1,b.previewerIframe.focus()),b.emit("preview"),b},q.prototype.edit=function(){var a=this;return j(a.getElement("wrapper"),"epiceditor-preview-mode","epiceditor-edit-mode"),a.eeState.preview=!1,a.eeState.edit=!0,a.editorIframe.style.display="block",a.previewerIframe.style.display="none",a.editorIframe.focus(),a.emit("edit"),this},q.prototype.getElement=function(a){var b={container:this.element,wrapper:this.iframe.getElementById("epiceditor-wrapper"),wrapperIframe:this.iframeElement,editor:this.editorIframeDocument,editorIframe:this.editorIframe,previewer:this.previewerIframeDocument,previewerIframe:this.previewerIframe};return!b[a]||this.eeState.unloaded?null:b[a]},q.prototype.open=function(a){var c=this,d=c.settings.file.defaultContent,e;return a=a||c.settings.file.name,c.settings.file.name=a,this._storage[c.settings.localStorageName]&&(e=c.getFiles(),e[a]!==b?(m(c.editor,e[a].content),c.emit("read")):(m(c.editor,d),c.save(),c.emit("create")),c.previewer.innerHTML=c.exportFile(null,"html"),c.emit("open")),this},q.prototype.save=function(){var a=this,c,d=!1,e=a.settings.file.name,f=l(this.editor);return this._canSave=!0,c=JSON.parse(this._storage[a.settings.localStorageName]),c[e]===b?c[e]=a._defaultFileSchema():f!==c[e].content&&(c[e].modified=new Date,d=!0),c[e].content=f,this._storage[a.settings.localStorageName]=JSON.stringify(c),d&&a.emit("update"),this.emit("save"),this},q.prototype.remove=function(a){var b=this,c;return a=a||b.settings.file.name,a==b.settings.file.name&&(b._canSave=!1),c=JSON.parse(this._storage[b.settings.localStorageName]),delete c[a],this._storage[b.settings.localStorageName]=JSON.stringify(c),this.emit("remove"),this},q.prototype.rename=function(a,b){var c=this,d=JSON.parse(this._storage[c.settings.localStorageName]);return d[b]=d[a],delete d[a],this._storage[c.settings.localStorageName]=JSON.stringify(d),c.open(b),this},q.prototype.importFile=function(a,c,d,e){var f=this,g=!1;return a=a||f.settings.file.name,c=c||"",d=d||"md",e=e||{},JSON.parse(this._storage[f.settings.localStorageName])[a]===b&&(g=!0),f.settings.file.name=a,m(f.editor,c),g&&f.emit("create"),f.save(),f.eeState.fullscreen&&f.preview(),this},q.prototype.exportFile=function(a,c){var d=this,e,f;a=a||d.settings.file.name,c=c||"text",e=d.getFiles(a);if(e===b)return;f=e.content;switch(c){case"html":return f=f.replace(/\u00a0/g," ").replace(/&nbsp;/g," "),d.settings.parser(f);case"text":return f=f.replace(/&nbsp;/g," "),f;default:return f}},q.prototype.getFiles=function(a){var b=JSON.parse(this._storage[this.settings.localStorageName]);return a?b[a]:b},q.prototype.on=function(a,b){var c=this;return this.events[a]||(this.events[a]=[]),this.events[a].push(b),c},q.prototype.emit=function(a,b){function e(a){a.call(c,b)}var c=this,d;b=b||c.getFiles(c.settings.file.name);if(!this.events[a])return;for(d=0;d<c.events[a].length;d++)e(c.events[a][d]);return c},q.prototype.removeListener=function(a,b){var c=this;return b?this.events[a]?(this.events[a].splice(this.events[a].indexOf(b),1),c):c:(this.events[a]=[],c)},q.version="0.1.1",q._data={},a.EpicEditor=q})(window),function(){function c(a,c){return a[0][0]!=="!"?'<a href="'+j(c.href)+'"'+(c.title?' title="'+j(c.title)+'"':"")+">"+b.lexer(a[1])+"</a>":'<img src="'+j(c.href)+'" alt="'+j(a[1])+'"'+(c.title?' title="'+j(c.title)+'"':"")+">"}function f(){return e=d.pop()}function g(){switch(e.type){case"space":return"";case"hr":return"<hr>\n";case"heading":return"<h"+e.depth+">"+b.lexer(e.text)+"</h"+e.depth+">\n";case"code":return p.highlight&&(e.code=p.highlight(e.text,e.lang),e.code!=null&&e.code!==e.text&&(e.escaped=!0,e.text=e.code)),e.escaped||(e.text=j(e.text,!0)),"<pre><code"+(e.lang?' class="lang-'+e.lang+'"':"")+">"+e.text+"</code></pre>\n";case"blockquote_start":var a="";while(f().type!=="blockquote_end")a+=g();return"<blockquote>\n"+a+"</blockquote>\n";case"list_start":var c=e.ordered?"ol":"ul",a="";while(f().type!=="list_end")a+=g();return"<"+c+">\n"+a+"</"+c+">\n";case"list_item_start":var a="";while(f().type!=="list_item_end")a+=e.type==="text"?h():g();return"<li>"+a+"</li>\n";case"loose_item_start":var a="";while(f().type!=="list_item_end")a+=g();return"<li>"+a+"</li>\n";case"html":return p.sanitize?b.lexer(e.text):!e.pre&&!p.pedantic?b.lexer(e.text):e.text;case"paragraph":return"<p>"+b.lexer(e.text)+"</p>\n";case"text":return"<p>"+h()+"</p>\n"}}function h(){var a=e.text,c;while((c=d[d.length-1])&&c.type==="text")a+="\n"+f().text;return b.lexer(a)}function i(a){d=a.reverse();var b="";while(f())b+=g();return d=null,e=null,b}function j(a,b){return a.replace(b?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function k(a){var b="",c=a.length,d=0,e;for(;d<c;d++)e=a.charCodeAt(d),Math.random()>.5&&(e="x"+e.toString(16)),b+="&#"+e+";";return b}function l(){var a="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+";return a}function m(a,b){return a=a.source,b=b||"",function c(d,e){return d?(a=a.replace(d,e.source||e),c):new RegExp(a,b)}}function n(){}function o(b,c){return r(c),i(a.lexer(b))}function r(c){c||(c=q);if(p===c)return;p=c,p.gfm?(a.fences=a.gfm.fences,a.paragraph=a.gfm.paragraph,b.text=b.gfm.text,b.url=b.gfm.url):(a.fences=a.normal.fences,a.paragraph=a.normal.paragraph,b.text=b.normal.text,b.url=b.normal.url),p.pedantic?(b.em=b.pedantic.em,b.strong=b.pedantic.strong):(b.em=b.normal.em,b.strong=b.normal.strong)}var a={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:n,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,lheading:/^([^\n]+)\n *(=|-){3,} *\n*/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [^\0]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,def:/^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,paragraph:/^([^\n]+\n?(?!body))+\n*/,text:/^[^\n]+/};a.bullet=/(?:[*+-]|\d+\.)/,a.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,a.item=m(a.item,"gm")(/bull/g,a.bullet)(),a.list=m(a.list)(/bull/g,a.bullet)("hr",/\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(),a.html=m(a.html)("comment",/<!--[^\0]*?-->/)("closed",/<(tag)[^\0]+?<\/\1>/)("closing",/<tag(?!:\/|@)\b(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,l())(),a.paragraph=function(){var b=a.paragraph.source,c=[];return function d(b){return b=a[b]?a[b].source:b,c.push(b.replace(/(^|[^\[])\^/g,"$1")),d}("hr")("heading")("lheading")("blockquote")("<"+l())("def"),new RegExp(b.replace("body",c.join("|")))}(),a.normal={fences:a.fences,paragraph:a.paragraph},a.gfm={fences:/^ *``` *(\w+)? *\n([^\0]+?)\s*``` *(?:\n+|$)/,paragraph:/^/},a.gfm.paragraph=m(a.paragraph)("(?!","(?!"+a.gfm.fences.source.replace(/(^|[^\[])\^/g,"$1")+"|")(),a.lexer=function(b){var c=[];return c.links={},b=b.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),a.token(b,c,!0)},a.token=function(b,c,d){var b=b.replace(/^ +$/gm,""),e,f,g,h,i,j,k;while(b){if(g=a.newline.exec(b))b=b.substring(g[0].length),g[0].length>1&&c.push({type:"space"});if(g=a.code.exec(b)){b=b.substring(g[0].length),g=g[0].replace(/^ {4}/gm,""),c.push({type:"code",text:p.pedantic?g:g.replace(/\n+$/,"")});continue}if(g=a.fences.exec(b)){b=b.substring(g[0].length),c.push({type:"code",lang:g[1],text:g[2]});continue}if(g=a.heading.exec(b)){b=b.substring(g[0].length),c.push({type:"heading",depth:g[1].length,text:g[2]});continue}if(g=a.lheading.exec(b)){b=b.substring(g[0].length),c.push({type:"heading",depth:g[2]==="="?1:2,text:g[1]});continue}if(g=a.hr.exec(b)){b=b.substring(g[0].length),c.push({type:"hr"});continue}if(g=a.blockquote.exec(b)){b=b.substring(g[0].length),c.push({type:"blockquote_start"}),g=g[0].replace(/^ *> ?/gm,""),a.token(g,c,d),c.push({type:"blockquote_end"});continue}if(g=a.list.exec(b)){b=b.substring(g[0].length),c.push({type:"list_start",ordered:isFinite(g[2])}),g=g[0].match(a.item),e=!1,k=g.length,j=0;for(;j<k;j++)h=g[j],i=h.length,h=h.replace(/^ *([*+-]|\d+\.) +/,""),~h.indexOf("\n ")&&(i-=h.length,h=p.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(new RegExp("^ {1,"+i+"}","gm"),"")),f=e||/\n\n(?!\s*$)/.test(h),j!==k-1&&(e=h[h.length-1]==="\n",f||(f=e)),c.push({type:f?"loose_item_start":"list_item_start"}),a.token(h,c),c.push({type:"list_item_end"});c.push({type:"list_end"});continue}if(g=a.html.exec(b)){b=b.substring(g[0].length),c.push({type:"html",pre:g[1]==="pre",text:g[0]});continue}if(d&&(g=a.def.exec(b))){b=b.substring(g[0].length),c.links[g[1].toLowerCase()]={href:g[2],title:g[3]};continue}if(d&&(g=a.paragraph.exec(b))){b=b.substring(g[0].length),c.push({type:"paragraph",text:g[0]});continue}if(g=a.text.exec(b)){b=b.substring(g[0].length),c.push({type:"text",text:g[0]});continue}}return c};var b={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:n,tag:/^<!--[^\0]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([^\0]+?)__(?!_)|^\*\*([^\0]+?)\*\*(?!\*)/,em:/^\b_((?:__|[^\0])+?)_\b|^\*((?:\*\*|[^\0])+?)\*(?!\*)/,code:/^(`+)([^\0]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,text:/^[^\0]+?(?=[\\<!\[_*`]| {2,}\n|$)/};b._linkInside=/(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/,b._linkHref=/\s*<?([^\s]*?)>?(?:\s+['"]([^\0]*?)['"])?\s*/,b.link=m(b.link)("inside",b._linkInside)("href",b._linkHref)(),b.reflink=m(b.reflink)("inside",b._linkInside)(),b.normal={url:b.url,strong:b.strong,em:b.em,text:b.text},b.pedantic={strong:/^__(?=\S)([^\0]*?\S)__(?!_)|^\*\*(?=\S)([^\0]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([^\0]*?\S)_(?!_)|^\*(?=\S)([^\0]*?\S)\*(?!\*)/},b.gfm={url:/^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,text:/^[^\0]+?(?=[\\<!\[_*`]|https?:\/\/| {2,}\n|$)/},b.lexer=function(a){var e="",f=d.links,g,h,i,l;while(a){if(l=b.escape.exec(a)){a=a.substring(l[0].length),e+=l[1];continue}if(l=b.autolink.exec(a)){a=a.substring(l[0].length),l[2]==="@"?(h=l[1][6]===":"?k(l[1].substring(7)):k(l[1]),i=k("mailto:")+h):(h=j(l[1]),i=h),e+='<a href="'+i+'">'+h+"</a>";continue}if(l=b.url.exec(a)){a=a.substring(l[0].length),h=j(l[1]),i=h,e+='<a href="'+i+'">'+h+"</a>";continue}if(l=b.tag.exec(a)){a=a.substring(l[0].length),e+=p.sanitize?j(l[0]):l[0];continue}if(l=b.link.exec(a)){a=a.substring(l[0].length),e+=c(l,{href:l[2],title:l[3]});continue}if((l=b.reflink.exec(a))||(l=b.nolink.exec(a))){a=a.substring(l[0].length),g=(l[2]||l[1]).replace(/\s+/g," "),g=f[g.toLowerCase()];if(!g||!g.href){e+=l[0][0],a=l[0].substring(1)+a;continue}e+=c(l,g);continue}if(l=b.strong.exec(a)){a=a.substring(l[0].length),e+="<strong>"+b.lexer(l[2]||l[1])+"</strong>";continue}if(l=b.em.exec(a)){a=a.substring(l[0].length),e+="<em>"+b.lexer(l[2]||l[1])+"</em>";continue}if(l=b.code.exec(a)){a=a.substring(l[0].length),e+="<code>"+j(l[2],!0)+"</code>";continue}if(l=b.br.exec(a)){a=a.substring(l[0].length),e+="<br>";continue}if(l=b.text.exec(a)){a=a.substring(l[0].length),e+=j(l[0]);continue}}return e};var d,e;n.exec=n;var p,q;o.options=o.setOptions=function(a){return q=a,r(a),o},o.setOptions({gfm:!0,pedantic:!1,sanitize:!1,highlight:null}),o.parser=function(a,b){return r(b),i(a)},o.lexer=function(b,c){return r(c),a.lexer(b)},o.parse=o,typeof module!="undefined"?module.exports=o:this.marked=o}.call(function(){return this||(typeof window!="undefined"?window:global)}());