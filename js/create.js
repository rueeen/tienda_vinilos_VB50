console.log("Conectando create.js");

const formulario = document.getElementById('vinylForm');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); // Evita recarga de formulario

    const title = document.querySelector('#title').value;
    const artist = document.querySelector('#artist').value;
    const description = document.querySelector('#description').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#image');

    const file = new FileReader(); 

    file.readAsDataURL(image.files[0]);

    file.onload = function(){
        // Crearemos un objeto
        const vinyl = {
            title:title,
            artist:artist,
            description:description,
            price:price,
            image:file.result
        }

        const arrayVinyls =JSON.parse(localStorage.getItem('listado')) || [];

        arrayVinyls.push(vinyl);

        localStorage.setItem('listado', JSON.stringify(arrayVinyls));

        alert('Se agrego vinilo');

        setTimeout(function() {
            window.location.href = 'list.html';
        }, 3000);
    }

});