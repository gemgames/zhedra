var Zdog,Zhedra={};
Zhedra.Tetra = class {
  constructor(u) {
    this.children = "WIP";
    let copy = [
      "addTo",
      "translate",
      "rotate",
      "scale",
      "color",
      "fill",
      "stroke",
      "frontFace",
      "bottomFace",
      "leftFace",
      "rightFace"
    ];
    //vars
    let i = Math.cos(Zdog.TAU / 6) / 2;
    let h = 0.5 + i,
      m;
    this.anchor = new Zdog.Anchor({
      addTo: u.addTo,
      translate: u.translate || { x: 0, y: 0, z: 0 },
      rotate: u.rotate || { x: 0, y: 0, z: 0 },
      scale: u.scale || { x: 0, y: 0, z: 0 }
    });
    let e = this.anchor;
    m = Zdog.TAU / 3;
    this.anchor1 = [
      new Zdog.Anchor({ addTo: e, rotate: { y: m * -0 } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: m * -1 } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: m * -2 } })
    ];
    let c = this.anchor1;

    m = Math.acos(1 / 3) * -1 + Zdog.TAU / 4;
    this.anchor2 = [
      new Zdog.Anchor({
        addTo: c[0],
        translate: { z: i, y: h / 2 },
        rotate: { x: m }
      }),
      new Zdog.Anchor({
        addTo: c[1],
        translate: { z: i, y: h / 2 },
        rotate: { x: m }
      }),
      new Zdog.Anchor({
        addTo: c[2],
        translate: { z: i, y: h / 2 },
        rotate: { x: m }
      })
    ];
    c = null;
    let d = this.anchor2;

    this.parts = [
      new Zdog.Polygon({
        addTo: e,
        translate: { y: h / 2 },
        rotate: { x: -Zdog.TAU / 4, z: -Zdog.TAU / 2 },
        radius: 0.5,
        sides: 3,
        color: u.bottomFace === undefined ? u.color : u.bottomFace,
        fill: u.fill,
        stroke: u.stroke
      }),
      new Zdog.Polygon({
        addTo: d[0],
        translate: { y: -i },
        radius: 0.5,
        sides: 3,
        color: u.frontFace === undefined ? u.color : u.frontFace,
        fill: u.fill,
        stroke: u.stroke
      }),
      new Zdog.Polygon({
        addTo: d[1],
        translate: { y: -i },
        radius: 0.5,
        sides: 3,
        color: u.rightFace === undefined ? u.color : u.rightFace,
        fill: u.fill,
        stroke: u.stroke
      }),
      new Zdog.Polygon({
        addTo: d[2],
        translate: { y: -i },
        radius: 0.5,
        sides: 3,
        color: u.leftFace === undefined ? u.color : u.leftFace,
        fill: u.fill,
        stroke: u.stroke
      })
    ];
    d = null;
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
  get frontFace() {
    return this._frontFace;
  }
  get bottomFace() {
    return this._bottomFace;
  }
  get leftFace() {
    return this._leftFace;
  }
  get rightFace() {
    return this._rightFace;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = this.anchor.translate = x || { x: 0, y: 0, z: 0 };
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = x || { x: 0, y: 0, z: 0 };
  }
  set scale(x) {
    this._scale = this.anchor.scale = x || { x: 0, y: 0, z: 0 };
  }
  set color(x) {
    this._color = this.parts[0].color = this.parts[1].color = this.parts[2].color = this.parts[3].color =
      x || "#333";
  }
  set fill(x) {
    this._fill = this.anchor.fill = typeof x === "boolean" ? x : false;
  }
  set stroke(x) {
    this._stroke = this.parts[0].stroke = this.parts[1].stroke = this.parts[2].stroke = this.parts[3].stroke =
      x || 0;
  }
  set frontFace(x) {
    this._frontFace = this.parts[1].color = x || "#333";
  }
  set bottomFace(x) {
    this._bottomFace = this.parts[0].color = x || "#333";
  }
  set leftFace(x) {
    this._leftFace = this.parts[2].color = x || "#333";
  }
  set rightFace(x) {
    this._rightFace = this.parts[3].color = x || "#333";
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
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
        x: u.translate.x - 4,
        y: u.translate.y - 4,
        z: u.translate.z
      },
      rotate: u.rotate || { x: 0, y: 0, z: 0 },
      scale: u.scale * 0.7
    });
    let e = this.anchor;

    m = Zdog.TAU / 4;
    this.anchor1 = [
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * (0 + 1.5) } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * (1 + 1.5) } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * (2 + 1.5) } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * (3 + 1.5) } })
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
          stroke: false,
          fill: true,
          color: u.colors === undefined ? u.color : u.colors[j],
          backface: false
        })
      );
      m = j === 3 ? 1 : m;
    }
    d = null;
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
    return this._colors;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = x;
    this.anchor.translate = { x: x.x - 4, y: x.y - 4, z: x.z };
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = x || { x: 0, y: 0, z: 0 };
  }
  set scale(x) {
    this._scale = x;
    if (typeof x === "object") {
      this.anchor.scale = { x: x.x * 0.7, y: x.y * 0.7, z: x.z * 0.7 };
    } else {
      this.anchor.scale = x * 0.7;
    }
  }
  set color(x) {
    this._color = this.parts[0].color = this.parts[1].color = this.parts[2].color = this.parts[3].color =
      x || "#333";
  }
  set fill(x) {
    this._fill = this.anchor.fill = typeof x === "boolean" ? x : false;
  }
  set stroke(x) {
    this._stroke = this.parts[0].stroke = this.parts[1].stroke = this.parts[2].stroke = this.parts[3].stroke =
      x || 0;
  }
  set colors(x) {
    this._colors = x;
    for (let i = 0; i < 8; i++) {
      this.parts[i] = x[i];
    }
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
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
        fill: true,
        stroke: false
      })
    ];
    let p = this.parts[0];
    this.parts.push(p.copy({ translate: { y: r }, rotate: { x: -Zdog.TAU / 4 } }));

    m = Zdog.TAU / 5;
    this.anchor1 = [
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * 0 } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * 1 } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * 2 } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * 3 } }),
      new Zdog.Anchor({ addTo: e, rotate: { y: -m * 4 } })
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
          color: u.colors ? u.colors[j] : u.color
        })
      );
      m = j === 3 ? 1 : m;
    }
    d = null;
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
    return this._colors;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = x;
    this.anchor.translate = { x: x.x, y: x.y + 4, z: x.z };
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = x || { x: 0, y: 0, z: 0 };
  }
  set scale(x) {
    this._scale = x;
    if (typeof x === "object") {
      this.anchor.scale = { x: x.x * 0.35, y: x.y * 0.35, z: x.z * 0.35 };
    } else {
      this.anchor.scale = x * 0.38;
    }
  }
  set color(x) {
    this._color = this.parts[0].color = this.parts[1].color = this.parts[2].color = this.parts[3].color =
      x || "#333";
  }
  set fill(x) {
    this._fill = this.anchor.fill = typeof x === "boolean" ? x : false;
  }
  set stroke(x) {
    this._stroke = this.parts[0].stroke = this.parts[1].stroke = this.parts[2].stroke = this.parts[3].stroke =
      x || 0;
  }
  set colors(x) {
    this._colors = x;
    for (let i = 0; i < 8; i++) {
      this.parts[i] = x[i];
    }
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
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
        x: u.translate.x + 4,
        y: u.translate.y + 4,
        z: u.translate.z
      },
      scale: u.scale * 0.55
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
    return this._colors;
  }
  //set
  set addTo(x) {
    this._addTo = this.anchor.addTo = x;
  }
  set translate(x) {
    this._translate = x;
    this.anchor.translate = { x: x.x, y: x.y + 4, z: x.z };
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = x || { x: 0, y: 0, z: 0 };
  }
  set scale(x) {
    this._scale = x;
    if (typeof x === "object") {
      this.anchor.scale = { x: x.x * 0.55, y: x.y * 0.55, z: x.z * 0.55 };
    } else {
      this.anchor.scale = x * 0.55;
    }
  }
  set color(x) {
    this._color = this.parts[0].color = this.parts[1].color = this.parts[2].color = this.parts[3].color =
      x || "#333";
  }
  set fill(x) {
    this._fill = this.anchor.fill = typeof x === "boolean" ? x : false;
  }
  set stroke(x) {
    this._stroke = this.parts[0].stroke = this.parts[1].stroke = this.parts[2].stroke = this.parts[3].stroke =
      x || 0;
  }
  set colors(x) {
    this._colors = x;
    for (let i = 0; i < 20; i++) {
      this.parts[i] = x[i];
    }
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
  }
};
Zhedra.init = function(){
  Zdog.Tetra = Zhedra.Tetra;
  Zdog.Octa = Zhedra.Octa;
  Zdog.Dodeca = Zhedra.Dodeca;
  Zdog.Icosa = Zhedra.Icosa;
};
