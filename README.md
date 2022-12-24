## CustomersAPI  
Em desenvolvimento:
- Testes automatizados
- Paginação no GET
- Metodo de insert/ update 
- Migrations para facilitar subida de schema no banco de dados.
- Criar docker-compose para subir container de BDD e aplicação (ambiente de desenvolvimento)

**Precisa de refatoração** :P

### Criação do .env
```
APP_PORT = Porta que o APP deverá escutar.
ENVIRONMENT = Ambiente à ser configurado.
DB_DRIVER = Nome do DBMS.
DB_HOST = URL do host do bdd que será utilizado.
DB_PORT = Porta do host do bdd que será utilizado.
DB_USER = Usuário que será utilizado no bdd.
DB_PASSWORD = Senha do usuário acima.
DB_NAME = Nome do bdd onde se encontra o schema de Customers.
```

### Executando com Docker

- Criar arquivo `.env` com variável `APP_PORT` para setar a porta na qual a API irá rodar
- Buildar dockerfile utilizando: `docker build .`
- `docker run -d -p <host_port>:<container_port> id_imagem`

### Executando diretamente

- Criar arquivo `.env` com variável `APP_PORT` para setar a porta na qual a API irá rodar
- `npm install && npm install typescript -g`
- `npm start`

#### Scripts registrados:
`transpile` : gera os arquivos `.js` finais no diretório dist  
`transpile:watch` : a cada alteração detectada em arquivos .ts presentes no projeto, gera seus respectivos `.js`.  
`start` : Transpila e executa o projeto em seu entrypoint -> `dist/index.js` (não detecta alterações automaticamente)  

