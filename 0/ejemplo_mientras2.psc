Proceso ejemplo_mientras2
	//DECLARACIÓN DE VARIABLES
	Definir cantidadMensajes Como Entero;
	
	Escribir "indique cuántas veces desea imprimir el mensaje";
	Leer cantidadMensajes;
	
	Definir contador Como Entero;
	contador <- 1;
	
	Mientras contador <= cantidadMensajes Hacer
		Escribir "Hola mundo ", contador;
		contador <- contador+1;
	Fin Mientras
	
FinProceso