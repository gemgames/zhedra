Zdog.Octa = class {
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
