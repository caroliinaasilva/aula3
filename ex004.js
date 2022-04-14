// 4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.


function parOuImpar(num) {
    if (num % 2 == 0){
     console.log(`${num} 'par'`)
}else {
    console.log(`${num} 'ímpar'`)
}

}

console.log(parOuImpar(6))