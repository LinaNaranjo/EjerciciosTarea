/*
Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario básico por horas y el número de horas trabajadas en un mes y realice lo siguiente:
i.   Calcular su salario básico mensual
ii.   Determinar si recibe o no subsidio de transportes. Un empleado recibe este subsidio cuando el salario mensual básico es menor o igual a $700.000 COP
iii.   Mostrar en consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte.
*/ 
//const prompt = require("prompt-sync")({ sigint: true });

const nombre = prompt("Ingrese su nombre");
const salario = prompt("Ingrese su salario");
const numeroHoras = prompt("Ingrese su numero De Horas");

//Calcular su salario básico mensual
const salarioMensual = Number(salario) * Number(numeroHoras)
console.log("El salario mensual de "+nombre+" es: "+salarioMensual);

//Determinar si recibe o no subsidio de transportes. Un empleado recibe este subsidio cuando el salario mensual básico es menor o igual a $700.000 COP
const subsidioTransporte = salarioMensual == 700000 || salarioMensual < 700000
console.log("Tiene subsidio de trasporte? "+subsidioTransporte);

//.   Mostrar en consola el nombre del empleado, su salario básico mensual y si recibe o no subsidio de transporte.
console.log("El empleado es: "+nombre+ " con un salario basico de: "+salarioMensual+ " y recibe subsidio de transporte? "+subsidioTransporte);
 
