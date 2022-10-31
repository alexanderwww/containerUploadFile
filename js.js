
const dropArea = document.querySelector('#container_archivos .drop-area');

const drogText = dropArea.querySelector('h2');

const button = dropArea.querySelector('button')

const input = dropArea.querySelector('#input-file');

let docFiles;

button.addEventListener('click', () => {
    console.log('Enumerator');
    input.click()
})

input.addEventListener('change', (e) => {

    docFiles = input.files;

    dropArea.classList.add('active');

    showFiles(docFiles);

    dropArea.classList.remove('active');

})


// Cuando esta dentro del area 
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('active');
    drogText.textContent = 'Suelta para subir los archivos';
})

// Cuando No esta dentro del area 
dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    drogText.textContent = 'Arrastra y suelta archivos';
})

// Cuando Soltamos 
dropArea.addEventListener('drop', (e) => {
    e.preventDefault();

    docFiles = e.dataTransfer.files;
    showFiles(docFiles);

    dropArea.classList.remove('active');
    drogText.textContent = 'Arrastra y suelta archivos';
})

function showFiles(files) {
    
    if (files.length === undefined) {

        processFile(files)

    }
    else {

        for (const oneFile of files) {

            processFile(oneFile);

        }

    }

}



function processFile(file) {

    const docType = file.type;

    console.log(docType);

    // archivos: text, pdf, word y excel
    const validarExtencion = ['text/plain','application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

    if (validarExtencion.includes(docType)) {
        // archivo Valido 

        const id = `file-${Math.random().toString(32).substring(7)}`;
        
        const image = `
            <div id="${id}" class="file-container">
                <div class='img'>
                    <div class="status">
                        <span class="status-name"></span>
                        <span class="status-text">Cargando...</span>
                    </div> 
                </div>
                <div>
                    X
                </div>
            </div>
            `;

        const imagenes = document.querySelector('#container_archivos #preview').innerHTML;

        document.querySelector('#container_archivos #preview').innerHTML = image + imagenes;

        uploadFile(file, id)

    } else {
        // archivo NO Valido 
        alert('Archivo No valido');

    }

}



// ------------------------------------- 

async function uploadFile(file, id) {

    const formData = new FormData();

    formData.append("file", file);

    try {

        url = 'load.php'

        const response = await fetch(url, {
            method: 'POST',
            body: formData
        })

        const result = await response.text();
        
        console.log(result);

        if(result==false){

            document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure">Archivo No subido correctamente...</span>`;
            return;
        }
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="success">Archivo subido correctamente...</span>`;
        document.querySelector(`#${id} .status-name`).innerHTML = result;


    } catch (error) {

        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="failure">Archivo No subido correctamente...</span>`;

    }
}
