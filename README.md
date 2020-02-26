## Iniciando Servidor

Acesse a pasta serve pelo cmd

Instale o Adonis em sua máquina via npm
```bash
1. $ npm i -g @adonisjs/cli
```

Execute o seguinte comando para instalar as dependencias do projeto
```bash
1. $ npm i
```

É necessário Gerar o Banco de Dados, para isso execute o seguinte comando, caso ocorra um erro verifique a pasta database existe o arquivo 'lyncas_test', se existir exclúa caso queira gerar novamente e rode novamente o comando.
```bash
1. $ adonis migration:run
```

Para Iniciar o Servidor basta executar o comando
```bash
1. $ adonis serve --dev
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
1. $ npm i
```

Para Iniciar o Client basta executar o comando
```bash
1. $ npm start
```