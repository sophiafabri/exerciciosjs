// =================Bloco5=================
 
//  1. Mostrar Status
// function mostrarStatus(status) {
//     // imprime no console o texto "Status: " seguido do valor da variavel 'status'
//     console.log("Status: " + status);
// }
 

// 2. Cores Favoritas
// function minhasCoresFavoritas() {
//     // retorna um array com tres strings representando as 3 cores favoritas
//     return ["azul", "rosa", "preto"];
// }
 

//  3. Segunda Cor
// function segundaCor(cores) {
//     // retorna o elemento no indice 1 do array 
//     return cores[1];
// }
 

//  4. Penultimo Elemento
// function penultimoElemento(lista) {
//     // retorna o elemento que esta no indice ('lista.length - 2'), que e o penultimo item da function
//     return lista[lista.length - 2];
// }
 

// 5. Adicionar Cor
// function adicionarCor(cores, novaCor) {
//     // adiciona a nova cor ao final do array usando o ('push')
//     cores.push(novaCor);
//     // retorna o array 'cores' atualizado
//     return cores;
// }
 

// 6. Carrinho Vazio
// function carrinhoVazio(carrinho) {
//     // verifica se o tamanho do array  do 'carrinho' e 0 e retorna 'true' se for, ou 'false' se nao for
//     return carrinho.length === 0;
// }
 

//  7.  Calcular Media Notas
// function calcularMediaNotas(notas) {
//     // usa o 'reduce' para somar todos os elementos do array 'notas'
//     const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
//     // calcula a media dividindo a soma pelo numero de elementos (length) do array 'notas' (ex: 4 notas (10,8,0,5)/por 4)
//     return soma / notas.length;
// }
 

//  8. Encontrar Menor Ponto
// function encontrarMenorPonto(pontuacoes) {
//     // inicializa a variavel 'menorPonto' o primeiro valor do array
//     let menorPonto = pontuacoes[0];
//     // usa um loop ('for') para percorrer ('pontuacoes') a partir do segundo elemento
//     for (let i = 1; i < pontuacoes.length; i++) {
//         // se o valor atual for menor que o 'menorPonto', atualiza 'menorPonto'
//         if (pontuacoes[i] < menorPonto) {
//             menorPonto = pontuacoes[i];
//         }
//     }
//     // retorna o menor ponto encontrado
//     return menorPonto;
// }
 

// 9. imprimir Lista Numerada
// function imprimirListaNumerada(itens) {
//     // usa um loop 'for' para percorrer cada item do array 'itens'
//     for (let i = 0; i < itens.length; i++) {
//         // imprime no console o indice + 1 (para comecar de 1) seguido do item
//         console.log((i + 1) + ". " + itens[i]);
//     }
// }
 

// 10. Numero Foi Sorteado
// function numeroFoiSorteado(numerosSorteados, numero) {
//     // usa um loop 'for' para percorrer todos os numeros sorteados no array
//     for (let i = 0; i < numerosSorteados.length; i++) {
//         // se o numero atual no array for igual ao numero procurado, retorna true
//         if (numerosSorteados[i] === numero) {
//             return true;
//         }
//     }
//     // se o numero nao for encontrado apos percorrer todos os elementos, retorna false
//     return false;
// }