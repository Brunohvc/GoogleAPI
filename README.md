## Tecnologias
```bash
1. Angular
2. NodeJS
3. Adonis
4. SQLite
4. Google Books
5. Google Authentication
```

## Iniciando Servidor

Acesse a pasta serve pelo cmd

Instale o Adonis em sua máquina via npm
```bash
1. $ npm i -g @adonisjs/cli
```

Execute o seguinte comando para instalar as dependencias do projeto
```bash
2. $ npm i
```

É necessário Gerar o Banco de Dados, para isso execute o seguinte comando, caso ocorra um erro verifique na pasta database se existe o arquivo 'lyncas_test', se existir exclua caso queira gerar novamente o banco de dados e rode novamente o comando.
```bash
3. $ adonis migration:run
```

Para Iniciar o Servidor basta executar o comando
```bash
4. $ adonis serve --dev
```

---

## Habilitando Cors

Não foi configurado o cors do projeto, portando é necessária a instalação de um pluin para roda-lo,
As seguintes instruções são para o Google Chrome

Acesse o Link
```bash
1. https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
```

```bash
2. Clique em Usar no Chrome para Adicionar a extensão ao Navegador
```

```bash
3. Clique o ícone do cors na parte superior do navegador, irá abrir um modal, 
em seguida clique em cima do 'C', ele deverá ficar colorido
```

```bash
4. Caso o projeto já esteja aberto, atulize o mesmo para o CORS entrar em ação
```

```bash
OBS. Após finalizar a execução do projeto desative o CORS, o mesmo pode fazer alguns serviços 
como youtube não funcionar.
```

---

## Iniciando o Client

Acesse a pasta client pelo cmd

Instale o Angular em sua máquina via npm
```bash
1. $ npm i -g @angular/cli
```

Execute o seguinte comando para instalar as dependencias do projeto
```bash
2. $ npm i
```

Para Iniciar o Client basta executar o comando
```bash
3. $ npm start
```