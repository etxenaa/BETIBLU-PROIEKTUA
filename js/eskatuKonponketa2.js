document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('atzera').addEventListener('click', function () {
        if (window.location.href.includes("eskatuKonponketa2.html")) {
            window.location.href = "eskatuKonponketa.html";
        } else {
            window.location.href = "eskatuKonponketa_cast.html";

        }
    });



});
function mostrarAlerta2(event) {
    event.preventDefault();

    const detalles = JSON.parse(localStorage.getItem("detalles")) || {};


    const argazkiaBase64 = localStorage.getItem("argazkiaURL") || "";

    const datuPertsonalak = {
        helbidea: document.getElementById('helbidea').value,
        herria: document.getElementById('herria').value,
        postaKodea: document.getElementById('postaKodea').value,
        emaila: document.getElementById('emaila').value
    };

    const datuGuztiak = { ...detalles, ...datuPertsonalak, argazkia: argazkiaBase64 };
    console.log("Datos a enviar:", datuGuztiak);

    let emaila = document.getElementById('emaila').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailaOndo = true;

    if (!emailRegex.test(emaila)) {
        document.querySelector('.emailErrorea').style.display = 'block';
        emailaOndo = false;
    } else {
        emailaOndo = true;
    }

    if (!emailaOndo) {
        return false;
    }

    emailjs.send('service_e1fe0nf', 'template_nor5ix8', {
        from_email: datuGuztiak.emaila,
        helbidea: datuGuztiak.helbidea,
        herria: datuGuztiak.herria,
        postaKodea: datuGuztiak.postaKodea,
        mota: datuGuztiak.mota,
        marka: datuGuztiak.marka,
        aukera: datuGuztiak.aukera,
        argazkia: datuGuztiak.argazkia,  // Base64 se envía igual
        mezua: datuGuztiak.mezua
    })
        .then((response) => {
            console.log('Correo enviado correctamente:', response);
            localStorage.removeItem("detallesPrenda");
            if (window.location.href.includes("eskatuKonponketa2.html")) {
                window.location.href = "eskatuKonponketa3.html";
            } else {
                window.location.href = "eskatuKonponketa3_cast.html";

            }
        }, (error) => {
            console.error('Error al enviar el correo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Errore bat egon da mezuaren bidalketan.',
                background: '#1C1F27'
            });
        });


}

function mostrarLabel(id) {
    const label = document.getElementById(id);
    if (!label) return;

    label.style.display = "block";

    if (window.matchMedia("(max-width: 750px)").matches) {

        document.querySelector('.formularioaKonponketa').style.height = "370px";
    } else {
        document.querySelector('.formularioaKonponketa').style.height = "424px";

    }


    document.getElementById("galderak").style.height = "180px";
    if (id === "postaKodeaLabel") {
        document.querySelector(".posta-emaila>.emaila").style.marginTop = "28px";
    } else if (id === "emailaLabel") {
        document.querySelector(".posta-emaila>.posta").style.marginTop = "28px";
    }

}

function ocultarLabel(id) {
    const label = document.getElementById(id);
    label.style.display = "none";

    if (window.matchMedia("(max-width: 750px)").matches) {

        document.getElementById("sekzioa").style.height = "327px";
    } else {
        document.getElementById("sekzioa").style.height = "395px";

    }
    document.getElementById("galderak").style.height = "152px";

    document.querySelector(".posta-emaila>.emaila").style.marginTop = "0px";
    document.querySelector(".posta-emaila>.posta").style.marginTop = "0px";
}

