/*
Operador ternario 

?  if (se) -----  salary < 3000 ? console.log("O colaborador é junior") : console.log("Ele é senior")

:  else (se não)

&& (if sem else) ----- salary < 3000 && console.log("O colaborador é junior") 

salary < 3000 console.log("O colaborador é junior") : salary >= 3000 && salary < 10000 ? console.log("Ele é senior") : console.log("Ele é diretor")

*/


const salary = 15000

if (salary < 3000) {
    console.log("O colaborador é junior")
} else if (salary >= 3000 && salary < 10000) {
    console.log("Ele é senior")
} else {
    console.log("Ele é diretor")
}



let hero = "Pixel"; 
console.log(hero);
