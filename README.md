Respostas para o Relatório
1. O que é Rota Dinâmica?
É uma rota que aceita parâmetros variáveis na URL, permitindo que um único componente exiba dados diferentes. No seu projeto, você definiu path: 'users/:id'. O trecho :id é a parte dinâmica que muda conforme o usuário clicado.

2. O que é paramMap?
É um recurso do Angular usado para ler os parâmetros de uma rota ativa. Você o utilizou no UserDetailComponent para "pegar" o ID da URL (ex: o número "3" em /users/3) e descobrir qual usuário deve ser exibido na tela.

3. Onde você usou Observable e por quê?
 Observables no user.service.ts (ao fazer o http.get) e nos componentes (ao usar o .subscribe).

Por quê: Eles são usados para lidar com requisições assíncronas. Como a API leva tempo para responder, o Observable "observa" a chegada dos dados e avisa o sistema para atualizar a tela assim que eles estiverem prontos.

 O que cada arquivo faz (Resumo Direto)
app.config.ts: Configura o projeto e habilita o HttpClient para o app acessar a internet.

app.routes.ts: Define o "mapa" de navegação (quais links levam a quais páginas).

user.service.ts: Faz a busca real dos dados na API externa.

user.ts (Model): Define o formato do objeto Usuário (nome, email, etc.) para evitar erros de dados.

app.ts e app.html: São a base do site. Devem conter o <router-outlet> para que as outras páginas apareçam.

main.ts: O arquivo que inicia toda a aplicação no navegador.