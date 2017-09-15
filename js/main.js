var img = ["assets/images/portfolio/cabin.png","assets/images/portfolio/cake.png",
           "assets/images/portfolio/circus.png","assets/images/portfolio/game.png",
           "assets/images/portfolio/safe.png","assets/images/portfolio/submarine.png",];

for(var i in img) 
{ 
   var secuencia = document.getElementById('fotos');
   var divPicture = document.createElement('div'); 
       divPicture.setAttribute('class','col-4 seccionImg');
   var picture = document.createElement('img');
       picture.setAttribute('class','images');
       picture.setAttribute('src', img[i]);
   divPicture.appendChild(picture); 
   secuencia.appendChild(divPicture);
}

secuencia.addEventListener('click',mostrar);
var modal = document.getElementById('myModal');
var img;
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function mostrar(event)
{
  img = event.target;
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){ 
  modal.style.display = "none";
}