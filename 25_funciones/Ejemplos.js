function saludar() {
  alert("¡Hola!");
}

function sumar(a, b) {
  alert(a + b);
}

function alertaPersonalizada(mensaje) {
  alert(mensaje);
}

function cambiarColor(color) {
  document.body.style.backgroundColor = color;
}

function mostrarFecha() {
  alert(new Date());
}

function ocultarElemento(id) {
  document.getElementById(id).style.display = "none";
}

function mostrarElemento(id) {
  document.getElementById(id).style.display = "block";
}

function duplicarTexto() {
  var texto = prompt("Ingrese un texto:");
  alert(texto + " " + texto);
}

function invertirTexto() {
  var texto = prompt("Ingrese un texto:");
  alert(texto.split("").reverse().join(""));
}

function calcularArea(base, altura = base) {
  alert("El área es: " + base * altura);
}

function generarNumeroAleatorio() {
  alert(Math.random());
}

function abrirVentana() {
  window.open("https://www.ejemplo.com");
}

function cerrarVentana() {
  window.close();
}

function cambiarTitulo(nuevoTitulo) {
  document.title = nuevoTitulo;
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function redireccionar() {
  window.location.href = "https://www.ejemplo.com";
}

function mostrarCoordenadas(event) {
  alert("X: " + event.clientX + ", Y: " + event.clientY);
}

function mostrarAlertaConConfirmacion() {
  if (confirm("¿Estás seguro?")) {
    alert("¡Sí, estoy seguro!");
  } else {
    alert("No estoy seguro.");
  }
}

function obtenerHora() {
  var hora = new Date().toLocaleTimeString();
  alert("La hora actual es: " + hora);
}

function sumar() {
  var num1 = parseInt(prompt("Ingrese el primer número:"));
  var num2 = parseInt(prompt("Ingrese el segundo número:"));
  alert("La suma es: " + (num1 + num2));
}

function restar() {
  var num1 = parseInt(prompt("Ingrese el primer número:"));
  var num2 = parseInt(prompt("Ingrese el segundo número:"));
  alert("La resta es: " + (num1 - num2));
}

function multiplicar() {
  var num1 = parseInt(prompt("Ingrese el primer número:"));
  var num2 = parseInt(prompt("Ingrese el segundo número:"));
  alert("El producto es: " + num1 * num2);
}

function dividir() {
  var num1 = parseInt(prompt("Ingrese el primer número:"));
  var num2 = parseInt(prompt("Ingrese el segundo número:"));
  if (num2 !== 0) {
    alert("La división es: " + num1 / num2);
  } else {
    alert("Error: No se puede dividir por cero.");
  }
}

function generarPassword() {
  var longitud = parseInt(prompt("Ingrese la longitud de la contraseña:"));
  var caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var password = "";
  for (var i = 0; i < longitud; i++) {
    password += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  alert("La contraseña generada es: " + password);
}

function contarCaracteres() {
  var texto = prompt("Ingrese un texto:");
  alert("El texto tiene " + texto.length + " caracteres.");
}

function convertirMayusculas() {
  var texto = prompt("Ingrese un texto:");
  alert("Texto en mayúsculas: " + texto.toUpperCase());
}

function convertirMinusculas() {
  var texto = prompt("Ingrese un texto:");
  alert("Texto en minúsculas: " + texto.toLowerCase());
}

function contarCaracteres() {
  var texto = prompt("Ingrese un texto:");
  alert("El texto tiene " + texto.length + " caracteres.");
}
