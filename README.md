# Zhedra

_A polyhedra plugin for the Zdog Pseudo-3D Engine

## Install

### CDN

Link directly to Zdog JS on ...

``` html
<script src="..."></script>
```

##Features

+ New Objects!
+ Tetrahedron (Zdog.Tetra)
+ Octahedron (Zdog.Octa)
+ Dodecahedron (Zdog.Dodeca)
+ Icosahedron (Zdog.Icosa)
+ Change the color of each face
+ Less than 9Kb minified

##Caveats

+ Objects can't have children

##Codepen Demos

The Codepen 

##Hello World Demo

``` js
// Initialize Zhedra
Zhedra.init(Zdog);


// Create a Zdog illustration
let illo = new Zdog.Illustration({
  element: '.zdog-canvas'
});

// Create a tetrahedron object
new Zdog.Tetra({
  addTo: illo,
  translate: {},
  rotate: {},
  scale: 80,
  color: "#E62",
  fill: true,
  stroke: 0,
});

// Animation loop
function animate() {
  illo.rotate.x += 0.03;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
```

### Colors

``` js
colors: [
  "#c25",
  "#e62",
  "#ea0",
  "#636"
]
```

## API

### Zdog.Tetra

| Param      | Details | Default |
|:-----------|:--------|:--------|
| `addTo`    | Illustration / Anchor / Group to add to | required |
| `translate` | (Object) Translation of the Tetrahedron | `{x : 0 , y : 0 , z : 0}` |
| `rotate` | (Object) Rotation of the Tetrahedron | `{x : 0 , y : 0 , z : 0}` |
| `scale` | (Object / Number) Scale of the Tetrahedron | `1` |
| `color` | (String) Color of all faces of the Tetrahedron | `'#333'` |
| `fill` | (Boolean) Fill param for all faces | `true` |
| `stroke` | (String) Stroke param for all faces | `'#333'` |
| `frontFace` | (String) Color of the front face | `optional` |
| `bottomFace` | (String) Color of the bottom face | `optional` |
| `rightFace` | (String) Color of the right face | `optional` |
| `leftFace` | (String) Color of the left face | `optional` |
| `colors` | (Array containing Strings) Colors of each faces | `optional` |

#### Demo

``` js
// Create a tetrahedron object
new Zdog.Tetra({
  addTo: illo,
  translate: {},
  rotate: {},
  scale: 80,
  color: "#E62",
  fill: true,
  stroke: 0,
});
```

### Zdog.octa

| Param      | Details | Default |
|:-----------|:--------|:--------|
| `addTo`    | Illustration / Anchor / Group to add to | required |
| `translate` | (Object) Translation of the Octahedron | `{x : 0 , y : 0 , z : 0}` |
| `rotate` | (Object) Rotation of the Octahedron | `{x : 0 , y : 0 , z : 0}` |
| `scale` | (Object / Number) Scale of the Octtahedron | `1` |
| `color` | (String) Color of all faces of the Octtahedron | `'#333'` |
| `fill` | (Boolean) Fill param for all faces | `true` |
| `stroke` | (String) Stroke param for all faces | `'#333'` |
| `frontFace` | (String) Color of the front face | `optional` |
| `bottomFace` | (String) Color of the bottom face | `optional` |
| `rightFace` | (String) Color of the right face | `optional` |
| `leftFace` | (String) Color of the left face | `optional` |
| `colors` | (Array containing Strings) Colors of each faces | `optional` |

#### Demo

``` js
// Create a octahedron object
new Zdog.Tetra({
  addTo: illo,
  translate: {},
  rotate: {},
  scale: 80,
  color: "#C25",
  fill: true,
  stroke: 0,
});
```

### Zdog.Dodeca

| Param      | Details | Default |
|:-----------|:--------|:--------|
| `addTo`    | Illustration / Anchor / Group to add to | required |
| `translate` | (Object) Translation of the Dodecahedron | `{x : 0 , y : 0 , z : 0}` |
| `rotate` | (Object) Rotation of the Dodecahedron | `{x : 0 , y : 0 , z : 0}` |
| `scale` | (Object / Number) Scale of the Dodecahedron | `1` |
| `color` | (String) Color of all faces of the Dodecahedron | `'#333'` |
| `fill` | (Boolean) Fill param for all faces | `true` |
| `stroke` | (String) Stroke param for all faces | `'#333'` |
| `frontFace` | (String) Color of the front face | `optional` |
| `bottomFace` | (String) Color of the bottom face | `optional` |
| `rightFace` | (String) Color of the right face | `optional` |
| `leftFace` | (String) Color of the left face | `optional` |
| `colors` | (Array containing Strings) Colors of each faces | `optional` |

#### Demo

``` js
// Create a dodecahedron object
new Zdog.Dodeca({
  addTo: illo,
  translate: {},
  rotate: {},
  scale: 80,
  color: "#EA0",
  fill: true,
  stroke: 0,
});
```

### Zdog.Icosa

| Param      | Details | Default |
|:-----------|:--------|:--------|
| `addTo`    | Illustration / Anchor / Group to add to | required |
| `translate` | (Object) Translation of the Icosahedron | `{x : 0 , y : 0 , z : 0}` |
| `rotate` | (Object) Rotation of the Icosahedron | `{x : 0 , y : 0 , z : 0}` |
| `scale` | (Object / Number) Scale of the Icosahedron | `1` |
| `color` | (String) Color of all faces of the Icosahedron | `'#333'` |
| `fill` | (Boolean) Fill param for all faces | `true` |
| `stroke` | (String) Stroke param for all faces | `'#333'` |
| `frontFace` | (String) Color of the front face | `optional` |
| `bottomFace` | (String) Color of the bottom face | `optional` |
| `rightFace` | (String) Color of the right face | `optional` |
| `leftFace` | (String) Color of the left face | `optional` |
| `colors` | (Array containing Strings) Colors of each faces | `optional` |

#### Demo

``` js
// Create a icosahedron object
new Zdog.Icosa({
  addTo: illo,
  translate: {},
  rotate: {},
  scale: 80,
  color: "#0A2",
  fill: true,
  stroke: 0,
});
```

##Thank you!

Thank you for reading this! If you have any issues, please feel free to request an issue, or create a pull request
