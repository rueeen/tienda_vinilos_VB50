
function eliminarVinilo(indice){
    // splice de arrays 
    const arrayVinyls = JSON.parse(localStorage.getItem('listado')) || [];
    arrayVinyls.splice(indice, 1);
    localStorage.setItem('listado', JSON.stringify(arrayVinyls));
    window.location.href = 'list.html';
}