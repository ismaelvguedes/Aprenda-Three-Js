<h1>Aprenda Three Js (BÁSICO)</h1>

<img src="https://miro.medium.com/max/724/1*6s_Dkfeldg35ySmAp0tPkQ.png">

<h2>Documentação</h2>
https://threejs.org/

<h2>Dependências</h2>
<a href="https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.min.js">Three js - 
  https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.min.js</a><br>
<a href="https://cdn.jsdelivr.net/npm/three@0.145.0/examples/js/controls/OrbitControls.js">Orbit Controls - https://cdn.jsdelivr.net/npm/three@0.145.0/examples/js/controls/OrbitControls.js</a>

<h1>Aula 01</h1>

<h2>Passo 1</h2>
<p>Crie uma pasta <code>AprendaThreeJs</code> para armazenar os arquivos e abra ela no Visual Code.</p>

<h2>Passo 2</h2>
<p>Crie trÊs pastas para armazenar os arquivos <code>css</code>,<code>js</code> e <code>img</code>.</p>

<h2>Passo 3</h2>
<p>Agora vamos criar nosso <code>index.html</code> e inserir essas linhas abaixo: </p>

<pre>
```

<!-- Documentação padrão html brasil -->
<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Aprenda Three Js - Ismael Guedes</title>

        <!-- Folha de estilo simples -->
        <link rel="stylesheet" href="css/estilo_index.css">
    </head>
    <body>
        <div id="janela"></div>

        <!-- Importando dependências CDN - Three Js v0.145.0 -->
        <script src="https://cdn.jsdelivr.net/npm/three@0.145.0/build/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/three@0.145.0/examples/js/controls/OrbitControls.js"></script>
        <script src="js/config/config_01.js"></script>
        <script src="js/cenarios/cena_01.js"></script>

    </body>
</html>
´´´
</pre>
