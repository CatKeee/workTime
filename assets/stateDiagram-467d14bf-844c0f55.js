import{R as D,B as N,$ as G}from"./styles-060eafc5-d0a09491.js";import{$ as t,X as S,M as k,c as R,K as v,a1 as U,h as $}from"./mermaid.esm.min-b0b06b29.js";import{A as L,a as O}from"./index-7f531408-1c2f904b.js";import{z as P}from"./isPlainObject-0b348591-6f751587.js";import"./app-fe0ecb64.js";import"./framework-51d6dbdf.js";import"./array-2ff2c7a6-ffeda358.js";import"./constant-2fe7eae5-45b4460e.js";const I=e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),C=e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),W=(e,i)=>{const g=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),s=g.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",s.width+2*t().state.padding).attr("height",s.height+2*t().state.padding).attr("rx",t().state.radius),g},X=(e,i)=>{const g=function(o,f,b){const m=o.append("tspan").attr("x",2*t().state.padding).text(f);b||m.attr("dy",t().state.textHeight)},s=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.descriptions[0]).node().getBBox(),n=s.height,h=e.append("text").attr("x",t().state.padding).attr("y",n+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description");let l=!0,a=!0;i.descriptions.forEach(function(o){l||(g(h,o,a),a=!1),l=!1});const d=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+n+t().state.dividerMargin/2).attr("y2",t().state.padding+n+t().state.dividerMargin/2).attr("class","descr-divider"),x=h.node().getBBox(),p=Math.max(x.width,s.width);return d.attr("x2",p+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",p+2*t().state.padding).attr("height",x.height+n+2*t().state.padding).attr("rx",t().state.radius),e},j=(e,i,g)=>{const s=t().state.padding,n=2*t().state.padding,h=e.node().getBBox(),l=h.width,a=h.x,d=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),x=d.node().getBBox().width+n;let p=Math.max(x,l);p===l&&(p=p+n);let o;const f=e.node().getBBox();i.doc,o=a-s,x>l&&(o=(l-p)/2+s),Math.abs(a-f.x)<s&&x>l&&(o=a-(x-l)/2);const b=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",o).attr("y",b).attr("class",g?"alt-composit":"composit").attr("width",p).attr("height",f.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),d.attr("x",o+s),x<=l&&d.attr("x",a+(p-n)/2-x/2+s),e.insert("rect",":first-child").attr("x",o).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",p).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",o).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",p).attr("height",f.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},F=e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),J=(e,i)=>{let g=t().state.forkWidth,s=t().state.forkHeight;if(i.parentId){let n=g;g=s,s=n}return e.append("rect").style("stroke","black").style("fill","black").attr("width",g).attr("height",s).attr("x",t().state.padding).attr("y",t().state.padding)},K=(e,i,g,s)=>{let n=0;const h=s.append("text");h.style("text-anchor","start"),h.attr("class","noteText");let l=e.replace(/\r\n/g,"<br/>");l=l.replace(/\n/g,"<br/>");const a=l.split(v.lineBreakRegex);let d=1.25*t().state.noteMargin;for(const x of a){const p=x.trim();if(p.length>0){const o=h.append("tspan");if(o.text(p),d===0){const f=o.node().getBBox();d+=f.height}n+=d,o.attr("x",i+t().state.noteMargin),o.attr("y",g+n+1.25*t().state.noteMargin)}}return{textWidth:h.node().getBBox().width,textHeight:n}},Y=(e,i)=>{i.attr("class","state-note");const g=i.append("rect").attr("x",0).attr("y",t().state.padding),s=i.append("g"),{textWidth:n,textHeight:h}=K(e,0,0,s);return g.attr("height",h+2*t().state.noteMargin),g.attr("width",n+t().state.noteMargin*2),g},H=function(e,i){const g=i.id,s={id:g,label:i.id,width:0,height:0},n=e.append("g").attr("id",g).attr("class","stateGroup");i.type==="start"&&I(n),i.type==="end"&&F(n),(i.type==="fork"||i.type==="join")&&J(n,i),i.type==="note"&&Y(i.note.text,n),i.type==="divider"&&C(n),i.type==="default"&&i.descriptions.length===0&&W(n,i),i.type==="default"&&i.descriptions.length>0&&X(n,i);const h=n.node().getBBox();return s.width=h.width+2*t().state.padding,s.height=h.height+2*t().state.padding,s};let A=0;const q=function(e,i,g){const s=function(d){switch(d){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}};i.points=i.points.filter(d=>!Number.isNaN(d.y));const n=i.points,h=P().x(function(d){return d.x}).y(function(d){return d.y}).curve(U),l=e.append("path").attr("d",h(n)).attr("id","edge"+A).attr("class","transition");let a="";if(t().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),l.attr("marker-end","url("+a+"#"+s(N.relationType.DEPENDENCY)+"End)"),g.title!==void 0){const d=e.append("g").attr("class","stateLabel"),{x,y:p}=$.calcLabelPosition(i.points),o=v.getRows(g.title);let f=0;const b=[];let m=0,M=0;for(let u=0;u<=o.length;u++){const c=d.append("text").attr("text-anchor","middle").text(o[u]).attr("x",x).attr("y",p+f),y=c.node().getBBox();m=Math.max(m,y.width),M=Math.min(M,y.x),k.info(y.x,x,p+f),f===0&&(f=c.node().getBBox().height,k.info("Title height",f,p)),b.push(c)}let E=f*o.length;if(o.length>1){const u=(o.length-1)*f*.5;b.forEach((c,y)=>c.attr("y",p+y*f-u)),E=f*o.length}const r=d.node().getBBox();d.insert("rect",":first-child").attr("class","box").attr("x",x-m/2-t().state.padding/2).attr("y",p-E/2-t().state.padding/2-3.5).attr("width",m+t().state.padding).attr("height",E+t().state.padding),k.info(r)}A++};let w;const z={},Z=function(){},Q=function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},V=function(e,i,g,s){w=t().state;const n=t().securityLevel;let h;n==="sandbox"&&(h=S("#i"+i));const l=n==="sandbox"?S(h.nodes()[0].contentDocument.body):S("body"),a=n==="sandbox"?h.nodes()[0].contentDocument:document;k.debug("Rendering diagram "+e);const d=l.select(`[id='${i}']`);Q(d),new L({multigraph:!0,compound:!0,rankdir:"RL"}).setDefaultEdgeLabel(function(){return{}});const x=s.db.getRootDoc();T(x,d,void 0,!1,l,a,s);const p=w.padding,o=d.node().getBBox(),f=o.width+p*2,b=o.height+p*2,m=f*1.75;R(d,b,m,w.useMaxWidth),d.attr("viewBox",`${o.x-w.padding}  ${o.y-w.padding} `+f+" "+b)},_=e=>e?e.length*w.fontSizeFactor:1,T=(e,i,g,s,n,h,l)=>{const a=new L({compound:!0,multigraph:!0});let d,x=!0;for(d=0;d<e.length;d++)if(e[d].stmt==="relation"){x=!1;break}g?a.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:x?1:w.edgeLengthFactor,nodeSep:x?1:50,isMultiGraph:!0}):a.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:x?1:w.edgeLengthFactor,nodeSep:x?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),l.db.extract(e);const p=l.db.getStates(),o=l.db.getRelations(),f=Object.keys(p);for(const r of f){const u=p[r];g&&(u.parentId=g);let c;if(u.doc){let y=i.append("g").attr("id",u.id).attr("class","stateGroup");c=T(u.doc,y,u.id,!s,n,h,l);{y=j(y,u,s);let B=y.node().getBBox();c.width=B.width,c.height=B.height+w.padding/2,z[u.id]={y:w.compositTitleSize}}}else c=H(i,u);if(u.note){const y={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},B=H(i,y);u.note.position==="left of"?(a.setNode(c.id+"-note",B),a.setNode(c.id,c)):(a.setNode(c.id,c),a.setNode(c.id+"-note",B)),a.setParent(c.id,c.id+"-group"),a.setParent(c.id+"-note",c.id+"-group")}else a.setNode(c.id,c)}k.debug("Count=",a.nodeCount(),a);let b=0;o.forEach(function(r){b++,k.debug("Setting edge",r),a.setEdge(r.id1,r.id2,{relation:r,width:_(r.title),height:w.labelHeight*v.getRows(r.title).length,labelpos:"c"},"id"+b)}),O(a),k.debug("Graph after layout",a.nodes());const m=i.node();a.nodes().forEach(function(r){r!==void 0&&a.node(r)!==void 0?(k.warn("Node "+r+": "+JSON.stringify(a.node(r))),n.select("#"+m.id+" #"+r).attr("transform","translate("+(a.node(r).x-a.node(r).width/2)+","+(a.node(r).y+(z[r]?z[r].y:0)-a.node(r).height/2)+" )"),n.select("#"+m.id+" #"+r).attr("data-x-shift",a.node(r).x-a.node(r).width/2),h.querySelectorAll("#"+m.id+" #"+r+" .divider").forEach(u=>{const c=u.parentElement;let y=0,B=0;c&&(c.parentElement&&(y=c.parentElement.getBBox().width),B=parseInt(c.getAttribute("data-x-shift"),10),Number.isNaN(B)&&(B=0)),u.setAttribute("x1",0-B+8),u.setAttribute("x2",y-B-8)})):k.debug("No Node "+r+": "+JSON.stringify(a.node(r)))});let M=m.getBBox();a.edges().forEach(function(r){r!==void 0&&a.edge(r)!==void 0&&(k.debug("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(a.edge(r))),q(i,a.edge(r),a.edge(r).relation))}),M=m.getBBox();const E={id:g||"root",label:g||"root",width:0,height:0};return E.width=M.width+2*w.padding,E.height=M.height+2*w.padding,k.debug("Doc rendered",E,a),E},tt={setConf:Z,draw:V},gt={parser:D,db:N,renderer:tt,styles:G,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()}};export{gt as diagram};
