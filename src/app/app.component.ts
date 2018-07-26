import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1 = false; 
  Descripcion = 'Pasos para resolver el ejercicio por metodo de Cramer.';
  Paso1 = '1. Hallamos el determinante';

  d = determinante();

  Paso2 = '2. Hallamos X, Y, Z';

  x = HallarX();
  y = HallarY();
  z = HallarZ();
}

function determinante() {
  var D = 0.3 * 1 * 0.5 + 0.5 * 0.3 * 1 + 0.1 * 0.52 * 1.93 - 1 * 1 * 0.1 - 1.93 * 0.3 * 0.3 - 0.5 * 0.52 * 0.5;
  var de = D.toFixed(4); // Limitar numeros decimales
  return de;
}

function HallarX() {
  var x = (-0.01 * 1 * 0.5 + 0.67 * 0.3 * 1 + -0.44 * 0.52 * 1.93 - 1 * 1 * -0.44 - 1.93 * 0.3 * -0.01 - 0.5 * 0.52 * 0.67) / 0.0022
  var xe = x.toFixed(1);
  return xe;
}

function HallarY() {
  var y = (0.3 * 0.67 * 0.5 + 0.5 * -0.44 * 1 + 0.1 * -0.01 * 1.93 - 1 * 0.67 * 0.1 - 1.93 * -0.44 * 0.3 - 0.5 * -0.01 * 0.5) / 0.0022
  var ye = y.toFixed(1); // Limitar numeros decimales
  return ye;
}

function HallarZ() {
  var z = (0.3 * 1 * -0.44 + 0.5 * 0.3 * -0.01 + 0.1 * 0.52 * 0.67 - (-0.01 * 1 * 0.1) - 0.67 * 0.3 * 0.3 - (-0.44 * 0.52 * 0.5)) / 0.0022
  var ze = z.toFixed(1); // Limitar numeros decimales
  return ze;
}
