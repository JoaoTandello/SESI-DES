function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(valor >= 200){
        desconto = valor * 0.05;
    }

    let precoFinal = valor - desconto;

    resultado.innerHTML = 
    `Desconto de R$ ${desconto.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
}
