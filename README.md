## CustomersAPI  
> Em desenvolvimento: pesquisa por nome e metodos para insert  

**Precisa de refatoração** :P

### Executando com Docker

- Criar arquivo `.env` com variável `APP_PORT` para setar a porta na qual a API irá rodar
- Buildar dockerfile utilizando: `docker build .`
- `docker run -d -p <host_port>:<container_port> id_imagem`

### Executando diretamente

- Criar arquivo `.env` com variável `APP_PORT` para setar a porta na qual a API irá rodar
- `npm install && npm install typescript -g`
- `npm run localserver` (**utilizar apenas em ambiente de desenvolvimento**)

#### Scripts registrados:
`transpile` : gera os arquivos `.js` finais no diretório dist  
`transpile:watch` : a cada alteração detectada em arquivos .ts presentes no projeto, gera seus respectivos `.js`.  
`start` : Executa o projeto em seu entrypoint -> `dist/index.js` (não detecta allterações automaticamente)  

