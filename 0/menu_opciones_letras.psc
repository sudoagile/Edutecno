Algoritmo menu_opciones
	Definir OP Como Caracter;
	Escribir "Ingrese la opci�n a elegir.";
	Leer OP;
	OP<-Minusculas(OP);
	Segun opcion Hacer
		'a':
			Escribir "Usted ha elegido la opci�n a";
		'b':
			Escribir "Usted ha elegido la opci�n b";
		'c':
			Escribir "Usted ha elegido la opci�n c";
		'd':
			Escribir "Usted ha elegido la opci�n d";
		De Otro Modo:
			Escribir "Opci�n no v�lida";
	Fin Segun
FinAlgoritmo