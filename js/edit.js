const arrayVinyls = JSON.parse(localStorage.getItem('listado')) || [];

function cargarDatos() {
    console.log("Conectando edit.js");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)

    const title = urlParams.get('title');

    console.log(title);

    const vinilo = arrayVinyls.find(e => e.title === title);

    console.log(vinilo);

    const preload = document.querySelector('#preLoadImage');

    const img = document.createElement('img');
    img.src = vinilo.image;
    img.style.width ='100px';
    img.style.height ='auto';
    preload.appendChild(img);
    const inpTitle = document.querySelector('#title');

    inpTitle.value = vinilo.title;
    inpTitle.disabled = true;
    document.querySelector('#artist').value = vinilo.artist;
    document.querySelector('#description').value = vinilo.description;
    document.querySelector('#price').value = vinilo.price;

}

window.addEventListener('load', cargarDatos);

const form = document.querySelector('#vinylForm')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.querySelector('#title').value;

    const vinilo = arrayVinyls.find(e => e.title === title);

    if (vinilo) {
        vinilo.artist = document.querySelector('#artist').value;
        vinilo.description = document.querySelector('#description').value;
        vinilo.price = document.querySelector('#price').value;

        localStorage.setItem('listado', JSON.stringify(arrayVinyls));

        alert('Se modifico vinilo')

        window.location.href = 'list.html'
    } else {
        alert('No existe ese vinilo en la lista');
    }
});