let input_busqueda = document.getElementById('donde-voy-hoy')
let boton_busqueda = document.getElementsByClassName('botton-buscar');
let donde_voy_busqueda = document.getElementsByTagName('titulo-ciudad')


function busqueda (input_busqueda) {



    fetch(`https://https://es.wikipedia.org/api/rest_v1/page/summary/${input_busqueda}`)
        .then(response => response.json())
        .then(titulo => { 
        let tit_ciudad =titulo.title;    
        let crear_h2= document.createElement('h2');
        crear_h2.innerHTML=tit_ciudad;
        donde_voy_busqueda.appendChild(crear_h2);   
            
        })



}

boton_busqueda.onclick = busqueda