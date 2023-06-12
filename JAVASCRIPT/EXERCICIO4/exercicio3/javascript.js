function converterTexto() {
    var input = document.getElementById('texto');
    var span = document.getElementById('contador');

    var texto = input.value;
    var textoMaiusculo = texto.toUpperCase();
    var contador = texto.length;

    input.value = textoMaiusculo;
    span.textContent = "Número de caracteres: " + contador;
}
