/*
FILTER 
- Cria um novo array, a partir do array percorrido (array original)
- Cria um novo array APENAS com os elementos filtrados
- Aceita 3 parametros
  - ITEM DO ARRAY
  - INDEX
  - ARRAY ORIGINAL 


  return true -> Item atual passa pro novo array
  return false -> Item atual não passa pro novo array
 
*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(item => {

  if (item > 100) {
    return true
  } else {
    return false
  }

})
console.log(newList)



const companies = [
  { name: 'Google', category: 'Tech', start: 1998, marketValue: 150 },
  { name: 'Apple', category: 'Tech', start: 1976, marketValue: 200 },
  { name: 'Microsoft', category: 'Tech', start: 1975, marketValue: 180 },
  { name: 'Amazon', category: 'E-commerce', start: 1994, marketValue: 170 },
  { name: 'Facebook', category: 'Tech', start: 2004, marketValue: 90 },
  { name: 'Tesla', category: 'Automotive', start: 2003, marketValue: 80 }
]

const newCompanies = companies.filter(item => {

  if (item.marketValue < 200 && item.start > 1990) return true
  else return false
})
console.log(newCompanies)




const usuarios = [
  { nome: "Ana", idade: 17, ativo: true },
  { nome: "Bruno", idade: 25, ativo: false },
  { nome: "Carlos", idade: 30, ativo: true },
  { nome: "Daniela", idade: 15, ativo: true },
  { nome: "Eduardo", idade: 22, ativo: false },
];

const listUsuarios = usuarios.filter(item => {
    
  return item.idade >= 18 && item.ativo === true;

})

console.log(listUsuarios)