/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorFemenino=0;
	let HombreMasPesado;
	let NombreHombreMasPesado;
	let AcumEdad=0;
	let flag=0;
	let promedioEdadTotal;

	
	for (i=0; i<5; i++)
	{
	
	nombre = prompt("Ingrese nombre: ");
	while(!(isNaN(nombre)))
	{
		nombre = prompt("No ingrese un nombre. Ingrese un Nombre");
	}
	
	peso = parseInt(prompt("Ingrese peso: "));
	while (isNaN(peso))
	{
		peso = parseInt(prompt("Dato invalido, ingrese un peso"));
	}
	
	sexo = prompt("Ingrese sexo (m/f):");
	while(sexo!= "m" && sexo!= "f")
	{
		sexo = prompt("Ingrese un sexo valido (m/f): ");
	}
	
	
	edad = parseInt(prompt("Ingrese edad: "));
	while(isNaN(edad))
	{
		edad = parseInt(prompt("No ingreso una edad, ingrese edad: "));
	}
	
	
	switch (sexo)
	{	case "f":
			contadorFemenino++;
			break;
		case "m":
			if(flag==0 || peso > HombreMasPesado)
			{	
			HombreMasPesado = peso;
			NombreHombreMasPesado = nombre;
			flag = 1;
			}
			break;
	}
	
		AcumEdad = AcumEdad + edad;
		
	}
	
	promedioEdadTotal = AcumEdad / 5;
	
	
	console.log ("a) La cantidad de mujeres es: "+contadorFemenino);
	
	console.log ("b) La Edad Promedio total es: "+promedioEdadTotal);
	
	console.log ("c) El hombre mas pesado es: "+NombreHombreMasPesado);

}
