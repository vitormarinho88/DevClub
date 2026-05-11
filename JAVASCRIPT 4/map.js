/* 
    MAP => Mapear o nosso array.
    -Cria um novo array, a partir do array percorrido (array original) ---> nunca altera o array original
   
    -Cria um novo array, com a mesma quantidade do itens do array original
    
    -Aceita 3 parametros
    ----- item do array
    ----- index
    ----- array completom
*/


const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + '-> item')
    console.log(index + '-> index')
    console.log(arrayOriginal + '-> arrayOriginal')
    const newItem = item * 10
    return newItem
})
// "(RETURN)"
/// const double = number.map((item) => * 10) /// MESMA FUNÇÃO, MAIS SIMPLIFICADA SEM RETURN 


console.log(double)




const nomes = ["ana", "joão", "maria"];
const resultado = nomes.map(nome => nome.toUpperCase(nomes));
console.log(resultado)



const usuarios = [
    { nome: "Vitor", idade: 28 },
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 30 }
];


const user = usuarios.map(item => {
    return item.idade >= 18 ? `${item.nome} é maior de idade` : 
    `${item.nome} é menor de idade` 
});
console.log(user)



const numeros = [1, 2, 3];
const double1 = numeros.map((item) => {
    return `Número ${item}`;
});
console.log(double1)



const list = [
    { name: 'Vitor', vip: true },
    { name: 'Sasha', vip: false },
    { name: 'Digweed', vip: false },
    { name: 'Laurent', vip: true },
    { name: 'Dmitry', vip: false },
    { name: 'Hernan', vip: true },
    { name: 'Guy j', vip: false },
]

const newList = list.map(user => {
    return {
        name: user.name,
        braceleteColor: user.vip ? 'Black' : 'Green'
    }
});

console.log(newList)




const students = [
    { name: 'Vitor', testGrade: 7 },
    { name: 'Gilmour', testGrade: 5 },
    { name: 'Amirali', testGrade: 8 },
    { name: 'Slash', testGrade: 9 },
    { name: 'Ozzy', testGrade: 3 },
    { name: 'Waters', testGrade: 2 },
    { name: 'joy', testGrade: 10 },
]


const newStudent = students.map(alunos => {
    const media = 5

    const result = {

        name: alunos.name,
        resultado: alunos.testGrade >= media ? 'apravodo' : 'reprovado'

    }


    return result


})

console.log(newStudent)



const nomes333 = ["vitor", "ana", "carlos", "maria"];
const lista333 = nomes333.map(nomes333 => nomes333.toUpperCase());
console.log(lista333)




const produtos46 = [
    { nome: "mouse", preco: 100 },
    { nome: "teclado", preco: 200 }
]

const pc93 = produtos46.map(item => {

    return {
        nome: item.nome.toUpperCase(),

        preco: `R$ ${item.preco}`
    }
});

console.log(pc93)



const Gamer = [
    { nome: "mouse", preco2: 100 },
    { nome: "teclado", preco2: 200 },
    { nome: "monitor", preco2: 1000 }
];


const pc = Gamer.map(item => {

        return {
          nome: item.nome ,
          barato: item.preco2 < 300   
          
        }

})

console.log(pc)


