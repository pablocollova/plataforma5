const miTitulo=document.querySelector("#titulo");
miTitulo.textContent='¡Hola Mundo!';

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }
   
  
   

//1 .Loop de pares
function loopDePares(num){
    for(let i=0;i<100;i++){
        const text_label=document.querySelector("#label1");
        text_label.textContent=text_label.textContent +', '+i;
        syncDelay(50);
    }
}