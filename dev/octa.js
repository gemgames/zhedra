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
      this._scale = this.anchor.scale = x*0.7;
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
};
