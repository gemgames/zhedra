var Zdog,Zhedra={Tetra:class{constructor(t){this.children="WIP";let o,r=["addTo","color","fill","stroke","colors"],s=Math.cos(Zdog.TAU/6)/2,a=.5+s;this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:t.translate||{x:0,y:0,z:0},rotate:t.rotate||{x:0,y:0,z:0},scale:t.scale||{x:0,y:0,z:0}});let e=this.anchor;o=Zdog.TAU/3,this.anchor1=[new Zdog.Anchor({addTo:e,rotate:{y:-0*o}}),new Zdog.Anchor({addTo:e,rotate:{y:-1*o}}),new Zdog.Anchor({addTo:e,rotate:{y:-2*o}})];let l=this.anchor1;o=-1*Math.acos(1/3)+Zdog.TAU/4,this.anchor2=[new Zdog.Anchor({addTo:l[0],translate:{z:s,y:a/2},rotate:{x:o}}),new Zdog.Anchor({addTo:l[1],translate:{z:s,y:a/2},rotate:{x:o}}),new Zdog.Anchor({addTo:l[2],translate:{z:s,y:a/2},rotate:{x:o}})],l=null;let c=this.anchor2;this.parts=[new Zdog.Polygon({addTo:e,translate:{y:a/2},rotate:{x:-Zdog.TAU/4,z:-Zdog.TAU/2},radius:.5,sides:3,color:t.colors?t.colors[0]:t.color,fill:t.fill,stroke:t.stroke}),new Zdog.Polygon({addTo:c[0],translate:{y:-s},radius:.5,sides:3,color:t.colors?t.colors[1]:t.color,fill:t.fill,stroke:t.stroke}),new Zdog.Polygon({addTo:c[1],translate:{y:-s},radius:.5,sides:3,color:t.colors?t.colors[2]:t.color,fill:t.fill,stroke:t.stroke}),new Zdog.Polygon({addTo:c[2],translate:{y:-s},radius:.5,sides:3,color:t.colors?t.colors[3]:t.color,fill:t.fill,stroke:t.stroke})],c=null;let i=t.translate||{};this._translate=this.anchor.translate={x:i.x?i.x:0,y:i.y?i.y:0,z:i.z?i.z:0},i=t.rotate||{},this._rotate=this.anchor.rotate={x:i.x?i.x:0,y:i.y?i.y:0,z:i.z?i.z:0},i=t.scale,this._scale=this.anchor.scale="object"==typeof i?{x:i.x?i.x:0,y:i.y?i.y:0,z:i.z?i.z:0}:i;for(let o=0;o<r.length;o++)void 0!==t[r[o]]&&(this["_"+r[o]]=t[r[o]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get colors(){return this._frontFace}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=this.anchor.translate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set rotate(t){this._rotate=this.anchor.rotate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set scale(t){this._scale=this.anchor.scale="object"==typeof t?{x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}:t}set color(t){this._color=t,this.parts.forEach(function(o){o.color=t})}set fill(t){this._fill=t,this.parts.forEach(function(o){o.fill=t})}set stroke(t){this._stroke=t,this.parts.forEach(function(o){o.stroke=t})}set colors(t){this._colors=t,this.parts.forEach(function(o,r){o.color=t[r]})}remove(t){this.addTo&&this.addTo.removeChild(this)}copy(t){new Zhedra.Tetra({addTo:t.addTo?t.addTo:void 0,translate:t.translate?t.translate:void 0,rotate:t.rotate?t.rotate:void 0,scale:t.scale?t.scale:void 0,color:t.color?t.color:void 0,fill:t.fill?t.fill:void 0,stroke:t.stroke?t.stroke:void 0,colors:t.colors?t.colors:void 0})}},Cube:class{constructor(t){this.children="WIP";let o=["addTo","color","fill","stroke","colors"];this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:t.translate,rotate:t.rotate,scale:t.scale});let r,s=this.anchor;this.parts=[],this.parts[0]=r=new Zdog.Rect({addTo:s,length:1,width:1,fill:t.fill,stroke:t.stroke,translate:{y:.5},rotate:{x:Zdog.TAU/4},color:t.colors?t.colors[0]:t.color}),this.parts[1]=r.copy({translate:{z:.5},rotate:{},color:t.colors?t.colors[1]:t.color}),this.parts[2]=r.copy({translate:{x:.5},rotate:{y:Zdog.TAU/4},color:t.colors?t.colors[2]:t.color}),this.parts[3]=r.copy({translate:{z:-.5},rotate:{},color:t.colors?t.colors[3]:t.color}),this.parts[4]=r.copy({translate:{x:-.5},rotate:{y:Zdog.TAU/4},color:t.colors?t.colors[4]:t.color}),this.parts[5]=r.copy({translate:{y:-.5},rotate:{x:-Zdog.TAU/4},color:t.colors?t.colors[5]:t.color});let a=t.translate||{};this._translate=this.anchor.translate={x:a.x?a.x:0,y:a.y?a.y:0,z:a.z?a.z:0},a=t.rotate||{},this._rotate=this.anchor.rotate={x:a.x?a.x:0,y:a.y?a.y:0,z:a.z?a.z:0},a=t.scale||0,this._scale=this.anchor.scale="object"==typeof a?{x:a.x?a.x:0,y:a.y?a.y:0,z:a.z?a.z:0}:a;for(let r=0;r<o.length;r++)void 0!==t[o[r]]&&(this["_"+o[r]]=t[o[r]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get colors(){return this._colors}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=this.anchor.translate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set rotate(t){this._rotate=this.anchor.rotate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set scale(t){this._scale=this.anchor.scale="object"==typeof t?{x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}:t}set color(t){this._color=t,this.parts.forEach(function(o){o.color=t})}set fill(t){this._fill=t,this.parts.forEach(function(o){o.fill=t})}set stroke(t){this._stroke=t,this.parts.forEach(function(o){o.stroke=t})}set colors(t){this._colors=t,this.parts.forEach(function(o,r){o.color=t[r]})}remove(t){this.addTo&&this.addTo.removeChild(this)}copy(t){new Zhedra.Cube({addTo:t.addTo?t.addTo:void 0,translate:t.translate?t.translate:void 0,rotate:t.rotate?t.rotate:void 0,scale:t.scale?t.scale:void 0,color:t.color?t.color:void 0,fill:t.fill?t.fill:void 0,stroke:t.stroke?t.stroke:void 0,colors:t.colors?t.colors:void 0})}},Octa:class{constructor(t){this.children="WIP";let o,r=["addTo","translate","rotate","scale","color","fill","stroke","colors"],s=Math.sqrt(3)/2*2/3,a=3*s/2,e=Math.asin(.5/a);this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:{x:t.translate.x,y:t.translate.y,z:t.translate.z},rotate:t.rotate||{x:0,y:0,z:0},scale:.7*t.scale});let l=this.anchor;o=Zdog.TAU/4,this.anchor1=[new Zdog.Anchor({addTo:l,rotate:{y:1.5*-o}}),new Zdog.Anchor({addTo:l,rotate:{y:2.5*-o}}),new Zdog.Anchor({addTo:l,rotate:{y:3.5*-o}}),new Zdog.Anchor({addTo:l,rotate:{y:4.5*-o}})];let c=this.anchor1;this.anchor2=[],o=-1;for(let t=0;t<8;t++)this.anchor2.push(new Zdog.Anchor({addTo:c[t%4],translate:{z:.5},rotate:{x:e*o}})),o=3===t?1:o;c=null;let i=this.anchor2;this.parts=[],o=-1;for(let r=0;r<8;r++)this.parts.push(new Zdog.Polygon({sides:3,radius:s,addTo:i[r],translate:{y:-s/2*o},scale:{y:o},stroke:t.stroke,fill:t.fill,color:void 0===t.colors?t.color:t.colors[r]})),o=3===r?1:o;i=null;for(let o=0;o<r.length;o++)void 0!==t[r[o]]&&(this[r[o]]=t[r[o]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get colors(){return this._colors}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=this.anchor.translate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set rotate(t){this._rotate=this.anchor.rotate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set scale(t){this._scale=this.anchor.scale="object"==typeof t?{x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}:.7*t}set color(t){this._color=t,this.parts.forEach(function(o){o.color=t})}set fill(t){this._fill=t,this.parts.forEach(function(o){o.fill=t})}set stroke(t){this._stroke=t,this.parts.forEach(function(o){o.stroke=t})}set colors(t){this._colors=t,this.parts.forEach(function(o,r){o.color=t[r]})}remove(t){this.addTo&&this.addTo.removeChild(this)}copy(t){new Zhedra.Octa({addTo:t.addTo?t.addTo:void 0,translate:t.translate?t.translate:void 0,rotate:t.rotate?t.rotate:void 0,scale:t.scale?t.scale:void 0,color:t.color?t.color:void 0,fill:t.fill?t.fill:void 0,stroke:t.stroke?t.stroke:void 0,colors:t.colors?t.colors:void 0})}},Dodeca:class{constructor(t){this.children="WIP";let o=["addTo","translate","rotate","scale","color","fill","stroke","colors"],r=(1+Math.sqrt(5))/2,s=r*r/2;this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:{x:t.translate.x,y:t.translate.y+4,z:t.translate.z},scale:.35*t.scale});let a=this.anchor;this.parts=[new Zdog.Polygon({sides:5,radius:1,addTo:a,translate:{y:-s},rotate:{x:Zdog.TAU/4},fill:t.fill,stroke:t.stroke,color:t.colors?t.colors[0]:t.color})];let e=this.parts[0];this.parts.push(e.copy({translate:{y:s},rotate:{x:-Zdog.TAU/4},color:t.colors?t.colors[0]:t.color})),r=Zdog.TAU/5,this.anchor1=[new Zdog.Anchor({addTo:a,rotate:{y:0*-r}}),new Zdog.Anchor({addTo:a,rotate:{y:1*-r}}),new Zdog.Anchor({addTo:a,rotate:{y:2*-r}}),new Zdog.Anchor({addTo:a,rotate:{y:3*-r}}),new Zdog.Anchor({addTo:a,rotate:{y:4*-r}})];let l=this.anchor1;this.anchor2=[],r=-1;for(let t=0;t<10;t++)this.anchor2.push(new Zdog.Anchor({addTo:l[t%5],rotate:{x:Zdog.TAU/4*r-Math.atan(2)}})),r=4===t?1:r;l=null;let c=this.anchor2;r=-1;for(let o=0;o<10;o++)this.parts.push(e.copy({addTo:c[o],translate:{z:s},rotate:{z:Zdog.TAU/2},color:t.colors?t.colors[o+2]:t.color})),r=3===o?1:r;c=null;for(let r=0;r<o.length;r++)void 0!==t[o[r]]&&(this[o[r]]=t[o[r]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get colors(){return this._colors}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=this.anchor.translate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set rotate(t){this._rotate=this.anchor.rotate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set scale(t){this._scale=this.anchor.scale="object"==typeof t?{x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}:.35*t}set color(t){this._color=t,this.parts.forEach(function(o){o.color=t})}set fill(t){this._fill=t,this.parts.forEach(function(o){o.fill=t})}set stroke(t){this._stroke=t,this.parts.forEach(function(o){o.stroke=t})}set colors(t){this._colors=t,this.parts.forEach(function(o,r){o.color=t[r]})}remove(t){this.addTo&&this.addTo.removeChild(this)}copy(t){new Zhedra.Dodeca({addTo:t.addTo?t.addTo:void 0,translate:t.translate?t.translate:void 0,rotate:t.rotate?t.rotate:void 0,scale:t.scale?t.scale:void 0,color:t.color?t.color:void 0,fill:t.fill?t.fill:void 0,stroke:t.stroke?t.stroke:void 0,colors:t.colors?t.colors:void 0})}},Icosa:class{constructor(t){this.children="WIP";let o,r,s,a,e=["addTo","translate","rotate","scale","color","fill","stroke","colors"],l=Math.sqrt(3)/2*2/3,c=3*l/2,i=.5/Math.tan(Zdog.TAU/10),h=.5/Math.sin(Zdog.TAU/10),d=Math.asin(i/c),n=h-i,y=Math.asin(n/c),T=Math.sqrt(c*c-n*n);this.anchor=new Zdog.Anchor({addTo:t.addTo,translate:{x:t.translate.x,y:t.translate.y,z:t.translate.z},scale:.5*t.scale});let f=this.anchor;o=-1;let g=!1,u=new Zdog.Polygon({sides:3,radius:l,addTo:null,stroke:t.stroke,fill:t.fill,color:null});for(this.anchor1=[],this.anchor2=[],this.parts=[],r=0;r<20;r++){this.anchor1.push(new Zdog.Anchor({addTo:f,rotate:{y:-Zdog.TAU/5*(r%5)},translate:{y:T/2*o}}));let e=this.anchor1[r];s=-d+(o<0?0:Zdog.TAU/2),a=-y+(o<0?Zdog.TAU/2:0),this.anchor2.push(new Zdog.Anchor({addTo:e,translate:{z:i*o},rotate:{x:g?a:s}}));let c=this.anchor2[r];this.parts.push(u.copy({addTo:c,translate:{y:-l/2},rotate:{y:o?Zdog.TAU/2:0},color:t.colors?t.colors[r]:t.color})),o=9===r?1:o,r%5==4&&(g=!g)}for(let o=0;o<e.length;o++)void 0!==t[e[o]]&&(this[e[o]]=t[e[o]])}get addTo(){return this._addTo}get translate(){return this._translate}get rotate(){return this._rotate}get scale(){return this._scale}get color(){return this._color}get fill(){return this._fill}get stroke(){return this._stroke}get colors(){return this._colors}set addTo(t){this._addTo=this.anchor.addTo=t}set translate(t){this._translate=this.anchor.translate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set rotate(t){this._rotate=this.anchor.rotate={x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}}set scale(t){this._scale=this.anchor.scale="object"==typeof t?{x:t.x?t.x:0,y:t.y?t.y:0,z:t.z?t.z:0}:.5*t}set color(t){this._color=this.parts[0].color=this.parts[1].color=this.parts[2].color=this.parts[3].color=t||"#333"}set fill(t){this._fill=this.anchor.fill="boolean"==typeof t&&t}set stroke(t){this._stroke=this.parts[0].stroke=this.parts[1].stroke=this.parts[2].stroke=this.parts[3].stroke=t||0}set colors(t){this._colors=t;for(let o=0;o<20;o++)this.parts[o]=t[o]}remove(t){this.addTo&&this.addTo.removeChild(this)}copy(t){new Zhedra.Icosa({addTo:t.addTo?t.addTo:void 0,translate:t.translate?t.translate:void 0,rotate:t.rotate?t.rotate:void 0,scale:t.scale?t.scale:void 0,color:t.color?t.color:void 0,fill:t.fill?t.fill:void 0,stroke:t.stroke?t.stroke:void 0,colors:t.colors?t.colors:void 0})}},init:function(){Zdog.Tetra=Zhedra.Tetra,Zdog.Cube=Zhedra.Cube,Zdog.Octa=Zhedra.Octa,Zdog.Dodeca=Zhedra.Dodeca,Zdog.Icosa=Zhedra.Icosa}};
