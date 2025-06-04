document.addEventListener("DOMContentLoaded", function () {
    // Detectamos el idioma según el nombre del archivo
    let idioma = document.body.classList.contains("eu") ? "eu" : "es";  // Asumimos que "euskera" se asigna al body para euskera

    // Definir textos en diferentes idiomas
    const textos = {
        "eu": {
            titulo: "Cookieak erabiltzen ditugu",
            zerDa: "ZER DA COOKIE BAT?",
            zerErabiltzen: "ZERTARAKO ERABILTZEN DITUGU GUK?",
            zerEgin: "ZER EGIN DEZAKEZU?",
            descripcion1: "Cookies are small fragments of text that the websites you visit send to the browser in order to remember information",
            descripcion2: "We use cookies for analytical purposes to try to improve your experience on our website.",
            descripcion3: "You can accept cookies so that your experience on the web is optimal. You can reject to deny all cookies except those essential",
            buttonBai: "Onartu",
            buttonEz: "Ezeztatu"
        },
        "es": {
            titulo: "Usamos cookies",
            zerDa: "¿QUÉ ES UNA COOKIE?",
            zerErabiltzen: "¿PARA QUÉ LAS UTILIZAMOS?",
            zerEgin: "¿QUÉ PUEDES HACER?",
            descripcion1: "Las cookies son pequeños fragmentos de texto que los sitios web que visitas envían al navegador para recordar información sobre tu visita.",
            descripcion2: "Usamos cookies con fines analíticos para mejorar tu experiencia en nuestro sitio web.",
            descripcion3: "Puedes aceptar cookies para que tu experiencia en el sitio web sea óptima. Puedes rechazar las cookies, excepto las esenciales.",
            buttonBai: "Aceptar",
            buttonEz: "Rechazar"
        }
    };

    // Verifica si ya se ha aceptado la cookie
    if (localStorage.getItem("erakutsiCookie") !== "false") {
        const cookie = `
        <div class="cookiea" id="cookiea">
            <header>
                <p>${textos[idioma].titulo}</p>
                <div class="irten">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.95898 19.4004C3.85482 19.3092 3.78646 19.1986 3.75391 19.0684C3.72135 18.9382 3.72135 18.8079 3.75391 18.6777C3.79297 18.5475 3.86133 18.4368 3.95898 18.3457L9.94531 12.3496L3.95898 6.35352C3.86133 6.26237 3.79622 6.15169 3.76367 6.02148C3.73112 5.89128 3.73112 5.76432 3.76367 5.64062C3.79622 5.51042 3.86133 5.39648 3.95898 5.29883C4.05013 5.20117 4.16081 5.13932 4.29102 5.11328C4.42122 5.08073 4.54818 5.08073 4.67188 5.11328C4.79557 5.14583 4.90951 5.20768 5.01367 5.29883L11 11.2949L16.9961 5.29883C17.1393 5.1556 17.3151 5.08398 17.5234 5.08398C17.7318 5.08398 17.9076 5.1556 18.0508 5.29883C18.2005 5.44206 18.2721 5.62109 18.2656 5.83594C18.2656 6.04427 18.194 6.2168 18.0508 6.35352L12.0547 12.3496L18.0508 18.3457C18.194 18.4824 18.2656 18.6549 18.2656 18.8633C18.2656 19.0716 18.194 19.2507 18.0508 19.4004C17.9076 19.5501 17.7318 19.6217 17.5234 19.6152C17.3151 19.6152 17.1393 19.5436 16.9961 19.4004L11 13.4043L5.01367 19.4004C4.90951 19.498 4.79557 19.5599 4.67188 19.5859C4.54818 19.6185 4.42122 19.6185 4.29102 19.5859C4.16081 19.5599 4.05013 19.498 3.95898 19.4004Z" fill="white" />
                    </svg>
                </div>
            </header>
            <div class="textua1">
                <div class="titulua"><p>${textos[idioma].zerDa}</p></div>
                <div class="edukia"><p>${textos[idioma].descripcion1}</p></div>
            </div>
            <div class="textua2">
                <div class="titulua"><p>${textos[idioma].zerErabiltzen}</p></div>
                <div class="edukia"><p>${textos[idioma].descripcion2}</p></div>
            </div>
            <div class="textua3">
                <div class="titulua"><p>${textos[idioma].zerEgin}</p></div>
                <div class="edukia"><p>${textos[idioma].descripcion3}</p></div>
            </div>
            <div class="botoiak">
                <button id="ezeztatuCookie"><p>${textos[idioma].buttonEz}</p></button>
                <button id="onartuCookie"><p>${textos[idioma].buttonBai}</p></button>
            </div>
        </div>`;

        document.body.insertAdjacentHTML("afterbegin", cookie);

        // Evento para cerrar modal con la X
        document.querySelector('.irten>svg').addEventListener('click', function () {
            document.getElementById('cookiea').style.display = "none";
        });

        // Evento para aceptar cookies
        document.getElementById("onartuCookie").addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            localStorage.setItem("erakutsiCookie", "false");
            document.getElementById("cookiea").style.display = "none";
            loadGoogleAnalytics();
        });

        // Evento para rechazar cookies
        document.getElementById("ezeztatuCookie").addEventListener("click", function () {
            deleteCookies();
            localStorage.setItem("erakutsiCookie", "false");
            document.getElementById("cookiea").style.display = "none";
        });
    }

    if (localStorage.getItem("cookiesAccepted") === "true") {
        loadGoogleAnalytics();
    }
});
