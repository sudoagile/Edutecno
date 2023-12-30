Algoritmo operaciones
	Escribir "Ingrese 2 números";
	Definir numero1, numero2, opcion Como Real;
	Escribir "Ingrese primer número";
	Leer numero1;
	Escribir "Ingrese segundo número";
	Leer numero2;
	//CREAR MENÚ DE OPCIONES
	Escribir "1. Sumar";
	Escribir "2. Restar";
	Escribir "3. Dividir";
	Escribir "4. Multiplicar";
	Leer opcion
		Si opcion == 1 Entonces
			Escribir "El resultado de la suma es: ", numero1 + numero2
		Sino si opcion == 2 Entonces
			Escribir "El resultado de la resta es: ", numero1 - numero2;
		Sino Si  opcion = 3 Entonces
			Escribir "El resultado de la división es: ", numero1 / numero2;
		Sino Si	opcion = 4 Entonces
			Escribir "El resultado de la división es: ", numero1 * numero2;
			
		FinSi
		FinSi
		FinSi
		FinSi
FinAlgoritmo
