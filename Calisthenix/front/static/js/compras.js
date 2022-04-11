$(document).ready(function () {

    $.ajax({
        'url': appData.ws_url + "cliente/getcompras/",
        "dataType": "json",
        "type": "post",
        "data": {
            "idcliente": appData.idcliente
        }
    })
        .done(function (json) {
            if (json.resultado) {
                alert(JSON.stringify(json));

                json.compras.forEach((element, i) => {
                    $("#compras").append(
                     `   <tr>
                            <td>${element.id_compra}</td>
                            <td>${element.fec_compra}</td>
                            <td>${element.total}</td>
                            </tr>
                    `
                    );
                })
            }
        })
        .fail();
})

