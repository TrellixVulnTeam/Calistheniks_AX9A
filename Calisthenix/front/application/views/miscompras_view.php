<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="Alex Santiago" />
    <title>Calisthenix</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
    <!-- CSS -->
    <link href="<?= base_url() ?>static/css/styles.css" rel="stylesheet" />
    <link href="<?= base_url() ?>static/css/select.css" rel="stylesheet" />
    <link href="<?= base_url() ?>static/css/alert.css" rel="stylesheet" />
    <!-- ICONOS -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?= base_url() ?>static/assets/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= base_url() ?>static/assets/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= base_url() ?>static/assets/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="<?= base_url() ?>static/assets/favicon_io/site.webmanifest">

  
    <script src='<?= base_url() ?>static/node_modules/jquery/jquery-3.6.0.min.js'></script>
    <script>
        var appData = {
            base_url: "<?= base_url() ?>",
            ws_url: "<?= base_url() ?>../back/",
            email_cliente: "<?= $this->session->email_cliente ?>",
            nombre_cliente: "<?= $this->session->nombre_cliente ?>",
            apellidos_cliente: "<?= $this->session->apellidos_cliente ?>",
            token: "<?= $this->session->token ?>",
            idcliente: "<?= $this->session->idcliente ?>",
            direccion: "<?= $this->session->direccion ?>",
            cantidadicono: "<?= base_url() ?>../back/productos/cantidadcarrito/<?= $this->session->idcliente ?>"
        };
    </script>

</head>

<body>
<div class= "table-responsive container-fluid mt-9 row">
        <table  id="compras" class="table table-hover table-bordered col texto">
        <tr>
            <th>Foio</th>
            <th>Fecha</th>
            <th>Monto</th> 
        </tr>     
        </table>
    </div>
    

    
</body>
    <!-- Fin Modal Carrito de Compras-->
    <!-- Fin Modals-->
    <!-- Bootstrap core JS-->
    <script src="<?= base_url() ?>static/vendor/bootstrap513.bundle.min.js"></script>
    <script src="<?= base_url() ?>static/vendor/bootstrap.bundle.min.js"></script>
    <script src="<?= base_url() ?>static/vendor/jquery/jquery.min.js"></script>
    <!--- Sweet Alert --->
    <script src="<?= base_url() ?>static/vendor/sweetalert/sweetalert2.all.min.js"></script>
    <!-- Core theme JS-->
    <script src="<?= base_url() ?>static/js/scripts.js"></script>
    <script src="<?= base_url() ?>static/js/alert.js"></script>
    <!---<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=MXN" data-sdk-integration-source="button-factory"></script>-->
    <script src="https://www.paypal.com/sdk/js?client-id=AdQKJEmkXXmzU70smbIoHWng02h5EC7-mwi3P1sy1AujADe9HaoaY-s7s0Egbvq0_ImD9ccXssH_lm2R&currency=MXN">
    </script>
    <script type="text/javascript" src="<?= base_url() ?>static/js/main.js"></script>
    <script src="<?= base_url() ?>static/vendor/sbforms.js"></script>
    <script src="<?= base_url() ?>static/js/mensajes.js"></script>
    <script src="<?= base_url() ?>static/js/sesion.js"></script>
    <script src="<?= base_url() ?>static/js/carrito.js"></script>
    <script src="<?= base_url() ?>static/js/productos.js"></script>
    <script src="<?= base_url() ?>static/js/shopping.js"></script>
    <script src="<?= base_url() ?>static/js/deseos.js"></script>
    <script src="<?= base_url() ?>static/js/compras.js"></script>
</body>

</html>