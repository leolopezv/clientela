document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var descripcion = document.getElementById('descripcion').value;
    window.location.href = '/clientes/findAllByService/view?descripcion=' + descripcion;
});
