const temperature = 90

if (temperature === 36) {
    console.log("Voce está saudavel")
}
else if (temperature > 36 && temperature <= 40) {
    console.log("Está com febre")
}
else if (temperature > 40 ) {
    console.log("Está com MUITA febre")
}
else {
    console.log("Está com hipotermia")
}
