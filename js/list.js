console.log('Conectando list.js');

function cargarTabla(){
    const arrayVinyls = JSON.parse(localStorage.getItem('listado')) || [];

    const bodyTabla = document.querySelector('#vinylTable tbody');

    arrayVinyls.forEach(function(element) {
        const row = document.createElement('tr');

        row.innerHTML = `
                        <td>${element.title}</td>
                        <td>${element.artist}</td>
                        <td>${element.description}</td>
                        <td>${element.price}</td>
                        <td><img src='${element.image}' style='width:100px; heigth:auto'></td>
                        <td><a href='#'>Eliminar</a></td>
                        `;
        bodyTabla.appendChild(row);
    });
};

window.addEventListener('load', cargarTabla);