// ==UserScript==
// @name         Asignar variable persistente para tiendas
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Asigna la variable persistente 'tiendas' para ser usada en otros scripts
// @author       You
// @match        *://*.contimarket.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

// Asignamos la variable 'tiendas' y la guardamos usando GM_setValue
const tiendas = {
    interior: [
        {nombre: "4R EXPRESS", direccion: "Coronel Bogado"},
        {nombre: "A TU ESTILO BOUTIQUE", direccion: "Carapegua"},
        {nombre: "A Y C JEANS", direccion: "Bella Vista, Itapua"},
        {nombre: "A Y C KIDS", direccion: "Bella Vista, Itapua"},
        {nombre: "AJOS LA TIENDA", direccion: "Coronel Bogado"},
        {nombre: "ALMACEN DE MASCOTAS", direccion: "Hohenau"},
        {nombre: "ALPHA SPORTS", direccion: "Villarrica"},
        {nombre: "ALPHA STORE", direccion: "Cptan Meza"},
        {nombre: "ANTANA DEPORTES", direccion: "Villarrica"},
        {nombre: "ARC ELECTRODOMESTICOS", direccion: "Encar"},
        {nombre: "ATENAS SPORTS", direccion: "Villarrica"},
        {nombre: "CARLOS MOTORREPUESTOS", direccion: "Villarrica"},
        {nombre: "CASA AMERICANA", direccion: "CdE"},
        {nombre: "CASA GONZALITO", direccion: "Villarrica"},
        {nombre: "CASA MULTICOMPRAS", direccion: "Carapegua"},
        {nombre: "CHRISTIAN DEPORTES", direccion: "Encarnación"},
        {nombre: "DAN VIC ELECTRODOMESTICOS", direccion: "Villarrica"},
        {nombre: "ELECTRONIK CELL", direccion: "Saltos del Guaira"},
        {nombre: "ESTILO SPORTS SHOP", direccion: "Encarnación"},
        {nombre: "FERBOTEC SA", direccion: "Coronel Oviedo"},
        {nombre: "FRAGANZA VIP", direccion: "Caaguazu"},
        {nombre: "GAETE TIENDA DEPORTIVA", direccion: "Maria Auxiliadora, debajo de CdE"},
        {nombre: "GIULIO CESARE", direccion: "Capitán Miranda, Itapúa"},
        {nombre: "IRIS CENTER", direccion: "Cnel Oviedo"},
        {nombre: "JAVI DEPORTES", direccion: "Encarnación"},
        {nombre: "MAPY SHOPPING", direccion: "Salto del Guaira"},
        {nombre: "MAXI SPORTS", direccion: "Encarnación"},
        {nombre: "MAXIN INVERSIONES", direccion: "Encarnación"},
        {nombre: "MUNDO URBANO", direccion: "Encarnación"},
        {nombre: "NIÑOS Y CIA", direccion: "Obligado, Itapúa"},
        {nombre: "NOVEDADES MAGGI", direccion: "Itapúa"},
        {nombre: "ÑEMONDE", direccion: "Encarnación"},
        {nombre: "OFERMAX PERFUMES", direccion: "María Auxiliadora"},
        {nombre: "PABLITO SPORTS", direccion: "Stma Trinidad del Parana"},
        {nombre: "PADEL PRO 15/40", direccion: "Obligado, Itapúa"},
        {nombre: "PAO PAO MODA E INNOVACION", direccion: "Itapúa"},
        {nombre: "PH SPORT", direccion: "Maria Auxiliadora"},
        {nombre: "PREMIER SPORTS", direccion: "Caaguazu"},
        {nombre: "PUBLISPORT", direccion: "Maria Auxiliadora"},
        {nombre: "RENOVA PADEL", direccion: "CIUDAD DEL ESTE"},
        {nombre: "RULO SPORT", direccion: "Encar, Villarrica"},
        {nombre: "SAMDAI MODA INFANTIL", direccion: "Capitán Miranda"},
        {nombre: "SC DEPORTES", direccion: "Encarnación"},
        {nombre: "SUPERMERCADO HERRERO", direccion: "Villarrica"},
        {nombre: "TODOCENTER", direccion: "Villarrica"},
        {nombre: "TOYS TIENDA DE JUGUETES", direccion: "Hohenau, Itapúa"},
        {nombre: "WINNER SPORTS", direccion: "Pirapo, Itapúa"},
        {nombre: "URBAN&CO", direccion: "Villarrica"},
        {nombre: "JAKARE LA TIENDA", direccion: "Villarrica, Encar"}
    ],
    asuncion: [
        {nombre: "8a IMPORT", direccion: "J A Flores 3638, Asu"},
        {nombre: "A CACERES SPA", direccion: "Sucre, Asu"},
        {nombre: "AB CALZADOS", direccion: "Luque"},
        {nombre: "ALL INCLUSIVE S.A.", direccion: "Denis Gauto, Luq"},
        {nombre: "CAMPING 44", direccion: "Artigas, Asu"},
        {nombre: "CAR SHOW", direccion: "Rta 1, SLo"},
        {nombre: "CARPINCHO HOGAR", direccion: "FdM"},
        {nombre: "CARVAZ ELECTRONICA E INFORMATICA", direccion: "Estrella, Asu"},
        {nombre: "CASA AMERICANA", direccion: "Paseo La Galeria, Asu; CdE"},
        {nombre: "COMPRE MEJOR", direccion: "Emilio Pastore, Asu"},
        {nombre: "DEPORTI", direccion: "Azara c/Antequera, Asu"},
        {nombre: "FASHION POINT", direccion: "FdM, Ñby"},
        {nombre: "IRON STORE", direccion: "Charles y Las Palmeras, Asu"},
        {nombre: "JW SPORT", direccion: "Lambare"},
        {nombre: "LA ELECTROTIENDA", direccion: "Tte. Vera, Asu"},
        {nombre: "LA TIENDA HESED", direccion: "Herminio Gimenez, Lambare"},
        {nombre: "PADEL PRO S.A.", direccion: "Felix Bogado, Asu"},
        {nombre: "PANTERA SPORT", direccion: "Villamorra"},
        {nombre: "PIPOL", direccion: "Shop del Sol"},
        {nombre: "PRANA", direccion: "Bulnes, Asu"},
        {nombre: "PUNTO TIENDA", direccion: "Rta Transchaco, Loma Pyta"},
        {nombre: "RACING MOTO PART'S", direccion: "Avda Madame Lynch 2448, Asu"},
        {nombre: "S&S VENTAS", direccion: "11 de Sept, FdM"},
        {nombre: "SPORT CENTER", direccion: "Av. FdM, Asu"},
        {nombre: "TECNO PADEL", direccion: "Cnel Benza Carrera, FdM"},
        {nombre: "TIENDA PADEL PY", direccion: "Tte Ettiene, FdM"},
        {nombre: "TODO TENIS", direccion: "15 de Agosto, Asu"},
        {nombre: "TOP TENIS", direccion: "Pitiantuta c/España, Asu"},
        {nombre: "ULIKO STORE", direccion: "Europa, Asu"},
        {nombre: "WILMAR CENTER", direccion: "Km 15.5, MRA"},
        {nombre: "ELECTROMAX SA", direccion: "Mcal Estigarribia e/Leopardi y 1ro de Mayo, FdM"},
        {nombre: "SPORT SHOP", direccion: "Lamb"},
        {nombre: "MY STORE", direccion: "Artigas, Asu"},
        {nombre: "THE BLACK COW", direccion: "Luque"},
        {nombre: "NAPOLES STORE", direccion: "Luque"},
        {nombre: "SUEÑOS ENCANTADOS", direccion: "1. Boggiani 2. Eusebio c/Bruguez, Asu"},
        {nombre: "CHACOMER", direccion: "Eusebio c/Rpca Argentina, Asu"}
    ]
};

// Guardar la variable 'tiendas' en el almacenamiento persistente de Tampermonkey
GM_setValue('tiendas', JSON.stringify(tiendas));

// const tiendasRecuperadas = JSON.parse(GM_getValue('tiendas'));
// console.log(tiendasRecuperadas);
