"use strict";

class Validador {
    constructor(nombre_apellidos, email, contraseña){
        this.nombre_apellidos = nombre_apellidos;
        this.email = email;
        this.contraseña = contraseña;
    }

    comprobarNombreApellidos () {
        return this.nombre_apellidos ? true : false
    }

    comprobarEmail () {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email) ? true : false
    }

    comprobarContraseña () {
        if (!this.contraseña){
            return false
        } else if (this.contraseña.length < 8){
            return false
        } else {
            return true
        }
    }
    
    crearError (mensaje, localizacion) {
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = mensaje
        form.insertBefore(div, localizacion)
    }

    borrarErrores (){
        let errores = [...document.getElementsByClassName("error")]
        errores ? errores.forEach(error => error.remove()) : null;
    }
}

class RegistroValidador extends Validador {
    constructor (nombre_apellidos, email, contraseña, repetirContraseña){
        super(nombre_apellidos, email, contraseña);
        this.repetirContraseña = repetirContraseña
    }

    comprobarEmailEnBD (usuariosBD){
        let usuarioExiste = false;

        if (!usuariosBD){
            return true;
        }
        else{
            usuariosBD.forEach(user => {
                if (user.email === this.email){
                    usuarioExiste=false
                }
            })
        }
        return usuarioExiste;
    }

    comprobarContraseñaRepetida() {
        if(this.contraseña === this.repetirContraseña) {
            return true;
        } else {
            return false;
        } 
    }
}

class InicioSesionValidador extends Validador {
    constructor (){
        super();
    }

    checkEcomprobarEmailEnBDmailInDB (string){
        if (!usuariosBD){
            return false
        }
        else{
            usuariosBD.forEach(user => {
                if (user.email === string){return true}
            })
        }
        return false
    }

}




















/* let nom_apell = document.getElementById('nom-apell');
let email = document.getElementById('email');
let contraseña = document.getElementById('contraseña');
let rep_contraseña = document.getElementById('rep-contraseña');
let boton_registrar = document.querySelector('.botton-registrar')



function comprobar_datos () {

// Comprobación nombre y apellidos


if (nom_apell.value === undefined && (typeof nom_apell.value !== 'string')) {
    return alert ('Tienes que poner tu nombre y apellidos')
} else {
    localStorage.setItem('Nombre y apellidos', nom_apell.value)
}


// Comprobación email
let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


if (email.value === undefined && (re.test(email.value))) {
    return alert ('Tienes que poner un email válido')
} else {
    localStorage.setItem('Email', email.value)
}



// Comprobación contraseña

if (contraseña.value === undefined && (contraseña.value.length < 8)) {
    return alert ('Tu contraseña debe tener por lo menos 8 caracteres')
} else {
    localStorage.setItem('Contraseña', contraseña.value)
}



// Comprobación repetición contraseña

if (rep_contraseña.value === undefined && (rep_contraseña.value !== contraseña.value)) {
    return alert ('Tu contraseña debe coincidir')
}  else {
    localStorage.setItem('Contraseña', undefined)
}

}

boton_registrar.onclick = comprobar_datos;


function comprobar_nombre (nom_apell) {
    if (nom_apell.value === undefined && (typeof nom_apell.value !== 'string')) {
        return alert ('Tienes que poner tu nombre y apellidos')
    } else {
        localStorage.setItem('Nombre y apellidos', nom_apell.value)
    }
} */