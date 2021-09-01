//obtener elemento por id
const titulo = document.getElementById("perro")

//obtener elemento por nombre de etiqueta
const subtitulo = document.getElementsByTagName("h2")
console.log(subtitulo);

//obtener elemento por clase
const parrafo = document.getElementsByClassName("parrafo");
console.log(parrafo);

const elemento = document.querySelector("#tilin");

const imagen = document.querySelector("#img")

const body = document.body;
const cambiarBg = () =>{
  body.classList.add('bg2')  
}

const nombre = document.querySelector('#nombre')

nombre.addEventListener('click', ()=>{
  nombre.innerHTML = "Charlie"; 
  nombre.style.color = 'red'; 
})



const quitarColor = () =>{
   body.classList.remove('bg2') 
}

const cambiarImagen = () =>
imagen.src = "../src/papas-fritas.jpg"
titulo.innerHTML = "Imagen Cambiada"


subtitulo[1].innerHTML = "Tilin Tilin"
titulo.innerHTML = "Document"
parrafo[3].innerHTML = "Fui modificado en JS"
