## CustomersAPI  

### Executando com Docker

- Criar arquivo `.env` com variável `APP_PORT` para setar a porta na qual a API irá rodar
- Buildar dockerfile utilizando: `docker build .`
- `docker run -d -p $APP_PORT id_imagem`

### Executando diretamente

- Criar arquivo `.env` com variável `APP_PORT` para setar a porta na qual a API irá rodar
- `npm install && npm install typescript -g`
- `npm run localserver` (somente funcionará em desenvolvimento)

> Checar package.json para conhecer mais scripts npm disponíveis para esse projeto.
