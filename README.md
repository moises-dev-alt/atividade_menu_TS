# Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- Node.js
- npm (geralmente já vem com o Node)

Para verificar se está tudo instalado:

``bash
node -v
npm -v
Instalação do Projeto

Clone o repositório:

git clone URL_DO_REPOSITORIO

Entre na pasta do projeto:

cd NOME_DO_PROJETO

Instale as dependências:

npm install
Instalação do TypeScript

Caso o TypeScript não esteja instalado globalmente:

npm install -g typescript

Ou utilize diretamente via npx (recomendado):

npx tsc
Configuração do TypeScript

Inicialize o arquivo de configuração:

npx tsc --init

Isso criará o arquivo:

tsconfig.json

altere para este:

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

Estrutura do Projeto
projeto/
│
├── src/
│   └── index.ts
│
├── dist/
│
├── package.json
├── tsconfig.json
└── README.md
Compilando o Projeto

Para compilar o TypeScript para JavaScript:

npx tsc

Os arquivos compilados serão gerados na pasta:

dist/
Executando o Projeto

Após compilar:

node dist/index.js
Scripts úteis

Você também pode adicionar scripts no package.json:

"scripts": {
  "build": "npx tsc",
  "start": "node dist/index.js"
}

Então execute:

Compilar:

npm run build

Rodar:

npm start
Tecnologias Utilizadas
TypeScript
Node.js
