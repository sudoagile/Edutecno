Proceso ejemplo_mientras1
	//DECLARACI�N DE VARIABLES
	Definir eleccion Como Entero;
	eleccion <- 0;
	
	Escribir "Seleccione un n�mero del 1 al 5";
	Leer eleccion;
	
	Mientras (eleccion <=0) o (eleccion > 5) Hacer // pregunta antes de ejecutar
		Escribir "Ha elegido una opci�n inv�lida, por favor ingrese un n�mero 1 al 5!!!";
		Leer eleccion;
	Fin Mientras
	
	Escribir "Usted ha seleccionado el n�mero: ", eleccion;
	
	
FinProceso