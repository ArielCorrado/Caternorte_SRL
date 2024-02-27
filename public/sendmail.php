<?php 
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    $to = 'info@caternorte.com.ar';
    $from = 'info@caternorte.com.ar, ariel.corrado27gmail.com';
        
    $nombre = utf8_decode($data['nombre']);
    $telefono = utf8_decode($data['telefono']);
    $email = utf8_decode($data['email']);
    $empresa = utf8_decode($data['empresa']);
    $mensaje = utf8_decode($data['mensaje']);
   
    $messageHTML = "

    <html>

        <head>
            <style>
                        
            </style>
        </head>

        <body>
           
            <p class='titulos'> <b> Nombre: </b> </p>
            <p>" . $nombre . "</p> <br/>
            <p class='titulos'> <b> Telefono: </b> </p>
            <p>" . $telefono . "</p> <br/>
            <p class='titulos'> <b> e-mail: </b> </p>
            <p>" . $email . "</p> <br/>
            <p class='titulos'> <b> Empresa: </b> </p>
            <p>" . $empresa . "</p> <br/>
            <p class='titulos'> <b> Mensaje </b> </p>
            <p>" . $mensaje . "</p> <br/>
                     
        </body>

    </html>
    
    ";
          
    $cabecera = 'From: ' . ' <' . $from . '> ' . "\r\n" .
        "MIME-Version: 1.0" . "\r\n" .      
        "Content-type:text/html;charset=UTF-8" . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    // Enviar el correo electrónico
    $mail = mail($to, $nombre . ' ' . ' Dejo un mensaje en caternorte.com.ar', $messageHTML, $cabecera);

    if ($mail) {
        echo json_encode(array('msg' => 'Correo enviado exitosamente'));
    } else {
        echo json_encode(array('msg' => 'Error al enviar el correo'));
    }
?>