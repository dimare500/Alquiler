function registro() {

    var elemento = {
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val()
    }

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(elemento),
        url: "http://localhost:8080/api/Computer/save",

        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Registro exitoso");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente");
            window.location.reload()
        }
    });

}

function obtener() {
    $.ajax({
        url: "http://localhost:8080/api/Computer/all",
        type: "GET",
        datatype: "JSON",

        success: function (respuesta) {
            console.log(respuesta);
            informacionComputer(respuesta);
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible visualizar el contenido");
        }
    });
}

function informacionComputer(respuesta) {

    for (i = 0; i < respuesta.length; i++) {
        console.log(respuesta[i]);
        $("#items").append("<tr>");

        $("#items").append("<td>" + respuesta[i].id + "</td>");

        $("#items").append("<td>" + respuesta[i].name + "</td>");

        $("#items").append("<td>" + respuesta[i].brand + "</td>");

        $("#items").append("<td>" + respuesta[i].year + "</td>");

        $("#items").append("<td>" + respuesta[i].description + "</td>");

        $("#items").append('<td><button onclick="eliminar(' + respuesta[i].id + ')">Eliminar</button></td>');

        $("#items").append('<td><button onclick="obtenerItemEspecifico(' + respuesta[i].id + ')">Detalle</button></td>');

        $("#items").append("<tr>");
    }
}

function eliminar(idElemento) {

    var elemento = {
        id: idElemento
    }

    var dataToSend = JSON.stringify(elemento);

    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:8080/api/Computer/" + idElemento,
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
            alert("El elemento se elimino correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se elimino correctamente");
        }

    });


}

function obtenerItemEspecifico(idItem) {

    for (i = 0; i < 1; i++) {
        $("#detalle").append('<button onclick="actualizarItem(' + idItem + ')">Actualizar</button>');
    }

    $.ajax({
        dataType: 'json',
        url: "http://localhost:8080/api/Computer/" + idItem,
        type: 'GET',

        success: function (response) {
            $("#name").val(response.name),
                $("#brand").val(response.brand),
                $("#year").val(response.year),
                $("#description").val(response.description)
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se obtuvo correctamente");
        }
    });
}

function actualizarItem(idElemento) {

    var elemento = {
        id: idElemento,
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: $("#year").val(),
        description: $("#description").val()
    }

    $.ajax({
        dataType: 'json',
        data: JSON.stringify(elemento),
        contentType: 'application/json',
        url: "http://localhost:8080/api/Computer/update",
        type: 'PUT',

        success: function (response) {
            $("#name").val(response.name),
                $("#brand").val(response.brand),
                $("#year").val(response.year),
                $("#description").val(response.description)

            alert("El elemento se actualizo correctamente");
            window.location.reload();
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se obtuvo correctamente");
        }
    });
}