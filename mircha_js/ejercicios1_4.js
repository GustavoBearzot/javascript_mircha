//
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/*
let cadena = prompt("escriba una frase");
validarNombre(cadena);
function validarNombre(cadena) {
  cadena2 = cadena.split("");
  let contador = 0;

  cadena2.forEach((letra) => {
    if (parseInt(letra) * 0 === 0) {
      contador++;
    }
  });

  if (contador > 0) {
    return console.log("escriba solo numeros");
  } else {
    function contarCaracteres() {
      let resultado = cadena.length;
      console.log(resultado);
    }

    const contarCaracteres = (cadena = "") =>
      !cadena
        ? console.warn("no ingresaste ningun caracter")
        : console.info(`la cadena ${cadena} tiene 
     ${cadena.length} caracteres`);

    contarCaracteres();

    */

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
/*
    const recortarTexto = (cadena = "", longitud = undefined) =>
      !cadena
        ? console.warn("no ingresaste cadena")
        : console.info(cadena.slice(0, longitud));

    recortarTexto();
*/
/*
    function cortarPalabra() {
      pedazo = cadena.slice(0, 4);
      console.log(pedazo);
    }
    cortarPalabra();
*/
//
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
/*
  function textosSeparados() {
      cortada = cadena.split(" ");
      console.log(cortada);
    }
    textosSeparados();

    const textoSep = (cadena = "") =>
      !cadena
        ? console.warn("no ingreso cadena")
        : console.info(`asi queda la frase ${cadena.split(" ")}`);

    textoSep();

*/
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/*

    function repetirPalabra() {
      repetir = cadena.repeat(3);
      console.log(repetir);
    }
    repetirPalabra();
  }
}

const repetirTexto = (texto = "", veces = undifined) => {
  if (!texto) return console.warn("no ingresaste texto");

  if (veces === undifined) return console.warn("no ingresaste texto");

  if (veces === undifined) return console.console.error("no ingresaste texto");

  if (Math.sign(veces) === -1)
    return console.error("el numero de veces no puede ser negativo");

  for (let i; i <= veces; i++) {
    console.info(`${texto},${i}`);
  }
}
*/
