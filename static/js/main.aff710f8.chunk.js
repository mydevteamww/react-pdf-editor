(this["webpackJsonppdf-editor"]=this["webpackJsonppdf-editor"]||[]).push([[0],{224:function(e,t,n){e.exports=n(386)},229:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),i=n.n(o),c=(n(229),n(55)),l=n(40),u=n(10),s=n.n(u),d=n(16),p=n(188),m=n(189),f=n(212),h=n(213),g=(n(231),n(401)),v=n(399),b=n(56),O=n(397),w=n(392),E=n(398),j=n(395),x=n(402),M=[{name:"pdfjsLib",src:"https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.min.js"},{name:"PDFLib",src:"https://unpkg.com/pdf-lib@1.4.0/dist/pdf-lib.min.js"},{name:"download",src:"https://unpkg.com/downloadjs@1.4.7"},{name:"makeTextPDF",src:"https://cdn.jsdelivr.net/gh/snamoah/react-pdf-editor/public/makeTextPDF.js"},{name:"w3Color",src:"https://www.w3schools.com/lib/w3color.js"}],y={},k=function(e){return y[e]},D={Courier:{correction:function(e,t){return(e*t-e)/2+e/6}},Helvetica:{correction:function(e,t){return(e*t-e)/2+e/10}},"Times-Roman":{correction:function(e,t){return(e*t-e)/2+e/7}}},C=(Object(c.a)({},D,{"\u6a19\u6977\u9ad4":{src:"/CK.ttf",correction:function(e,t){return(e*t-e)/2}}}),function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(){return t(a.result)},a.onerror=n,a.readAsArrayBuffer(e)}))}),S=function(e){return new Promise((function(t,n){var a=new Image;if(a.onload=function(){return t(a)},a.onerror=n,e instanceof Blob){var r=window.URL.createObjectURL(e);a.src=r}else a.src=e}))};function I(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(){return t(a.result)},a.onerror=n,a.readAsDataURL(e)}))}function T(e){return P.apply(this,arguments)}function P(){return(P=Object(d.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("pdfjsLib");case 2:return n=e.sent,a=new Blob([t]),r=window.URL.createObjectURL(a),e.abrupt("return",n.getDocument(r).promise);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){var e=0;return function(){return e++}}var A=function(){},L=function(e,t,n,a,r,o,i,c){var l=t+a,u=e+n;return{top:l<0?0:l+o>c+25?c-o+25:l,left:u<0?0:u+r>i+25?i-r+25:u}},N=function(e){return parseFloat((e/255).toFixed(1))};function R(e,t,n){return H.apply(this,arguments)}function H(){return(H=Object(d.a)(s.a.mark((function e(t,n,a){var r,o,i,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("PDFLib");case 2:return r=e.sent,e.next=5,k("download");case 5:return o=e.sent,e.next=8,k("makeTextPDF");case 8:return e.sent,e.prev=9,e.t0=r.PDFDocument,e.next=13,C(t);case 13:return e.t1=e.sent,e.next=16,e.t0.load.call(e.t0,e.t1);case 16:i=e.sent,e.next=23;break;case 19:throw e.prev=19,e.t2=e.catch(9),console.log("Failed to load PDF."),e.t2;case 23:return c=i.getPages().map(function(){var e=Object(d.a)(s.a.mark((function e(t,a){var o,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n[a],c=t.getHeight(),t.getWidth(),l=o.map(function(){var e=Object(d.a)(s.a.mark((function e(n){var a,o,l,u,d,p,m,f,h,g,v,b,O,w,E,j,x,M,y,k,D,S,I,T,P,F,L,R,H,W;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("image"!==n.type){e.next=29;break}if(o=(a=n).file,l=a.x,u=a.y,d=a.width,p=a.height,e.prev=2,"image/jpeg"!==o.type){e.next=13;break}return e.t0=i,e.next=7,C(o);case 7:return e.t1=e.sent,e.next=10,e.t0.embedJpg.call(e.t0,e.t1);case 10:m=e.sent,e.next=20;break;case 13:return e.t2=i,e.next=16,C(o);case 16:return e.t3=e.sent,e.next=19,e.t2.embedPng.call(e.t2,e.t3);case 19:m=e.sent;case 20:return e.abrupt("return",(function(){return t.drawImage(m,{x:l,y:c-u-p,width:d,height:p})}));case 23:return e.prev=23,e.t4=e.catch(2),console.log("Failed to embed image.",e.t4),e.abrupt("return",A);case 27:e.next=41;break;case 29:if("text"!==n.type){e.next=37;break}return h=(f=n).x,g=f.y,v=f.text,b=f.lineHeight,O=f.size,w=f.fontFamily,E=f.width,e.next=33,i.embedFont(w);case 33:return j=e.sent,e.abrupt("return",(function(){return t.drawText(v,{maxWidth:E,font:j,size:O,lineHeight:b,x:h,y:c-O-g})}));case 37:if("drawing"!==n.type){e.next=41;break}return M=(x=n).x,y=x.y,k=x.path,D=x.scale,S=x.stroke,I=x.strokeWidth,T=r.pushGraphicsState,P=r.setLineCap,F=r.popGraphicsState,L=r.setLineJoin,R=r.LineCapStyle,H=r.LineJoinStyle,W=r.rgb,e.abrupt("return",(function(){t.pushOperators(T(),P(R.Round),L(H.Round));var e=window.w3color(S).toRgb();t.drawSvgPath(k,{borderColor:W(N(e.r),N(e.g),N(e.b)),borderWidth:I,scale:D,x:M,y:c-y}),t.pushOperators(F())}));case 41:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t){return e.apply(this,arguments)}}()),e.next=6,Promise.all(l);case 6:e.sent.forEach((function(e){return e()}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=26,Promise.all(c);case 26:return e.prev=26,e.next=29,i.save();case 29:l=e.sent,o(l,a,"application/pdf"),e.next=37;break;case 33:throw e.prev=33,e.t3=e.catch(26),console.log("Failed to save PDF."),e.t3;case 37:case"end":return e.stop()}}),e,null,[[9,19],[26,33]])})))).apply(this,arguments)}var W,U,V,Y,z=n(7),B=function(e){var t=e.page,n=e.updateDimensions,o=Object(a.createRef)(),i=Object(a.useState)(500),c=Object(z.a)(i,2),l=c[0],u=c[1],p=Object(a.useState)(window.innerHeight),m=Object(z.a)(p,2),f=m[0],h=m[1],g=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,r,i,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if(!(a=e.sent)){e.next=12;break}if(i=null===(r=o.current)||void 0===r?void 0:r.getContext("2d"),c=a.getViewport({scale:1}),u(c.width),h(c.height),!i){e.next=12;break}return e.next=11,a.render({canvasContext:null===(l=o.current)||void 0===l?void 0:l.getContext("2d"),viewport:c}).promise;case 11:n({width:c.width,height:c.height});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g(t)}),[t,l,f]),r.a.createElement("div",null,r.a.createElement("canvas",{ref:o,width:l,height:f}))};!function(e){e.MOVE="MOVE",e.SCALE="SCALE",e.NO_MOVEMENT="NO_MOVEMENT"}(W||(W={})),function(e){e.RED="red",e.ORANGE="orange",e.YELLOW="yellow",e.OLIVE="olive",e.GREEN="green",e.TEAL="teal",e.BLUE="blue",e.VIOLOET="violet",e.PURPLE="purple",e.BROWN="brown",e.GREY="grey",e.BLACK="black"}(U||(U={})),function(e){e.IMAGE="image",e.DRAWING="drawing",e.TEXT="text"}(V||(V={})),function(e){e.INSERT="insert",e.COMMAND="command"}(Y||(Y={}));var X=n(400),_=n(190);function G(){var e=Object(_.a)(["\n    position: relative\n"]);return G=function(){return e},e}var J=n(191).a.div(G()),K=function(e){var t=e.title,n=e.onConfirm,a=e.onDismiss;return r.a.createElement("div",null,r.a.createElement(v.a,{as:"h4",inverted:!0},t),r.a.createElement(O.a,{onClick:a},"No"),r.a.createElement(O.a,{negative:!0,onClick:n},"Yes"))},q=function(e){var t=e.canvasRef,n=e.positionTop,a=e.positionLeft,o=e.width,i=e.height,c=e.handleMouseOut,l=e.handleMouseDown,u=e.handleMouseMove,s=e.handleMouseUp,d=e.handleImageScale,p=e.dimmerActive,m=e.cancelDelete,f=e.deleteImage,h=e.onClick;return r.a.createElement("div",{onMouseDown:l,onMouseMove:u,onMouseUp:s,onMouseOut:c,onDoubleClick:h,style:{position:"absolute",top:n,left:a,borderStyle:"dashed",borderWidth:1,borderColor:"grey",width:o+2,height:i+2,cursor:"move"}},r.a.createElement(X.a.Dimmable,{as:J,size:"medium",dimmed:p},r.a.createElement("canvas",{ref:t,style:{width:"100%",height:"100%"}}),r.a.createElement(X.a,{active:p,onClickOutside:m},r.a.createElement(K,{title:"Delete?",onConfirm:f,onDismiss:m}))),r.a.createElement("div",{"data-direction":"top-left",onMouseDown:l,onMouseUp:s,onMouseMove:d,style:{position:"absolute",cursor:"nwse-resize",top:-5,left:-5,width:20,height:20}}))},Q=function(e){var t=e.x,n=e.y,o=e.payload,i=e.width,c=e.height,l=e.pageWidth,u=e.removeImage,s=e.pageHeight,d=e.updateImageObject,p=Object(a.createRef)(),m=Object(a.useState)(i),f=Object(z.a)(m,2),h=f[0],g=f[1],v=Object(a.useState)(c),b=Object(z.a)(v,2),O=b[0],w=b[1],E=Object(a.useState)(!1),j=Object(z.a)(E,2),x=j[0],M=j[1],y=Object(a.useState)(n),k=Object(z.a)(y,2),D=k[0],C=k[1],S=Object(a.useState)(t),I=Object(z.a)(S,2),T=I[0],P=I[1],F=Object(a.useState)([]),A=Object(z.a)(F,2),N=A[0],R=A[1],H=Object(a.useState)(W.NO_MOVEMENT),U=Object(z.a)(H,2),V=U[0],Y=U[1],B=Object(a.useState)(!1),X=Object(z.a)(B,2),_=X[0],G=X[1],J=function(e){if(e.preventDefault(),M(!1),V===W.MOVE){var t=L(T,D,e.movementX,e.movementY,h,O,l,s),n=t.top,a=t.left;d({x:a,y:n})}V===W.SCALE&&d({x:T,y:D}),Y(W.NO_MOVEMENT)};Object(a.useEffect)((function(){!function(e){var t=p.current;if(t){var n=t.getContext("2d");if(n){var a=1;h>300&&(a=300/h),O>300&&(a=Math.min(a,300/O));var r=h*a,i=O*a;g(r),w(i),t.width=r,t.height=i,n.drawImage(o,0,0,r,i),t.toBlob((function(e){d({file:e,width:r,height:i})}))}}}()}),[o,h,O]);var K=function(){return G(!1)};return r.a.createElement(q,{onClick:function(){return G(!0)},dimmerActive:_,cancelDelete:K,deleteImage:function(){K(),u()},positionLeft:T,positionTop:D,canvasRef:p,width:h,height:O,handleImageScale:function(e){e.preventDefault(),x&&(N.includes("left")&&(P(T+e.movementX),g(h-e.movementX)),N.includes("top")&&(C(D+e.movementY),w(O-e.movementY)),N.includes("right")&&g(h+e.movementX),N.includes("bottom")&&w(O+e.movementY))},handleMouseDown:function(e){e.preventDefault(),M(!0),Y(W.MOVE);var t=e.currentTarget.dataset.direction;t&&(R(t.split("-")),Y(W.SCALE))},handleMouseUp:J,handleMouseMove:function(e){if(e.preventDefault(),x){var t=L(T,D,e.movementX,e.movementY,h,O,l,s),n=t.top,a=t.left;C(n),P(a)}},handleMouseOut:function(e){V===W.MOVE&&J(e)}})},$=function(e){var t=e.text,n=e.width,a=e.height,o=e.inputRef,i=e.mode,c=e.size,l=e.fontFamily,u=e.positionTop,s=e.positionLeft,d=e.onChangeText,p=e.toggleEditMode,m=e.handleMouseDown,f=e.handleMouseMove,h=e.handleMouseOut,g=e.handleMouseUp,v=e.lineHeight;return r.a.createElement("div",{onMouseDown:m,onMouseMove:f,onMouseUp:g,onMouseOut:h,onDoubleClick:p,style:{width:n,border:1,height:a,fontFamily:l,fontSize:c,lineHeight:v,cursor:i===Y.COMMAND?"move":"default",top:u,left:s,borderColor:"gray",borderStyle:"solid",wordWrap:"break-word",padding:0,position:"absolute"}},r.a.createElement("input",{type:"text",ref:o,onChange:d,readOnly:i===Y.COMMAND,style:{width:"100%",borderStyle:"none",borderWidth:0,fontFamily:l,fontSize:c,outline:"none",padding:0,boxSizing:"border-box",lineHeight:v,height:a,margin:0,backgroundColor:"transparent",cursor:i===Y.COMMAND?"move":"text"},value:t}))},Z=function(e){var t=e.x,n=e.y,o=e.text,i=e.width,c=e.height,l=e.lineHeight,u=e.size,s=e.fontFamily,d=e.pageHeight,p=e.pageWidth,m=e.updateTextObject,f=Object(a.useRef)(null),h=Object(a.useState)(o||""),g=Object(z.a)(h,2),v=g[0],b=g[1],O=Object(a.useState)(!1),w=Object(z.a)(O,2),E=w[0],j=w[1],x=Object(a.useState)(n),M=Object(z.a)(x,2),y=M[0],k=M[1],D=Object(a.useState)(t),C=Object(z.a)(D,2),S=C[0],I=C[1],T=Object(a.useState)(W.NO_MOVEMENT),P=Object(z.a)(T,2),F=P[0],A=P[1],N=Object(a.useState)(Y.COMMAND),R=Object(z.a)(N,2),H=R[0],U=R[1],V=function(e){if(e.preventDefault(),H===Y.COMMAND){if(j(!1),F===W.MOVE){var t=L(S,y,e.movementX,e.movementY,i,c,p,d),n=t.top,a=t.left;m({x:a,y:n})}A(W.NO_MOVEMENT)}},B=function(){var e;null===(e=document.getSelection())||void 0===e||e.removeAllRanges(),m({lines:[v],text:v})};return r.a.createElement($,{text:v,width:i,height:c,mode:H,size:u,lineHeight:l,inputRef:f,fontFamily:s,positionTop:y,onChangeText:function(e){var t=e.currentTarget.value;b(t)},positionLeft:S,handleMouseUp:V,toggleEditMode:function(){var e=f.current,t=H===Y.COMMAND?Y.INSERT:Y.COMMAND;U(t),e&&t===Y.INSERT?(e.focus(),e.select()):B()},handleMouseOut:function(e){F===W.MOVE&&V(e),H===Y.INSERT&&(U(Y.COMMAND),B())},handleMouseDown:function(e){H===Y.COMMAND&&(j(!0),A(W.MOVE))},handleMouseMove:function(e){if(e.preventDefault(),E){var t=L(S,y,e.movementX,e.movementY,i,c,p,d),n=t.top,a=t.left;k(n),I(a)}}})},ee=function(e){var t=e.dimmerActive,n=e.cancelDelete,a=e.deleteDrawing,o=e.positionTop,i=e.positionLeft,c=e.width,l=e.height,u=e.svgRef,s=e.path,d=e.stroke,p=e.strokeWidth,m=e.handleMouseDown,f=e.handleMouseMove,h=e.handleMouseOut,g=e.handleMouseUp,v=e.onClick;return r.a.createElement("div",{onMouseDown:m,onMouseMove:f,onMouseUp:g,onMouseOut:h,onDoubleClick:v,style:{position:"absolute",top:o,left:i,width:c,height:l,cursor:"move"}},r.a.createElement(X.a.Dimmable,{as:J,dimmed:t},r.a.createElement("svg",{ref:u},r.a.createElement("path",{strokeWidth:p,strokeLinecap:"round",strokeLinejoin:"round",stroke:d,fill:"none",d:s})),r.a.createElement(X.a,{active:t,onClickOutside:n},r.a.createElement(K,{title:"Delete?",onConfirm:a,onDismiss:n}))))},te=function(e){var t=e.x,n=e.y,o=e.width,i=e.height,c=e.stroke,l=e.strokeWidth,u=e.path,s=e.pageWidth,d=e.pageHeight,p=e.removeDrawing,m=e.updateDrawingObject,f=Object(a.createRef)(),h=Object(a.useState)(!1),g=Object(z.a)(h,2),v=g[0],b=g[1],O=Object(a.useState)(n),w=Object(z.a)(O,2),E=w[0],j=w[1],x=Object(a.useState)(t),M=Object(z.a)(x,2),y=M[0],k=M[1],D=Object(a.useState)(W.NO_MOVEMENT),C=Object(z.a)(D,2),S=C[0],I=C[1],T=Object(a.useState)(!1),P=Object(z.a)(T,2),F=P[0],A=P[1];Object(a.useEffect)((function(){var e=f.current;e&&e.setAttribute("viewBox","0 0 ".concat(o," ").concat(i))}),[f,o,i]);var N=function(e){if(e.preventDefault(),b(!1),S===W.MOVE){var t=L(y,E,e.movementX,e.movementY,o,i,s,d),n=t.top,a=t.left;m({x:a,y:n})}S===W.SCALE&&m({x:y,y:E}),I(W.NO_MOVEMENT)},R=function(){return A(!1)};return r.a.createElement(ee,{stroke:c,strokeWidth:l,path:u,width:o,svgRef:f,height:i,onClick:function(){return A(!0)},cancelDelete:R,dimmerActive:F,deleteDrawing:function(){R(),p()},handleMouseDown:function(e){b(!0),I(W.MOVE)},handleMouseMove:function(e){if(e.preventDefault(),v){var t=L(y,E,e.movementX,e.movementY,o,i,s,d),n=t.top,a=t.left;j(n),k(a)}},handleMouseOut:function(e){S===W.MOVE&&N(e)},handleMouseUp:N,positionLeft:y,positionTop:E})},ne=n(393),ae=n(396),re=[{title:"What's this?",content:["This is a piece of sofware that allows you to edit your PDFs. You can add images and drawings to your pdf.","And there are more features coming up like adding text."]},{title:"How do I delete an attached image or drawing?",content:["Easy! Just double click the image or drawing. You will be asked to confirm delete and then, voila, it's gone!"]},{title:"Can I add multiple images or drawings on a page?",content:["Yes."]},{title:"How can I delete my uploaded pdf?",content:["You can't delete the uploaded pdf.","You will have to upload a new one. This is a client-side app so you did not actually uploaded it to any server. Don't worry :)"]},{title:"Can I resize a drawing?",content:["No. Currently it is not possible to resize a drawing"]},{title:"Can I resize an image?",content:["Yes you can. Move your mouse to the top-left corner of the image.","The cursor should change and you should be able to resize from there"]},{title:"Can I load multi-page pdf?",content:["Yes."]},{title:"How do I add text to the pdf?",content:["-  In the dropdown menu for edit, select add Text. This will add a text object to your pdf","-  You should see a textbox with placeholder text `Enter Text Here`","-  The textbox has two modes, edit mode and command mode, you can toggle between either by double clicking any area within the textbox.","-  In Edit Mode, you can enter your desired text","-  In Command Mode, you can move the textbox around to change it's position"]},{title:"Why can't I enter multi-line text?",content:["The textfield feature is in beta. There are more functionalities to be added like resizing, selecting fonts, changing font size etc which are in development.","These functionalities should be available in the next release"]}],oe=function(e){var t=e.open,n=e.dismiss,o=Object(a.useState)(-1),i=Object(z.a)(o,2),c=i[0],l=i[1],u=function(e,t){var n=t.index;l(c===n?-1:n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{open:t,onClose:n,size:"small",dimmer:"inverted"},r.a.createElement(ne.a.Header,null,r.a.createElement(b.a,{name:"question"}),"FAQ"),r.a.createElement(ne.a.Content,{scrolling:!0},r.a.createElement(ae.a,{fluid:!0,styled:!0},re.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(ae.a.Title,{active:c===t,index:t,onClick:u},r.a.createElement(b.a,{name:"dropdown"}),e.title),r.a.createElement(ae.a.Content,{active:c===t},e.content.map((function(e,t){return r.a.createElement("p",{key:t},e)}))))}))))))},ie=n(95),ce=function(e){var t=e.open,n=e.dismiss,o=e.confirm,i=e.drawing,c=Object(a.createRef)(),u=Object(a.useState)([]),s=Object(z.a)(u,2),d=s[0],p=s[1],m=Object(a.useState)(i&&i.path||""),f=Object(z.a)(m,2),h=f[0],g=f[1],v=Object(a.useState)(0),b=Object(z.a)(v,2),w=b[0],x=b[1],M=Object(a.useState)(0),y=Object(z.a)(M,2),k=y[0],D=y[1],C=Object(a.useState)(1/0),S=Object(z.a)(C,2),I=S[0],T=S[1],P=Object(a.useState)(0),F=Object(z.a)(P,2),A=F[0],L=F[1],N=Object(a.useState)(1/0),R=Object(z.a)(N,2),H=R[0],W=R[1],V=Object(a.useState)(0),Y=Object(z.a)(V,2),B=Y[0],X=Y[1],_=Object(a.useState)(!1),G=Object(z.a)(_,2),J=G[0],K=G[1],q=Object(a.useState)(5),Q=Object(z.a)(q,2),$=Q[0],Z=Q[1],ee=Object(a.useState)(U.BLACK),te=Object(z.a)(ee,2),ae=te[0],re=te[1],oe=Object(a.useState)(!1),ce=Object(z.a)(oe,2),le=ce[0],ue=ce[1];Object(a.useEffect)((function(){var e=c.current;if(e){var t=e.getBoundingClientRect(),n=t.x,a=t.y;x(n),D(a)}}),[c]);var se=function(){p([]),g(""),T(1/0),L(0),W(1/0),X(0),Z(5),re(U.BLACK),n()},de=function(e){return function(){re(e),ue(!1)}};return r.a.createElement(ne.a,{size:"small",dimmer:"inverted",open:t,onClose:se},r.a.createElement(ne.a.Header,null,"Add your Drawing"),r.a.createElement(ne.a.Content,null,r.a.createElement(E.a,{size:"tiny"},r.a.createElement(E.a.Item,{header:!0},"Tools"),r.a.createElement(E.a.Menu,{position:"right"},r.a.createElement(j.a,{item:!0,text:"".concat($)},r.a.createElement(j.a.Menu,null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return r.a.createElement(j.a.Item,{key:e,selected:e===$,onClick:function(){return Z(e)}},e)})))),r.a.createElement(j.a,{item:!0,trigger:r.a.createElement(ie.a,{color:ae}),onClick:function(){return ue(!0)},onBlur:function(){return ue(!1)}},r.a.createElement(j.a.Menu,{open:le},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",padding:5}},Object.values(U).map((function(e,t){return r.a.createElement("div",{style:{margin:2.5}},r.a.createElement(ie.a,{key:t,color:e,onClick:de(e)}))}))))))),r.a.createElement("div",{onMouseDown:function(e){e.preventDefault(),K(!0);var t=e.clientX-w,n=e.clientY-k;T(Math.min(I,t)),L(Math.max(A,t)),W(Math.min(H,n)),X(Math.max(B,n)),g(h+"M".concat(t,",").concat(n)),p([].concat(Object(l.a)(d),[["M",t,n]]))},onMouseMove:function(e){if(e.preventDefault(),J){var t=e.clientX-w,n=e.clientY-k;T(Math.min(I,t)),L(Math.max(A,t)),W(Math.min(H,n)),X(Math.max(B,n)),g(h+"L".concat(t,",").concat(n)),p([].concat(Object(l.a)(d),[["L",t,n]]))}},onMouseUp:function(e){e.preventDefault(),K(!1)}},r.a.createElement("svg",{ref:c,style:{width:"100%",height:"50vh"}},r.a.createElement("path",{strokeWidth:$,strokeLinejoin:"round",strokeLinecap:"round",stroke:ae,fill:"none",d:h})))),r.a.createElement(ne.a.Actions,null,r.a.createElement(O.a,{color:"black",content:"Cancel",onClick:se}),r.a.createElement(O.a,{content:"Done",labelPosition:"right",icon:"checkmark",onClick:function(){if(d.length){var e=-(I-10),t=-(H-10);o({stroke:ae,strokeWidth:$,width:A-I+20,height:B-H+20,path:d.reduce((function(n,a){return"".concat(n).concat(a[0]).concat(a[1]+e,", ").concat(a[2]+t)}),"")}),se()}else o()},positive:!0})))},le=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this,{})).pdfInput=void 0,e.imageInput=void 0,e.state={pdfFile:void 0,selectedPageIndex:-1,pdfName:"",pages:[],allObjects:[],pagesScale:[],pageDimensions:[],saving:!1,drawing:!1,uploading:!1,selectedDrawing:0,helpModalOpen:!1},e.onUploadPDF=function(){var t=Object(d.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({uploading:!0}),a=n.target.files||n.dataTransfer&&n.dataTransfer.files){t.next=4;break}return t.abrupt("return");case 4:if((r=a[0])&&"application/pdf"===r.type){t.next=7;break}return t.abrupt("return");case 7:return e.setState({selectedPageIndex:-1}),t.prev=8,t.next=11,e.addPDF(r);case 11:e.setState({selectedPageIndex:0}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(8),console.log(t.t0);case 17:return t.prev=17,e.setState({uploading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[8,14,17,20]])})));return function(e){return t.apply(this,arguments)}}(),e.addPDF=function(){var t=Object(d.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(n);case 3:a=t.sent,e.setState({pdfName:n.name,pdfFile:n,pages:Array(a.numPages).fill(0).map((function(e,t){return a.getPage(t+1)})),allObjects:Array(a.numPages).fill([]),pagesScale:Array(a.numPages).fill(1),pageDimensions:Array(a.numPages).fill({width:0,height:0})}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log("Failed to add pdf."),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e.savePDF=Object(d.a)(s.a.mark((function t(){var n,a,r,o,i,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,a=n.pdfFile,r=n.saving,o=n.pages,i=n.allObjects,c=n.pdfName,a&&!r&&o.length){t.next=3;break}return t.abrupt("return");case 3:return e.setState({saving:!0}),t.prev=4,t.next=7,R(a,i,c);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(4),console.log(t.t0);case 12:return t.prev=12,e.setState({saving:!1}),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[4,9,12,15]])}))),e.clearInput=function(e){e.currentTarget.value=""},e.renderHiddenInputs=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{ref:e.pdfInput,type:"file",name:"pdf",id:"pdf",accept:"application/pdf",onChange:e.onUploadPDF,onClick:e.clearInput,style:{display:"none"}}),e.state.selectedPageIndex>-1&&r.a.createElement("input",{ref:e.imageInput,type:"file",id:"image",name:"image",accept:"image/*",onClick:e.clearInput,style:{display:"none"},onChange:e.onUploadImage}))},e.onUploadImage=function(t){var n=e.state.selectedPageIndex,a=t.target.files&&t.target.files[0];a&&n>=0&&e.addImage(a)},e.addImage=function(){var t=Object(d.a)(s.a.mark((function t(n){var a,r,o,i,c,u,d,p,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.allObjects,o=a.selectedPageIndex,t.prev=1,t.next=4,I(n);case 4:return i=t.sent,t.next=7,S(i);case 7:c=t.sent,u=F(),d=c.width,p=c.height,m={id:u,type:"image",width:d,height:p,x:0,y:0,payload:c,file:n},e.setState({allObjects:r.map((function(e,t){return t===o?[].concat(Object(l.a)(e),[m]):e}))}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log("Fail to add image.",t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}(),e.handleFileInput=function(t){return function(){var n="pdf"===t?e.pdfInput.current:"image"===t?e.imageInput.current:null;n&&n.click()}},e.renderEmpty=function(){return r.a.createElement(g.a,{placeholder:!0,loading:e.state.uploading,style:{height:"80vh"}},r.a.createElement(v.a,{icon:!0},r.a.createElement(b.a,{name:"file pdf outline"}),"Upload your PDF to start editing!"),r.a.createElement(O.a,{primary:!0,onClick:e.handleFileInput("pdf")},"Load PDF"))},e.nextPage=function(){e.setState((function(e){return{selectedPageIndex:e.selectedPageIndex+1}}))},e.previousPage=function(){e.setState((function(e){return{selectedPageIndex:e.selectedPageIndex-1}}))},e.updateObject=function(t,n,a){var r=e.state.allObjects,o=r[n],i=o[t],l=Object(c.a)({},i,{},a);o[t]=l,e.setState({allObjects:r.map((function(e,t){return n===t?o:e}))})},e.updatePageDimensions=function(t,n){e.setState({pageDimensions:e.state.pageDimensions.map((function(e,a){return t===a?n:e}))})},e.removeObject=function(t,n){var a=e.state.allObjects,r=a[n];r.splice(t,1),a[n]=r,e.setState({allObjects:a})},e.openDrawingModal=function(){e.setState({drawing:!0})},e.closeDrawingModal=function(){e.setState({drawing:!1})},e.addDrawing=function(t,n){var a=e.state.allObjects;if(n){var r=Object(c.a)({id:F(),type:"drawing"},n,{x:0,y:0,scale:1});e.setState({allObjects:a.map((function(e,n){return t===n?[].concat(Object(l.a)(e),[r]):e}))})}},e.addText=function(){var t=e.state,n=t.allObjects,a=t.selectedPageIndex,r={id:F(),type:"text",x:0,y:0,width:120,height:25,size:16,lineHeight:1.4,fontFamily:"Times-Roman",text:"Enter Text Here"};e.setState({allObjects:n.map((function(e,t){return a===t?[].concat(Object(l.a)(e),[r]):e}))})},e.pdfInput=r.a.createRef(),e.imageInput=r.a.createRef(),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.allObjects,a=t.pdfName,o=t.pdfFile,i=t.pages,c=t.saving,l=t.selectedPageIndex,u=t.pageDimensions,s=i.length>1,d=l===i.length-1,p=i[l],m=n[l],f=u[l];return r.a.createElement(w.a,{style:{margin:30}},this.renderHiddenInputs(),r.a.createElement(E.a,{pointing:!0},r.a.createElement(E.a.Item,{header:!0},"PDF Editor"),r.a.createElement(E.a.Menu,{position:"right"},o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{item:!0,closeOnBlur:!0,icon:"edit outline",simple:!0},r.a.createElement(j.a.Menu,null,r.a.createElement(j.a.Item,{onClick:this.addText},"Add Text"),r.a.createElement(j.a.Item,{onClick:this.handleFileInput("image")},"Add Image"),r.a.createElement(j.a.Item,{onClick:this.openDrawingModal},"Add Drawing"))),r.a.createElement(E.a.Item,{name:c?"Saving...":"Save",disabled:c,onClick:this.savePDF}),r.a.createElement(E.a.Item,{name:"Upload New",onClick:this.handleFileInput("pdf")})),r.a.createElement(E.a.Item,{onClick:function(){return e.setState({helpModalOpen:!0})}},r.a.createElement(b.a,{name:"question circle outline"})))),o?r.a.createElement(x.a,null,r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Column,{width:3,verticalAlign:"middle"},s&&0!==l&&r.a.createElement(O.a,{circular:!0,icon:"angle left",onClick:this.previousPage})),r.a.createElement(x.a.Column,{width:10},p&&r.a.createElement(g.a,{style:{position:"relative"},compact:!0,stacked:s&&!d},r.a.createElement(B,{updateDimensions:function(t){return e.updatePageDimensions(l,t)},page:p}),m&&m.map((function(t,n){var o="".concat(a,"-").concat(n);return"image"===t.type?r.a.createElement(Q,Object.assign({removeImage:function(){return e.removeObject(n,l)},key:o,pageWidth:f.width,pageHeight:f.height,updateImageObject:function(t){return e.updateObject(n,l,t)}},t)):"drawing"===t.type?r.a.createElement(te,Object.assign({key:o,removeDrawing:function(){return e.removeObject(n,l)},pageWidth:f.width,pageHeight:f.height,updateDrawingObject:function(t){return e.updateObject(n,l,t)}},t)):"text"===t.type?r.a.createElement(Z,Object.assign({key:o,pageWidth:f.width,pageHeight:f.height,updateTextObject:function(t){return e.updateObject(n,l,t)}},t)):null})))),r.a.createElement(x.a.Column,{width:3,verticalAlign:"middle",textAlign:"right"},s&&l!==i.length-1&&r.a.createElement(O.a,{circular:!0,icon:"angle right",onClick:this.nextPage})))):this.renderEmpty(),r.a.createElement(ce,{open:this.state.drawing,dismiss:this.closeDrawingModal,confirm:function(t){return e.addDrawing(l,t)}}),r.a.createElement(oe,{open:this.state.helpModalOpen,dismiss:function(){return e.setState({helpModalOpen:!1})}}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));M.forEach((function(e){var t=e.name,n=e.src;y[t]=new Promise((function(e,a){var r=document.createElement("script");r.src=n,r.onload=function(){e(window[t]),console.log("".concat(t," is loaded."))},r.onerror=function(){return a("The script ".concat(t," didn't load correctly."))},document.body.appendChild(r)}))})),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[224,1,2]]]);
//# sourceMappingURL=main.aff710f8.chunk.js.map