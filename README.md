## Maniplay

<p>Esse projeto trata-se de um Webapp de pré-visualização de musicas utilizando a <a href="https://www.deezer.com/pt/">API</a> do <a href="https://developers.deezer.com/api">Deezer</a>, onde o usuário pode ouvir até 30 segundo de qualquer música disponível no Deezer assim como criar a própria playlist de favoritos.</p>


![Capa.png](https://www.imagemhost.com.br/images/2021/08/23/Capa.png)

### Detalhes sobre a aplicação:

- Home:
<img width="100%" src="https://ik.imagekit.io/wgluqxvtial/maniplay_xAx0o7xeyUJ.png?updatedAt=1629717738287" alt="Página Home"></img>
    - SideBar:<br>
    É esse componente que possibilita a navegação do usuário entre as páginas disponiveis até o momento.<br>
    - SearchBar:<br>
    Na barra de pesquisa o usuário pode buscar musicas fintradas por "Artista, Álbum ou título da música", basta pressionar a tecla "Enter" ou clicar no botão de peasquisar no fim da barra.<br>
    - Listagem de musicas:<br>
    As músicas pesquisadas ou listadas inicialmente são exibidas em formato de cards, onde cada card possui algumas informações como posição da música na lista, imagem do álbum o qual pertence, título da música, um link para ver a vesão completa da música, tempo de duração da musica completa, um botão player/pause e um botão para adicionar aos favoritos.<br>

- Favoritos:
    <img width="100%" src="https://ik.imagekit.io/wgluqxvtial/Captura_de_tela_de_2021-08-22_23-04-27_VwThwjIyH.png?updatedAt=1629684293631" alt="Página de               favoritos">   </img>
    - Listagem de musicas na Playlist de favoritos:
    <p>A página de favoritos é semelhante à página Home porém não possui barra de pesquisa e nos cards de cada música a opção de adicionar aos favoritos está desabilitada e em seu lugar temos a opção de remover do carrinho.</p><br>
    
### Link para o design do app:
  <a href="https://www.figma.com/file/Ri2VtETzTqxhLqqj6ZuDNg/ManiPlay?node-id=0%3A1">Figma</a>

### Tecnologias utilizadas:

<b>Linguagem</b>
- Typescript(React)

<br>

<b>Bibliotecas</b>
- <a href="https://axios-http.com/docs/intro" >axios</a> (requisições a api);
- <a href="https://redux.js.org/" >redux</a> (gerenciamente de estado compartilhado);
- <a href="https://styled-components.com/" >styled-components</a> (estilização);
- <a href="https://reactrouter.com/web/guides/quick-start" >react-router-dom</a> (gerencimento de rotas);
- <a href="https://react-icons.github.io/react-icons" >react-icons</a> (pacote de icones);
- <a href="https://www.davidhu.io/react-spinners/" >react-spinners</a> (spinners de carregamento);
- <a href="https://immerjs.github.io/immer/" >immer</a> (manipulação de estados imutáveis).

<br>

## Como instalar na minha máquina?

- Para iniciar esse app em sua máquina será necessário ter uma versão do node(LTS) instalada em sua máquina para poder rodar o projeto localmente, não se preocupe é bem simples para instalar, segue um link do site oficial: [Node](https://nodejs.org/en/).<br><br>
- Com o node já instalado basta fazer um clone do projeto ou então baixar a versão zip, depois de ja ter feito o download(descompactado) ou clonado o projeto abra o terminal e navegue até a pasta do projeto e digite os seguintes códigos:
    <br>``` npm install ```<br>
    Assim que o processo finalizar digite:
    <br> ``` cd node_modules/cors-anywhere/lib ``` , seguido de ``` npm run start ``` <br>
    <p>Nessa etapa instalamos as dependencias do projeto e iniciamos uma biblioteca chamada "cors-anywhere" que nos ajuda a lidar com um pequeno problema de compatibilidade da API.</p><br>
- Agora em outro terminal ou uma nova aba do mesmo, vamos iniciar a aplicação propriamente dita, siga o mesmo caminho que utilizou para chegar na pasta do projeto e utilize o seguinte comando:
<br>``` npm run start ```<br><br>
**Prontinho aproveite a experiência!!**

## Atenção!
<p>O site é responsivo porém seu design não foi feito previamete construido no figma e está sujeita a mudar, foi algo feito apenas para que não quebre em telas menores.</p>

