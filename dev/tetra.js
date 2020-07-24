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
