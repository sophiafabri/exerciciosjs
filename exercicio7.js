//=============Bloco 7===============

//1-Lista de Produtos
// function criarListaProdutos() {
//     return [
//       { nome: "Camiseta", preco: 29.99 },
//      (exemplo a camiseta / string)
//       { nome: "Calça Jeans", preco: 79.50 }
//      (exemplo a calça jeans / string)
//     ];
//   }


//2-Encontrar Produto por Nome
// function encontrarProdutoPorNome(produtos, nomeProduto) {
//     for (let i = 0; i < produtos.length; i++) {
//       if (produtos[i].nome === nomeProduto) {
//         return produtos[i];
//       }
//     }
//     return undefined;
//   }

//   (PESQUISA)
//   for () Este é um loop for. Ele é usado para repetir um bloco de código um certo número de vezes.
// let i = 0: Inicializa uma variável chamada i com o valor 0. Essa variável será usada como um índice para percorrer o array produtos.
// i < produtos.length: Esta é a condição de continuação do loop. O loop continuará executando enquanto o valor de i for menor que o número total de elementos no array produtos (ou seja, enquanto não tivermos percorrido todos os produtos).
// i++: Após cada iteração do loop, o valor de i é incrementado em 1, para que possamos acessar o próximo elemento do array na próxima vez.


//3-Listar Nomes dos Produtos
// function listarNomesProdutos(produtos) {
//     const nomes = [];
//  (parametro)
//     for (let i = 0; i < produtos.length; i++) {
//       nomes.push(produtos[i].nome);
//     (Dentro do loop:)
//     }
//     return nomes;
//   }


//4-Somar Preços dos Produtos
// function somarPrecosProdutos(produtos) {
//     let total = 0;
//     for (let i = 0; i < produtos.length; i++) {
//       total += produtos[i].preco;
//     }
//     return total;
//   }
  //(PESQUISA) total += produtos[i].preco;: Dentro do loop:
//produtos[i].preco: Acessa a propriedade preco do objeto produto atual.
//total += ...: Este é um atalho para total = total + produtos[i].preco;. Ele pega o valor atual de total e adiciona o preço do produto atual a ele, atualizando o valor de total.

//Essa função percorre uma lista de produtos e calcula a soma de todos os seus preços, retornando o valor total.


//5-Verificar Comprimento do Username:



//6-Contar Espaços



//7-Criar String com Hífens



//8-Primeira Letra de Cada Palavra


