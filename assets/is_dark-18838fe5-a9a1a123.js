import{aG as s,aH as a}from"./mermaid.esm.min-b0b06b29.js";const c=n=>{const{r:e,g:r,b:o}=s.parse(n),t=.2126*a.channel.toLinear(e)+.7152*a.channel.toLinear(r)+.0722*a.channel.toLinear(o);return a.lang.round(t)},i=c,l=n=>i(n)>=.5,h=l,L=n=>!h(n),u=L;export{u as L};
