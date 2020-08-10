/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let respuesta;
	let SexoTitular;
	let lugar;
	let temporada;
	let CantidadPersonas;
	let ContadorBariloche=0;
	let ContadorCataratas=0;
	let ContadorSalta=0;
	let LugarMasElegido;
	let AcumPasajerosF=0;
	let AcumPasajerosM=0;
	let SexoTitularMasPasajeros;
	let AcumCantidadPersonasInvierno=0;
	let ContCantPersonasInvierno=0;
	let PromedioPersonasViajanInvierno=0;
	
	
	do
	{
	
		SexoTitular = prompt ("ingrese sexo del titular(f/m): ");
		while(SexoTitular!= "m" && SexoTitular!= "f")
		{
			SexoTitular = prompt("Ingrese un sexo de titular valido (m/f): ");
		}
	
		lugar = prompt ("ingrese lugar (bariloche, cataratas o salta): ");
		while(lugar!= "bariloche" && lugar!= "cataratas" && lugar != "salta")
		{
			lugar = prompt("lugar invalido. ingrese lugar (bariloche, cataratas o salta): ");
		}
	
		temporada = prompt ("ingrese temporada (otoño, invierno, verano o primavera): ");
		while((temporada!= "otoño" && temporada!= "invierno") && (temporada!= "verano" && temporada!= "primavera"))
		{
			temporada = prompt("Temporada invalida. ingrese temporada (otoño, invierno, verano o primavera: ");
		}
	
		CantidadPersonas = parseInt(prompt("Ingrese cantidad de personas: "));
		while (isNaN(CantidadPersonas))
		{
			CantidadPersonas = parseInt(prompt("No se ingreso una cantidad valida, Ingrese cantidad de personas: "));
		}
	
		switch (lugar)
		{
			case "bariloche":
				ContadorBariloche++;
				break;
			case "cataratas":
				ContadorCataratas++;
				break;
			case "salta":
				ContadorSalta++;
				break;
		}
	
	
		if (ContadorBariloche > ContadorCataratas && ContadorBariloche > ContadorSalta)
		{
			LugarMasElegido = "bariloche"
		}
		else if(ContadorCataratas > ContadorSalta && ContadorCataratas >= ContadorBariloche)
		{
			LugarMasElegido = "cataratas"
		}
		else 
		{
			LugarMasElegido = "salta"
		}
	
		switch (SexoTitular)
		{
			case "f":
				AcumPasajerosF++;
				break;
			case "m":
				AcumPasajerosM++;
				break;	
		}

		if (AcumPasajerosF > AcumPasajerosM)
		{
			SexoTitularMasPasajeros = "f";
		}
		else if(AcumPasajerosM > AcumPasajerosF)
		{
			SexoTitularMasPasajeros = "m";
		}
		else 
		{
			SexoTitularMasPasajeros = "Los sexos de los titulares (f/m) tienen la misma cantidad de pasajeros";
		}
	
		if (temporada== "invierno")
	{
		AcumCantidadPersonasInvierno = AcumCantidadPersonasInvierno + CantidadPersonas;
		ContCantPersonasInvierno++;
	}
	respuesta = prompt("desea continuar ingresando (s/n): ");
	
	}while (respuesta== 's');

	if (ContCantPersonasInvierno>0){
		PromedioPersonasViajanInvierno = AcumCantidadPersonasInvierno / ContCantPersonasInvierno;
	}

console.log ("a) el lugar más elegido es: "+LugarMasElegido);

console.log ("b) el sexo de titular que lleva más pasajeros es: "+SexoTitularMasPasajeros);

console.log ("c) el promedio de personas por viaje, que viajan en invierno es: "+PromedioPersonasViajanInvierno);

}
