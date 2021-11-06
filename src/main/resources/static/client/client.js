function registro() {

    var elemento = {
        email: $("#InEmail").val(),
        password: $("#InPassword").val(),
        name: $("#InName").val(),
        age: $("#InAge").val()
    }

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(elemento),
        url: "http://localhost:8080/api/Client/save",

        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function obtener() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",

        success: function (respuesta) {
            console.log(respuesta);
            informacionClient(respuesta);
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible visualizar el contenido");
        }
    });
}

function informacionClient(respuesta) {

    for (i = 0; i < respuesta.length; i++) {
        console.log(respuesta[i]);
        $("#items").append("<tr>");

        $("#items").append("<td>" + respuesta[i].idClient + "</td>");

        $("#items").append("<td>" + respuesta[i].email + "</td>");

        $("#items").append("<td>" + respuesta[i].password + "</td>");

        $("#items").append("<td>" + respuesta[i].name + "</td>");

        $("#items").append("<td>" + respuesta[i].age + "</td>");

        $("#items").append('<td><button onclick="eliminar(' + respuesta[i].idClient + ')">Eliminar</button></td>');

        $("#items").append('<td><button onclick="obtenerItemEspecifico(' + respuesta[i].idClient + ')">Detalle</button></td>');

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
        url: "http://localhost:8080/api/Client/" + idElemento,
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
        url: "http://localhost:8080/api/Client/" + idItem,
        type: 'GET',

        success: function (response) {
            $("#InEmail").val(response.email),
                $("#InPassword").val(response.password),
                $("#InName").val(response.name),
                $("#InAge").val(response.age)
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se obtuvo correctamente");
        }
    });
}

function actualizarItem(idElemento) {

    var elemento = {
        idClient: idElemento,
        email: $("#InEmail").val(),
        password: $("#InPassword").val(),
        name: $("#InName").val(),
        age: $("#InAge").val()
    }

    $.ajax({
        dataType: 'json',
        data: JSON.stringify(elemento),
        contentType: 'application/json',
        url: "http://localhost:8080/api/Client/update",
        type: 'PUT',

        success: function (response) {
            $("#InEmail").val(response.email),
                $("#InPassword").val(response.password),
                $("#InName").val(response.name),
                $("#InAge").val(response.age)

            alert("El elemento se actualizo correctamente");
            window.location.reload();
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se obtuvo correctamente");
        }

    });
}