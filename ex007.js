// 7  Crie uma função que recebe 2 parâmetros e retorna o resultado 
//da divisão entre eles. Além disso, se o resto dessa divisão for zero 
//deverá imprimir no console o valor e dizer que ele é par.


function dividirnumeros (num1, num2){
    const divisao = num1 / num2
    console.log(`A divisão entre ${num1} e ${num2} é ${divisao}`)
    if (divisao % 2 === 0){
        return `${divisao} é par`;
    } else{
        return `${divisao} é impar`;
    }    
}

console.log(dividirnumeros(10, 2))