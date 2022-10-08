const options = {
    targetSelector: '#scena',
    width: 800,
    height: 600,
    backgroundColor: 0x222222
}

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize(
    options.width, options.height
)

renderer.setPixelRatio(window.devicePixelRatio)

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color( options.backgroundColor );

const camera = new THREE.PerspectiveCamera(
    60, options.width / options.height, 1000, .1
);

camera.position.z = 5;

renderer.setAnimationLoop(() => {
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene, camera)
    })
    renderer.render( scene, camera )
})

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    }
)

x3.add(camera);