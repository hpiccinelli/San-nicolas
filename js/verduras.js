var idlist=0;
var lista=[]; 
var verduras = [ "uva","sandia","melon","rucula","acelga","espinaca","cebolla de verdeo","cebolla morada","zapallito","palta","durazno",
"cereza","frutilla","calabaza","choclo","kiwi","pera","manzana","morron","limon","remolacha","chaucha","repollo","zanahoria","ciruela",
"banana","papa","tomate","berenjena","ajo","parejil","lechuga","cebolla","anana","naranja","mandarina","batata","zapallo"];


      // Funciones de autocompletado

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("myInput"), verduras);

// function incrementValue()
// {
//     var value = parseInt(document.getElementById('myInputt').value);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }
    

    // --------------------------------------------------------------------------------- //


    function incrementar() {
      if (document.getElementById('inc').value==false) {

          document.getElementById('inc').value =  1;
          }
      else {
        
      
        document.getElementById('inc').value = parseFloat(document.getElementById('inc').value ) + 1;
    }}


    function disminuir() {
      if (document.getElementById('inc').value==false) {
         document.getElementById('inc').value =  0;
          }
          
        else {   
        document.getElementById('inc').value = parseFloat(document.getElementById('inc').value ) - 1;
    }  }



function t(x){return document.getElementById(x);} 

// function y(x , s){
//     if(document.getElementById(x).checked)
//   return document.getElementById(x).value;
//   else {
//     return document.getElementById(s).value;
//   }
// }

// function y(x , s){
//     if(document.getElementById(x).selected)
//   return document.getElementById(x).value;
//   else {
//     return document.getElementById(s).value;
//   }
// }

function y(x , s , r){
    if(document.getElementById(x).selected){ 
     return document.getElementById(x).value;}

 if(document.getElementById(s).selected) {
     return document.getElementById(s).value;}

if(document.getElementById(r).selected) {
    return document.getElementById(r).value;}


}

// function almacenar(){ 
//     lista.push({n:t('myInput').value,a:t('inc').value,c:y('radiooo','radioooo')}); 
//     t('myInput').value=t('inc').value=''; 
// } 
function almacenar(){ 
    lista.push({n:t('myInput').value,a:t('inc').value,c:y("sel1","sel2","sel3")}); 
    t('myInput').value=t('inc').value=''; 
} 

function borrar(){
  while(lista.length > 0) {
    lista.pop();
}

}

// function mostrar1(){ 
//     almacenar();
//     t('lista').innerHTML=''; 
//     for(var i=0,m;m=lista[i];i++) 
//     t('lista').innerHTML+=lista[i].n+'--'+lista[i].a+lista[i].c+'<br />'; 
// }
    // t('lista').innerHTML+=document.getElementsByName('verdura').value+'--'+"pis"+'<br />'; }

function CrearElementoLista() {

  var texti;
  texti=mostrar();
  var ul = document.getElementById("lista");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(texti));
  li.setAttribute("id", idlist);
  ul.appendChild(li);
  var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("X");       // Create a text node
btn.appendChild(t);       
btn.setAttribute("id", idlist);
btn.setAttribute("class", "borrar btn btn-success btn-sm");
btn.setAttribute("onclick","borrarli(this.id) ; autodestruc(this.id) "); 
 li.appendChild(btn);              // Append the text to <button>
// document.body.appendChild(btn);
idlist++;
                   // Append <button> to <body>

  // alert(texti)
  focusIni();
}

function mostrar(){ 
   borrar();
    almacenar();
    var texto= " ";
    for(var i=0,m;m=lista[i];i++) 
    texto+=lista[i].n+' '+lista[i].a+lista[i].c+' ';
    return texto;



}


function borrarli(a){
var elem = document.getElementById(a);
    elem.parentNode.removeChild(elem);


}

function autodestruc(w){  
var elem = document.getElementById(w);
    elem.parentNode.removeChild(elem);  }



    function printDiv(nombreDiv) {
      removeElementsByClass();

     var contenido= document.getElementById(nombreDiv).innerHTML;
     // var contenidoOriginal= document.body.innerHTML;
     contenido=contenido.replace("LISTADO DE FRUTAS/VERDURAS", "Pedido:");
     document.body.innerHTML = "<img src='img/blanco.png' alt='' width='15%'>";
           document.body.innerHTML += "<br>";
            document.body.innerHTML += "<br>";

     document.body.innerHTML += contenido;
      document.body.innerHTML += "<br>";

     document.body.innerHTML += "<br>";


     document.body.innerHTML += "<p> Direccion: rivadavia 19786 </p>";

     document.body.innerHTML += "<p> Tel:4687-7877 </p>";

     document.body.innerHTML += hora();
     

     
     window.print();

     location.reload();
     // document.body.innerHTML = contenidoOriginal;
}


function removeElementsByClass(){
    var elements = document.getElementsByClassName("btn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function focusIni() {
     document.getElementById("myInput").focus();
}


function hora(){ 

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

return dateTime;
 }




 function BorrarUl(){
  var lis;
  var uk = document.getElementById("lista");
while((  lis = uk.getElementsByTagName("li")).length > 0) {
  uk.removeChild(lis[0]);
}

 focusIni();
 }