// * Push* -> Adiciona um item no array. O item adicionado sempre será colocado na última posição do array.
let number = [1, 2, 3, 4];
number.push(5)
number.push('seis')
console.log(number)

// * length * -> Mostra o tamanho do array. A quantidade de itens dentro do array.
let array = [26, 99, 50, 80, 40, "setenta", "oitenta"];
console.log(array.length)

// * sort * -> Organiza o array 
const Organiza = [90, 150, 450, 1, "mamão", "abacate", "laranja"];
Organiza.sort()
console.log(Organiza)

// * Delete * -> Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined.
let apagar = ["lakers", "heat", "suns", "okc"];
delete apagar[1]
console.log(apagar)


// * Every * -> Esse método testa se todos os elementos do Array passam em uma condição. 
// Passamos uma função que retorna true ou false. Se todos os retornos forem true, 
// significa que todos os elementos passaram no teste, 
// e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
const listaUsers = [
    { name: 'Nico', credit: 6000 },
    { name: 'Maria', credit: 900 },
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 },
];

const users = listaUsers.every(item => item.credit > 500)
console.log(users)


// * some() * -> faz algo parecido com o .every(). 
// A diferença é que o .every() só retorna true se todos os elementos passarem no teste. --- Mais gente fina
// O .some() retorna true se pelo menos um elemento do Array passar no teste.
const list = [
    { name: 'Lebron', credit: 6000 },
    { name: 'Luka', credit: 9000 },
    { name: 'Austin', credit: 600 },
    { name: 'Smart', credit: 350 },
];

const UsersList = list.some(item => item.credit > 2000)
console.log(UsersList)


// * fill * -> Preenche posições do array como desejarmos
/*
    fill(1, 2, 3) 
    1) O que vai ser colocado no array
    2) A posição inicial 
    3) Posição final
*/

let champions = ["Lakers", 17, "Boston", 18];
champions.fill("win lakers")
console.log(champions)


// * find * -> Usamos esse método quando queremos encontrar algum elemento dentro no Array. 
// Para isso, passamos uma função que irá retornar true ou false. 
// O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.

const find = [
    { name: 'João', credit: 60000 },
    { name: 'Maria', credit: 90000 },
    { name: 'Carlos', credit: 3000 },
    { name: 'Vanessa', credit: 4000 },
];

const achar = find.find(item => item.name === 'Maria' || item.credit === 9000)
console.log(achar)



// * findIndex * ->  Faz o mesmo que o .find(), 
// mas retorna o índice do elemento encontrado ao 
// invés de retornar o próprio elemento.
const findIndex = [
    { name: 'João', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Carlos', credit: 300 },
    { name: 'Vanessa', credit: 300 }];

const listIndex = findIndex.findIndex(item => item.name === "Vanessa")
console.log(listIndex)

findIndex[listIndex].name = "Vitor"   // Alteração 
console.log(findIndex)



// * Concat * ->  Esse método é usado para juntar dois arrays. 
// Ele não altera os arrays originais, 
// mas cria um novo array com a soma dos dois arrays escolhidos.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const numbers1 = [1, 3, 5]
const numbers2 = [5, 6, 8]
const array3 = array1.concat(array2, numbers1, numbers2);
console.log(array3)



// * join * -> - O método join() junta todos os elementos de um array.
const elements = ['Full', 'metal', 'Alchemist'];
const myElements = elements.join('*')
console.log(myElements)


// * pop * - Remove o último elemento de um array.
const array20 = [1, 2, 3];
array20.pop()
console.log(array20)

// * shift * -> Remove o primeiro elemento de um array.
const array30 = ["Lakers", "OKC", "Boston"];
array30.shift()
console.log(array30)



// * Slice * -> O metodo slice() retorna um novo array, 
//   apenas com as informações escolhidas 
/* 1) Posição do array da qual vamos começar a pegar as 
      informações para criar o novo array
    2) Posição final do array que vamos pegar os dados
*/
const users77 = ["João", "Maria", "Pedro", "Michele", "Fernando"];
const newUsers = users77.slice(1, 4)
console.log(newUsers)



// * splice * - Esse metódo remove ou adiciona
// elementos em um array em uma posição específica.
/* 1) Posição do array da qual vamos começar a tirar as informações 
   2) Quantos elementos eu quero retirar a partir da posição inicial 
   3) Item que você quer adicionar
*/
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
months.splice(1 , 3, "Riquelme")
console.log(months)
