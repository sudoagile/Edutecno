Algoritmo NumeroMayor
	
	Escribir "Ingrese 2 números";
	
	
	Definir numero1, numero2, opcion Como Real;

	
	Escribir "Digite el primer número: "
	Leer numero1
	
	Escribir "Digite el segundo número: "
	Leer numero2
	
	Si numero1 == numero2 Entonces
		Escribir "Los dos números son iguales"
		
	SiNo
		Si numero1 > numero2 Entonces
			
			Escribir "El número mayor es: ",numero1
			
		SiNo
			Escribir "El número mayor es: ",numero2
			
		Fin Si
		
	Fin Si
	

FinAlgoritmo
