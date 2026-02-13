function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let dias = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if(dias > 0){
        multa = valor * 0.02;
    }
    else{
        multa = 0;
    }

    let valorFinal = valor + multa;

    resultado.innerHTML = 
    `Multa de  R$ ${multa.toFixed(2)} <br>Valor Final R$ ${valorFinal.toFixed(2)}`;
}
