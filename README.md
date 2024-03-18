<img align="center" alt="Pokedex logo" height="150" width="300" src="https://github.com/marislaradev/rapflix/assets/121054908/4be69506-f9ee-4531-ad9f-85aedc5965ae">

RapFlix é um projeto inspirado em serviços de streaming de vídeo, feito pelo professor Edson Maia, no seu canal do Youtube. O projeto original é chamado MaiaFlix.
Recomendo fortemente que acessem o canal. A didática do professor é incrível e me tirou muitas dúvidas em React. 🔗https://www.youtube.com/c/professoredsonmaia

## Propósito

Este projeto foi desenvolvido e personalizado com o objetivo de proporcionar uma plataforma de streaming dedicada aos fãs do grupo paranaense de Rap Haisstan.

## Funcionalidades

1. **Catálogo de Vídeos:** O projeto oferece um catálogo de vídeos do Haisstan, organizados por categoria. Os usuários podem navegar por diferentes categorias, separadas por álbuns do grupo.

2. **Registro de Vídeo:** Assim que um novo vídeo for lançado, os integrantes do grupo poderão utilizar a Url do vídeo do Youtube para fazer o upload na RapFlix. Essa funcionalidade ainda está em desenvolvimento. Falta implementar a autenticação na rota de registro de vídeos para que possa ser possível somente o usuário autenticado acessá-la.

3. **Pesquisa Avançada:** Existe uma funcionalidade de pesquisa que permite aos usuários encontrar vídeos específicos por título ou categoria.

4. **Reprodução de Vídeo:** Os usuários podem assistir a vídeos individualmente na página de visualização, onde os vídeos são incorporados do YouTube.

5. **Página de Favoritos:** Há uma página dedicada aos vídeos marcados como favoritos pelos usuários, permitindo que eles acessem facilmente seus vídeos favoritos. Essa funcionalidade também está em desenvolvimento, onde será possível persistir os dados dos vídeos favoritos de uma outra maneira. 

## Ferramentas Utilizadas
 
1. **Linguagem de Programação JavaScript:**
   - JavaScript é a linguagem de programação principal utilizada no projeto. É amplamente utilizada no desenvolvimento web e oferece suporte robusto para criar interfaces interativas e dinâmicas.

2. **Framework React.js:**
   - React.js é o framework JavaScript utilizado para construir a interface de usuário do projeto. Ele oferece um modelo de desenvolvimento declarativo, componentizado e eficiente, facilitando a criação de interfaces reativas e escaláveis.

3. **CSS Modules:**
   - CSS Modules são utilizados para modularizar e encapsular estilos CSS. Isso ajuda a evitar conflitos de nomenclatura e facilita a manutenção do código CSS.

4. **React Router:**
   - O React Router é utilizado para gerenciar a navegação entre as diferentes páginas da aplicação. Ele permite que o usuário navegue de forma fluida entre a página inicial e outras páginas, como a de registro de vídeo, pesquisa e visualização de vídeo.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (v14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos

1- **Clone o repositório:**

   ```bash
   git clone https://https://github.com/marislaradev/rapflix
  ```

 2- **Instale as dependências:**

Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:
   ```bash
   cd rapflix
   npm install
  ```
3- **Rodando o Projeto:**

Depois de instalar as dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:
 ```bash
   npm start
  ```
Isso iniciará o projeto localmente. Abra o link que vai aparecer no seu terminal para ver a aplicação em execução.

