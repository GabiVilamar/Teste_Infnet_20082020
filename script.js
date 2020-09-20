//alert("disciplinas");
var campo = document.getElementById("disciplinas");
var but = document.querySelector("button")
var disciplinas = [];



but.onclick = function(){

    
    disciplinas.push(campo.value)
    lista.innerText = `As disciplinas inscritas são: ${disciplinas}`;
   // var tam = disciplinas.length;

    //for(var i=0; i<tam; i++){
       // alert(disciplinas);
    // res.innerText= `As disciplinas encontradas são ${disciplinas.value}!`
    //}
   
    //alert(disciplinas);
}