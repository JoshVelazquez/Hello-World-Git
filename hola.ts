var ss: string;
var ff: number;
ss = "78";
ff = 23.234;

function alerta(nombre: string, apellido: string) {
    console.log(nombre + " " + apellido)
}

alerta("joshua", "velazquez")


class Persona {
    private fullName: string;
    private age: number;
    constructor(name: string, lastName: string, age: number) {
        this.fullName = `${name} ${lastName}`;
        this.age = age;
    }
    imprimirNombre() {
        alert(this.fullName);
    }
}

var persona = new Persona("josh", "velazquez", 21);

persona.imprimirNombre();