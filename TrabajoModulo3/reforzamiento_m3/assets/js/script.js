import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

function Propietario(nombre, apellido, mascota){
    this.id = uuidv4().slice(0,6);
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascota = [mascota];
}

Propietario.prototype.agregarMascota = function(mascota){
    this.mascota.push(mascota);
    return true;
}

Propietario.prototype.eliminarPropietario= function(){
    let indicePropietario = listadoUsuarios.findIndex(usuario => usuario.id == this.id);
    //eliminar usuario desde el array usando su indice
    listadoUsuarios.splice(indicePropietario, 1);
    return true;
}

Propietario.prototype.eliminarMascota= function(idMascota){

    //encontrar mascota dentro del array de mascotas
    let indiceMascota = this.mascota.findIndex(mascota => mascota.id == idMascota);

    //eliminar usuario desde el array usando su indice
    this.mascota.splice(indiceMascota, 1);
    return true;
}



function Mascota(nombre, raza){
    this.id = uuidv4().slice(0,6);
    this.nombre = nombre;
    this.raza = raza;
}

const listadoUsuarios = [];


const formIngresoUsuarios = document.getElementById("formIngresoUsuarios");

//CAPTURAMOS EL EVENTO SUBMIT QUE HACE LOS FORMULARIOS
formIngresoUsuarios.addEventListener("submit", (event) => {
    //QUITAR ACCIÓN POR DEFECTO DEL SUBMIT (ENVIAR DATOS / ACTUALIZAR PÁGINA)
    event.preventDefault();

    try{
        let nombrePropietario = document.getElementById("inputNombre").value;
        let apellidoPropietario = document.getElementById("inputApellido").value;
        let nombreMascota = document.getElementById("inputNombreMascota").value;
        let razaMascota = document.getElementById("inputRazaMascota").value;

        //VALIDAMOS SI NOMBRE MASCOTA Y SU RAZA AL SER OPCIONALES VIENEN VACIOS;
        nombreMascota ||= "Sin nombre";
        razaMascota  ||= "Sin raza";


        //console.log(nombrePropietario, apellidoPropietario, nombreMascota, razaMascota);

        //creamos instancia de mascota
        const nuevaMascota = new Mascota(nombreMascota, razaMascota);

        //creamos instancia de propietario
        const nuevoUsuario = new Propietario(nombrePropietario, apellidoPropietario, nuevaMascota);

        //AGREGAMOS EL NUEVO USUARIO AL LISTADO DE USUARIOS REGISTRADOS
        listadoUsuarios.push(nuevoUsuario);

        //INVOCAMOS A LA FUNCIÓN recargaTabla() PARA RECARGAR LA TABLA CON EL NUEVO USUARIO.
        recargaTabla();

        //aquí llamamos a la función encargada de agregar los nuevos propietarios al select de registro de mascota
        agregarPropietarioSelect();

        //LIMPIAMOS EL FORMULARIO
        alert("Usuario creado correctamente!")
        formIngresoUsuarios.reset();
    }catch(error){
        console.log(error);
        alert("Algo ha salido mal en el proceso de registro de usuarios.")
    }
})

//FUNCIÓN ENCARGADA DE ACTUALIZAR EL LISTADO DE USUARIOS EN LA TABLA
function recargaTabla(){
    console.log(listadoUsuarios);
    const tabla = document.getElementById("cuerpoTablaUsuarios");
    let filas ="";

    listadoUsuarios.forEach((usuario, index) => {
        filas+=
            `     <tr>
                    <th scope="row">${usuario.id}</th>
                    <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                    <td>${usuario.mascota[0].nombre}</td>
                    <td>${usuario.mascota[0].raza}</td>
                    <td><button class="btn btn-danger btn-eliminar" data-idpropietario="${usuario.id}">Eliminar</button></td>
                  </tr>
            `
    });

    tabla.innerHTML = filas;
    registrarEventosEliminarUsuarios();

}


//LÓGICA PARA REGISTRAR MASCOTAS Y ASIGNARLA A UN PROPIETARIO EXISTENTE

//<option selected value="0">Ingreso registro mascotas.</option>

//FUNCIÓN ENCARGADA DE AGREGAR LOS PROPIETARIOS AL SELECT DE REGISTRO DE MASCOTA

function agregarPropietarioSelect(){
    const registroMascotaPropietario = document.getElementById("registroMascotaPropietario");
    let opciones = '<option selected value="0">Ingreso registro mascotas.</option>';

    listadoUsuarios.forEach(propietario => {
        opciones+= `<option value="${propietario.id}">${propietario.nombre} ${propietario.apellido}</option>`
    });

    registroMascotaPropietario.innerHTML = opciones;
}

//EVENTO SUBMIT FORMULARIO REGISTRO MASCOTA

const formRegistroMascotas = document.getElementById("formRegistroMascotas");

formRegistroMascotas.addEventListener("submit", function(event){
    event.preventDefault();
    const idPropietario = document.getElementById("registroMascotaPropietario").value;
    const nombreMascota= document.getElementById("registroNombreMascota").value;
    const razaMascota = document.getElementById("registroRazaMascota").value;

    //BUSCAR EL USUARIO POR SU ID
    let propietarioBuscado = listadoUsuarios.find(usuario => usuario.id == idPropietario);

    //CREAMOS LA NUEVA MASCOTA
    const nuevaMascota = new Mascota(nombreMascota, razaMascota);

    if(propietarioBuscado){
        propietarioBuscado.agregarMascota(nuevaMascota);
        alert("Mascota agregada correctamente.");
        console.log(listadoUsuarios);
    }else{
        alert("No se eligió un propietario.")
    }

})


//CREAR EVENTOS PARA LOS BOTONES DE ELIMINAR USUARIOS

function registrarEventosEliminarUsuarios(){
    const botonesEliminar = document.querySelectorAll("#cuerpoTablaUsuarios .btn-eliminar");

    botonesEliminar.forEach(botonEliminar => {
        botonEliminar.addEventListener("click", function(event){

            if(confirm("Está seguro que desea eliminar este registro?")){
                let idPropietario = botonEliminar.dataset.idpropietario;

                //BUSCAR EL USUARIO POR SU ID
                let propietarioBuscado = listadoUsuarios.find(usuario => usuario.id == idPropietario);

                propietarioBuscado.eliminarPropietario();

                //llamamos a estos métodos para que se eliminen los usuarios
                recargaTabla();
                agregarPropietarioSelect();


            }

        })
    })

}