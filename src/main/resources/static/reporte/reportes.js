function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#itemReservas").html(myTable);
}
function traerReporteDate(){

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
        $.ajax({
            url:"http://localhost:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    }
    function pintarRespuestaDate(respuesta){

        
          
        for(i=0;i<respuesta.length;i++){
            console.log(respuesta[i]);
            $("#itemsFechas").append("<tr>");

            $("#itemsFechas").append("<td>" +respuesta[i].devolutionDate+"</td>");
            $("#itemsFechas").append("<td>"+respuesta[i].startDate+"</td>");
            $("#itemsFechas").append("<td>"+respuesta[i].status+"</td>");
          
          
            $("#itemsFechas").append("<tr>");

        }
    }

    function traerReporteClientes(){
        $.ajax({
            url:"http://localhost:8080/api/Reservation/report-clients",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaClientes(respuesta);
            }
        });
    }

    function pintarRespuestaClientes(respuesta){

        
          
        for(i=0;i<respuesta.length;i++){
            
            $("#ItemsCantReservas").append("<tr>");
            $("#ItemsCantReservas").append("<td>"+respuesta[i].total+"</td>");
            $("#ItemsCantReservas").append("<td>"+respuesta[i].client.name+"</td>");
            $("#ItemsCantReservas").append("<td>"+respuesta[i].client.email+"</td>");
            $("#ItemsCantReservas").append("<td>"+respuesta[i].client.age+"</td>");
            $("#ItemsCantReservas").append("<tr>");
           
        }
    }
