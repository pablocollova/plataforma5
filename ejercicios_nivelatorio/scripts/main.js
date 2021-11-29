const button = document.querySelector('#button');
const text = document.querySelector('#text');
let secuencia = '0';
let i = 0;
let repetir;

// Evento
button.addEventListener('click', mostrarOcultarText);


// Funciones

function mostrarOcultarText(event){
    // Previene la acción de recargar la página
    event.preventDefault();

    if(button.value === 'Run'){
        button.value = 'Stop';
        repetir = setInterval('mostrarNumeros()', 100); //  velocidad
    }else{
        button.value = 'Run';
        text.textContent = '';
        detenerResetear();
    }
}


function mostrarNumeros(){
    if(i === 0){
        text.textContent = secuencia;
        i++;
        return;
    }

    // Muestra hasta el 100
    if(i <= 100){
        secuencia = `${secuencia}, ${i++}`;
        text.textContent = secuencia;
        return;
    }else{
        text.textContent = `${secuencia} - Fin`;
        detenerResetear();
        return;
    }
}


function detenerResetear(){
    clearInterval(repetir);
    secuencia = '0';
    repetir = undefined;
    i = 0;
}
