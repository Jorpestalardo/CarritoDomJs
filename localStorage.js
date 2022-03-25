'use strict'

guardar_localStorage();

obtener_localStorage();

function obtener_localStorage(){

    if (localStorage.getItem (" productos ")){
        let productos = JSON.parse( localStorage.getItem( "productos "));
        console.log(productos);
    } else {
        console.log('No hay entradas en el localStorage');
    }

}


function guardar_localStorage(){
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
    
    ]
}

localStorage.setItem( "productos ", JSON.stringify ( productos ));