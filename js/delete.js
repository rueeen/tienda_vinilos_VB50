
function eliminarVinilo(indice) {
    // splice de arrays 
    const arrayVinyls = JSON.parse(localStorage.getItem('listado')) || [];


    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            arrayVinyls.splice(indice, 1);
            localStorage.setItem('listado', JSON.stringify(arrayVinyls));
            window.location.href = 'list.html';

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}