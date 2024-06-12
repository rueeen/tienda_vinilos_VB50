console.log("Conectando index.js");

const bodyAlbum = document.querySelector('#albums');
bodyAlbum.innerHTML = '';
function contentLoad() { 
   const arrayVinyls = JSON.parse(localStorage.getItem('listado')) || [];

    console.log(arrayVinyls);

    if (arrayVinyls.length === 0) {
        bodyAlbum.innerHTML = `<h3>No hay vinilos en BD</h3>`
    }

    arrayVinyls.forEach(function(v) {
        bodyAlbum.innerHTML += `
                <div class="card">
                    <div class="card-img">
                        <img src="${v.image}" alt="">
                    </div>
                    <div class="card-body">
                        <div class="body-title">
                            <h4>${v.title}</h4>
                        </div>
                        <div class="body-description">
                            <p class="artist">${v.artist}</p>
                            <p>${v.description}</p>
                            <p class="prize">$${v.price}</p>
                        </div>

                        <a href="#" class="btn btn-red">Add cart</a>
                    </div>
                </div>
        `;
    });

    localStorage.setItem('listado', JSON.stringify(arrayVinyls));
}

window.addEventListener('load', contentLoad);