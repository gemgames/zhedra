hedra.Dodeca = class {
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
      this._scale = this.anchor.scale = x * 0.35;
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
    let x = new Zhedra.Dodeca({
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
