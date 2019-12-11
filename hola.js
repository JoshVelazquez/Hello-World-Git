var ss;
var ff;
ss = "78";
ff = 23.234;
function alerta(nombre, apellido) {
    console.log(nombre + " " + apellido);
}
alerta("joshua", "velazquez");
var Persona = /** @class */ (function () {
    function Persona(name, lastName, age) {
        this.fullName = name + " " + lastName;
        this.age = age;
    }
    Persona.prototype.imprimirNombre = function () {
        alert(this.fullName);
    };
    return Persona;
}());
var persona = new Persona("josh", "velazquez", 21);
persona.imprimirNombre();
