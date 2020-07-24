/* Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração, multiplicação e divisão desses valores.*/

function operacao (a, b) {
    
    const soma = a + b 
    const sub = a - b
    const div = a / b
    const mult = a * b
    
    console.log (`A soma de ${a} e ${b} é: ${soma}`)
    console.log (`A subtração de ${a} e ${b} é: ${sub}`)
    console.log (`A divisão de ${a} e ${b} é: ${div}`)
    console.log (`A multiplicação de ${a} e ${b} é: ${mult}`)
}

operacao (5,5)