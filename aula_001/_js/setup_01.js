const options = {
    targetSelector: '#scena',
    width: 800,
    height: 600,
    backgroundColor: 0x222222
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize(
    options.width, options.height
)

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color( options.backgroundColor );

const camera = new THREE.PerspectiveCamera(
    60, options.width / options.height, 1000, .1
);

camera.position.z = 5;