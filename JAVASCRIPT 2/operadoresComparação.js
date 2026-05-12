/* Operadores de Comparação 

==  -> Igual // Compara o valor, mas nao o tipo
=== -> TOTALMENTE igual // Compara o VALOR e o tipo

!=  -> Diferente // Ele compara o valor, mas nao o tipo
!== -> TOTALMENTE Diferente // compara o VALOR e o tipo

 >   -> Maior    // sempre aponta para o lado esquerdo
 <   -> Menor    // sempre aponta para o lado direito
 >=   -> Maior ou Igual 
 <=   -> Menor ou Igual

*/

const fistNumber = 20
const seccondNumber = "220"

if (fistNumber !== seccondNumber) {
    console.log("Sim, são diferentes")
} else {
    console.log("Não , não são diferente")
}