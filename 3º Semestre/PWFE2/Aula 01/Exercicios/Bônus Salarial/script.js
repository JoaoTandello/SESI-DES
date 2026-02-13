function calcularBonus() {
    let salario = Number(document.getElementById("salario").value);
    let resultado = document.getElementById("resultado");
    let bonus = 0;

    if (salario > 2000) {
        bonus = salario * (10 / 100);
    }

    let salarioFinal = salario + bonus;

    resultado.innerHTML = `
        Bônus: R$ ${bonus.toFixed(2)} <br>
        Salário final: R$ ${salarioFinal.toFixed(2)}
    `;
}
document.getElementById('salario').addEventListener("keypress", function(event){
if (event.key === "Enter"){
    reajustar()
}
});