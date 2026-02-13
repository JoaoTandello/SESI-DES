function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let cashback = 0;

    if(valor >= 300){
        cashback = valor * 0.05;
    }
    else{
        cashback = 0;
    }

    let valorFinal = valor - cashback;

    resultado.innerHTML = 
    `Cashback de  R$ ${cashback.toFixed(2)} <br>Preço Final R$ ${valorFinal.toFixed(2)}`;
}
