/* 
  REDUCE 
  - Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)
  - Aceita 4 parametros 
    - Acumulador
    - valor atual
    - index
    - array completo
*/


// acc = 0 + 1 = 1
// acc = 1 + 2 = 3
// acc = 3 + 3 = 6
// acc = 6 + 4 = 10
// acc = 10 + 5 = 15
// acc = 15 + 6 = 21
// acc = 21 + 7 = 28


const list = [1, 2, 3, 4, 5, 6, 7]
const sum = list.reduce((acc, vA) => {

    return acc + vA

}, 0)

console.log(sum)


const cart = [
    { productName: 'Abobora', pricePerKg: 5,    kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55,  kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2,    kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4,  kg: 1.67},
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 },
]

const cart2 = cart.reduce((acc,value) => {

    return acc + (value.pricePerKg * value.kg) 
         
}, 0)

console.log(cart2)



const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = frutas.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});

console.log(contagem);