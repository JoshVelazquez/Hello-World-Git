var div = document.getElementById("div");
var cont = 0;

document.getElementById("boton").addEventListener("click", function () {
    let parrafo = document.createElement("p");
    cont++;
    let texto = document.createTextNode("texto random " + cont);
    parrafo.appendChild(texto);
    div.appendChild(parrafo);
})
array = ["xd", "xs", "xc"]
for (let xd of array) {
    console.log(xd)
}

class wea {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }

    regresarNombre() {
        return this.name
    }
}

var josh = new wea("josh", "velazquez");
console.log(josh.regresarNombre())
alert(josh.regresarNombre())

var funcion = function () {
    return "ola k ase"
}

alert(funcion())
