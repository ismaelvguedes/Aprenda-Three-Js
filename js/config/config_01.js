console.log('Aula 01 - Iniciando cena básica')

const config = {
    janela: '#janela',
    largura: 800,
    altura: 600,
    corFundo: 0x222222
};

let cena = new THREE.Scene();
cena.background = new THREE.Color(config.corFundo);

let camera = new THREE.PerspectiveCamera(60, config.largura / config.altura, 0.1, 1000);
camera.position.set(0, 0, 3);
cena.add(camera);

let render = new THREE.WebGLRenderer();
render.setSize(config.largura, config.altura);
document.querySelector(config.janela).appendChild(render.domElement);

render.setAnimationLoop(() => {
    render.render(cena, camera);
});