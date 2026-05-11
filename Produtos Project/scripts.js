const list = document.querySelector("ul")
const showButton = document.querySelector(".button-Each")
const priceButton = document.querySelector(".button-Price")
const somaButton = document.querySelector(".button-Somar")
const filterButton = document.querySelector(".button-Filtrar")



function formatCurrency(value) {

  const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
   
    return newValue
}


function ButtonAll(productsArray) {
  let myLi = ''
  productsArray.forEach(product => {

    myLi += `  
            <li>
               <img src="${product.src}">
               <p>${product.name}</p>
               <p>R$ ${product.price}</p>
           </li>
         `

  })
  list.innerHTML = myLi

}

///(...)cria um novo objeto copiando todas as propriedades de item (PRODUCT2) -> 
// se chama spread operator. ou operador de espalhamento     
function ButtonPrice() {
  const discount = menuOptions.map(product2 => ({
    ...product2,
    price: product2.price * 0.9

  }))

  ButtonAll(discount)

}

function reduceButton() {

  const somar = menuOptions.reduce((acc, item) => acc + item.price, 0)

  list.innerHTML = `  
            <li>
               <p>O valor total dos itens é R$ ${somar}</p>
           </li>
         `
}


function buttonFiltro() {

  const newFilter = menuOptions.filter(item => {

    return item.name && item.vegan === true;

  })

  ButtonAll(newFilter)

}



showButton.addEventListener('click', () => ButtonAll(menuOptions))
priceButton.addEventListener('click', ButtonPrice)
somaButton.addEventListener('click', reduceButton)
filterButton.addEventListener('click', buttonFiltro)
