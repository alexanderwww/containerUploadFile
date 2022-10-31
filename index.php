<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div id="container_archivos">

        <div>
            <div class="drop-area">
                <h2>Arrastra y suelta el archivo</h2>
                <span>o</span>
                <button>Seleciona tus archivos</button>

                <input type="file" name="file" id="input-file" hidden multiple >
            
            </div>
    
            <div id="preview"></div>
    
        </div>        
    </div>


    <script src="js.js"></script>

</body>
</html>