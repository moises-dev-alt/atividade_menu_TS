# Projeto Console TypeScript

Aplicacao de console em TypeScript com 18 exercicios e um menu principal para escolher qual exercicio executar.

## Requisitos

Antes de rodar o projeto, instale:

- Node.js
- npm, que normalmente ja vem junto com o Node.js

Para verificar se os dois estao instalados, execute:

``bash
node -v
npm -v
`

## Instalacao

Entre na pasta do projeto:

``bash
cd projeto
`

Instale as dependencias:

``bash
npm install
`

Esse comando instala as dependencias usadas pelo projeto, incluindo:

- typescript, usado para compilar os arquivos .ts
- ts-node, usado pelo script de desenvolvimento
- readline-sync, usado para ler entradas pelo terminal
- @types/readline-sync, usado para tipagem do readline-sync

## Configuracao do TypeScript

O projeto usa o arquivo tsconfig.json para configurar a compilacao.

Configuracoes principais:

{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "rootDir": "./src",
    "outDir": "./dist",
    "types": ["node"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "sourceMap": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}

## Compilando com npx tsc

Para transformar os arquivos .ts da pasta src em arquivos .js na pasta dist, execute:

``bash
npx tsc
`

O npx usa a versao local do TypeScript instalada em node_modules, sem precisar instalar o TypeScript globalmente.

Tambem e possivel compilar informando explicitamente o arquivo de configuracao:

``bash
npx tsc -p tsconfig.json
`

Depois da compilacao, a pasta dist tera arquivos como:

``text
dist/menu.js
dist/exercicio01.js
dist/exercicio02.js
...
`

## Executando o projeto

Depois de compilar com npx tsc, rode o menu principal com:

``bash
node dist/menu.js
`

No menu, escolha um numero de 1 a 18 para executar um exercicio, ou 0 para encerrar o programa.


## Fluxo recomendado

Sempre que baixar ou abrir o projeto em uma maquina nova:

``bash
npm install
npx tsc
node dist/menu.js
`

Sempre que alterar algum arquivo .ts:

``bash
npx tsc
node dist/menu.js
`

## Estrutura do projeto

``text
projeto/
  src/
    menu.ts
    exercicio01.ts
    exercicio02.ts
    ...
    exercicio18.ts
    types/
      readline-sync.d.ts
  dist/
    menu.js
    exercicio01.js
    ...
  package.json
  package-lock.json
  tsconfig.json
  README.md
```
