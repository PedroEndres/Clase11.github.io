// Ejercicio de repaso de condicionales
// ----------------if--------------------

let topping;
let precio;
let precioFinal;

let helado = 4;

if (topping == "Oreo") {
  precio = 10;
} else if (topping == "KitKat") {
  precio = 15;
} else if (topping == "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping");
}

precioFinal = helado + precio;
console.log("El helado cuesta $" + precioFinal);

//---------------- Switch-------------------

let menu;
switch (menu) {
  case "carne":
    console.log("Se le ofrece vino tinto");
    break;
  case "pescado":
    console.log("Se le ofrece vino blanco");
    break;
  case "verdura":
    console.log("Se le ofrece agua");
    break;
  default:
    console.log("Elija carne, pescado o verdura");
}

//---------------- For -------------------

let verduras = ["fruta", "verdura", "pescado"];

for (let i = 0; i < verduras.length; i++) {
  console.log(verduras[i]);
}

verduras.push("carne");

for (let i = 0; i < verduras.length; i++) {
  console.log(verduras[i]);
}

//---------------- While -------------------

let numero = 0;

while (numero < 11) {
  console.log(numero + " es más chico que 11");
  numero++;
}
