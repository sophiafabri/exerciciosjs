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


//5-Verificar Comprimento do Username
//     // função que verifica se o comprimento de um username está entre 3 e 10 caracteres
// function usernameValido(username) {
//     // (se o comprimento do username for entre 3 e 10 caracteres, retorna true
//     return username.length >= 3 && username.length <= 10;
// }
// console.log(usernameValido("João"));
//     // (exibe true (tamanho entre 3 e 10)
// console.log(usernameValido("Ab"));  
//     // (exibe false (tamanho menor que 3)
// console.log(usernameValido("SuperUsername"));
//     // (exibe false (tamanho maior que 10)
 

//6-Contar Espaços
// função que conta quantos espaços em branco existem em uma frase
// function contarEspacos(frase) {
//     let contador = 0;  // Variável para contar os espaços
//     (loop para percorrer cada caractere da frase
//     for (let i = 0; i < frase.length; i++) {
//         if (frase[i] === " ") {  
//     (se o caractere for um espaço
//             contador++;  
//     // encrementa o contador
//         }
//     }
//     return contador;  
//    (retorna a quantidade de espaços encontrados
// }
// console.log(contarEspacos("Olá mundo, como vai?"));  
//     (exibe a quantidade de espaços na frase


//7-Criar String com Hífens
// (função que junta palavras de um array com hífens entre elas
// function juntarComHifens(palavras) {
//     return palavras.join("-");  
//    // (usa o método 'join' para juntar as palavras com hífen
// }
// console.log(juntarComHifens(["um", "dois", "tres"]));  
//    //( exibe "um-dois-tres"


//8-Primeira Letra de Cada Palavra
 // função que retorna as iniciais de cada palavra em um nome completo
// function pegarIniciais(nomeCompleto) {
//     let iniciais = "";  
//     // variável para armazenar as iniciais
//     // divide o nome completo em palavras
//     let palavras = nomeCompleto.split(" ");
//     // loop para percorrer todas as palavras do nome
//     for (let i = 0; i < palavras.length; i++) {
//         iniciais += palavras[i][0].toUpperCase();  
//     // adiciona a primeira letra de cada palavra
//     }
//     return iniciais;  
//     // retorna as iniciais
// }
// console.log(pegarIniciais("Sophia Fabri"));  
//     // exibe "SF"
// function pegarPrimeiraLetra(texto) {
//     return texto[0];  
//     // retorna o primeiro caractere da string
// }
// console.log(pegarPrimeiraLetra("Sophia"));  
//     // exibe "S"

