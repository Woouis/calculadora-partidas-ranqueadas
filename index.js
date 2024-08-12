//calculadora ranqueada - DIO 

let vitorias = 100;
let derrotas = 20;

let resultado = calcularRank(vitorias,derrotas)

console.log("O herói tem de saldo de "+resultado.saldodeVitorias + " e está no nível de " +resultado.nivel )

function calcularRank(vitorias, derrotas){
    let calculoVitorias = vitorias - derrotas;

    let nivel;

    if(calculoVitorias < 10){
        nivel = 'Ferro';
    } 
    else if(calculoVitorias>=11 && calculoVitorias <= 20){
        nivel = 'Bronze';
    } else if(calculoVitorias>=21 && calculoVitorias <= 50){
        nivel = 'Prata';
    }
    else if(calculoVitorias>=51 && calculoVitorias <= 80){
        nivel = 'Ouro';
    }
    else if(calculoVitorias>=81 && calculoVitorias <= 90){
        nivel = 'Diamante';
    }
    else if(calculoVitorias>=91 && calculoVitorias <= 100){
        nivel = 'Lendário';
    } else if(calculoVitorias>= 101){
        nivel = 'Imortal'; 
    }
  
    return{
        saldodeVitorias: calculoVitorias,
        nivel: nivel
    }

}