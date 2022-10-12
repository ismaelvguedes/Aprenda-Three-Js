<h1>Aprenda Three Js (BÁSICO)</h1>

<img src="https://miro.medium.com/max/724/1*6s_Dkfeldg35ySmAp0tPkQ.png">

<h2>Documentação</h2>
https://threejs.org/

<h2>Dependências</h2>
<a href="https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.min.js">Three js - 
  https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.min.js</a><br>
<a href="https://cdn.jsdelivr.net/npm/three@0.145.0/examples/js/controls/OrbitControls.js">Orbit Controls - https://cdn.jsdelivr.net/npm/three@0.145.0/examples/js/controls/OrbitControls.js</a>

<h1>Aula 01 - Instalação e configuração:</h1>

<h2>Passo 1</h2>
<p>Crie uma pasta <code>AprendaThreeJs</code> para armazenar os arquivos e abra ela no Visual Code.<br> E crie três pastas para armazenar os arquivos <code>css</code>,<code>js</code> e <code>img</code>.</p>

<h2>Passo 2</h2>
<p>Agora vamos criar nosso <code>index.html</code> e inserir essas linhas abaixo: </p>

```
<!-- Documentação padrão html brasil -->
<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Aprenda Three Js</title>

        <!-- Folha de estilo simples -->
        <link rel="stylesheet" href="css/estilo_index.css">
    </head>
    <body>
    
        <!-- Codigo -->
        
        <!-- Fim -->

    </body>
</html>
```

<p>Adicione uma <code>div</code> dentro do comentário <code>Codigo</code> para usarmos de tela: </p>

```
<!-- Aqui será criado um canvas WebGL -->
<div id="janela"></div>
```

<p>Depois adicione as dependências: </p>

```
<!-- Importando dependências CDN - Three Js v0.145.0 -->
<script src="https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.145.0/examples/js/controls/OrbitControls.js"></script>
```
<h2>Passo 3</h2>
<p>Agora vamos criar nosso <code>estilo_index.css</code> dentro da pasta <code>css</code> e inserir essas linhas abaixo: </p>

```
@charset "utf-8";

* {
    margin: 0;
    padding: 0;
}

:root {
    --corFundo: #333333
}

body {
    width: 100%;
    height: 100vh;
    
    background-color: var(--corFundo);

    display: flex;
    align-items: center;
    justify-content: center;
}
```
