//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
/*


const invierteCadena = (cadena = "") =>
  !cadena
    ? console.warn("no ingresaste cadena")
    : console.info(cadena.split("").reverse().join(""));

invierteCadena("hola mundo");
*/
//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
/*
const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("no ingreso cadena");

  if (!texto) return console.warn("no ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`la palabra ${texto} se repite ${contador}`);
};

textoEnCadena();
textoEnCadena("", "hola");
textoEnCadena("hola mundo", "hola");
*/

// -7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
/*
const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("no ingresaste palabra");

  palabra = palabra.toLocaleLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(`Si es palindromo ${palabra}`)
    : console.info("no es palindromo");
};

*/

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y

/*
const eliminarcaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("no ingreso texto")
    : !patron
    ? console.warn(" no ingresaste eun patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarcaracteres();
eliminarcaracteres("abcd", "abc");

*/
