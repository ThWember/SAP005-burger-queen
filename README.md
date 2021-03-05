![logo](https://user-images.githubusercontent.com/71895567/110145263-01a55900-7db8-11eb-8a97-581572a97772.png)

## Índice

- [1. Sobre](#1-Sobre)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do
  projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
- [6. Hacker Edition](#6-hacker-edition)
- [7. Dicas e leituras complementares](#7-dicas-e-leituras-complementares)
- [8. Checklist](#8-checklist)

---

## 1. Sobre

A aplicação Web Hambúrguer da Tartária foi criada para atender as necessidades desta hamburgueria, que precisa de uma solução tecnológica que auxilie os funcionários do salão e da cozinha a agilizarem os processos envolvidos no atendimento, desde a criação do pedido até sua execução. 

### Login e Cadastro

Na tela inicial, o colaborador tem a opção de fazer o login ou um cadastro, caso seja novo na equipe.
Na tela de cadastro são pedidos dados como email, senha, nome, e a área de trabalho (Salão ou Cozinha). 
![cadastro](https://user-images.githubusercontent.com/71895567/110156361-9ebabe80-7dc5-11eb-9c04-cce02d586506.gif)

Finalizado o cadastro, o usuário é redirecionado para o login, onde ele deve colocar o email e senha para ser redirecionado para sua respectiva área.

![login](https://user-images.githubusercontent.com/71895567/110156378-a37f7280-7dc5-11eb-8341-f3c6dd1ef44a.gif)

### Salão e Cozinha
Com o login realizado, o funcionário do salão tem acesso a tela de produtos, onde ele pode fará as anotações dos pedidos.
Para cada pedido é necessário informar o nome do cliente e a mesa.
Visto o dinamismo do trabalho no salão, optamos por deixar a aplicação bastante intuitiva, com o objetivo de facilitar e agilizar, logo nós:
- [x] Utilizamos imagens em todos os produtos para facilitar a busca;
- [x] Sistema de touch para selecionar itens de forma prática;
- [x] Soma de produtos automática;
- [x] Layout com cores leves que não cansam os olhos.

O pedido finalizado é enviado a cozinha, onde os colaboradores desta área irão acessar para preparar os pedidos.
Nele constam detalhes importantes como produtos, quantidade, mesa, cliente e status da preparação.
Uma vez o pedido pronto, o funcionário clicará em "Alterar Status" para classificá-lo como "Pronto", e este será enviado para a tela do salão.

Optamos por deixar os pedidos prontos na mesma tela que o garçom realiza outros pedidos, com o objetivo de evitar navegações desnecessárias, que poderiam ser facilmente esquecidas em um dia de muito movimento, por exemplo. 
O pedido pronto dispara um luz piscante que chama a atenção imediatamente do garçom, que assim que o entregá-lo para sua respectiva mesa, poderá clicar naquele alarme e apagá-lo.

![salao](https://user-images.githubusercontent.com/71895567/110160793-3bcc2600-7dcb-11eb-8674-57b9cf756780.gif)

## 2. Desenvolvimento

### Ferramentas utilizadas

O projeto foi desenvolvido utilizando:
- ReactJS;
- CSS3;
- HTML5;

### Planejamento

Utilizamos para nosso planejamento o Trello, e o metódo Kanban para divisão de etapas em formato de histórias.
![trello](https://user-images.githubusercontent.com/71895567/110163285-9ca92d80-7dce-11eb-8178-af6ac6857727.png)

A histórias de usuário foram divididas em 4:
- [x] História 1 - Usuário deve ter seu perfil (login/senha) para acessar o sistema;
- [x] História 2 - Garçom/Garçonete deve poder anotar o seu pedido;
- [x] História 3 - Chefe de cozinha deve ver os pedidos;
- [x] História 4 - Garçom/Garçonete deve ver os pedidos prontos para servir.

### Layout e Paleta de Cores

Inicialmente definimos o protótipo de baixa fidelidade, onde escolhemos a disposição dos itens de uma forma que contribuisse na agilidade de cada processo.
![prototipo](https://user-images.githubusercontent.com/71895567/110163902-6d46f080-7dcf-11eb-814f-2c134ec256bf.png)

A hamburgueria é temática, sua loja tem um visual medieval e a região dos nômades criadores da primeira técnica da história para compactar carne moída(que hoje conhecemos como hambúrguer), dá nome ao estabelecimento.
Respeitando a temática, decidimos abusar dos elementos medievais, casados á uma paleta de cores com tons de laranja, pois é uma cor muito utilizada em Brands relacionadas a alimentação, pois estimula a ação e o apetite.
O mapa que da vida ao layout, é o mapa da antiga região da Tartária.
<img width="714" alt="paleta-de-cores" src="https://user-images.githubusercontent.com/71895567/110163931-72a43b00-7dcf-11eb-8d69-ac59c2d4a237.png">

### Testes de Usabilidade

Realizamos testes de usabilidade com um pequeno grupo de pessoas, com o intuito de encontrar possiveís erros, ou algum detalhe que dificulte ou incomode o usuário. Estes foram extremamente úteis, pois resolvemos problemas importantes como:
- [x] Excesso de navegação;
- [x] Execesso de botões;
- [x] Uso de cores fortes no salão;


### Responsividade

A aplicação foi pensada para se adequar bem a uma tela de Tablet, mas é totalmente responsiva. Funciona bem em Desktops e também em smartphones.


## Deploy
