Algoritmo logueo
	Definir clave,password, correo,email como cadena;
	email="admin@mail.com";
	clave="123456";
	flag=0;
	
	Mientras flag=0 Hacer
		Escribir "Ingrese sus credenciales :";
		Escribir  "Ingrese Email: ";
		Leer correo;
		Escribir  "Ingrese contraseña: ";
		Leer password;
		
		Si Mayusculas(correo)= Mayusculas(email) Entonces
			Si password=clave Entonces
				Escribir "Login Correcto";
				flag=1
			SiNo
				Escribir "credenciales invalidas";
			FinSi
		SiNo
			Escribir "credenciales invalidas";
		Fin Si
		
	Fin Mientras
FinAlgoritmo
