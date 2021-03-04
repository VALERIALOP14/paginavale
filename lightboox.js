const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLigth = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen( imagen.getAttribute('src'))


})
})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLigth){
        contenedorLight.classList.toggle('show')
        imagenesLigth.classList.toggle('showImage')
    }
})






const aparecerImagen = (imagen) =>{
    imagenesLigth.src=imagen;
    contenedorLight.classList.toggle('show')
    imagenesLigth.classList.toggle('showImage')

}