const resultado = document.getElementById("resultado");
// getElementById significa "pegue os elementos cujo ID é..."
// O valor que será atribuídos a essas variáveis, serão aqueles cujo ID seja o mesmo no HTML.

function imc() {
  // essas const ficam dentro da function, porque elas serãoúteis apenas dentro da function. se elas ficarem fora, seriam variáveis globais, e não é o que pretendemos nesse código
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const calcular = document.getElementById("calcular");

  if (nome !== '' && altura !== '' && peso !== ''){  // com os dois &&, as três const precisam ser preenchidas para executar a conta.
    const valorIMC = (peso / (altura*altura));
    
    let ideal = ''

    if (valorIMC < 18.5){
        ideal = 'abaixo do peso.';
    } else if(valorIMC < 25){
        ideal = 'com peso ideal. Parabéns!';
    } else if (valorIMC < 30){
        ideal = 'levemente acima do peso.';
    } else if (valorIMC < 35) {
        ideal = 'com obesidade grau 1.';
    } else if (valorIMC < 40){
        ideal= 'com obesidade grau 2.';
    } else {
        ideal = 'com obesidade grau 3. Cuidado!';
    }
    resultado.textContent = `${nome}, seu IMC é ${valorIMC}, e você está ${ideal}.`; // usando temlate string  e os place holder '${}'

  } else {
   resultado.textContent = 'Preencha todos os campos!';
  }
}

calcular.addEventListener("click", imc); // pegamos a cons 'calcular', e adcionamos um evento. Ao clicar em 'calcular', no html, a function 'imc' será executada