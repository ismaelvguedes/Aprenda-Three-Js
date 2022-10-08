// Configurações para inicialização
const configurações = {
    janela: '#janela',
    largura: 800,
    altura: 600,
    corFundo: 0x666666
}

// Criar e configurar cena
let cena = new THREE.Scene();
cena.background = new THREE.Color(configurações.corFundo);

// Criar e configurar camera
let camera = new THREE.PerspectiveCamera(
    60, 
    configurações.largura / configurações.altura,
    0.1,
    1000
)

// Criar e configurar render
let render = new THREE.WebGLRenderer();
render.setSize(configurações.largura, configurações.altura)
document.querySelector(configurações.janela).appendChild(render.domElement);
render.render(cena, camera)