Iniciando o projeto:

* Utilizamos o Gulp como processador CSS:
    1. npm init
    2. npm install --save-dev gulp gulp-sass
    3. criar .gitignore, colocar dentro node_modules e dist (poque o dist: pq sempre que rodarmos o arquivo o dist será criada)
    4. No package.json add "build": "gulp", no scripts
    5. Ajuste do arquivo GulpFile.js
        * Código: gulpfile.js (aporveitar em outros arquivos)
        * precisa somente ter uma estrutura nas pastas e arquivos:
            a. criar pasta src
                a.1 dentro de src vai ter styles, images (se for o caso de ter imagens no programa)
                    a.1.1 dentro de styles vai ter nosso main.scss
                    a.1.2

    6. No index, precisamos trazer o arquivo css, para isso usamos o <link>, buscando o arquivo no diretório dist/css

    