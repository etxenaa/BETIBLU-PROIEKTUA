document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('itzuli').addEventListener('click', function () {
        if (window.location.href.includes("eskatuKonponketa3.html") || window.location.href.includes("jasoInformazioa.html")) {
            window.location.href = "index.html";
        } else if (window.location.href.includes("eskatuKonponketa3_cast.html") || window.location.href.includes("jasoInformazioa_cast.html")){
            window.location.href = "index_cast.html";
        }
    });
});