Algoritmo operaciones
	Escribir "Ingrese 2 n�meros";
	Definir numero1, numero2, opcion Como Real;
	Escribir "Ingrese primer n�mero";
	Leer numero1;
	Escribir "Ingrese segundo n�mero";
	Leer numero2;
	//CREAR MEN� DE OPCIONES
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
			Escribir "El resultado de la divisi�n es: ", numero1 / numero2;
		Sino Si	opcion = 4 Entonces
			Escribir "El resultado de la divisi�n es: ", numero1 * numero2;
			
		FinSi
		FinSi
		FinSi
		FinSi
FinAlgoritmo
