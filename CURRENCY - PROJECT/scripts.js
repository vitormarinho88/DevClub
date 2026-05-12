const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOption = document.querySelector(".currency-option")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")   // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")              // Valor em outra moeda


    const dolarToday = 5.28
    const euroToday = 5.98
    const libraToday = 6.98
    const bitcoinToday = 362.847

    
    
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('XBT', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }








    if (currencyOption.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencyOption.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencyOption.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencyOption.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    if (currencyOption.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("XBT", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }


}


function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dolar Americano'
        currencyImage.src = './assets/dolar americano.png'
    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/EURO.png'
    }
    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImage.src = './assets/libra 1.png'
    }
    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin 1.png'
    }


    convertValues()
}






function currencyChange() {
    const currencyName2 = document.getElementById('currency-name2')
    const currencyImage2 = document.querySelector('.currency-img2')

    if (currencyOption.value == 'real') {
        currencyName2.innerHTML = 'Real'
        currencyImage2.src = './assets/brasil 2.png'
    }


    if (currencyOption.value == 'dolar') {
        currencyName2.innerHTML = 'Dolar Americano'
        currencyImage2.src = './assets/dolar americano.png'
    }

    if (currencyOption.value == 'euro') {
        currencyName2.innerHTML = 'Euro'
        currencyImage2.src = './assets/EURO.png'
    }

    if (currencyOption.value == 'libra') {
        currencyName2.innerHTML = 'Libra Esterlina'
        currencyImage2.src = './assets/libra 1.png'
    }

    if (currencyOption.value == 'bitcoin') {
        currencyName2.innerHTML = 'Bitcoin'
        currencyImage2.src = './assets/bitcoin 1.png'
    }

    convertValues()

}






convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencyOption.addEventListener("change", currencyChange)