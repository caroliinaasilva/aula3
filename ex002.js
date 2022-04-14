// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
//se os números forem iguais, mostre uma mensagem no console "Os números são iguais".


// preciso receber dois numero

function maiorMenorIgual(num1, num2) {
 if (num1 > num2 ) {
  return `${num1} é maior que ${num2}`
}else if (num1 < num2) {
   return `${num1} é menor que ${num2}`
}else if (num1 == num2) {
  return `${num1} e ${num2} são iguais`
} 

}


console.log(maiorMenorIgual(69, 100))


