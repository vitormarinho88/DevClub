/* 

Document -> HTML

getElementById -> Tras um elemento pelo ID 
getElementByClassName -> Tras todos os elementos com essa classe
getElementByTagName -> Tras todos os elementos com essa tag
getElementByName -> Tras todos os elementos com esse name

querySelector -> tras um elemento, o primeiro que encontrar
querySelectorALL -> tras todos os elementos que encontrar

*/

const input = document.getElementById("main-input")
console.log(input)

const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)

const element = document.getElementsByTagName("h1")
console.log(element)

const elementos = document.getElementsByName("nome-completo")
console.log(elementos)


const query = document.querySelector("#main-input")
query.placeholder = "Digite aqui.."   // alteração de elementos pelo JS
console.log(query.placeholder)

const all = document.querySelectorAll("body")
console.log(all)




const alterando = document.querySelector(".paragraph-js")

alterando.innerHTML = "Aprendendo <b>Alterações</b> no javascript"

console.log(alterando.textContent) // SÓ HTML
console.log(alterando.innerText) // LEVA EM CONTA O CSS
console.log(alterando.innerHTML) //TRAS TUDO -> Permite adicionar HTML



const button = document.querySelector(".main-button")
button.style.backgroundColor = "#ce04ee"  // Prestar atenção na sintaxe do codigo...




const click = document.querySelector("#main-input")

function cliqueiNoBotao(){
    console.log(click.value)   
    alert("Botão clicado com sucesso!")
}


function digiteiNoInput() {
    console.log("digitei no input")
}




const select = document.querySelector("select")
const button2 = document.querySelector(".main-button")
const input2 = document.querySelector("#main-input")

select.addEventListener("change", function(){
       console.log("Troquei de valor")
})


input2.addEventListener("keypress", troqueiValor)
function troqueiValor(event){
    console.log(event)
}


button2.addEventListener("click", function(event){
    console.log(event)
})