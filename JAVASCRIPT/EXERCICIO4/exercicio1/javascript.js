function calcularCubo() {
    var input = document.getElementById('numero');
    var span = document.getElementById('resultado');
    var numero = parseFloat(input.value);
    var cubo = Math.pow(numero, 3);
    span.textContent = cubo;
}
