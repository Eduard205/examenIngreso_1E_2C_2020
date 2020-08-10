/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  
let respuesta;
let marca;
let precio;
let peso;
let tipo;
let AcumPeso=0;
let flagSolido=0;
let TipoSolidoMasBarato;
let MarcaSolidoMasBarato;
let flagLiquido=0;
let TipoLiquidoMasCaro;
let MarcaLiquidoMasCaro;

do
{

	marca = prompt ("ingrese marca: ");
	while(!(isNaN(marca)))
	{
	marca = prompt("No ingrese una marca. Ingrese una marca: ");
	}

	precio = parseInt(prompt("Ingrese precio: "));
	while (isNaN(precio))
	{
	precio = parseFloat(prompt("No se ingreso un precio, ingrese precio: "));
	}

	peso = parseInt(prompt("Ingrese peso (en kg): "));
	while (isNaN(peso))
	{
	peso = parseInt(prompt("No se ingreso un peso, ingrese peso (en Kg): "));
	}

	tipo = prompt ("ingrese tipo (solido o liquido): ");
	while(tipo!= "solido" && tipo!= "liquido")  
	{
	tipo = prompt("Tipo invaido. Ingrese tipo (solido o liquido): ");
	}


AcumPeso = AcumPeso + peso;

switch (tipo) 
{
	case "solido":
		if (flagSolido ==0 || precio < TipoSolidoMasBarato) 
		{
			TipoSolidoMasBarato = precio;
			MarcaSolidoMasBarato = marca;
			flagSolido=1;
		}
		break;
	case "liquido":
		if (flagLiquido ==0 || precio > TipoLiquidoMasCaro) 
		{
			TipoLiquidoMasCaro = precio;
			MarcaLiquidoMasCaro = marca;
			flagLiquido=1;
		}
	break;
}

respuesta = prompt("desea continuar ingresando (s/n): ");

}while (respuesta== 's');


console.log ("a) El peso total de la compra es: "+AcumPeso+" Kilogramos");

console.log ("b) La marca del más caro de los líquidos es: "+MarcaLiquidoMasCaro);

console.log ("c) La marca del más barato de los sólidos es: "+MarcaSolidoMasBarato);

}
