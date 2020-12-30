var Zdog,
  Zhedra = {};
Zhedra.setCoords = x => ({
  x: x.x ? x.x : 0,
  y: x.y ? x.y : 0,
  z: x.z ? x.z : 0
});
Zhedra.Tetra = class {
  constructor(u) {
    this.children = "WIP";
    let copy = ["addTo", "color", "fill", "stroke", "colors"];
    //vars
    let i = Math.cos(Zdog.TAU / 6) / 2;
    let h = 0.5 + i,
      m;
    let o = { x: 0, y: 0, z: 0 };
    this.anchor = new Zdog.Anchor({
      addTo: u.addTo,
      translate: u.translate || o,
      rotate: u.rotate || o,
      scale: u.scale || o
    });
    let e = this.anchor;
    m = Zdog.TAU / 3;
    let T = a => ({ addTo: e, rotate: { y: m * a } });
    this.anchor1 = [
      new Zdog.Anchor(T(0)),
      new Zdog.Anchor(T(-1)),
      new Zdog.Anchor(T(-2))
    ];
    let c = this.anchor1;

    m = Math.acos(1 / 3) * -1 + Zdog.TAU / 4;
    T = a => ({
      addTo: c[a],
      translate: { z: i, y: h / 2 },
      rotate: { x: m }
    });
    this.anchor2 = [
      new Zdog.Anchor(T(0)),
      new Zdog.Anchor(T(1)),
      new Zdog.Anchor(T(2))
    ];
    c = null;
    let d = this.anchor2;
    T = (a, Y, R) => ({
      addTo: a,
      translate: { y: Y },
      rotate: R,
      radius: 0.5,
      sides: 3,
      color: u.colors ? u.colors[0] : u.color,
      fill: u.fill,
      stroke: u.stroke
    });
    this.parts = [
      new Zdog.Polygon(T(e, h / 2, { x: -Zdog.TAU / 4, z: -Zdog.TAU / 2 })),
      new Zdog.Polygon(T(d[0], -i, 0)),
      new Zdog.Polygon(T(d[1], -i, 0)),
      new Zdog.Polygon(T(d[2], -i, 0))
    ];
    d = null;
    this.translate = u.translate || {};
    this.rotate = u.rotate || {};
    this.scale = u.scale || 1;

    for (let j = 0; j < copy.length; j++) {
      if (u[copy[j]] !== undefined) {
        this["_" + copy[j]] = u[copy[j]];
      }
    }
  }
  //get
  get addTo() {
    return this._addTo;
  }
  get translate() {
    return this._translate;
  }
  get rotate() {
    return this._rotate;
  }
  get scale() {
    return this._scale;
  }
  get color() {
    return this._color;
  }
  get fill() {
    return this._fill;
  }
  get stroke() {
    return this._stroke;
  }
  get colors() {
    return this._frontFace;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = this.anchor.translate = Zhedra.setCoords(x);
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = Zhedra.setCoords(x);
  }
  set scale(x) {
    this._scale = this.anchor.scale =
      typeof x === "object" ? Zhedra.setCoords(x) : x;
  }
  set color(x) {
    this._color = x;
    this.parts.forEach(n=>{
      n.color = x;
    });
  }
  set fill(x) {
    this._fill = x;
    this.parts.forEach(n=>{
      n.fill = x;
    });
  }
  set stroke(x) {
    this._stroke = x;
    this.parts.forEach(n=>{
      n.stroke = x;
    });
  }
  set colors(x) {
    this._colors = x;
    this.parts.forEach((n,i)=>{
      n.color = x[i];
    });
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
  }
  copy(p) {
    let x = new Zhedra.Tetra({
      addTo: p.addTo || this.addTo,
      translate: p.translate || this.translate,
      rotate: p.rotate || this.rotate,
      scale: p.scale || this.scale,
      color: p.color || this.color,
      fill: p.fill || this.fill,
      stroke: p.stroke || this.stroke,
      colors: p.colors || this.colors
    });
  }
};
Zhedra.Cube = class {
  constructor(u) {
    this.children = "WIP";
    let copy = ["addTo", "color", "fill", "stroke", "colors"];
    //vars
    this.anchor = new Zdog.Anchor({
      addTo: u.addTo,
      translate: u.translate,
      rotate: u.rotate,
      scale: u.scale
    });
    let e = this.anchor;
    let d,
      T,
      H = 1 / 2,
      P = Zdog.TAU / 4;
    this.parts = [];
    this.parts[0] = d = new Zdog.Rect({
      addTo: e,
      length: 1,
      width: 1,
      fill: u.fill,
      stroke: u.stroke,
      translate: { y: H },
      rotate: { x: P },
      color: u.colors ? u.colors[0] : u.color
    });
    T = (A, t, R) => ({
      translate: t,
      rotate: R,
      color: u.colors ? u.colors[A] : u.color
    });
    this.parts[1] = d.copy(T(1, { z: H }, {}));
    this.parts[2] = d.copy(T(2, { x: H }, { y: P }));
    this.parts[3] = d.copy(T(3, { z: -H }, {}));
    this.parts[4] = d.copy(T(4, { x: -H }, { y: P }));
    this.parts[5] = d.copy(T(5, { y: -H }, { x: -P }));
    this.translate = u.translate || {};
    this.rotate = u.rotate || {};
    this.scale = u.scale || 1;

    for (let j = 0; j < copy.length; j++) {
      if (u[copy[j]] !== undefined) {
        this["_" + copy[j]] = u[copy[j]];
      }
    }
  }
  //get
  get addTo() {
    return this._addTo;
  }
  get translate() {
    return this._translate;
  }
  get rotate() {
    return this._rotate;
  }
  get scale() {
    return this._scale;
  }
  get color() {
    return this._color;
  }
  get fill() {
    return this._fill;
  }
  get colors() {
    return this._colors;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = this.anchor.translate = this.setCoords(x);
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = this.setCoords(x);
  }
  set scale(x) {
    this._scale = this.anchor.scale =
      typeof x === "object" ? this.setCoords(x) : x;
  }
  set color(x) {
    this._color = x;
    this.parts.forEach(n=>{
      n.color = x;
    });
  }
  set fill(x) {
    this._fill = x;
    this.parts.forEach(n=>{
      n.fill = x;
    });
  }
  set stroke(x) {
    this._stroke = x;
    this.parts.forEach(n=>{
      n.stroke = x;
    });
  }
  set colors(x) {
    this._colors = x;
    this.parts.forEach((n,i)=>{
      n.color = x[i];
    });
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
  }
  copy(p) {
    let x = new Zhedra.Cube({
      addTo: p.addTo || this.addTo,
      translate: p.translate || this.translate,
      rotate: p.rotate || this.rotate,
      scale: p.scale || this.scale,
      color: p.color ||this.color,
      fill: p.fill || this.fill,
      stroke: p.stroke || this.stroke,
      colors: p.colors || this.colors
    });
  }
};
Zhedra.Octa = class {
  constructor(u) {
    this.children = "WIP";
    //
    let copy = [
      "addTo",
      "translate",
      "rotate",
      "scale",
      "color",
      "fill",
      "stroke",
      "colors"
    ];
    //vars
    let r = ((Math.sqrt(3) / 2) * 2) / 3,
      m;
    let h = (r * 3) / 2;
    let t = Math.asin(0.5 / h);
    this.anchor = new Zdog.Anchor({
      addTo: u.addTo,
      translate: {
        x: u.translate.x,
        y: u.translate.y,
        z: u.translate.z
      },
      rotate: u.rotate || { x: 0, y: 0, z: 0 },
      scale: u.scale * 0.7
    });
    let e = this.anchor;

    m = Zdog.TAU / 4;
    let T = a=>({ addTo: e, rotate: { y: -m * (a + 1.5) } });
    this.anchor1 = [
      new Zdog.Anchor(T(0)),
      new Zdog.Anchor(T(1)),
      new Zdog.Anchor(T(2)),
      new Zdog.Anchor(T(3))
    ];
    let c = this.anchor1;

    this.anchor2 = [];
    m = -1;
    for (let j = 0; j < 8; j++) {
      this.anchor2.push(
        new Zdog.Anchor({
          addTo: c[j % 4],
          translate: { z: 0.5 },
          rotate: { x: t * m }
        })
      );
      m = j === 3 ? 1 : m;
    }
    c = null;
    let d = this.anchor2;
    this.parts = [];
    m = -1;
    for (let j = 0; j < 8; j++) {
      this.parts.push(
        new Zdog.Polygon({
          sides: 3,
          radius: r,
          addTo: d[j],
          translate: { y: (-r / 2) * m },
          scale: { y: m },
          stroke: u.stroke,
          fill: u.fill,
          color: u.colors === undefined ? u.color : u.colors[j]
        })
      );
      m = j === 3 ? 1 : m;
    }
    d = null;
    for (let j = 0; j < copy.length; j++) {
      if (u[copy[j]] !== undefined) {
        this[copy[j]] = u[copy[j]];
      }
    }
  }
  //get
  get addTo() {
    return this._addTo;
  }
  get translate() {
    return this._translate;
  }
  get rotate() {
    return this._rotate;
  }
  get scale() {
    return this._scale;
  }
  get color() {
    return this._color;
  }
  get fill() {
    return this._fill;
  }
  get stroke() {
    return this._stroke;
  }
  get colors() {
    return this._colors;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = this.anchor.translate = Zhedra.setCoords(x);
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = Zhedra.setCoords(x);
  }
  set scale(x) {
    this._scale = this.anchor.scale =
      typeof x === "object" ? Zhedra.setCoords(x) : x;
  }
  set color(x) {
    this._color = x;
    this.parts.forEach(n=>{
      n.color = x;
    });
  }
  set fill(x) {
    this._fill = x;
    this.parts.forEach(n=>{
      n.fill = x;
    });
  }
  set stroke(x) {
    this._stroke = x;
    this.parts.forEach(n=>{
      n.stroke = x;
    });
  }
  set colors(x) {
    this._colors = x;
    this.parts.forEach((n,i)=>{
      n.color = x[i];
    });
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
  }
  copy(p) {
    let x = new Zhedra.Cube({
      addTo: p.addTo || this.addTo,
      translate: p.translate || this.translate,
      rotate: p.rotate || this.rotate,
      scale: p.scale || this.scale,
      color: p.color ||this.color,
      fill: p.fill || this.fill,
      stroke: p.stroke || this.stroke,
      colors: p.colors || this.colors
    });
  }
};
Zhedra.Dodeca = class {
  constructor(u) {
    this.children = "WIP";
    //
    let copy = [
      "addTo",
      "translate",
      "rotate",
      "scale",
      "color",
      "fill",
      "stroke",
      "colors"
    ];
    //vars
    let m = (1 + Math.sqrt(5)) / 2;
    let r = (m * m) / 2;
    this.anchor = new Zdog.Anchor({
      addTo: u.addTo,
      translate: {
        x: u.translate.x,
        y: u.translate.y + 4,
        z: u.translate.z
      },
      scale: u.scale * 0.35
    });
    let e = this.anchor;
    //top and bottom
    this.parts = [
      new Zdog.Polygon({
        sides: 5,
        radius: 1,
        addTo: e,
        translate: { y: -r },
        rotate: { x: Zdog.TAU / 4 },
        fill: u.fill,
        stroke: u.stroke,
        color: u.colors ? u.colors[0] : u.color
      })
    ];
    let p = this.parts[0];
    this.parts.push(
      p.copy({
        translate: { y: r },
        rotate: { x: -Zdog.TAU / 4 },
        color: u.colors ? u.colors[0] : u.color
      })
    );

    m = Zdog.TAU / 5;
    let T = a=>({ addTo: e, rotate: { y: -m * a } });
    this.anchor1 = [
      new Zdog.Anchor(T(0)),
      new Zdog.Anchor(T(1)),
      new Zdog.Anchor(T(2)),
      new Zdog.Anchor(T(3)),
      new Zdog.Anchor(T(4))
    ];
    let c = this.anchor1;

    this.anchor2 = [];
    m = -1;
    for (let j = 0; j < 10; j++) {
      this.anchor2.push(
        new Zdog.Anchor({
          addTo: c[j % 5],
          rotate: { x: (Zdog.TAU / 4) * m - Math.atan(2) }
        })
      );
      m = j === 4 ? 1 : m;
    }
    c = null;
    let d = this.anchor2;
    m = -1;
    for (let j = 0; j < 10; j++) {
      this.parts.push(
        p.copy({
          addTo: d[j],
          translate: { z: r },
          rotate: { z: Zdog.TAU / 2 },
          color: u.colors ? u.colors[j + 2] : u.color
        })
      );
      m = j === 3 ? 1 : m;
    }
    d = null;
    for (let j = 0; j < copy.length; j++) {
      if (u[copy[j]] !== undefined) {
        this[copy[j]] = u[copy[j]];
      }
    }
  }
  //get
  get addTo() {
    return this._addTo;
  }
  get translate() {
    return this._translate;
  }
  get rotate() {
    return this._rotate;
  }
  get scale() {
    return this._scale;
  }
  get color() {
    return this._color;
  }
  get fill() {
    return this._fill;
  }
  get stroke() {
    return this._stroke;
  }
  get colors() {
    return this._colors;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = this.anchor.translate = Zhedra.setCoords(x);
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = Zhedra.setCoords(x);
  }
  set scale(x) {
    this._scale = this.anchor.scale =
      typeof x === "object" ? Zhedra.setCoords(x) : x;
  }
  set color(x) {
    this._color = x;
    this.parts.forEach(n=>{
      n.color = x;
    });
  }
  set fill(x) {
    this._fill = x;
    this.parts.forEach(n=>{
      n.fill = x;
    });
  }
  set stroke(x) {
    this._stroke = x;
    this.parts.forEach(n=>{
      n.stroke = x;
    });
  }
  set colors(x) {
    this._colors = x;
    this.parts.forEach((n,i)=>{
      n.color = x[i];
    });
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
  }
  copy(p) {
    let x = new Zhedra.Cube({
      addTo: p.addTo || this.addTo,
      translate: p.translate || this.translate,
      rotate: p.rotate || this.rotate,
      scale: p.scale || this.scale,
      color: p.color ||this.color,
      fill: p.fill || this.fill,
      stroke: p.stroke || this.stroke,
      colors: p.colors || this.colors
    });
  }
};
Zhedra.Icosa = class {
  constructor(u) {
    this.children = "WIP";
    //
    let copy = [
      "addTo",
      "translate",
      "rotate",
      "scale",
      "color",
      "fill",
      "stroke",
      "colors"
    ];
    //vars
    let fr = ((Math.sqrt(3) / 2) * 2) / 3;
    let fh = (fr * 3) / 2;
    let ca = 0.5 / Math.tan(Zdog.TAU / 10);
    let cr = 0.5 / Math.sin(Zdog.TAU / 10);
    let ct = Math.asin(ca / fh);
    let cs = cr - ca;
    let st = Math.asin(cs / fh);
    let sh = Math.sqrt(fh * fh - cs * cs),
      m,
      j,
      fc,
      fs;
    //anchor
    this.anchor = new Zdog.Anchor({
      addTo: u.addTo,
      translate: {
        x: u.translate.x,
        y: u.translate.y,
        z: u.translate.z
      },
      scale: u.scale * 0.5
    });
    let e = this.anchor;

    m = -1;
    let l = false;
    let n = new Zdog.Polygon({
      sides: 3,
      radius: fr,
      addTo: null,
      stroke: u.stroke,
      fill: u.fill,
      color: null
    });
    this.anchor1 = [];
    this.anchor2 = [];
    this.parts = [];
    for (j = 0; j < 20; j++) {
      this.anchor1.push(
        new Zdog.Anchor({
          addTo: e,
          rotate: { y: (-Zdog.TAU / 5) * (j % 5) },
          translate: { y: (sh / 2) * m }
        })
      );
      let c = this.anchor1[j];
      fc = -ct + (m < 0 ? 0 : Zdog.TAU / 2);
      fs = -st + (m < 0 ? Zdog.TAU / 2 : 0);
      this.anchor2.push(
        new Zdog.Anchor({
          addTo: c,
          translate: { z: ca * m },
          rotate: { x: !l ? fc : fs }
        })
      );
      let d = this.anchor2[j];

      this.parts.push(
        n.copy({
          addTo: d,
          translate: { y: -fr / 2 },
          rotate: { y: m ? Zdog.TAU / 2 : 0 },
          color: u.colors ? u.colors[j] : u.color
        })
      );
      m = j === 9 ? 1 : m;
      if (j % 5 === 4) {
        l = !l;
      }
    }
    for (let j = 0; j < copy.length; j++) {
      if (u[copy[j]] !== undefined) {
        this[copy[j]] = u[copy[j]];
      }
    }
  }
  //get
  get addTo() {
    return this._addTo;
  }
  get translate() {
    return this._translate;
  }
  get rotate() {
    return this._rotate;
  }
  get scale() {
    return this._scale;
  }
  get color() {
    return this._color;
  }
  get fill() {
    return this._fill;
  }
  get stroke() {
    return this._stroke;
  }
  get colors() {
    return this._colors;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = this.anchor.translate = Zhedra.setCoords(x);
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = Zhedra.setCoords(x);
  }
  set scale(x) {
    this._scale = this.anchor.scale =
      typeof x === "object" ? Zhedra.setCoords(x) : x;
  }
  set color(x) {
    this._color = x;
    this.parts.forEach(n=>{
      n.color = x;
    });
  }
  set fill(x) {
    this._fill = x;
    this.parts.forEach(n=>{
      n.fill = x;
    });
  }
  set stroke(x) {
    this._stroke = x;
    this.parts.forEach(n=>{
      n.stroke = x;
    });
  }
  set colors(x) {
    this._colors = x;
    this.parts.forEach((n,i)=>{
      n.color = x[i];
    });
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
  }
  copy(p) {
    let x = new Zhedra.Icosa({
      addTo: p.addTo || this.addTo,
      translate: p.translate || this.translate,
      rotate: p.rotate || this.rotate,
      scale: p.scale || this.scale,
      color: p.color || this.color,
      fill: p.fill || this.fill,
      stroke: p.stroke || this.stroke,
      colors: p.colors || this.colors
    });
  }
};
Zhedra.init = function() {
  Zdog.Tetra = Zhedra.Tetra;
  Zdog.Cube = Zhedra.Cube;
  Zdog.Octa = Zhedra.Octa;
  Zdog.Dodeca = Zhedra.Dodeca;
  Zdog.Icosa = Zhedra.Icosa;
};
