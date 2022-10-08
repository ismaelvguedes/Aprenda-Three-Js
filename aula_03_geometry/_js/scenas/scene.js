const ambiente = new THREE.AmbientLight();
ambiente.intensity = 0.3;
const light = new THREE.DirectionalLight();
light.position.y = 10;

const cube = new THREE.Mesh( new THREE.BoxGeometry(), new THREE.MeshPhongMaterial( { color: 0x348feb } ) );

const circle = new THREE.Mesh(
    new THREE.CircleGeometry(0.5, 25),
    new THREE.MeshPhongMaterial( { color: 0xeb33e3, side: THREE.DoubleSide} ) 
);
circle.position.x = -2.0;
circle.rotation.x = THREE.MathUtils.degToRad(-90);

const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 1),
    new THREE.MeshPhongMaterial( { color: 0xff6200 } ) 
);
cone.position.x = 2.0;

const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 1),
    new THREE.MeshPhongMaterial( { color: 0x32ff00 } ) 
);
cylinder.position.z = 2.0;

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshPhongMaterial( { color: 0xff1111, side: THREE.DoubleSide} ) 
);
plane.position.z = -2.0;
plane.rotation.x = THREE.MathUtils.degToRad(-90);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshPhongMaterial( { color: 0xffd300 } ) 
);
sphere.position.y = 2.0;

const path = new THREE.Path();
path.moveTo(.5, 4);
path.lineTo(-.5, 4);
path.lineTo(-.5, 3);
path.lineTo(.5, 3);
path.lineTo(.5, 4);

const geo = new THREE.BufferGeometry();
geo.setFromPoints(path.getPoints());

const draw = new THREE.Line(geo, new THREE.LineBasicMaterial( { color: 0xFFFFFF } ))

const pathCurve = new THREE.Path();
pathCurve.moveTo(-3, 3);
pathCurve.quadraticCurveTo(0, 6, 3, 3);

const geoCurve = new THREE.BufferGeometry();
geoCurve.setFromPoints(pathCurve.getPoints());

const drawCurve = new THREE.Line(geoCurve, new THREE.LineBasicMaterial( { color: 0xFFFFFF } ))

const pathBesie = new THREE.Path();
pathBesie.moveTo(-3, 5);
pathBesie.bezierCurveTo(-1, 7, 1, 4, 3, 5);

const geoCurveBesie = new THREE.BufferGeometry();
geoCurveBesie.setFromPoints(pathBesie.getPoints());

const drawCurveBesie = new THREE.Line(geoCurveBesie, new THREE.LineBasicMaterial( { color: 0xFFFFFF } ))

const pathCoracao = new THREE.Shape();
pathCoracao.moveTo(-1.1, 7.5);
pathCoracao.quadraticCurveTo(-1.1, 8.2, -0.5, 8.2);
pathCoracao.quadraticCurveTo(-0.1, 8.2, 0.0, 7.7);
pathCoracao.quadraticCurveTo(0.1, 8.2, 0.5, 8.2);
pathCoracao.quadraticCurveTo(1.1, 8.2, 1.1, 7.5);
pathCoracao.quadraticCurveTo(1.1, 7.0, 0.0, 6.3);
pathCoracao.quadraticCurveTo(-1.1, 7.0, -1.1, 7.5);

/*
const geoCoracao = new THREE.ShapeGeometry(
    pathCoracao
);
*/

const geometry = new THREE.ExtrudeGeometry(
    pathCoracao, {
        depth: 0.01,
        bevelEnabled: true,
        bevelSize: 0.1,
        bevelThickness: 0.1
    }
);

const drawCoracao = new THREE.Mesh(
    geometry, new THREE.MeshLambertMaterial( {color: 0xff1111, side: THREE.FrontSide} )
)

scene.add(ambiente)
scene.add(cube)
scene.add(light)
scene.add(circle)
scene.add(cone)
scene.add(cylinder)
scene.add(plane)
scene.add(sphere)
scene.add(draw)
scene.add(drawCurve)
scene.add(drawCurveBesie)
scene.add(drawCoracao)

x3.add(light, {label: 'Sol' });
x3.add(circle, {label: 'Circle' })
x3.add(cone, {label: 'Cone' })
x3.add(cylinder,  {label: 'Cylinder' })
x3.add( cube, {label: 'Cubo' } );
x3.add( plane, {label: 'Plane' } );
x3.add( sphere, {label: 'Sphere' } );
x3.add( draw, {label: 'Linha' } );
x3.add( drawCurve, {label: 'Linha Curva' } );
x3.add( drawCurveBesie, {label: 'Linha Curva' } );
x3.add( drawCoracao, {label: 'Coração' } );