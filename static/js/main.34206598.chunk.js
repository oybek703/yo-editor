(this["webpackJsonp@yoriqulov-editor/local-client"]=this["webpackJsonp@yoriqulov-editor/local-client"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},179:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"updateCell",(function(){return I})),n.d(r,"insertAfterCell",(function(){return U})),n.d(r,"deleteCell",(function(){return H})),n.d(r,"moveCell",(function(){return P})),n.d(r,"createBundle",(function(){return V})),n.d(r,"fetchCells",(function(){return B})),n.d(r,"saveCells",(function(){return z}));n(104),n(105);var c,a=n(23),i=n.n(a),o=n(0),s=n(25),u=n(18),l=n(39);!function(e){e.MOVE_CELL="MOVE_CELL",e.DELETE_CELL="DELETE_CELL",e.INSERT_CELL_AFTER="INSERT_CELL_AFTER",e.UPDATE_CELL="UPDATE_CELL",e.BUNDLE_START="BUNDLE_START",e.BUNDLE_COMPLETE="BUNDLE_COMPLETE",e.FETCH_CELLS_START="FETCH_CELLS_START",e.FETCH_CELLS_COMPLETE="FETCH_CELLS_COMPLETE",e.FETCH_CELLS_ERROR="FETCH_CELLS_ERROR",e.SAVE_CELLS_ERROR="SAVE_CELLS_ERROR"}(c||(c={}));var d=[{id:"0.e4ngpwcl2jv",content:"\n            ## Yoriqulov Editor\n\n            This is an interactive coding environment. Yuu can write Javascript, see it executed and write comprehensive documentation using markdown.\n             - Click any text cell(including this one) to edit it.\n             - The code in each code editor is all joined together into one file. If you define variable in cell #1, you can refer to it in any following cell.\n             - You can show any React component, string, number or anything else by calling `show` function. This is a function is built into this environment.  Call `show` multiple times to show multiple values.\n             - Re-order or delete cells using buttons on the top right corner.\n             - Add new cell by hovering on the divider between each cell.\n            \n            All of your changes get saved on ther file you opened Yoriqulov Editor with. So if you run `npx yoriqulov-editor serve tets.js` , all of the code and text you write will bes saved on `test.js` file.\n        ",type:"text"},{id:"0.rqmgcifhgtl",content:"\nimport { useState } from 'react'\n\nconst Counter = () => {\n    const [count, setCount] = useState(0)\n    return (\n        <div>\n            <button onClick={setCount.bind(null, count + 1)}>Click</button>\n            <h3>Count: {count}</h3>\n        </div>\n    )\n}\n\n// Display any variable or React Component by calling `show`\nshow(<Counter/>)\n        ",type:"code"}],p={loading:!0,error:null,order:d.map((function(e){return e.id})),data:d.reduce((function(e,t){return e[t.id]=t,e}),{})};function f(){return Math.random().toString(36)}var b=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case c.SAVE_CELLS_ERROR:return e.error=t.payload,e;case c.FETCH_CELLS_START:return e.loading=!0,e.error=null,e;case c.FETCH_CELLS_COMPLETE:return e.order=t.payload.map((function(e){return e.id})),e.data=t.payload.reduce((function(e,t){return e[t.id]=t,e}),{}),e;case c.FETCH_CELLS_ERROR:return e.loading=!1,e.error=t.payload,e;case c.UPDATE_CELL:var r=t.payload,a=r.id,i=r.content;return e.data[a].content=i,e;case c.DELETE_CELL:return delete e.data.id,e.order=e.order.filter((function(e){return e!==t.payload})),e;case c.MOVE_CELL:var o=t.payload,s=o.id,u=o.direction,l=e.order.findIndex((function(e){return s===e})),d="up"===u?l-1:l+1;return d<0||d>e.order.length-1||(e.order[l]=e.order[d],e.order[d]=s),e;case c.INSERT_CELL_AFTER:var b=t.payload,h=b.id,v=b.cellType,j={id:f(),content:"",type:v};e.data[j.id]=j;var m=e.order.findIndex((function(e){return e===h}));return m?e.order.push(j.id):e.order.splice(m+1,0,j.id),e;default:return e}}),p),h={},v=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case c.BUNDLE_START:var r=t.payload.cellId;return e[r]={loading:!0,code:"",error:""},e;case c.BUNDLE_COMPLETE:var a=t.payload,i=a.cellId,o=a.bundle,s=o.code,u=o.error;return e[i]={loading:!1,code:s,error:u},e;default:return e}}),h),j=Object(u.c)({cells:b,bundles:v}),m=n(88),E=n(7),O=n.n(E),L=n(12),x=n(8),C=n(53),w=function(){return{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/^(index\.js)$/},(function(e){return{path:e.path,namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com".concat(e.resolveDir,"/")).href}})),e.onResolve({filter:/.*/},function(){var e=Object(L.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(t.path)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},y=n(26),g=n.n(y),_=n(87),T=n.n(_).a.createInstance({name:"fileCache"}),R=function(e){return{name:"fetch-plugin",setup:function(t){t.onLoad({filter:/^(index\.js)$/},(function(t){return{loader:"jsx",contents:e}})),t.onLoad({filter:/\.*/},function(){var e=Object(L.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getItem(t.path);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/\.css$/},function(){var e=Object(L.a)(O.a.mark((function e(t){var n,r,c,a,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.path);case 2:return n=e.sent,r=n.data,c=n.request,a=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),i="\n            const style = document.createElement('style')\n            style.innerText = '".concat(a,"'\n            document.head.appendChild(style)\n        "),o={loader:"css",contents:i,resolveDir:new URL("./",c.responseURL).pathname},e.next=10,T.setItem(t.path,o);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.*/,namespace:"a"},function(){var e=Object(L.a)(O.a.mark((function e(t){var n,r,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(t.path);case 2:return n=e.sent,r=n.data,c=n.request,a={loader:"jsx",contents:r,resolveDir:new URL("./",c.responseURL).pathname},e.next=8,T.setItem(t.path,a);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},S=!1;function N(){return k.apply(this,arguments)}function k(){return(k=Object(L.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.initialize({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.14.48/esbuild.wasm"});case 2:S=!0;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return M.apply(this,arguments)}function M(){return(M=Object(L.a)(O.a.mark((function e(t){var n,r,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[w(),R(t)],jsxFactory:"_React.createElement",jsxFragment:"_React.Fragment"});case 3:return n=e.sent,r=Object(x.a)(n.outputFiles,1),c=r[0],a=c.text,e.abrupt("return",{code:a,error:""});case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",{code:"",error:String(e.t0)});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function A(e){return F.apply(this,arguments)}function F(){return(F=Object(L.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=3;break}return e.next=3,N();case 3:return e.next=5,D(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e,t){return{type:c.UPDATE_CELL,payload:{id:e,content:t}}},U=function(e,t){return{type:c.INSERT_CELL_AFTER,payload:{id:e,cellType:t}}},H=function(e){return{type:c.DELETE_CELL,payload:e}},P=function(e,t){return{type:c.MOVE_CELL,payload:{id:e,direction:t}}},V=function(e,t){return function(){var n=Object(L.a)(O.a.mark((function n(r){var a,i,o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:c.BUNDLE_START,payload:{cellId:e}}),n.next=3,A(t);case 3:a=n.sent,i=a.code,o=a.error,r({type:c.BUNDLE_COMPLETE,payload:{cellId:e,bundle:{code:i,error:o}}});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},B=function(){return function(){var e=Object(L.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.FETCH_CELLS_START}),e.prev=1,e.next=4,g.a.get("/cells");case 4:n=e.sent,r=n.data,t({type:c.FETCH_CELLS_COMPLETE,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:c.FETCH_CELLS_ERROR,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(L.a)(O.a.mark((function e(t,n){var r,a,i,o,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n(),a=r.cells,i=a.data,o=a.order,s=o.map((function(e){return i[e]})),e.next=5,g.a.post("/cells",{cells:s});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:c.SAVE_CELLS_ERROR,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()};var q=function(e){var t;return function(n){return function(r){n(r);var a=e.getState,i=e.dispatch;[c.MOVE_CELL,c.INSERT_CELL_AFTER,c.UPDATE_CELL,c.DELETE_CELL].includes(r.type)&&(t&&clearTimeout(t),t=setTimeout((function(){z()(i,a)}),250))}}},W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,$=Object(u.e)(j,{},W(Object(u.a)(m.a,q))),J=s.c,Y=(n(142),n(143),n(55)),X=function(){var e=Object(s.b)();return Object(o.useMemo)((function(){return Object(u.b)(r,e)}),[e])},Q=(n(172),n(1)),G=function(e){var t=e.cellId,n=X(),r=n.moveCell,c=n.deleteCell;return Object(Q.jsxs)("div",{className:"action-bar",children:[Object(Q.jsx)("button",{title:"Move up cell",className:"btn btn-sm btn-success action-btn",onClick:r.bind(null,t,"up"),children:Object(Q.jsx)("i",{className:"bi bi-arrow-up"})}),Object(Q.jsx)("button",{title:"Move down cell",className:"btn btn-sm btn-warning action-btn",onClick:r.bind(null,t,"down"),children:Object(Q.jsx)("i",{className:"bi bi-arrow-down"})}),Object(Q.jsx)("button",{title:"Delete cell",className:"btn btn-sm btn-danger action-btn",onClick:c.bind(null,t),children:Object(Q.jsx)("i",{className:"bi bi-x"})})]})},K=function(e){var t=e.cell,n=Object(o.useRef)(null),r=Object(o.useState)(!1),c=Object(x.a)(r,2),a=c[0],i=c[1],s=X().updateCell;return Object(o.useEffect)((function(){var e=function(e){e.target&&n.current&&n.current.contains(e.target)||i(!1)};return document.addEventListener("click",e,{capture:!0}),function(){return document.removeEventListener("click",e,{capture:!0})}}),[]),a?Object(Q.jsxs)("div",{ref:n,className:"text-editor card text-cell",children:[Object(Q.jsx)(G,{cellId:t.id}),Object(Q.jsx)(Y.a,{toolbarHeight:50,value:t.content,onChange:function(e){return s(t.id,e||"")}})]}):Object(Q.jsxs)("div",{className:"card card-body pb-5",children:[Object(Q.jsx)(G,{cellId:t.id}),Object(Q.jsx)("div",{title:"Click to edit",className:"text-editor",onClick:i.bind(null,!0),children:Object(Q.jsx)(Y.a.Markdown,{source:t.content||"```# Click to edit```"})})]})},Z=(n(173),n(174),n(99)),ee=n(96),te=n.n(ee),ne=n(97),re=n.n(ne),ce=function(e){var t=e.defaultValue,n=e.value,r=e.handleChange,c=Object(o.useRef)(null);return Object(Q.jsxs)("div",{className:"editor-wrapper",children:[c.current&&Object(Q.jsx)("button",{className:"btn btn-sm btn-outline-success format-btn px-1 py-0",title:"Format code",onClick:function(){try{var e=c.current.getValue(),t=te.a.format(e,{parser:"babel",plugins:[re.a],useTabs:!0,semi:!1,singleQuote:!0}).replace(/\n$/,"");c.current.setValue(t)}catch(r){var n=String(r);alert(n),console.error(r)}},children:Object(Q.jsx)("i",{className:"bi bi-code-square"})}),Object(Q.jsx)(Z.a,{value:n,onMount:function(e){c.current=e},defaultValue:t,language:"javascript",onChange:r,options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!0,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0},theme:"vs-dark",height:"100%"})]})},ae=n(3),ie=(n(179),n(98)),oe=function(e){var t,n=e.direction,r=e.children,c=Object(o.useState)(window.innerHeight),a=Object(x.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(window.innerWidth),l=Object(x.a)(u,2),d=l[0],p=l[1],f=Object(o.useState)(.5*window.innerWidth),b=Object(x.a)(f,2),h=b[0],v=b[1];return t="vertical"===n?{minConstraints:[1/0,24],maxConstraints:[1/0,.9*i],height:300,width:1/0,resizeHandles:["s"]}:{className:"resize-horizontal",minConstraints:[.2*d,1/0],maxConstraints:[.5*d,1/0],height:1/0,width:h,resizeHandles:["e"],onResizeStop:function(e,t){v(t.size.width)}},Object(o.useEffect)((function(){var e=function(){var e;e&&clearTimeout(e),e=setTimeout((function(){s(window.innerHeight),p(window.innerWidth),window.innerWidth<h&&v(.5*window.innerWidth)}),200)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[h]),Object(Q.jsx)(ie.ResizableBox,Object(ae.a)(Object(ae.a)({},t),{},{children:r}))},se=(n(186),"<html lang=\"en\">\n              <head>\n              <title>Preview</title>\n              <style>html {background-color: inherit;}</style>\n              </head>\n              <body><div id=\"root\"/></body>\n              <script>\n                  function handleError(error) {\n                    const root = document.querySelector('#root')\n                    root.innerHTML = '<div style=\"color: red; font-family: sans-serif;\"><h4>Error</h4>' + error + '</div>'\n                    console.error(error)\n                  }\n                  window.addEventListener('error', (event) => {\n                    event.preventDefault()\n                    handleError(event.error)\n                  })\n                  window.addEventListener('message', event => {\n                    try {\n                      eval(event.data)\n                    } catch (e) {\n                        handleError(e)  \n                    }\n                  }, false)\n                  <\/script>\n              </html> "),ue=function(e){var t=e.code,n=e.error,r=Object(o.useRef)(null);return Object(o.useEffect)((function(){r.current.srcdoc=se,setTimeout((function(){r.current.contentWindow.postMessage(t,"*")}),50)}),[t]),Object(Q.jsxs)("div",{className:"preview-wrapper",children:[Object(Q.jsx)("iframe",{title:"preview",sandbox:"allow-scripts",ref:r,srcDoc:se}),n&&Object(Q.jsx)("div",{className:"preview-error",children:n})]})},le=function(e){return J((function(t){var n=t.cells,r=n.data,c=[],a=n.order.map((function(e){return r[e]}));for(var i in a){var o=a[i],s=o.type,u=o.content,l=o.id;if("code"===s&&(l===e?c.push("\n    import _React from 'react'\n    import _ReactDOM from 'react-dom'\n    var show = value => {\n        const root = document.querySelector('#root')\n        if (typeof value === 'object') {\n            if(value.$$typeof && value.props) {\n                _ReactDOM.render(value, root)\n            } else{\n                root.innerHTML = JSON.stringify(value)\n            }\n        } else {\n            root.innerHTML = value\n    }\n}"):c.push("var show = () => {}"),c.push(u)),l===e)break}return c.join("\n")}))},de=function(e){var t=e.cell,n=X(),r=n.updateCell,c=n.createBundle,a=J((function(e){return e.bundles[t.id]})),i=le(t.id);return Object(o.useEffect)((function(){var e;if(a)return e=setTimeout(Object(L.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t.id,i);case 1:case"end":return e.stop()}}),e)}))),1e3),clearTimeout.bind(null,e);c(t.id,i)}),[t.id,i,c]),Object(Q.jsx)("div",{className:"code-cell-wrapper",children:Object(Q.jsx)(oe,{direction:"vertical",children:Object(Q.jsxs)(o.Fragment,{children:[Object(Q.jsx)(G,{cellId:t.id}),Object(Q.jsxs)("div",{className:"code-cell",children:[Object(Q.jsx)(oe,{direction:"horizontal",children:Object(Q.jsx)(ce,{handleChange:function(e){return e&&r(t.id,e)},value:t.content})}),Object(Q.jsx)("div",{className:"progress-wrapper",children:!a||a.loading?Object(Q.jsx)("progress",{className:"progress-bar-animated progress-cover",max:"100",children:"Loading"}):Object(Q.jsx)(ue,{code:a.code,error:a.error})})]})]})})})},pe=function(e){var t,n=e.cell;return t="text"===n.type?Object(Q.jsx)(K,{cell:n}):Object(Q.jsx)(de,{cell:n}),Object(Q.jsx)("div",{className:"cell-list-item",children:t})},fe=(n(187),function(e){var t=e.beforeCellId,n=e.forceVisible,r=void 0!==n&&n,c=X().insertAfterCell;return Object(Q.jsxs)("div",{className:"add-cell-wrapper ".concat(r&&"force-visible"),children:[Object(Q.jsxs)("button",{className:"btn btn-info mx-5",onClick:c.bind(null,t,"code"),children:[Object(Q.jsx)("i",{className:"bi bi-plus-circle"})," "," "," Code"]}),Object(Q.jsxs)("button",{className:"btn btn-info mx-5",onClick:c.bind(null,t,"text"),children:[Object(Q.jsx)("i",{className:"bi bi-plus-circle"})," "," "," Text"]}),Object(Q.jsx)("div",{className:"divider"})]})}),be=function(){var e=X().fetchCells,t=J((function(e){var t=e.cells,n=t.order,r=t.data;return n.map((function(e){return r[e]}))}));return Object(o.useEffect)((function(){e()}),[e]),Object(Q.jsxs)(o.Fragment,{children:[Object(Q.jsx)(fe,{forceVisible:0===t.length,beforeCellId:null}),Object(Q.jsx)("div",{className:"my-5",children:t.map((function(e){return Object(Q.jsxs)(o.Fragment,{children:[Object(Q.jsx)(pe,{cell:e},e.id),Object(Q.jsx)(fe,{beforeCellId:e.id})]},e.id)}))})]})};function he(){return Object(Q.jsx)("div",{className:"m-4 p-4",children:Object(Q.jsxs)(s.a,{store:$,children:[Object(Q.jsx)("div",{className:"card",children:Object(Q.jsx)("h1",{className:"text-center mt-1 text-success",children:"Realtime browser code bundler."})}),Object(Q.jsx)(be,{})]})})}i.a.render(Object(Q.jsx)(he,{}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.34206598.chunk.js.map