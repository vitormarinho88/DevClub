/* Controlador de Fluxo
- IF(se)
- Else (Se nao)

Operadores de comparação 
> maior que 
< menor que 
== igual que 



const notaDoAluno = 10
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte) {
      console.log("Parabens, voce passou de ano")
}

else{
    console.log("Voce foi reprovado")
}


const senhaDeUsuario = 231074
const senhaDigitada = 231074

if(senhaDeUsuario == senhaDigitada) {
      console.log("Seja-Bem vindo")
}
else {
    console.log("Senha incorreta")
} 

*/


let senha = "12";

if (senha.length < 6) {
  console.log("Senha muito curta");
} else if (senha.length < 10) {
  console.log("Senha média");
} else {
  console.log("Senha forte");
}


let temperatura = 22;

if (temperatura > 25) {
  console.log("Quente");
} else if (temperatura > 20) {
  console.log("Agradável");
}



let idade = 10;

if (idade >= 18) {
  console.log("Maior de idade");
}

if (idade >= 16) {
  console.log("Pode votar");
}else{
    console.log("Nao pode votar")
}



let nota = 3;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bom");
} else if (nota >= 5) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}


const saldo = 50
const podeComprar = saldo > 30

if (podeComprar) {
    console.log("Compra permitida")
} else {
    console.log("Saldo insuficiente")
}s