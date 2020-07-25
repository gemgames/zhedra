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
    this._translate = this.anchor.translate = {
      x: x.x ? x.x : 0,
      y: x.y ? x.y : 0,
      z: x.z ? x.z : 0
    };
  }
  set rotate(x) {
    this._rotate = this.anchor.rotate = {
      x: x.x ? x.x : 0,
      y: x.y ? x.y : 0,
      z: x.z ? x.z : 0
    };
  }
  set scale(x) {
    if (typeof x === "object") {
      this._scale = this.anchor.scale = {
        x: x.x ? x.x : 0,
        y: x.y ? x.y : 0,
        z: x.z ? x.z : 0
      };
    } else {
      this._scale = this.anchor.scale = x * 0.5;
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
  copy(p) {
    let x = new Zhedra.Icosa({
      addTo: p.addTo ? p.addTo : undefined,
      translate: p.translate ? p.translate : undefined,
      rotate: p.rotate ? p.rotate : undefined,
      scale: p.scale ? p.scale : undefined,
      color: p.color ? p.color : undefined,
      fill: p.fill ? p.fill : undefined,
      stroke: p.stroke ? p.stroke : undefined,
      colors: p.colors ? p.colors : undefined
    });
  }
};
