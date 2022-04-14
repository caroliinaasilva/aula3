// 1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function informadia (days) {
    switch(days) {
      case 1:
        return 'Domingo'
      case 2:
        return 'Segunda'
      case 3:
        return 'Terça'
      case 4:
        return 'Quarta'
     case 5:
        return 'Quinta'
     case 6:
        return 'Sexta'
     case 7:
        return 'Sábado'   
     default :
        return 'Este número não se refere a um dia da semana'
    }
  }

  console.log(informadia(8))