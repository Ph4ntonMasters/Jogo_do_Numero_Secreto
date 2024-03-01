alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroDigitado;
let tentativas = 1;

while (numeroDigitado != numeroSecreto)
{
    numeroDigitado = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == numeroDigitado)
    {
        break;
    }
    else 
    {
        if(numeroDigitado > numeroSecreto)
        {
            alert(`O numero secreto é menor que ${numeroDigitado}`);
        }
        else
        {
            alert(`O numero secreto é maior que ${numeroDigitado}`);
        }
        tentativas++;    //tentativas = tentativas + 1; // Ou tentativas++
                        //alert('Você errou! :-( ')
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

