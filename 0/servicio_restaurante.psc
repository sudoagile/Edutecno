Algoritmo servicio_retaurante
	Definir opcion Como Real ;
	
	Escribir "Ingrese el plato a elegir.";
	
	Escribir "1 Cebiche			17.000";
	Escribir "2 Papa rellena		12.000";
	Escribir "3 Aji de gallina		16.000";
	Escribir "4 Jalea mixta		28.000";
	
	Leer opcion;
	
	ceb=17000
	papa=12000
	aji=16000
	jalea=28000
	
	total=0
	
	a=0 //cantidad individual de vada plato
	b=0
	c=0
	d=0
	p=0 //cantidad de platos
	
	
	Segun opcion Hacer
		1:
			Escribir "Usted ha elegido cebiche";
			Escribir "¿Cuantos platos de cebiche desea?";
			Leer a
			total=total+ceb*a
			p=p+a
			
		2:
			Escribir "Usted ha elegido Papa rellena";
			Escribir "¿Cuantos platos de Papa rellena desea?";
			Leer b
			total=total+papa*b
			p=p+b
		3:
			Escribir "Usted ha elegido Aji de gallina";
			Escribir "¿Cuantos platos de Aji de gallina desea?";
			Leer c
			total=total+aji*c
			p=p+c
		4:
			Escribir "Usted ha elegido Jalea Mixta";
			Escribir "¿Cuantos platos de Jalea Mixta desea?";
			Leer d
			total=total+jalea*d
			p=p+d
		De Otro Modo:
			Escribir "¿Opción no valida elija otro número?"
		
	Fin Segun
	total= total*1.1;
	Escribir "La cuenta total es: ", total, " pesos por el pedido de ", p, " platos"
	
FinAlgoritmo