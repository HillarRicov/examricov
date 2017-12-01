/*clear();
*/
var namevalue;

niveaux=1;//
niveaux=2;//
niveaux=3;//
 
 max = 25;
function randomize(){
  return Math.floor(Math.random()*25+1);
}

randval=25;
randval=randomize();
alert(randval);

 ici=document.getElementById('ici');
 en=document.getElementById('en');
resultat = document.getElementById('resultat');

//list1 =
en.onclick=function(){
  
  var  tmp=ici.value;
  ici.value='';

  
   if(tmp>randval){
      
      resultat.innerHTML=resultat.innerHTML+'<br>'+ tmp  + ' chiffre trop grand' ;
  }

  else if (tmp<randval){ 
      
      resultat.innerHTML= resultat.innerHTML+'<br>'+tmp + ' trop petit';
  }
  else{
      resultat.innerHTML=   tmp + ' FELICITATION';
  }};

/*
var itemlist = document.createElement('li');
    
    itemlist.setAttribute('class','list-group-item');
    resultat.innerHTML= tmp + br ;
    }*/