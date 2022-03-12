### API de encurtador de URL
### Objetivo
Esta API foi construída para avaliação de conhecimentos sobre NodeJS, Express, Typescript e Firestore.

### Para rodar esse projeto
* Crie um banco no [firebase firestore](https://console.firebase.google);
* Baixe sua private key nas configurações do projeto, na aba service accounts;
* Coloque o arquivo da private key dentro da pasta ./database/
* Rode os comandos abaixo
```
  npm install
  npm build:watch

  //Em um novo terminal rode
  npm run dev
``` 

### Endpoints
* HOST: `http://localhost`
* PORT: `5000`
* Listar todas as URLs: `GET {HOST:PORT}/`
* Encurtar URL: `POST {HOST:PORT}/ BODY {url: "https://minha-url"}`
* Update URL: `PUT {HOST:PORT}/:id BODY {url: "https://minha-url-alterada"}`
* Buscar URL encurtada: `GET {HOST:PORT}/:hash`
* Excluir URL: `DELETE {HOST:PORT}/:id`