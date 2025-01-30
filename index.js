const zapatos = [
    {
        marca: "Nike Original",
        modelo: "Air Max 1",
        precio: 120.00,
        img: "img/nike1.png"
    },
    {
        marca: "New Balance",
        modelo: "NB 9060",
        precio: 80.00,
        img: "img/new1.png"
    },
    {
        marca: "Nike Original",
        modelo: "Nike Revolution",
        precio: 90.00,
        img: "img/nike2.png"
    },
    {
        marca: "Adidas Original",
        modelo: "Forum Buckle",
        precio: 100.00,
        img: "img/adidas1.png"
    },
    {
        marca: "Adidas Original",
        modelo: "Campus",
        precio: 120.00,
        img: "img/adidas2.png"
    },
    {
        marca: "New Balance",
        modelo: "NB 327",
        precio: 120.00,
        img: "img/new2.png"
    },
    {
        marca: "Nike Original",
        modelo: "Dunk Low",
        precio: 100.00,
        img: "img/nike3.png"
    },
    {
        marca: "Adidas Original",
        modelo: "Gazelle",
        precio: 90.00,
        img: "img/adidas3.png"
    },
    {
        marca: "Nike Original",
        modelo: "Air Max SC",
        precio: 150.00,
        img: "img/nike4.png"
    },
    {
        marca: "Adidas Original",
        modelo: "Handball Spezial",
        precio: 120.00,
        img: "img/adidas4.png"
    },
    {
        marca: "Nike Original",
        modelo: "Air Force",
        precio: 130.00,
        img: "img/nike5.png"
    },
    {
        marca: "New Balance",
        modelo: "NB 9060",
        precio: 100.00,
        img: "img/new3.png"
    },
    {
        marca: "New Balance",
        modelo: "NB 480",
        precio: 150.00,
        img: "img/new4.png"
    },
    {
        marca: "Nike Original",
        modelo: "Full Force Low",
        precio: 70.00,
        img: "img/nike6.png"
    },
    {
        marca: "Nike Original",
        modelo: "Air Max SC",
        precio: 160.00,
        img: "img/nike7.png"
    },
    {
        marca: "Adidas Original",
        modelo: "Handball Spezial",
        precio: 140.00,
        img: "img/adidas5.png"
    },
]

function imprZapatos(array, msg) {
    const main = document.querySelector("main");
    main.innerHTML = "";

    if (msg != "") {
        main.innerHTML = `<h2>${msg}</h2>`;
    }

    for(const zapato of array){
        main.innerHTML += `<div class="card flex">
                                <div class="img flex">
                                    <img src="${zapato.img}" alt="${zapato.modelo}">
                                </div>
                                <div class="flex info">
                                    <p>${zapato.marca}</p>
                                    <div class="flex">
                                        <p>${zapato.modelo}</p>
                                        <p>${zapato.precio.toFixed(2)} €</p>
                                    </div>
                                    <button>Comprar</button>
                                </div>
                            </div>`
    }
}

function filter() {
    let marca = document.getElementById("marca").value;
    let precio = document.getElementById("precio").value;
    
    let filt;
    let msg = "";

    if (precio != 0 && marca != "all") {
        filt = zapatos.filter((e) => e.precio <= precio && e.marca.toLowerCase().includes(marca));
    } else if (precio != 0) {
        filt = zapatos.filter((e) => e.precio <= precio);
    } else if (marca != "all") {
        filt = zapatos.filter((e) => e.marca.toLowerCase().includes(marca));
    }

    if (filt == "") {
        filt = [...zapatos].sort(() => Math.random() - 0.5).slice(0, 3);
        msg = "Productos Sugeridos";
    }
    
    if (filt != undefined) {
        imprZapatos(filt, msg);
    }

}

function limpiar() {
    document.getElementById("marca").value = "all";
    document.getElementById("precio").value = "";

    imprZapatos(zapatos, "");
}

document.addEventListener("click", (e) => {
    if (e.target.classList[1] == "filter") {
        let form = document.getElementById("form");

        let btn = document.getElementsByClassName("filter")
        if (form.className == "none") {

            form.style = "display: flex";
            form.className = "flex";

            btn[0].src = "img/icon_filter2.png";
            btn[1].src = "img/icon_arrow_down.png";

        } else {

            form.style = "display: none";
            form.className = "none";

            btn[0].src = "img/icon_filter1.png";
            btn[1].src = "img/icon_arrow.png";
        }
    }

});

imprZapatos(zapatos, "");