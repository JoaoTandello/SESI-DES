function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(valor >= 150){
        frete = 0;
    }
    else{
    frete = 20;
    }

    let precoFinal = valor + frete;

    resultado.innerHTML = 
    `Frete de R$ ${frete.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
}
