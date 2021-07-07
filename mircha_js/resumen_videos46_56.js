//-------------- callbacks--------------
/*
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 100));
}

cuadradoCallback(0, (value, result) => {
  console.log("inicia callback");
  console.log(`callback: ${value}, ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log(`callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`callback: ${value}, ${result}`);
            console.log("fin callback");
          });
        });
      });
    });
  });
});
*/
//-----------------Promesas-----------------
/*
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`error el valor ${value} ingresado no es un numero`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    //console.log(obj);
    console.log(`inicio promise`);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("fin promise");
  })
  .catch((err) => console.error(err));

*/
//------------asincronía----------
/*
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`error el valor ${value} ingresado no es un numero`);
  return new Promise((resolve, reject) => {
    //simulamos la asicronía con el setTimeout
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsyncronaDeclarada() {
  try {
    console.log("inicio Fn asyncrona");
    // por la palabra await espera a que se ejecute el bloque
    let obj = await cuadradoPromise(0);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function ${obj.value}, ${obj.result}`);
  } catch (error) {
    console.error(console.error(error))
  }
}

funcionAsyncronaDeclarada();


const funcionAsicronaExpresada = async () {
   try {
    console.log("inicio Fn asyncrona");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(6);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(9);
    console.log(`Async Function ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(10);
    console.log(`Async Function ${obj.value}, ${obj.result}`);
    } catch (error) {
    console.error(console.error(error))
  }
}

*/
//-------------     symbols  -------------*/
/*
let id = Symbol("id");
let id2 = Symbol("id2");

const NOMBRE = Symbol("referencia");
const SALUDAR = Symbol("referencia");

const persona = {
  [NOMBRE]: "jon",
};

console.log(persona);

persona.NOMBRE = "Jonathan MirCha";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log("Hola");
};

console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

Object.getOwnPropertySymbols(persona);

*/
//-----------------Tipo de dato set  -------------*/
/*
const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOLA",
]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set.add(1);
set.add(1);
set.add(2);
set.add(true);
set.add({});

console.log(set2);

for (item of set) {
  console.log(item);
}

set2.forEach((item) => console.log(item));

let arr = Array.from(set);
console.log(arr);

console.log(set.delete("HOLA"));
console.log(set.has("hola"));
set2.clear();
console.log(set2);

*/

// ----------------Maps -------------
/*
const mapa = new Map();
mapa.set("nombre", "Gustavo");
mapa.set("apellido", "Bearzot");
mapa.set("edad", 35);

console.log(mapa);
console.log("nombre");
mapa.set("nombre", "Abel");
console.log(mapa.get("nombre"));
mapa.delete("apellido");

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`llave: ${key}, valor: ${value}`);
}

const mapa2 = new Map([["nombre", "gaturro"], ["edad", 20][(null, "nulo")]]);

console.log(mapa2);
// se puede almacenar en 2 "array"

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
*/

//------weak sets  weak maps------
/*
const ws = new WeakSet();

let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.add(valor3);

console.log(ws);

setInterval(() => console.log(ws), 1000);

setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);
*/

//----------------weak maps-------------------
/*
const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave3));

wm.set(llave3);

setInterval(() => console.log(wm), 1000);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);
*/
//-------------iterables  iterator --------------------
/*
const iterable = [1, 2, 3, 4, 4, 5];
// accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
console.log(iterador.next());

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
*/
//---------------- Generators-------
/*
function* iterable() {
  yield "hola";
  console.log("Hola consola");
  yield "hola2";
  console.log("seguimos con mas intrucciones de nuestro codigo");
  yield "hola3";
  yield "hola4";
}

let iterador = iterable();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

for (let y of iterador) {
  console.log(y);
}
// guardar en un arreglo con una fn generadora
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.log("inicia generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  console.log("termina generator");
}

let gen = generador();

for (let y of gen) {
  console.log(y);
}
*/
//--------------Proxies--------------
/*
// objeto original
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};
//manejador
const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona`
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Z-a-z\s]+$/g.test(valor)
    ) {
      return console.error(
        `la propiedad "${prop} sólo acepta letras y espacios en blanco`
      );
    }

    obj[prop] = valor;
  },
};
//instancia del proxy
const jon = new Proxy(persona, manejador);

jon.nombre = "jon";
jon.apellido = "Mircha";
jon.edad = 35;
jon.twitter = "@lalala";
console.log(jon);

console.log(persona);
*/
//-----Propiedades dinamicas de los objetos------

let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  [`id_${aleatorio}`]: "valor aleatorio",
};
console.log(objUsuarios);
const usuarios = ["Jon", "Irma", "Miguel", "Kala", "Kenai"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);
