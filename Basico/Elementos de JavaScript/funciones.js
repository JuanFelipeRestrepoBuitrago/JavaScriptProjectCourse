// Declarativas 
function myFunction() {
    return 3;
}
console.log(myFunction());

// Expresión
var myFunction = function(a, b) {
    return a + b;
}
console.log(myFunction(1, 2));

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}
saludarEstudiantes("Juan Felipe");

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}
console.log(sumar(1, 2));