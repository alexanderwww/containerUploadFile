<?php


$directorio = '';

$nombreArchivo = $directorio.basename($_FILES['file']['name']);

$extension=explode('.',$nombreArchivo);

$nombreArchivo=time().'.'.$extension[1];


if(count($extension)>=3){
    echo false;
    return;
}


if (move_uploaded_file($_FILES['file']['tmp_name'], $nombreArchivo)) {

    // echo "El archivo es válido y se cargó correctamente.<br><br>";
    echo $nombreArchivo;

} else {

    // echo "La subida ha fallado";
    echo false;
}



?>