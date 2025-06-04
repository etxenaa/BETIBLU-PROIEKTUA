document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', function () {
            let targetId = item.getAttribute('data-target');

            let infoText = document.querySelector('p[id="' + targetId + '"]');
            let goraSVG = document.querySelector('svg[id="' + targetId + 'gora"]');
            let beheraSVG = document.querySelector('svg[id="' + targetId + 'behera"]');

            if (infoText.style.display === 'none' || infoText.style.display === '') {
                infoText.style.display = 'block';
                goraSVG.style.display = 'block';
                beheraSVG.style.display = 'none';
                document.querySelector('.ohikoGalderak>.container').style = "max-height: 1800px";
            } else {
                infoText.style.display = 'none';
                goraSVG.style.display = 'none';
                beheraSVG.style.display = 'block';
            }
        });
    });
    document.getElementById('hamburger').addEventListener('click', function () {
        let navbar = document.querySelector('navbar');
        let svgIcon = document.querySelector('.hamburger svg');
        let spans = document.querySelectorAll('.hamburger span');

        navbar.classList.toggle('show');

        if (navbar.classList.contains('show')) {
            svgIcon.style.display = "block";
            spans.forEach(span => span.style.display = "none");
        } else {
            svgIcon.style.display = "none";
            spans.forEach(span => span.style.display = "block");
        }
    });

    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', function () {
            let navbar = document.getElementById('navbar');
            let svgIcon = document.querySelector('.hamburger svg');
            let spans = document.querySelectorAll('.hamburger span');

            navbar.classList.remove('show');
            svgIcon.style.display = "none";
            spans.forEach(span => span.style.display = "block");
        });
    });


});

function mostrarAlerta(event) {
    event.preventDefault();

    let izenaOndo = true;
    let emailaOndo = true;

    let izena = document.getElementById('izenaText').value;
    let email = document.getElementById('emailaText').value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (izena === '') {
        document.querySelector('.erroreMezuaIzena').style.display = 'block';
        izenaOndo = false;
    } else {
        document.querySelector('.erroreMezuaIzena').style.display = 'none';
    }
    if (!emailRegex.test(email)) {
        document.querySelector('.erroreMezuaEmaila').style.display = 'block';
        emailaOndo = false;
    } else {
        document.querySelector('.erroreMezuaEmaila').style.display = 'none';
    }

    if (!izenaOndo && !emailaOndo) {
        if (window.matchMedia("(min-width: 1147px)").matches) {
            document.querySelector('.harremana>.container>.container-datuak').style.height = '483px';

        }
        document.querySelector('.harremana>.container>.container-forma').style.height = '483px';
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.querySelector('.harremana>.container>.container-forma').style.minHeight = '610px';
        }
        return false;
    }

    if (!izenaOndo || !emailaOndo) {
        if (window.matchMedia("(min-width: 1147px)").matches) {
            document.querySelector('.harremana>.container>.container-datuak').style.height = '463px';
        }
        document.querySelector('.harremana>.container>.container-forma').style.height = '463px';
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.querySelector('.harremana>.container>.container-forma').style.minHeight = '575px';
        }
        return false;
    }

    if (izenaOndo && emailaOndo) {
        if (window.matchMedia("(min-width: 1147px)").matches) {
            document.querySelector('.harremana>.container>.container-datuak').style.height = '443px';
        }
        document.querySelector('.harremana>.container>.container-forma').style.height = '443px';
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.querySelector('.harremana>.container>.container-forma').style.minHeight = '550px';
        }

    }

    if (window.location.href.includes('index.html') || window.location.href.includes('index_cast.html')) {

        emailjs.sendForm('service_e1fe0nf', 'template_l6ku31q', event.target)
            .then((response) => {
                console.log('Correo enviado', response);
                if (window.location.href.includes('index_cast.html')) {
                    window.location.href = "jasoInformazioa_cast.html";
                } else {
                    window.location.href = "jasoInformazioa.html";
                }

                document.getElementById('izenaText').value = '';
                document.getElementById('emailaText').value = '';
                document.getElementById('mezuaText').value = '';
                document.getElementById('gaiaText').value = '';
            }, (error) => {
                console.error('Errorea emaila bidaltzerakoan', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Errore bat egon da mezuaren bidalketan.',
                    background: '#1C1F27'
                });
            });
    } else {
        emailjs.sendForm('service_ixcrv69', 'template_1lf7wfd', event.target)
            .then((response) => {
                console.log('Correo enviado', response);
                if (window.location.href.includes('bazkide_cast.html')) {
                    window.location.href = "jasoInformazioa_cast.html";
                } else {

                    window.location.href = "jasoInformazioa.html";
                }


                document.getElementById('izenaText').value = '';
                document.getElementById('emailaText').value = '';
                document.getElementById('mezuaText').value = '';
                document.getElementById('gaiaText').value = '';
            }, (error) => {
                console.error('Errorea emaila bidaltzerakoan', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Errore bat egon da mezuaren bidalketan.',
                    background: '#1C1F27'
                });
            });
    }
}





