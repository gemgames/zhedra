var Zdog;Zdog.Tetra=class{constructor(t){this.children="WIP";let o,r=["addTo","translate","rotate","scale","color","fill","stroke","frontFace","bottomFace","leftFace","rightFace"],s=Math.cos(Zdog.TAU/6)/2,e=.5+s;this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:t.translate||{x:0,y:0,z:0},rotate:t.rotate||{x:0,y:0,z:0},scale:t.scale||{x:0,y:0,z:0}});let a=this.anchor;o=Zdog.TAU/3,this.anchor1=[new Zdog.Anchor({addTo:a,rotate:{y:-0*o}}),new Zdog.Anchor({addTo:a,rotate:{y:-1*o}}),new Zdog.Anchor({addTo:a,rotate:{y:-2*o}})];let l=this.anchor1;o=-1*Math.acos(1/3)+Zdog.TAU/4,this.anchor2=[new Zdog.Anchor({addTo:l[0],translate:{z:s,y:e/2},rotate:{x:o}}),new Zdog.Anchor({addTo:l[1],translate:{z:s,y:e/2},rotate:{x:o}}),new Zdog.Anchor({addTo:l[2],translate:{z:s,y:e/2},rotate:{x:o}})],l=null;let h=this.anchor2;this.parts=[new Zdog.Polygon({addTo:a,translate:{y:e/2},rotate:{x:-Zdog.TAU/4,z:-Zdog.TAU/2},radius:.5,sides:3,color:void 0===t.bottomFace?t.color:t.bottomFace,fill:t.fill,stroke:t.stroke}),new Zdog.Polygon({addTo:h[0],translate:{y:-s},radius:.5,sides:3,color:void 0===t.frontFace?t.color:t.frontFace,fill:t.fill,stroke:t.stroke}),new Zdog.Polygon({addTo:h[1],translate:{y:-s},radius:.5,sides:3,color:void 0===t.rightFace?t.color:t.rightFace,fill:t.fill,stroke:t.stroke}),new Zdog.Polygon({addTo:h[2],translate:{y:-s},radius:.5,sides:3,color:void 0===t.leftFace?t.color:t.leftFace,fill:t.fill,stroke:t.stroke})],h=null;for(let o=0;o<r.length;o++)void 0!==t[r[o]]&&(this["_"+r[o]]=t[r[o]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get frontFace(){return this._frontFace}get bottomFace(){return this._bottomFace}get leftFace(){return this._leftFace}get rightFace(){return this._rightFace}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=this.anchor.translate=t||{x:0,y:0,z:0}}set rotate(t){this._rotate=this.anchor.rotate=t||{x:0,y:0,z:0}}set scale(t){this._scale=this.anchor.scale=t||{x:0,y:0,z:0}}set color(t){this._color=this.parts[0].color=this.parts[1].color=this.parts[2].color=this.parts[3].color=t||"#333"}set fill(t){this._fill=this.anchor.fill="boolean"==typeof t&&t}set stroke(t){this._stroke=this.parts[0].stroke=this.parts[1].stroke=this.parts[2].stroke=this.parts[3].stroke=t||0}set frontFace(t){this._frontFace=this.parts[1].color=t||"#333"}set bottomFace(t){this._bottomFace=this.parts[0].color=t||"#333"}set leftFace(t){this._leftFace=this.parts[2].color=t||"#333"}set rightFace(t){this._rightFace=this.parts[3].color=t||"#333"}remove(t){this.addTo&&this.addTo.removeChild(this)}},Zdog.Octa=class{constructor(t){this.children="WIP";let o,r=["addTo","translate","rotate","scale","color","fill","stroke","colors"],s=Math.sqrt(3)/2*2/3,e=3*s/2,a=Math.asin(.5/e);this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:{x:t.translate.x-4,y:t.translate.y-4,z:t.translate.z},rotate:t.rotate||{x:0,y:0,z:0},scale:.7*t.scale});let l=this.anchor;o=Zdog.TAU/4,this.anchor1=[new Zdog.Anchor({addTo:l,rotate:{y:1.5*-o}}),new Zdog.Anchor({addTo:l,rotate:{y:2.5*-o}}),new Zdog.Anchor({addTo:l,rotate:{y:3.5*-o}}),new Zdog.Anchor({addTo:l,rotate:{y:4.5*-o}})];let h=this.anchor1;this.anchor2=[],o=-1;for(let t=0;t<8;t++)this.anchor2.push(new Zdog.Anchor({addTo:h[t%4],translate:{z:.5},rotate:{x:a*o}})),o=3===t?1:o;h=null;let i=this.anchor2;this.parts=[],o=-1;for(let r=0;r<8;r++)this.parts.push(new Zdog.Polygon({sides:3,radius:s,addTo:i[r],translate:{y:-s/2*o},scale:{y:o},stroke:!1,fill:!0,color:void 0===t.colors?t.color:t.colors[r],backface:!1})),o=3===r?1:o;i=null;for(let o=0;o<r.length;o++)void 0!==t[r[o]]&&(this["_"+r[o]]=t[r[o]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get colors(){return this._colors}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=t,this.anchor.translate={x:t.x-4,y:t.y-4,z:t.z}}set rotate(t){this._rotate=this.anchor.rotate=t||{x:0,y:0,z:0}}set scale(t){this._scale=t,this.anchor.scale="object"==typeof t?{x:.7*t.x,y:.7*t.y,z:.7*t.z}:.7*t}set color(t){this._color=this.parts[0].color=this.parts[1].color=this.parts[2].color=this.parts[3].color=t||"#333"}set fill(t){this._fill=this.anchor.fill="boolean"==typeof t&&t}set stroke(t){this._stroke=this.parts[0].stroke=this.parts[1].stroke=this.parts[2].stroke=this.parts[3].stroke=t||0}set colors(t){this._colors=t;for(let o=0;o<8;o++)this.parts[o]=t[o]}remove(t){this.addTo&&this.addTo.removeChild(this)}},Zdog.Dodeca=class{constructor(t){this.children="WIP";let o=["addTo","translate","rotate","scale","color","fill","stroke","colors"],r=(1+Math.sqrt(5))/2,s=r*r/2;this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:{x:t.translate.x,y:t.translate.y+4,z:t.translate.z},scale:.35*t.scale});let e=this.anchor;this.parts=[new Zdog.Polygon({sides:5,radius:1,addTo:e,translate:{y:-s},rotate:{x:Zdog.TAU/4},fill:!0,stroke:!1})];let a=this.parts[0];this.parts.push(a.copy({translate:{y:s},rotate:{x:-Zdog.TAU/4}})),r=Zdog.TAU/5,this.anchor1=[new Zdog.Anchor({addTo:e,rotate:{y:0*-r}}),new Zdog.Anchor({addTo:e,rotate:{y:1*-r}}),new Zdog.Anchor({addTo:e,rotate:{y:2*-r}}),new Zdog.Anchor({addTo:e,rotate:{y:3*-r}}),new Zdog.Anchor({addTo:e,rotate:{y:4*-r}})];let l=this.anchor1;this.anchor2=[],r=-1;for(let t=0;t<10;t++)this.anchor2.push(new Zdog.Anchor({addTo:l[t%5],rotate:{x:Zdog.TAU/4*r-Math.atan(2)}})),r=4===t?1:r;l=null;let h=this.anchor2;r=-1;for(let o=0;o<10;o++)this.parts.push(a.copy({addTo:h[o],translate:{z:s},rotate:{z:Zdog.TAU/2},color:t.colors?t.colors[o]:t.color})),r=3===o?1:r;h=null;for(let r=0;r<o.length;r++)void 0!==t[o[r]]&&(this["_"+o[r]]=t[o[r]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get colors(){return this._colors}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=t,this.anchor.translate={x:t.x,y:t.y+4,z:t.z}}set rotate(t){this._rotate=this.anchor.rotate=t||{x:0,y:0,z:0}}set scale(t){this._scale=t,this.anchor.scale="object"==typeof t?{x:.35*t.x,y:.35*t.y,z:.35*t.z}:.38*t}set color(t){this._color=this.parts[0].color=this.parts[1].color=this.parts[2].color=this.parts[3].color=t||"#333"}set fill(t){this._fill=this.anchor.fill="boolean"==typeof t&&t}set stroke(t){this._stroke=this.parts[0].stroke=this.parts[1].stroke=this.parts[2].stroke=this.parts[3].stroke=t||0}set colors(t){this._colors=t;for(let o=0;o<8;o++)this.parts[o]=t[o]}remove(t){this.addTo&&this.addTo.removeChild(this)}},Zdog.Icosa=class{constructor(t){this.children="WIP";let o,r,s,e,a=["addTo","translate","rotate","scale","color","fill","stroke","colors"],l=Math.sqrt(3)/2*2/3,h=3*l/2,i=.5/Math.tan(Zdog.TAU/10),c=.5/Math.sin(Zdog.TAU/10),n=Math.asin(i/h),d=c-i,g=Math.asin(d/h),T=Math.sqrt(h*h-d*d);this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:{x:t.translate.x+4,y:t.translate.y+4,z:t.translate.z},scale:.35*t.scale});let _=this.anchor;o=-1;let y=!1,f=new Zdog.Polygon({sides:3,radius:l,addTo:null,stroke:t.stroke,fill:t.fill,color:null});for(this.anchor1=[],this.anchor2=[],this.parts=[],r=0;r<20;r++){this.anchor1.push(new Zdog.Anchor({addTo:_,rotate:{y:-Zdog.TAU/5*(r%5)},translate:{y:T/2*o}}));let a=this.anchor1[r];s=-n+(o<0?0:Zdog.TAU/2),e=-g+(o<0?Zdog.TAU/2:0),this.anchor2.push(new Zdog.Anchor({addTo:a,translate:{z:i*o},rotate:{x:y?e:s}}));let h=this.anchor2[r];this.parts.push(f.copy({addTo:h,translate:{y:-l/2},rotate:{y:o?Zdog.TAU/2:0},color:t.colors?t.colors[r]:t.color})),o=9===r?1:o,r%5==4&&(y=!y)}for(let o=0;o<a.length;o++)void 0!==t[a[o]]&&(this["_"+a[o]]=t[a[o]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get colors(){return this._colors}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=t,this.anchor.translate={x:t.x,y:t.y+4,z:t.z}}set rotate(t){this._rotate=this.anchor.rotate=t||{x:0,y:0,z:0}}set scale(t){this._scale=t,this.anchor.scale="object"==typeof t?{x:.35*t.x,y:.35*t.y,z:.35*t.z}:.38*t}set color(t){this._color=this.parts[0].color=this.parts[1].color=this.parts[2].color=this.parts[3].color=t||"#333"}set fill(t){this._fill=this.anchor.fill="boolean"==typeof t&&t}set stroke(t){this._stroke=this.parts[0].stroke=this.parts[1].stroke=this.parts[2].stroke=this.parts[3].stroke=t||0}set colors(t){this._colors=t;for(let o=0;o<20;o++)this.parts[o]=t[o]}remove(t){this.addTo&&this.addTo.removeChild(this)}};
