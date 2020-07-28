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
    let d;
    this.parts = [];
    this.parts[0] = d = new Zdog.Rect({
      addTo: e,
      length: 1,
      width: 1,
      fill: u.fill,
      stroke: u.stroke,
      translate: { y: 0.5 },
      rotate: { x: Zdog.TAU / 4 },
      color: u.colors ? u.colors[0] : u.color
    });
    this.parts[1] = d.copy({
      translate: { z: 0.5 },
      rotate: {},
      color: u.colors ? u.colors[1] : u.color
    });
    this.parts[2] = d.copy({
      translate: { x: 0.5 },
      rotate: { y: Zdog.TAU / 4 },
      color: u.colors ? u.colors[2] : u.color
    });
    this.parts[3] = d.copy({
      translate: { z: -0.5 },
      rotate: {},
      color: u.colors ? u.colors[3] : u.color
    });
    this.parts[4] = d.copy({
      translate: { x: -0.5 },
      rotate: { y: Zdog.TAU / 4 },
      color: u.colors ? u.colors[4] : u.color
    });
    this.parts[5] = d.copy({
      translate: { y: -0.5 },
      rotate: { x: -Zdog.TAU / 4 },
      color: u.colors ? u.colors[5] : u.color
    });
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
    x = u.scale || 0;
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
    let x = new Zhedra.Cube({
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
