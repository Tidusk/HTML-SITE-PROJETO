function encontrarMaior() {
    var input1 = document.getElementById('numero1');
    var input2 = document.getElementById('numero2');
    var input3 = document.getElementById('numero3');
    var paragrafo = document.getElementById('resultado');

    var numero1 = parseFloat(input1.value);
    var numero2 = parseFloat(input2.value);
    var numero3 = parseFloat(input3.value);

    var maior = Math.max(numero1, numero2, numero3);
    paragrafo.textContent = "O maior número é: " + maior;
}