const miTitulo=document.querySelector("#titulo");
miTitulo.textContent='¡Hola Mundo!';

function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }
   
  function prueba(){
    alert("before setTimeout");

    setTimeout(function(){
            alert("I am setTimeout");
       },1000); //delay is in milliseconds 
    
      alert("after setTimeout");
  }
   

//1 .Loop de pares
function loopDePares(num){
          
    for(let i=0;i<100;i++){
    setTimeout(function(){        
            const text_label=document.querySelector("#label1");
            text_label.textContent=text_label.textContent +', '+i;           
        },30); 
    }    
    const text_label=document.querySelector("#label1");
            text_label.textContent="fgfgg"; 
}