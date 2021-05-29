/* @Gustavo Apaza Huanca */
var aux
var nombre = new Array(3);
var edad = new Array(3);

for(let i = 0; i < 3; i++){
    nombre[i]= prompt("Ingrese un nombre: ");
    edad[i] = parseInt(prompt("Ingrese la edad: "));
}

aux = esMayorDeEdad (nombre, edad);
alert(aux + " usted es el mas mayor de edad");

document.getElementById("nombre").innerHTML = aux;
document.getElementById("edad").innerHTML = edadMayor;

///////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCION
///////////////////////////////////////////////////////////////////////////////////////////////////////
function esMayorDeEdad (nombre, edad){
    /*
    Una variable que no se le declare ni var, ni let dentro de un bloque es una variable global
    */
    edadMayor = 0;
    nombreDelMayor = "";
    for(let i = 0; i < 3; i++){
        if(edad[i] > edadMayor){
            edadMayor = edad[i];
            nombreDelMayor = nombre[i];
        }
     }
    return nombreDelMayor;

    /* 
    Con esta parte se resuelve el punto 1 de la practica
    if(edad >= 18){
        alert(nombre + " usted es mayor de edad");
    }else{
        alert("todavia no sos mayor");
    } 
    */
}