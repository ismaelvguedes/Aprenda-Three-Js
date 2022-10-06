const ambiente = new THREE.AmbientLight();
ambiente.intensity = 0.3;
const light = new THREE.DirectionalLight();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0xFF6347 } );

const cube = new THREE.Mesh( geometry, material );


scene.add(ambiente)
scene.add(light)
scene.add(cube)

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;

    renderer.render( scene, camera )
})