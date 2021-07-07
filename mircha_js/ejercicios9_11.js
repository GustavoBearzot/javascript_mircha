//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

/*
const aleatorio = ()=> console.info(math.round(math.random() * 100)+ 500)

aleatorio();
*/

/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.



- Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.
*/

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    (this.id = id),
      (this.titulo = titulo),
      (this.director = director),
      (this.estreno = estreno),
      (this.pais = pais),
      (this.generos = generos),
      (this.calificacion = calificacion);

    this.validarIMDB(id);
    this.validartitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `los generos aceptados son : ${Pelicula.listaGeneros.join(",")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad}"${valor}está vacío`);

    if (typeof valor !== "string")
      return console.error(`${propiedad}"${valor}"ingresado no es un texto`);

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad}"${valor}" excede el numero de caracteres permitidos (${longitud}).`
      );
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id"${id}" no es valido, debe tener 9 carater, 2 letras y 7 numeros`
        );
  }

  validartitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarCadena("Titulo", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarCadena("Director", director, 50);
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad}"${valor}"esta vacío`);

    if (typeof valor !== "number")
      return console.error(`${propiedad}"${valor}" ingresado no es un numero`);
    return true;
  }

  validarEstreno(estreno) {
    if (this.validarNumero("año de estreno", estreno))
      if (!/^\d{4}$/.test(estreno))
        return console.error(
          `año de estreno"${estreno}" no es valido, debe ser de 4 numeros`
        );
    return true;
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero))
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`generos incorrectos"${generos.join(",")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad}"${valor}"está vacio`);

    if (!(valor instanceof Array))
      return console.error(
        `${propiedad}"${valor}" ingresado, no es un arreglo`
      );

    if (valor.lengt === 0)
      return console.error(`${propiedad}"${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena} ingresado, NO es una cadena de texto`
        );
    }

    return true;
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("calificacion", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error("la calificacion debe ser en un rango de 0 a 10")
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo:"${this.titulo}"\nDirector:"${
        this.director
      }"\nAño:"${this.estreno}"\nPais:"${this.pais.join(
        ","
      )}"\nGeneros:"${this.generos.join(",")}"\nCalificacion:"${
        this.calificacion
      }"\nIMDB id:"${this.id}"`
    );
  }
}

/*  ------------------------------instancia para probar el ingreso de datos------
const peli = new Pelicula({
  id: "tt1234567",
  titulo: "12345678901234567890123456789012345678901234567890",
  director:
    "123456789012345678901234567890123456789012345678901234567890111111",
  estreno: 2020,
  pais: ["mexico", "argentina"],
  generos: ["Documentary"],
  calificacion: 7,
});

peli.fichaTecnica();
--------------------------------*/

const misPelis = [
  {
    id: "tt1234567",
    titulo: "Into the Will",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["adventure"],
    calificacion: 8.1,
  },
  {
    id: "tt1478523",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action"],
    calificacion: 7.3,
  },
  {
    id: "tt7896541",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Crime", "Action"],
    calificacion: 9.0,
  },
];

//@misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
