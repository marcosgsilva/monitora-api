<h3>Aplicação para monitoramento de API, Verifica se a API  está disponível. Existem algumas particularidades, pois usei para 
monitorar a quantidade de registros em um determinado serviço.</h3>

Tecnologias empregadas para o desenvolvimento da Aplicação.
  <ul>
  <li>NodeJS</li>
    <li>Api Trello</li>
    <li>Jest</li>
    <li>Yarn</li>
  </ul>


Essa Api foi desenvolvida para resolver o meu problema, más se alguém tiver o mesmo o problema, está ai o código.


Antes de iniciar a aplicação, favor renomear .env.example para .env e o preenchê-lo, não se preoculpe aqui o ensinarei como preenchê-lo.

Vamos instalar e rodar a nosssa aplicação.

yarn install: para instalar a aplicação
yarn run cron: para deixar em background a monitoração.
yarn start: Para rodar o serviço na porta 3000.


#APP: Site ou sistema a ser verificado
APP_URL=

#Basic Authentitication  - Deve ser informada caso a API tenha autenticação Basic Authentication
APP_USERNAME=
APP_PASSWORD=

#Configuração do Card no Trello - Essa configuração pode ser encontrada no serviço localhost:3000/trello/infocards, más é necessário infomar os
dados de token e chave de acesso abaixo.

TOP= top<br>
IDLIST=<br>
BOARD_ID =<br>


#Token e Chave para acesso e gravação no Trello, pode ser encontrada no Link https://trello.com/app-key
APP_TRELLO_KEY=<br>
APP_TRELLO_TOKEN=<br>


