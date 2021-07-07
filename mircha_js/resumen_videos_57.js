console.log(this);

this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: "contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir();

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: "contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

function Persona(nombre) {
  this.nombre = nombre;

  //return console.log(this.nombre);
  return function () {
    console.log(this.nombre);
  };
}

let jon = new Persona("jon");
jon();
