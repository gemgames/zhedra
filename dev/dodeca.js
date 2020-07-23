Zdog.Dodeca = class {
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
