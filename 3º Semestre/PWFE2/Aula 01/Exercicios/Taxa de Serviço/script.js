function reajustar(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(valor >= 100){
        taxa = valor * (10/100);
    }
    else{
    taxa = 0;
    }

    let valorFinal = valor - taxa;

    resultado.innerHTML = 
    `taxa de  ${taxa.toFixed(0)} % <br>Preço Final R$ ${valorFinal.toFixed(2)}`;
}
