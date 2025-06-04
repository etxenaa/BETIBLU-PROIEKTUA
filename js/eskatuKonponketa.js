document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('argazkiaIgo').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('fileInput').click();
    });

    document.getElementById('fileInput').addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                alert("Irudiak 10 MB izan ahal ditu gehienez.");
                this.value = "";
            } else {
                document.getElementById('edukia').style.display = "flex";
                document.getElementById('edukia').style.justifyContent = "center";

                document.getElementById('fileName').style.display = "block";
                document.getElementById('fileName').textContent = `${file.name}`;
                document.getElementById('textua').style.display = "none";
                localStorage.removeItem("argazkiaURL");
                uploadImageToCloudinary(file, function (imageUrl) {
                    localStorage.setItem("argazkiaURL", imageUrl);
                    console.log("Imagen subida y URL guardada:", imageUrl);
                });
            }
        }
    });

    document.getElementById('Ezeztatu').addEventListener('click', function () {
        if (window.location.href.includes("eskatuKonponketa.html")) {
            window.location.href = "index.html";
        } else {
            window.location.href = "index_cast.html";

        }
    });

    document.getElementById('Jarraitu').addEventListener('click', function () {
        const element = document.getElementById('konpondu');
        const bgColor = window.getComputedStyle(element).backgroundColor;

        let aukera = "";

        if (bgColor === "rgb(43, 48, 58)") {
            aukera = "Konpondu";
        } else {
            aukera = "Egokitu";
        }
        const detalles = {
            mota: document.getElementById('produktuMota').value,
            marka: document.getElementById('marka').value,
            aukera,
            mezua: document.getElementById('mensaje').value
        };

        const imageUrl = localStorage.getItem("argazkiaURL");
        if (imageUrl) {
            detalles.argazkia = imageUrl; // Agregar la URL de la imagen al objeto de detalles
        }


        let kont = 0;

        if (document.getElementById('produktuMota').value === "") {
            document.querySelector('form>.galderak>.mota>span').style.display = "block";
            kont++;
        } else {
            document.querySelector('form>.galderak>.mota>span').style.display = "none";
        }

        if (document.getElementById('mensaje').value.length < 15) {
            document.querySelector('form>.galderak>.textarea>span').style.display = "block";
            kont++;
        } else {
            document.querySelector('form>.galderak>.textarea>span').style.display = "none";
        }

        if (kont === 1) {
            document.querySelector('.formularioaKonponketa').style.minHeight = "858px";
            document.querySelector('.formularioaKonponketa>form').style.minHeight = "682px";
            document.querySelector('.formularioaKonponketa>form>.galderak').style.height = "615px";
        } else if (kont === 2) {
            document.querySelector('.formularioaKonponketa').style.minHeight = "878px";
            document.querySelector('.formularioaKonponketa>form').style.minHeight = "702px";
            document.querySelector('.formularioaKonponketa>form>.galderak').style.height = "635px";
        }

        if (kont === 0) {
            localStorage.setItem("detalles", JSON.stringify(detalles));
            console.log("Detalles guardados:", detalles);
            if(window.location.href.endsWith("eskatuKonponketa.html")){
                window.location.href = "eskatuKonponketa2.html";
            }else{
                window.location.href = "eskatuKonponketa2_cast.html";
            }
        }
    });

    document.getElementById('konpondu').addEventListener('click', function () {
        document.getElementById('egokitu').style.backgroundColor = "#6E7584";
        document.getElementById('konpondu').style.backgroundColor = "#2B303A";
    });

    document.getElementById('egokitu').addEventListener('click', function () {
        document.getElementById('egokitu').style.backgroundColor = "#2B303A";
        document.getElementById('egokitu').style.borderColor = "#2B303A";
        document.getElementById('konpondu').style.backgroundColor = "#6E7584";
    });

    function uploadImageToCloudinary(file, callback) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'argazkiaBetiblu');
        formData.append('cloud_name', 'dzv062swp');

        fetch('https://api.cloudinary.com/v1_1/dzv062swp/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                callback(data.secure_url);
            })
            .catch(error => console.error('Error al subir la imagen:', error));
    }
});