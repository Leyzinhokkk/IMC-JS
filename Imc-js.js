function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  resultado.textContent = "Seu IMC é: " + imc.toFixed(2);
}
