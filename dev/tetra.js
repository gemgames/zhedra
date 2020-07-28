Zhedra.Tetra = class {
  constructor(u) {
    this.children = "WIP";
    let copy = ["addTo", "color", "fill", "stroke", "colors"];
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
        color: u.colors ? u.colors[0] : u.color,
        fill: u.fill,
        stroke: u.stroke
      }),
      new Zdog.Polygon({
        addTo: d[0],
        translate: { y: -i },
        radius: 0.5,
        sides: 3,
        color: u.colors ? u.colors[1] : u.color,
        fill: u.fill,
        stroke: u.stroke
      }),
      new Zdog.Polygon({
        addTo: d[1],
        translate: { y: -i },
        radius: 0.5,
        sides: 3,
        color: u.colors ? u.colors[2] : u.color,
        fill: u.fill,
        stroke: u.stroke
      }),
      new Zdog.Polygon({
        addTo: d[2],
        translate: { y: -i },
        radius: 0.5,
        sides: 3,
        color: u.colors ? u.colors[3] : u.color,
        fill: u.fill,
        stroke: u.stroke
      })
    ];
    d = null;
    let x = u.translate || {};
    this._translate = this.anchor.translate = {
      x: x.x ? x.x : 0,
      y: x.y ? x.y : 0,
      z: x.z ? x.z : 0
    };
    x = u.rotate || {};
    this._rotate = this.anchor.rotate = {
      x: x.x ? x.x : 0,
      y: x.y ? x.y : 0,
      z: x.z ? x.z : 0
    };
    x = u.scale;
    if (typeof x === "object") {
      this._scale = this.anchor.scale = {
        x: x.x ? x.x : 0,
        y: x.y ? x.y : 0,
        z: x.z ? x.z : 0
      };
    } else {
      this._scale = this.anchor.scale = x;
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
    return this._frontFace;
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
      this._scale = this.anchor.scale = x;
    }
  }
  set color(x) {
    this._color = x;
    this.parts.forEach(function(item) {
      item.color = x;
    });
  }
  set fill(x) {
    this._fill = x;
    this.parts.forEach(function(item) {
      item.fill = x;
    });
  }
  set stroke(x) {
    this._stroke = x;
    this.parts.forEach(function(item) {
      item.stroke = x;
    });
  }
  set colors(x) {
    this._colors = x;
    this.parts.forEach(function(item, index) {
      item.color = x[index];
    });
  }
  remove(t) {
    if (this.addTo) {
      this.addTo.removeChild(this);
    }
  }
  copy(p) {
    let x = new Zhedra.Tetra({
      addTo: p.addTo ? p.addTo : this.addTo,
      translate: p.translate ? p.translate : this.translate,
      rotate: p.rotate ? p.rotate : this.rotate,
      scale: p.scale ? p.scale : this.scale,
      color: p.color ? p.color : this.color,
      fill: p.fill ? p.fill : this.fill,
      stroke: p.stroke ? p.stroke : this.stroke,
      colors: p.colors ? p.colors : this.colors
    });
  }
};
