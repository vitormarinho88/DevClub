/*
&&  ->  E  -> Pessoa Exigente
     true && true = true
     true && false = false
    false && false = false  

||  ->  Ou  -> Pessoa de boa    
     true && true = true 
     true && false = true
    false && false = false

!   ->  Negação
    !true = false
    !false = true

*/


const digitarSenha = true
const digitarToken = false
const numeroDaConta = true

if (  (digitarSenha && digitarToken || numeroDaConta) ) {
    console.log("Logado com sucesso")
} else {
    console.log("Autenticação Falhou")
}
