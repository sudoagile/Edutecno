Algoritmo NumeroMayor
	
	Escribir "Ingrese 2 n�meros";
	
	
	Definir numero1, numero2, opcion Como Real;

	
	Escribir "Digite el primer n�mero: "
	Leer numero1
	
	Escribir "Digite el segundo n�mero: "
	Leer numero2
	
	Si numero1 == numero2 Entonces
		Escribir "Los dos n�meros son iguales"
		
	SiNo
		Si numero1 > numero2 Entonces
			
			Escribir "El n�mero mayor es: ",numero1
			
		SiNo
			Escribir "El n�mero mayor es: ",numero2
			
		Fin Si
		
	Fin Si
	

FinAlgoritmo
