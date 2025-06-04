document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
        <header>
        <div class="logo"><svg width="1000" height="142" viewBox="0 0 1000 142" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path class="u"
                    d="M939.6 142C927.6 142 917.067 140.067 908 136.2C899.067 132.2 892.133 126.133 887.2 118C882.267 109.733 879.8 99.2667 879.8 86.6V5.00001C879.8 3.53334 880.267 2.33334 881.2 1.40001C882.133 0.466669 883.333 0 884.8 0H910.6C912.067 0 913.267 0.466669 914.2 1.40001C915.133 2.33334 915.6 3.53334 915.6 5.00001V86.4C915.6 95.0667 917.667 101.6 921.8 106C926.067 110.267 932 112.4 939.6 112.4C947.067 112.4 952.867 110.267 957 106C961.267 101.6 963.4 95.0667 963.4 86.4V5.00001C963.4 3.53334 963.867 2.33334 964.8 1.40001C965.867 0.466669 967.067 0 968.4 0H994.4C995.733 0 996.867 0.466669 997.8 1.40001C998.867 2.33334 999.4 3.53334 999.4 5.00001V86.6C999.4 99.2667 996.933 109.733 992 118C987.067 126.133 980.133 132.2 971.2 136.2C962.267 140.067 951.733 142 939.6 142Z"
                    fill="white" />
                <path class="l"
                    d="M742 140C740.533 140 739.333 139.533 738.4 138.6C737.467 137.667 737 136.467 737 135V5.00001C737 3.53334 737.467 2.33334 738.4 1.40001C739.333 0.466669 740.533 0 742 0H768.4C769.733 0 770.867 0.466669 771.8 1.40001C772.867 2.33334 773.4 3.53334 773.4 5.00001V109.8H833.8C835.267 109.8 836.467 110.333 837.4 111.4C838.467 112.333 839 113.533 839 115V135C839 136.467 838.467 137.667 837.4 138.6C836.467 139.533 835.267 140 833.8 140H742Z"
                    fill="white" />
                <path class="i"
                    d="M487 140C485.533 140 484.333 139.533 483.4 138.6C482.467 137.667 482 136.467 482 135V5.00001C482 3.53334 482.467 2.33334 483.4 1.40001C484.333 0.466669 485.533 0 487 0H513.8C515.267 0 516.467 0.466669 517.4 1.40001C518.333 2.33334 518.8 3.53334 518.8 5.00001V135C518.8 136.467 518.333 137.667 517.4 138.6C516.467 139.533 515.267 140 513.8 140H487Z"
                    fill="white" />
                <path class="t"
                    d="M367.8 140C366.333 140 365.133 139.533 364.2 138.6C363.267 137.667 362.8 136.467 362.8 135V31.4H327.2C325.733 31.4 324.533 30.9333 323.6 30C322.667 28.9333 322.2 27.7333 322.2 26.4V5.00001C322.2 3.53334 322.667 2.33334 323.6 1.40001C324.533 0.466669 325.733 0 327.2 0H434.8C436.267 0 437.467 0.466669 438.4 1.40001C439.333 2.33334 439.8 3.53334 439.8 5.00001V26.4C439.8 27.7333 439.333 28.9333 438.4 30C437.467 30.9333 436.267 31.4 434.8 31.4H399.2V135C399.2 136.467 398.733 137.667 397.8 138.6C396.867 139.533 395.667 140 394.2 140H367.8Z"
                    fill="white" />
                <path class="e"
                    d="M185 140C183.533 140 182.333 139.533 181.4 138.6C180.467 137.667 180 136.467 180 135V5.00001C180 3.53334 180.467 2.33334 181.4 1.40001C182.333 0.466669 183.533 0 185 0H278.4C279.867 0 281.067 0.466669 282 1.40001C282.933 2.33334 283.4 3.53334 283.4 5.00001V23.8C283.4 25.2667 282.933 26.4667 282 27.4C281.067 28.3333 279.867 28.8 278.4 28.8H214.6V55.8H274C275.467 55.8 276.667 56.3333 277.6 57.4C278.533 58.3333 279 59.5333 279 61V78.4C279 79.7333 278.533 80.9333 277.6 82C276.667 82.9333 275.467 83.4 274 83.4H214.6V111.2H280C281.467 111.2 282.667 111.667 283.6 112.6C284.533 113.533 285 114.733 285 116.2V135C285 136.467 284.533 137.667 283.6 138.6C282.667 139.533 281.467 140 280 140H185Z"
                    fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M94.5886 72.5627L0.743195 84.0627V9.56271C0.743195 3.56271 5.95683 2.72937 8.56365 3.06271H73.4734C84.1092 3.06271 85.7254 7.39604 85.2041 9.56271C90.157 26.7294 100.376 62.0627 101.627 66.0627C102.878 70.0627 97.4561 72.0627 94.5886 72.5627ZM31.2426 58.0627V28.5627L58.6142 21.5627L67.2167 60.5627L31.2426 58.0627Z"
                    fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.085314 133.563V90.0627C34.3944 86.0627 105.196 77.8627 113.929 77.0627C122.662 76.2627 125.885 80.0627 126.405 82.0627L142 141.063H11.7816C1.17697 141.063 -0.43452 136.063 0.085314 133.563ZM39.8525 125.563V103.563L97.554 95.5627L102.233 125.563H39.8525Z"
                    fill="white" />
                <path class="b" fill-rule="evenodd" clip-rule="evenodd"
                    d="M651.589 72.5627L557.743 84.0627V9.56271C557.743 3.56271 562.957 2.72937 565.564 3.06271H630.473C641.109 3.06271 642.725 7.39604 642.204 9.56271C647.157 26.7294 657.376 62.0627 658.627 66.0627C659.878 70.0627 654.456 72.0627 651.589 72.5627ZM588.243 58.0627V28.5627L615.614 21.5627L624.217 60.5627L588.243 58.0627Z"
                    fill="white" />
                <path class="b" fill-rule="evenodd" clip-rule="evenodd"
                    d="M557.085 133.563V90.0627C591.394 86.0627 662.196 77.8627 670.929 77.0627C679.662 76.2627 682.885 80.0627 683.405 82.0627L699 141.063H568.782C558.177 141.063 556.565 136.063 557.085 133.563ZM596.852 125.563V103.563L654.554 95.5627L659.233 125.563H596.852Z"
                    fill="white" />
            </svg>
        </div>


        <nav>
            <ul class="nav-links" id="navbar">
                <div class="frame-group" id="frame-group">
                    <li class="frame1" id="nav0"><a href="index.html"></a></li>
                <hr class="line" style="color: white; width: 100%;">
                    <li class="frame1" id="nav1"><a href=""></a></li>
                <hr class="line" style="color: white; width: 100%;">
                    <li class="frame1" id="nav2"><a href=""></a></li>
                <hr style="color: white; width: 100%;">
                    <li class="frame1" id="nav3"><a href=""></a></li>
                <hr style="color: white; width: 100%;">
                    <li class="frame1" id="nav4"><a href=""></a></li>
                <hr style="color: white; width: 100%;">
                </div>
                <li class="cast" id="nav5"><a href="#"></a></li>
                <hr style="color: white; width: 100%;">
                    <li class="frame1"  id="nav6"><a href=""></a></li>
                <hr style="color: white; width: 100%;">
                <div class="frame-group2">
                    <li class="btnNav">
                        <button><a href=""></a></button>
                    </li>
                </div>
            </ul>
        </nav>
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.917969 28.8008C0.709635 28.6185 0.572917 28.3971 0.507813 28.1367C0.442708 27.8763 0.442708 27.6159 0.507813 27.3555C0.585938 27.0951 0.722656 26.8737 0.917969 26.6914L12.8906 14.6992L0.917969 2.70703C0.722656 2.52474 0.592448 2.30339 0.527344 2.04297C0.46224 1.78255 0.46224 1.52865 0.527344 1.28125C0.592448 1.02083 0.722656 0.792969 0.917969 0.597656C1.10026 0.402344 1.32161 0.278646 1.58203 0.226563C1.84245 0.161458 2.09635 0.161458 2.34375 0.226563C2.59115 0.291667 2.81901 0.415365 3.02734 0.597656L15 12.5898L26.9922 0.597656C27.2786 0.311198 27.6302 0.167969 28.0469 0.167969C28.4635 0.167969 28.8151 0.311198 29.1016 0.597656C29.401 0.884115 29.5443 1.24219 29.5313 1.67188C29.5313 2.08854 29.388 2.43359 29.1016 2.70703L17.1094 14.6992L29.1016 26.6914C29.388 26.9648 29.5313 27.3099 29.5313 27.7266C29.5313 28.1432 29.388 28.5013 29.1016 28.8008C28.8151 29.1003 28.4635 29.2435 28.0469 29.2305C27.6302 29.2305 27.2786 29.0872 26.9922 28.8008L15 16.8086L3.02734 28.8008C2.81901 28.9961 2.59115 29.1198 2.34375 29.1719C2.09635 29.237 1.84245 29.237 1.58203 29.1719C1.32161 29.1198 1.10026 28.9961 0.917969 28.8008Z" fill="white"/>
        </svg>

        </label>
        
    </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbar);
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.logo>svg').addEventListener('click', function () {
        
        if (window.location.pathname.endsWith("index_eus.html") || window.location.pathname.includes("eskatuKonponketa.html") || window.location.pathname.includes("eskatuKonponketa2.html") || window.location.pathname.includes("eskatuKonponketa3.html")) {
            window.location.href = "index_eus.html";
        } else if (window.location.pathname === "/" || window.location.pathname.includes("index.html") || window.location.pathname.includes("eskatuKonponketa_cast.html") || window.location.pathname.includes("eskatuKonponketa2_cast.html") || window.location.pathname.includes("eskatuKonponketa3_cast.html")) {
            window.location.href = "index.html";
        } else if (window.location.pathname.includes("bazkide_cast.html")) {
            window.location.href = "index.html";
        } else {
            window.location.href = "index_eus.html";
        }
    });

    if (window.location.pathname.endsWith("index_eus.html") || window.location.pathname.includes("eskatuKonponketa.html") || window.location.pathname.includes("eskatuKonponketa2.html") || window.location.pathname.includes("eskatuKonponketa3.html")) {
        document.querySelector('.btnNav>button>a').text = "Konpondu orain";
        document.querySelector('.btnNav>button>a').href = "eskatuKonponketa.html";
        document.querySelector('#nav0>a').text = "Hasiera";
        document.querySelector('#nav0>a').href = "index.html";
        document.querySelector('#nav1>a').text = "Nola erabili";
        document.querySelector('#nav1>a').href = "index.html#nolaErabili";
        document.querySelector('#nav2>a').text = "Manifestua";
        document.querySelector('#nav2>a').href = "index.html#manifestua";
        document.querySelector('#nav3>a').text = "Galderak";
        document.querySelector('#nav3>a').href = "index.html#galderak";
        document.querySelector('#nav4>a').text = "Harremana";
        document.querySelector('#nav4>a').href = "index.html#harremana";
        document.querySelector('#nav5>a').text = "Bazkide egin";
        document.querySelector('#nav5>a').href = "bazkide.html";
        document.querySelector('#nav6>a').text = "Cast";
        document.querySelector('#nav6>a').href = "index.html";
    } else if (window.location.pathname === "/" || window.location.pathname.includes("index.html") || window.location.pathname.includes("eskatuKonponketa_cast.html") || window.location.pathname.includes("eskatuKonponketa2_cast.html") || window.location.pathname.includes("eskatuKonponketa3_cast.html")) {
        document.querySelector('.btnNav>button>a').text = "Repara ahora";
        document.querySelector('.btnNav>button>a').href = "eskatuKonponketa_cast.html";
        document.querySelector('#nav0>a').text = "Inicio";
        document.querySelector('#nav0>a').href = "index.html";
        document.querySelector('#nav1>a').text = "Como utilizar";
        document.querySelector('#nav1>a').href = "index.html#nolaErabili";
        document.querySelector('#nav2>a').text = "Manifiesto";
        document.querySelector('#nav2>a').href = "index.html#manifestua";
        document.querySelector('#nav3>a').text = "FAQ";
        document.querySelector('#nav3>a').href = "index.html#galderak";
        document.querySelector('#nav4>a').text = "Contacto";
        document.querySelector('#nav4>a').href = "index.html#harremana";
        document.querySelector('#nav5>a').text = "Hazte socio";
        document.querySelector('#nav5>a').href = "bazkide_cast.html";
        document.querySelector('#nav6>a').text = "Eus";
        document.querySelector('#nav6>a').href = "index_eus.html";
    } else if (window.location.pathname.includes("bazkide_cast.html")) {
        document.querySelector('.btnNav>button>a').text = "Obten asesoria gratuita";
        document.querySelector('.btnNav>button>a').href = "bazkide_cast.html#harremana";
        document.getElementById('nav0').style.display = "none";
        document.getElementById('nav1').style.display = "none";
        document.querySelectorAll('.line').forEach(el => el.style.display = "none");
        document.querySelector('#nav2>a').text = "Inicio";
        document.querySelector('#nav2>a').href = "index.html";
        document.querySelector('#nav3>a').text = "Beneficios";
        document.querySelector('#nav3>a').href = "bazkide_cast.html#etekinak";
        document.querySelector('#nav4>a').text = "Preguntas";
        document.querySelector('#nav4>a').href = "bazkide_cast.html#galderak";
        document.querySelector('#nav5>a').text = "Contacto";
        document.querySelector('#nav5>a').href = "bazkide_cast.html#harremana";
        document.querySelector('#nav6>a').text = "Eus";
        document.querySelector('#nav6>a').href = "bazkide.html";
    } else {
        document.querySelector('.btnNav>button>a').text = "Laguntza eskatu";
        document.querySelector('.btnNav>button>a').href = "bazkide.html#harremana";
        document.getElementById('nav0').style.display = "none";
        document.getElementById('nav1').style.display = "none";
        document.querySelectorAll('.line').forEach(el => el.style.display = "none");
        document.querySelector('#nav2>a').text = "Hasiera";
        document.querySelector('#nav2>a').href = "index_eus.html";
        document.querySelector('#nav3>a').text = "Onurak";
        document.querySelector('#nav3>a').href = "bazkide.html#etekinak";
        document.querySelector('#nav4>a').text = "Galderak";
        document.querySelector('#nav4>a').href = "bazkide.html#galderak";
        document.querySelector('#nav5>a').text = "Harremana";
        document.querySelector('#nav5>a').href = "bazkide.html#harremana";
        document.querySelector('#nav6>a').text = "Cast";
        document.querySelector('#nav6>a').href = "bazkide_cast.html";
    }
});

