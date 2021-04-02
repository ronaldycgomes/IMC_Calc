
const calcular = document.getElementById('calcular')
const limpar = document.getElementById('limpar')





function imc (){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')
    

    if(nome == '' || altura == '' || peso == ''){
        resultado.textContent = 'Preencha todos os campos, por gentileza!'
    }else{
        const valorIMC = peso/(altura*altura)
        if(valorIMC < 18.5){
            resultado.textContent = `${nome}, seu IMC é ${valorIMC.toFixed(2)} e você está abaixo do seu peso ideal !`
        }else if(valorIMC > 18.6 && valorIMC <= 24.9){
            resultado.textContent = `${nome}, seu IMC é ${valorIMC.toFixed(2)} e você está com o peso ideal !`
        }else if(valorIMC > 25.0 && valorIMC <= 29.9){
            resultado.textContent = `${nome}, seu IMC é ${valorIMC.toFixed(2)} e você está levemente acima do peso !`
        }else if(valorIMC > 30.0 && valorIMC <= 34.9){
            resultado.textContent = `${nome}, seu IMC é ${valorIMC.toFixed(2)} e Você está com obesidade grau I`
        }else if(valorIMC > 35.0 && valorIMC <= 39.9){
            resultado.textContent = `${nome}, seu IMC é ${valorIMC.toFixed(2)} e Você está com obesidade grau II (severa) !`
        }else if(valorIMC > 40.0){
            resultado.textContent = `${nome}, seu IMC é ${valorIMC.toFixed(2)} e Você está com obesidade grau III (mórbida) !`
        }
    }
}

function limparCampo(){
    document.getElementById('nome').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
    resultado.textContent = ''
}

calcular.addEventListener("click", imc)
limpar.addEventListener("click",limparCampo)

