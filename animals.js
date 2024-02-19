// Superclase Animal
class Animal {
    constructor(nombre, tamaño, pelaje) {
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.pelaje = pelaje;
    }

    describir() {
        return `Este animal se llama ${this.nombre}, tiene un tamaño de ${this.tamaño} y un pelaje ${this.pelaje}.`;
    }
}

// Subclase Perro que extiende de Animal
class Perro extends Animal {
    constructor(nombre, tamaño, pelaje, raza) {
        super(nombre, tamaño, pelaje);
        this.raza = raza;
    }

    describir() {
        return super.describir() + ` Es un perro de la raza ${this.raza}.`;
    }
}

// Subclase Gato que extiende de Animal
class Gato extends Animal {
    constructor(nombre, tamaño, pelaje, colorOjos) {
        super(nombre, tamaño, pelaje);
        this.colorOjos = colorOjos;
    }

    describir() {
        return super.describir() + ` Tiene los ojos de color ${this.colorOjos}.`;
    }
}

// Creo instancias de Perro y Gato
let perro1 = new Perro("Lazy", "Grande", "Corto", "Labrador");
let gato1 = new Gato("Cuqui", "Pequeño", "Largo", "Verdes");

console.log(perro1.describir());
console.log(gato1.describir());
