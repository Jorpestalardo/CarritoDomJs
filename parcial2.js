'use strict';

//Document
const d = document;

const productos = [
    {
        id: 1,
        nombre: 'Spring Lencería',
        descripcion: 'Lencería de encaje color Esmeralda',
        precio: 4500,
        imagen: 'body-primavera.jpg',
        categoria: '1',
    },
    {
        id: 2,
        nombre: 'Lion Lencería',
        descripcion: 'Lencería de encaje color Terra, más arnes de flores',
        precio: 6000,
        imagen: 'body-lion.jpg',
        categoria: '1',

    },
    {
        id: 3,
        nombre: 'Soft Lencería',
        descripcion: 'Ropa interior de algodón, colores grises y pasteles',
        precio: 2500,
        imagen: 'body-soft.jpg',
        categoria: '1',
    },
    {
        id: 4,
        nombre: 'Bikini Hawai floral',
        descripcion: 'Nuevo traje de baño de dos cuerpos, tiro alto, material lycra, te hará lucir increíble.',
        precio: 3500,
        imagen: 'bikini.jpg',
        categoria: '2',
    },
    {
        id: 5,
        nombre: 'Bikini Sun',
        descripcion: 'Diseño de la última temporada, amarillo neon, tiro alto, material lycra, en todos los talles.',
        precio: 3750,
        imagen: 'bikini-amarilla.jpg',
        categoria: '2',
    },
    {
        id: 6,
        nombre: 'Bikini Ocaso',
        descripcion: 'Este diseño es ideal para estilizar tu figura, material lycra y bordados, en todos los talles.',
        precio: 4500,
        imagen: 'bikini-negra.jpg',
        categoria: '2',
    },
    {
        id: 7,
        nombre: 'Trikini Sweet',
        descripcion: 'Dos estampados increíbles, material lycra, en todos los tamaños.',
        precio: 2500,
        imagen: 'trikini-sweet.jpg',
        categoria: '3',
    },
    {
        id: 8,
        nombre: 'Trikini R&B',
        descripcion: 'Diseño único para mostrar un poco más de piel, material lycra, en todos los talles.',
        precio: 3750,
        imagen: 'trikini.jpg',
        categoria: '3',
    },
    {
        id: 9,
        nombre: 'Trikini Summer',
        descripcion: 'El rosa chicle está de moda, dos estampados, material lycra, en todos los talles.',
        precio: 4500,
        imagen: 'trikiniSummer.jpg',
        categoria: '3',
    },
    {
        id: 10,
        nombre: 'Enteriza Stunnin',
        descripcion: 'Lo clasico nunca pasa de moda, elegante, material lycra, en todos los talles.',
        precio: 2500,
        imagen: 'enteriza-stunning.jpg',
        categoria: '4',
    },
    {
        id: 11,
        nombre: 'Enteriza Blue Ocean',
        descripcion: 'Enteriza cuello cruzado, azul intenso y floreada, material lycra, en todos los talles.',
        precio: 3750,
        imagen: 'enteriza-blue-ocean.jpg',
        categoria: '4',
    },
    {
        id: 12,
        nombre: 'Enteriza Florar',
        descripcion: 'Este diseño estiliza tu figura con los volados en los hombros, material lycra, en todos los talles.',
        precio: 4500,
        imagen: 'enteriza.jpg',
        categoria: '4',
    }

];


let divContainer = d.querySelector('#primerP');



const productosListas = () => {

    for (const producto of productos) {
        let div = d.createElement('div');
        let div1 = d.createElement('div');
        let div2 = d.createElement('div');
        let div3 = d.createElement('div');
        let img = d.createElement('img');
        let div4 = d.createElement('div');
        let h4 = d.createElement('h4');
        let p = d.createElement('p');
        let span = d.createElement('span');
        let button = d.createElement('button');
        let buttonQuitar = d.createElement('button');


        div.setAttribute(`class`, `col-sm-12 col-md-4 d-flex justify-content-center mt-4 mb-4 text-center`);
        divContainer.append(div);
        div1.setAttribute(`class`, `d-flex`);
        div.append(div1);
        div2.setAttribute(`class`, `col-md-12`);
        div1.append(div2);
        div3.setAttribute(`class`, `card m-2`);
        div3.id = `card-primavera`;
        div2.append(div3);
        div3.append(img);
        img.setAttribute(`class`, `img-fluid mx-auto`);
        img.id = `fotoNuevaColeccion`;
        img.alt = producto.nombre;
        img.src = `img/${producto.imagen}`;
        div4.setAttribute(`class`, `card-text`);
        div4.id = `tituloBtn`;
        div3.append(div4);
        div4.append(h4, p, span, button, buttonQuitar);
        h4.setAttribute(`class`, `card-text h1 p-2`);
        h4.id = `titulo`;
        h4.innerHTML = producto.nombre;
        p.setAttribute(`class`, `textoNc`);
        p.innerHTML = producto.descripcion;
        span.setAttribute(`class`, `textoNc d-flex`);
        span.innerHTML = `Precio: $ ${producto.precio}`;
        button.setAttribute(`class`, `btn btn-outline-light`, `type`, `button`);
        button.id = `btn-primavera`
        button.innerHTML = `Agregar al carrito`;
        button.dataset.id = `${producto.id}`;
        button.dataset.precio = `${producto.precio}`;
        button.dataset.categoria = `${producto.categoria}`;
        buttonQuitar.setAttribute(`class`, `btn btn-outline-light m-2`, `type`, `button`);
        buttonQuitar.id = 'btnQuitar';
        buttonQuitar.innerHTML = `Quitar`;
        buttonQuitar.dataset.id = `${producto.id}`;
        buttonQuitar.dataset.precio = `${producto.precio}`;
        buttonQuitar.dataset.categoria = `${producto.categoria}`;

        //para ver en detalle las imagenes: 

        img.addEventListener("click", (e) => {
            let div = d.createElement("div");
            div.id = "big";
            let p = d.createElement("p");
            p.innerHTML = e.target.alt;
            div.append(p);
            div4.style.visibility = 'hidden';




            let a = d.createElement("a");
            a.className = "cerrar";
            a.textContent = "X";
            a.addEventListener("click", (e) => {
                d.querySelector("#big").remove();
                div4.style.visibility = 'visible';

            });

            let img = e.target.cloneNode(true);
            img.id = 'zommProducto';
            img.style.width = '30%';
            img.style.height = '80%';
            img.style.margin = '3rem';

            div.append(a, img);
            d.body.append(div);
        });

    }


}

productosListas();




//información de carrito:
let carrito1 = {
    productosIds: [],
    cantidades: [],
    total: 0,
};


//cerrar ventana modal con escape//
window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape' && d.querySelector('#big')) {
        d.querySelector('#big').remove();
    }
});


let carritoSumando = d.querySelector("#carritoSumando");

const mostrarCarrito = () => {

    carritoSumando.innerHTML =
        ` Producto n°: ${carrito1.productosIds} - Cantidades: ${carrito1.cantidades} (${carrito1.cantidades.reduce((acum, n) => acum + n, 0)})
    Total: $ ${carrito1.total}
    `;

}

let addBtns = d.querySelectorAll('#btn-primavera');
let delBtns = d.querySelectorAll('#btnQuitar');



//Boton que agrega cosas al carrito: 

for (let btn of addBtns) {
    btn.addEventListener('click', (e) => {
        let idProducto = +e.target.dataset.id;
        let precioProducto = +e.target.dataset.precio;
        //console.log({idProducto, precioProducto});

        let indiceProducto = carrito1.productosIds.indexOf(idProducto);
        console.log(indiceProducto);
        if (indiceProducto == -1) {
            carrito1.productosIds.push(idProducto);
            carrito1.cantidades.push(1);
        } else {
            carrito1.cantidades[indiceProducto]++;
        }

        carrito1.total += precioProducto;
        //se muestra el detalle del carrito: 
        mostrarCarrito();
    });
}


//Boton que quita cosas al carrito:

for (let btn of delBtns) {
    btn.addEventListener('click', (e) => {

        let idProducto = +e.target.dataset.id;
        let precioProducto = +e.target.dataset.precio;
        console.log({ idProducto, precioProducto });
        let indiceProducto = carrito1.productosIds.indexOf(idProducto);
        console.log(indiceProducto);
        if (indiceProducto != -1) {
            if (carrito1.cantidades[indiceProducto] > 0) {
                carrito1.cantidades[indiceProducto]--;
                carrito1.total -= precioProducto;
            }

            if (carrito1.cantidades[indiceProducto] == 0) {
                carrito1.productosIds.splice(indiceProducto, 1);
                carrito1.cantidades.splice(indiceProducto, 1);
            }



        }

        mostrarCarrito();
    });
}



//icono de carrito

let carrito = d.querySelector("#carrito");

//mostrar carrito en ventana modal

const ventanaModal = () => {


    carrito.addEventListener('click', (e) => {
        let div = d.createElement('div');
        div.id = 'big';
        let h4 = d.createElement('h4');
        h4.style.color = 'white';
        h4.innerHTML = 'Carrito de Compras:';
        h4.style.margin = '2rem';
        let div6 = d.createElement('div');
        div6.id = 'containerProducto';
        let btnVaciar = d.createElement('button');
        btnVaciar.setAttribute(`class`, `btn btn-outline-light m-2`);
        btnVaciar.innerHTML = 'Vaciar Carrito';




        let ul = d.createElement('ul');
        div6.append(ul);

        carrito1.productosIds.forEach((productoId, indice) => {
            let li = d.createElement('li');
            li.style.color = 'lightPink';
            li.style.fontSize = '1rem';
            let infoProducto = productos.filter((producto => producto.id == productoId))[0];
            li.innerHTML = `Producto agregado: ${infoProducto.nombre}`

            let p = d.createElement('p');
            p.style.color = 'lightPink';
            p.style.fontSize = '1rem';
            p.innerHTML = `Precio: $ `;
            let span3 = d.createElement('span');
            p.append(span3);
            span3.append(infoProducto.precio + ' por unidad');
            let p1 = d.createElement('li');
            p1.style.color = 'lightPink';
            p1.style.fontSize = '1.5rem';


            p1.innerHTML = `Cantidad: ` + carrito1.cantidades[indice];
            let img = d.createElement('img');
            img.src = `img/${infoProducto.imagen}`;
            img.id = 'imgProducto';
            img.style.width = '20%';
            img.style.height = '40%';
            img.style.padding = '2rem';
            li.append(img);
            ul.append(li, p, p1);


            let btnEliminar = d.createElement('button');
            btnEliminar.setAttribute(`class`, `btn btn-outline-light m-2`);
            btnEliminar.innerHTML = 'Eliminar del carrito';
            btnEliminar.dataset.id = infoProducto.id;
            btnEliminar.dataset.precio = infoProducto.precio;
            btnEliminar.dataset.categoria = infoProducto.categoria;



            btnEliminar.addEventListener('click', (e) => {
                e.preventDefault();
                let idProducto = +e.target.dataset.id;
                let precioProducto = +e.target.dataset.precio;
                console.log({ idProducto, precioProducto });
                let indiceProducto = carrito1.productosIds.indexOf(idProducto);
                console.log(indiceProducto);
                if (indiceProducto != -1) {
                    if (carrito1.cantidades[indiceProducto] > 0) {
                        p1.innerHTML = --carrito1.cantidades[indiceProducto];
                        p1.innerHTML = 'Cantidad: ' + carrito1.cantidades[indice];
                        const precioTotal = (carrito1.total -= precioProducto);
                        span2.innerHTML = precioTotal;



                    }

                    if (carrito1.cantidades[indiceProducto] == 0) {
                        li.innerHTML = carrito1.productosIds.splice(indiceProducto, 1);
                        li.innerHTML = carrito1.cantidades.splice(indiceProducto, 1);
                        img.style.visibility = 'hidden';
                        li.innerHTML = 'Producto eliminado';
                        p.innerHTML = ' ';
                        p1.innerHTML = ' ';

                    }


                }
                mostrarCarrito();

            });





            btnVaciar.addEventListener('click', (e) => {

                carrito1 = {
                    productosIds: [],
                    cantidades: [],
                    total: 0,
                }

                img.style.visibility = 'hidden';
                li.innerHTML = 'carrito vacio';
                p.innerHTML = ' ';
                p1.innerHTML = ' ';
                span2.innerHTML = ' ';

                mostrarCarrito();

            });



            li.append(btnEliminar);


        });

        let p2 = d.createElement('p');
        p2.innerHTML = ' TOTAL:  ';
        p2.style.color = 'lightPink';
        p2.style.fontSize = '1.5rem';
        p2.style.marginLeft = '2rem';
        let span2 = d.createElement("span");
        span2.append(carrito1.total);
        p2.append(span2);
        div6.append(p2);

        let a = d.createElement('a');
        a.href = '#';
        a.innerHTML = 'X';
        a.addEventListener('click', (e) => {
            d.querySelector('#big').remove();
        });



        //Array de provincias, para el envío

        const provincias = [
            "Buenos Aires",
            "Ciudad Autónoma de Buenos Aires",
            "Catamarca",
            "Chaco",
            "Chubut",
            "Córdoba",
            "Corrientes",
            "Entre Ríos",
            "Formosa",
            "Jujuy",
            "La Pampa",
            "La Rioja",
            "Mendoza",
            "Misiones",
            "Neuquén",
            "Río Negro",
            "Salta",
            "San Juan",
            "San Luis",
            "Santa Cruz",
            "Santa Fe",
            "Santiago del Estero",
            "Tierra del Fuego - Antártida e Islas del Atlántico Sur",
            "Tucumán"
        ];

        const cuotas = [
            "1",
            "3",
            "6",
            "12"
        ];

        console.log(provincias);

        //MODAL DE COMPRA: 

        let div9 = d.createElement("div");
        div9.id = 'cajaDeCompra';
        div9.style.visibility = 'hidden';

        //boton de compra:

        let btnComprar = d.createElement('button');
        btnComprar.setAttribute(`class`, `btn btn-success m-2`);
        btnComprar.innerHTML = 'Realizar Compra';

        let divGracias = d.createElement('div');
        let p4 = d.createElement('p');



        btnComprar.addEventListener('click', (e) => {
            e.preventDefault();
            if (carrito1.total > 0) {
                console.log(carrito1.total);
                div9.style.visibility = 'visible';

                //FORMULARIO:
                let tituloCompra = d.createElement('h4');
                tituloCompra.style.color = 'black';
                tituloCompra.innerHTML = 'Informacion de envío y pago';
                tituloCompra.style.margin = '2rem';
                let div8 = d.createElement('div');
                div8.setAttribute(`class`, `col-md7 col-lg-8`);
                let formulario = d.createElement('form');
                formulario.id = 'form'

                let div10 = d.createElement('div');
                div10.setAttribute(`class`, `row g-3 justify-content-center`);
                let div11 = d.createElement('div');
                div11.setAttribute(`class`, `col-sm-6`);

                //NOMBRE Y APELLIDO: 
                let labelNombre = d.createElement('label');
                labelNombre.setAttribute(`for`, `nombreCompleto`);
                labelNombre.className = 'form-label';
                labelNombre.innerHTML = 'Nombre/s y Apellido/s:';
                let inputNombre = d.createElement('input');
                inputNombre.className = 'form-control';
                inputNombre.id = "nombreCompleto";
                inputNombre.type = 'text';
                inputNombre.placeholder = 'Jorgelina Pestalardo';
                inputNombre.required = true;


                //EMAIL y TELEFONO: 
                let div12 = d.createElement('div');
                div12.setAttribute(`class`, `col-sm-6`);


                let labelEmail = d.createElement('label');
                labelEmail.setAttribute(`for`, `email`);
                labelEmail.className = 'form-label';
                labelEmail.innerHTML = 'Ingrese su Email:';
                let inputEmail = d.createElement('input');
                inputEmail.className = 'form-control';
                inputEmail.id = "email";
                inputEmail.type = 'email';
                inputEmail.placeholder = 'usuario@gmail.com';
                inputEmail.required = true;

                let labelTel = d.createElement('label');
                labelTel.setAttribute(`for`, `celu`);
                labelTel.className = 'form-label';
                labelTel.innerHTML = 'Número de Celular:';
                let inputTel = d.createElement('input');
                inputTel.className = 'form-control';
                inputTel.id = "celu";
                inputTel.type = 'text';
                inputTel.placeholder = '+549';
                inputTel.required = true;


                //DIRECCIÓN DE ENVÍO

                let div13 = d.createElement('div');
                div13.setAttribute(`class`, `col-6 col-sm-12`);


                let labelDireccion = d.createElement('label');
                labelDireccion.setAttribute(`for`, `direccion`);
                labelDireccion.className = 'form-label';
                labelDireccion.innerHTML = 'Ingrese la dirección de envío:';
                let inputDireccion = d.createElement('input');
                inputDireccion.className = 'form-control';
                inputDireccion.id = "direccion";
                inputDireccion.type = 'text';
                inputDireccion.placeholder = 'Calle N° 1234 / Barrio, Ciudad';
                inputDireccion.required = true;


                //SELECCIÓN DE PROVINCIA:
                let div14 = d.createElement('div');
                div14.setAttribute(`class`, `col-6 col-sm-12`);

                let labelProvincia = d.createElement('label');
                labelProvincia.setAttribute(`for`, `provincias`);
                labelProvincia.className = 'form-label';
                labelProvincia.innerHTML = 'Provincias';
                let selectProvincia = d.createElement('select');
                selectProvincia.className = 'form-select';
                selectProvincia.id = 'provincias';
                selectProvincia.required = true;


                for (let provincia of provincias) {
                    let opcionValor = d.createElement('option');
                    opcionValor.value = provincia;
                    opcionValor.innerHTML = provincia;

                    selectProvincia.append(opcionValor);
                }

                let fechaEnvio = d.createElement('h5');
                fechaEnvio.innerHTML = 'Seleccione Fecha de envio:'
                fechaEnvio.style.paddingTop = '20px';


                let fecha = new Date();

                // fecha de envio: 
                let inputFecha = d.createElement('input');
                inputFecha.type = 'date';
                inputFecha.name = 'fechaEnvio';
                inputFecha.value = fecha.toLocaleDateString();
                inputFecha.min = "2022-03-06";
                inputFecha.max = "2022-12-31"
                inputFecha.required = true;



                //Seleccionar medio de pago virtual: 
                let pagos = d.createElement('h5');
                pagos.innerHTML = 'Elegir medio de Pago Virtual:';

                let div15 = d.createElement('div');
                div15.setAttribute(`class`, `my-3`);

                //Pago crédito:

                let divPagos = d.createElement('div');
                divPagos.className = 'form-check';

                let inputCredito = d.createElement('input');
                inputCredito.className = 'form-check-input';
                inputCredito.id = "pago1";
                inputCredito.type = 'radio';
                inputCredito.name = 'pago';
                let labelCredito = d.createElement('label');
                labelCredito.setAttribute(`for`, `pago1`);
                labelCredito.className = 'form-check-label';
                labelCredito.innerHTML = 'Tarjeta de Crédito';
                inputCredito.required = true;


                divPagos.append(inputCredito, labelCredito);

                //Pago Débito:

                let divPagos2 = d.createElement('div');
                divPagos2.className = 'form-check';

                let inputDebito = d.createElement('input');
                inputDebito.className = 'form-check-input';
                inputDebito.id = "pago2";
                inputDebito.type = 'radio';
                inputDebito.name = 'pago';
                let labelDebito = d.createElement('label');
                labelDebito.setAttribute(`for`, `pago2`);
                labelDebito.className = 'form-check-label';
                labelDebito.innerHTML = 'Tarjeta de Débito';
                inputDebito.required = true;


                divPagos2.append(inputDebito, labelDebito);


                //cuotas:
                let divCuotas = d.createElement('div');
                divCuotas.setAttribute(`class`, `col-3`);

                let labelCuotas = d.createElement('label');
                labelCuotas.setAttribute(`for`, `cuotas`);
                labelCuotas.className = 'form-label';
                labelCuotas.innerHTML = 'Cuotas:';
                let selectCuotas = d.createElement('select');
                selectCuotas.className = 'form-select';
                selectCuotas.id = 'cuotas';
                selectCuotas.required = true;


                for (let cuota of cuotas) {
                    let opcionCuotas = d.createElement('option');
                    opcionCuotas.value = cuota;
                    opcionCuotas.innerHTML = cuota;

                    selectCuotas.append(opcionCuotas);
                }

                let tituloTarjeta = d.createElement('h5');
                tituloTarjeta.innerHTML = 'Datos de la tarjeta:';
                //Nombre de la tarjeta: 
                let divContenedorPago = d.createElement('div');
                divContenedorPago.className = 'row gy-3';

                let div16 = d.createElement('div');
                div16.setAttribute(`class`, `col-md-6`);

                //NOMBRE Y APELLIDO: 
                let labelNombreT = d.createElement('label');
                labelNombreT.setAttribute(`for`, `nombreTarjeta`);
                labelNombreT.className = 'form-label';
                labelNombreT.innerHTML = 'Nombre en la tarjeta:';
                let inputNombreT = d.createElement('input');
                inputNombreT.className = 'form-control';
                inputNombreT.id = "nombreTarjeta";
                inputNombreT.type = 'text';
                inputNombreT.placeholder = 'Maria Jorgelina Pestalardo';
                inputNombreT.required = true;
                let small = d.createElement('small');
                small.className = 'text-muted';
                small.innerHTML = 'Exactamente como figura en ella'

                //Numero de la tarjeta:

                let div17 = d.createElement('div');
                div17.setAttribute(`class`, `col-md-6`);

                //NUMERO: 
                let labelNumeroT = d.createElement('label');
                labelNumeroT.setAttribute(`for`, `numeroT`);
                labelNumeroT.className = 'form-label';
                labelNumeroT.innerHTML = 'Número de la tarjeta';
                let inputNumeroT = d.createElement('input');
                inputNumeroT.className = 'form-control';
                inputNumeroT.id = "numeroT";
                inputNumeroT.type = 'text';
                inputNumeroT.placeholder = 'xxxx-xxxx-xxxx-xxxx';
                inputNumeroT.required = true;

                //Fecha de expiración:
                let div18 = d.createElement('div');
                div18.setAttribute(`class`, `col-md-3`);


                let labelExp = d.createElement('label');
                labelExp.setAttribute(`for`, `Exp`);
                labelExp.className = 'form-label';
                labelExp.innerHTML = 'Fecha de Expiración';
                let inputExp = d.createElement('input');
                inputExp.className = 'form-control';
                inputExp.id = "Exp";
                inputExp.type = 'text';
                inputExp.required = true;


                //CVV
                let div19 = d.createElement('div');
                div19.setAttribute(`class`, `col-md-3`);


                let labelCvv = d.createElement('label');
                labelCvv.setAttribute(`for`, `Cvv`);
                labelCvv.className = 'form-label';
                labelCvv.innerHTML = 'Código de la tarjeta';
                let inputCvv = d.createElement('input');
                inputCvv.className = 'form-control';
                inputCvv.id = "Cvv";
                inputCvv.type = 'text';
                inputCvv.required = true;


                //BOTON DE COMPRA.

                let btnCR = d.createElement('button');
                btnCR.className = ' btn btn-success col-6 m-3';
                btnCR.type = 'submit';
                btnCR.innerHTML = 'Terminar Compra';

                let btnCancelar = d.createElement('button');
                btnCancelar.className = ' btn btn-light col-6 m-1';
                btnCancelar.innerHTML = 'Cancelar';

                btnCancelar.addEventListener('click', (e) => {
                    e.preventDefault();
                    d.querySelector('#cajaDeCompra').remove();
                    d.querySelector('#big').remove();


                });





                btnCR.addEventListener('click', (e) => {
                    e.preventDefault();

                    d.querySelector('#cajaDeCompra').remove();
                    d.querySelector('#big').remove();



                    divGracias.style.background = 'rgba(201, 86, 224, 0.301)';
                    divGracias.style.width = '100%';
                    p4.style.color = 'white';
                    p4.innerHTML = "Compra realizada con éxito";
                    p4.id = 'compraExitosa';

                    const vaciarCarrito = () => {
                        carrito1 = {
                            productosIds: [],
                            cantidades: [],
                            total: 0,
                        }

                        mostrarCarrito()
                    }


                    vaciarCarrito();


                    function actualizar() {

                        location.reload(true);

                    }

                    setTimeout(actualizar, 4000);





                    divGracias.append(p4);




                });



                let a1 = d.createElement('a');
                a1.id = 'a1';
                a1.href = '#';
                a1.innerHTML = 'X';
                a1.addEventListener('click', (e) => {
                    e.preventDefault();
                    d.querySelector('#cajaDeCompra').remove();

                });

                div8.append(formulario);
                formulario.append(div10);
                div10.append(div11, div12, div13, div14, div15, divContenedorPago, btnCR, btnCancelar);
                div11.append(labelNombre, inputNombre);
                div12.append(labelEmail, inputEmail, labelTel, inputTel);
                div13.append(labelDireccion, inputDireccion);
                div14.append(labelProvincia, selectProvincia, fechaEnvio, inputFecha);
                divCuotas.append(labelCuotas, selectCuotas);
                div15.append(pagos, divPagos, divPagos2, divCuotas);
                divContenedorPago.append(tituloTarjeta, div16, div17, div18, div19);
                div16.append(labelNombreT, inputNombreT, small);
                div17.append(labelNumeroT, inputNumeroT);
                div18.append(labelExp, inputExp);
                div19.append(labelCvv, inputCvv);
                div9.append(a1, tituloCompra, div8);


            } else {
                console.log('no se puede abrir, carrito vacio.');
            }



        });







        div.append(div9, a, h4, div6, btnComprar, btnVaciar);
        d.body.append(div);
        d.body.prepend(divGracias);
    });



}


ventanaModal();







//FILTRAR PRODUCTOS: 

for (let filtro of filtros) {
    filtro.addEventListener("click", (e) => {
        let categoriaId = e.target.dataset.categoria;
        if (categoriaId != 0) {
            let productosFiltrados = productos.filter((producto) => producto.categoria == categoriaId);
            let banner2 = d.querySelector('#banner');
            let p5 = d.createElement('p');
            let p6 = d.createElement('p');
            let p7 = d.createElement('p');
            let p8 = d.createElement('p');


            function banner() {
                switch (categoriaId) {
                    case '2':
                        p5.innerHTML = "Podes comprar hasta en 12 cuotas!!";
                        p5.style.color = 'rgba(255, 255, 255, 0.9)';
                        p5.style.fontSize = '50px';
                        p5.style.animationName = 'aBanner';
                        p5.style.animationDuration = '10s';
                        p5.style.animationFillMode = 'forwards';
                        banner2.innerHTML = ' ';
                        banner2.append(p5);


                        console.log("banner2");

                        break;
                    case '3':
                        p6.innerHTML = "Envío Gratís en toda CABA";
                        p6.style.color = 'rgba(255, 255, 255, 0.9)';
                        p6.style.fontSize = '50px';
                        p6.style.animationName = 'aBanner';
                        p6.style.animationDuration = '10s';
                        p6.style.animationFillMode = 'forwards';
                        banner2.innerHTML = ' ';
                        banner2.append(p6);

                        console.log("banner3");
                        break;
                    case '4':
                        p7.innerHTML = "Mirá nuestra 'Nueva Colección'.";
                        p7.style.color = 'rgba(255, 255, 255, 0.9)';
                        p7.style.animationName = 'aBanner';
                        p7.style.animationDuration = '10s';
                        p7.style.animationFillMode = 'forwards';
                        p7.style.fontSize = '50px';
                        banner2.innerHTML = ' ';
                        banner2.append(p7);

                        console.log("banner4");
                        break;
                    case '1':
                        p8.innerHTML = "Hacemos envíos a todo el país.";
                        p8.style.color = 'rgba(255, 255, 255, 0.9)';
                        p8.style.fontSize = '50px';
                        p8.style.animationName = 'aBanner';
                        p8.style.animationDuration = '10s';
                        p8.style.animationFillMode = 'forwards';
                        banner2.innerHTML = ' ';
                        banner2.append(p8);

                        console.log("banner1");
                        break;
                    default:
                        p9.innerHTML = ' ';
                        banner2.innerHTML = ' ';
                        banner2.append(p9);

                        console.log("no selecciono categoria");
                        break;
                }


            }

                banner();











            d.querySelector('#primerP').innerHTML = "";


            for (let productoFiltrado of productosFiltrados) {
                let div = d.createElement("div");
                div.id = productoFiltrado.id;

                let img = d.createElement("img");
                img.src = `img/${productoFiltrado.imagen}`;
                img.alt = productoFiltrado.nombre;

                div.setAttribute(`class`, `m-4`);
                div.append(img);
                d.querySelector("#primerP").append(div);

                let div2 = d.createElement("div");
                div.append(div2);

                let h3 = d.createElement("h3");
                h3.innerHTML = productoFiltrado.nombre;
                h3.style.padding = '2rem';
                div2.append(h3);

                let p = d.createElement("p");
                p.innerHTML = productoFiltrado.descripcion;
                p.style.padding = '0 1rem';
                div2.append(p);

                let p2 = d.createElement("p");
                p2.textContent = "Precio: $";
                p2.style.padding = '0 1rem';
                div2.append(p2);

                let span = d.createElement("span");
                span.innerHTML = productoFiltrado.precio;
                p2.append(span);

                let p3 = d.createElement("p");
                p3.innerHTML = productoFiltrado.categoria;
                p3.innerHTML = '';
                div2.append(p3);

                let boton1 = d.createElement("button");
                boton1.dataset.id = productoFiltrado.id;
                boton1.dataset.precio = productoFiltrado.precio;
                boton1.dataset.categoria = productoFiltrado.categoria;
                boton1.setAttribute(`class`, `btn  m-2`);
                boton1.className = "btn mb-2  m-2";
                boton1.style.background = 'rgba(214, 125, 241, 0.863)';
                boton1.style.color = 'white';
                boton1.style.border = 'none';
                boton1.textContent = "Agregar al carrito";
                boton1.addEventListener("click", (e) => {
                    let idProducto = +e.target.dataset.id;
                    let precioProducto = +e.target.dataset.precio;
                    //console.log({idProducto, precioProducto});

                    let indiceProducto = carrito1.productosIds.indexOf(idProducto);
                    console.log(indiceProducto);
                    if (indiceProducto == -1) {
                        carrito1.productosIds.push(idProducto);
                        carrito1.cantidades.push(1);
                    } else {
                        carrito1.cantidades[indiceProducto]++;
                    }

                    carrito1.total += precioProducto;
                    //se muestra el detalle del carrito: 
                    mostrarCarrito();
                });

                let boton2 = d.createElement("button");
                boton2.dataset.id = productoFiltrado.id;
                boton2.dataset.precio = productoFiltrado.precio;
                boton2.dataset.categoria = productoFiltrado.categoria;
                boton2.setAttribute(`class`, `btn  m-2`);
                boton2.style.background = 'rgba(214, 125, 241, 0.863)';
                boton2.style.color = 'white';
                boton2.style.border = 'none';
                boton2.textContent = "Eliminar del carrito";

                boton2.addEventListener("click", (e) => {
                    let idProducto = +e.target.dataset.id;
                    let precioProducto = +e.target.dataset.precio;
                    console.log({ idProducto, precioProducto });
                    let indiceProducto = carrito1.productosIds.indexOf(idProducto);
                    console.log(indiceProducto);
                    if (indiceProducto != -1) {
                        if (carrito1.cantidades[indiceProducto] > 0) {
                            carrito1.cantidades[indiceProducto]--;
                            carrito1.total -= precioProducto;
                        }

                        if (carrito1.cantidades[indiceProducto] == 0) {
                            carrito1.productosIds.splice(indiceProducto, 1);
                            carrito1.cantidades.splice(indiceProducto, 1);
                        }



                    }

                    mostrarCarrito();

                });

                div2.append(boton1, boton2);
                d.querySelector("#primerP").append(div);
            }

            console.table(productosFiltrados);
            console.log(productosFiltrados);
        } else {
            d.querySelector("#primerP").innerHTML = '';
            productosListas();

            console.table(productos);
        }


    });
}





/*


//menesaje de error:
    let error = d.createElement('div');
    error.id = "error";

    //validar formulario:
    let nombre = d.getElementById('nombreCompleto');
    let email = d.getElementById('email');
    let direccion = d.getElementById('direccion');
    let nombreTarjeta = d.getElementById('nombreTarjeta');
    let numeroT = d.getElementById('numeroT');
    let exp = d.getElementById('Exp');
    let cvv = d.getElementById('Cvv');
    let errorMensajes = d.getElementById('error');
    

    let form = d.getElementById('form');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        let mensajesError = [];
        
        if (nombre.value == null || nombre.value === ''){
            mensajesError.push('El nombre y apellido es requerido');
        }

        if (email.value == null || email.value === ''){
            mensajesError.push('El email es requerido');
        }

        if (direccion.value == null || direccion.value === ''){
            mensajesError.push('La dirección es requerida');
        }
        if (nombreTarjeta.value == null || nombreTarjeta.value === ''){
            mensajesError.push('El nombre y apellido es requerido');
        }
        if (numeroT.value == null || numeroT.value === '' || numeroT.value == isNaN() ){
            mensajesError.push('El numero de la tarjeta es requerido');
        }
        if (exp.value == null || exp.value === '' || exp.value == isNaN()){
            mensajesError.push('la fecha de expiración es requerida');
        }
        if (nombre.cvv == null || cvv.value === '' || cvv.value == isNaN()){
            mensajesError.push('el código CVV es requerido');
        }

        errorMensajes.innerHTML = mensajesError.join(', ');

        
    });
*/