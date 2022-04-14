// 5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function MaiorouMenor(idade){
    const comprove = (2002 - idade)
    if (idade >= 18){
    console.log(`${idade} 'Maior de Idade'`)
}else {
      console.log(`${idade} 'Menor de Idade'`)
}
}
console.log(MaiorouMenor(15))