Algoritmo menu_opciones
	Definir OP Como Caracter;
	Escribir "Ingrese la opción a elegir.";
	Leer OP;
	OP<-Minusculas(OP);
	Segun opcion Hacer
		'a':
			Escribir "Usted ha elegido la opción a";
		'b':
			Escribir "Usted ha elegido la opción b";
		'c':
			Escribir "Usted ha elegido la opción c";
		'd':
			Escribir "Usted ha elegido la opción d";
		De Otro Modo:
			Escribir "Opción no válida";
	Fin Segun
FinAlgoritmo