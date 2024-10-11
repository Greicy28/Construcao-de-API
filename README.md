# Construcao-de-API

# API de Gerenciamento de Produtos
Este projeto consiste em uma API para gerenciar produtos, permitindo operações de criação, leitura, atualização e exclusão. A API é desenvolvida com Express.js e utiliza express-validator para validação de dados.

# Conteúdo
Instalação
Como Usar
Endpoints da API
Validação de Dados
Estrutura do Projeto
Como Contribuir
Licença
Instalação
Para configurar o projeto, clone o repositório e instale todas as dependências necessárias. Depois, inicie o servidor para que a API esteja pronta para uso.

# Como Usar
A API estará disponível no endereço http://localhost:1234. Você pode utilizar ferramentas como Postman ou cURL para fazer requisições às rotas da API.

# Endpoints da API
Adicionar Produto
Para adicionar um novo produto, envie uma requisição POST para /products com os dados do produto no corpo da requisição. Os campos obrigatórios são título, descrição, preço e quantidade.

# Listar Produtos
Para obter uma lista de todos os produtos, envie uma requisição GET para /products. A resposta será um array contendo todos os produtos cadastrados.

# Obter Produto por ID
Para obter detalhes de um produto específico pelo ID, envie uma requisição GET para /products/:id. Se o produto existir, ele será retornado; caso contrário, uma mensagem de erro será exibida.

# Atualizar Produto
Para atualizar um produto existente, envie uma requisição PUT para /products/:id com os dados atualizados no corpo da requisição. Se o produto for encontrado, ele será atualizado; caso contrário, uma mensagem de erro será exibida.

# Excluir Produto
Para excluir um produto, envie uma requisição DELETE para /products/:id. Se o produto for encontrado e excluído, uma mensagem de sucesso será exibida; caso contrário, uma mensagem de erro será exibida.

# Validação de Dados
A validação dos dados é realizada com express-validator. As seguintes regras de validação são aplicadas:

O título não pode estar vazio.
A descrição não pode estar vazia.
O preço deve ser um número positivo.
A quantidade deve ser um número inteiro maior que 0.
Estrutura do Projeto
O projeto está organizado da seguinte maneira:

businessrules.js: Contém as funções de lógica de negócios para manipulação dos produtos.
data.json: Arquivo que armazena os dados dos produtos.
index.js: Arquivo principal que configura e inicia o servidor.
package.json: Arquivo de configuração do npm.
README.md: Documentação do projeto.
# Como Contribuir
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

# Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo de licença para mais detalhes.
