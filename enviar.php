<?php

// función para validar cada campo que le paso por parámetro
// y me devuelve el campo validado
function validarCampo($campo) {
    $campo = trim($campo);  //quita espacios vacios al inicio y final de cada texto
    $campo = stripcslashes($campo); // quita los slashes "/"
    $campo = htmlspecialchars($campo); // quita caracteres raros

    return $campo;
}

// isset: "cada uno de los campos"
if (isset($_POST["nombre"]) && !empty($_POST["nombre"]) &&
    isset($_POST["email"]) && !empty($_POST["email"]) &&
    isset($_POST["asunto"]) && !empty($_POST["asunto"]) &&
    isset($_POST["mensaje"]) && !empty($_POST["mensaje"])) {
        
            // pongo un destinatario
            $enviar_a = "fabrigdiaz@gmail.com";
            // consulto que exista cada campo y valido que no estén vacíos
       
            $nombre = validarCampo($_POST["nombre"]);
            $email = validarCampo($_POST["email"]);
            if (isset($_POST["asunto"])) {
                $asunto = validarCampo($_POST["asunto"]);
            }
            $mensaje = validarCampo($_POST["mensaje"]);
     
        // preparo todo el contenido del mensaje
        // el php el ".=" concatena la linea anterior con la actual
        $subject = $asunto;
        $mensaje_preparado = "
            <br/>
            $mensaje
            <br/>
            ";

        $headers  = "From: $nombre <$email>\nReply-To:$email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

        mail($enviar_a, $subject, $mensaje_preparado, $headers); 
        
        return print(json_encode('ok'));
}
return print(json_encode('ok'));