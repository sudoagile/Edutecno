Proceso ejemplo_mientras1
	//DECLARACIÓN DE VARIABLES
	Definir eleccion Como Entero;
	eleccion <- 0;
	
	Escribir "Seleccione un número del 1 al 5";
	Leer eleccion;
	
	Mientras (eleccion <=0) o (eleccion > 5) Hacer // pregunta antes de ejecutar
		Escribir "Ha elegido una opción inválida, por favor ingrese un número 1 al 5!!!";
		Leer eleccion;
	Fin Mientras
	
	Escribir "Usted ha seleccionado el número: ", eleccion;
	
	
FinProceso