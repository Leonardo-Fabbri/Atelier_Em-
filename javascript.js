// CODICE JAVASCRIPT PER MENU HEADER

// VENGONO STANZIATE LE VARIABILI PER OGNI ELEMENTO RIGUARDANTE L'ANIMAZIONE DEL MENU
let menuTog = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left')
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-links'));

// VIENE CREATA UNA FUNZIONE. 'ON CLICK' su 'LET menuTog' = ".menu-toggle", -
//- si attivano tutte le classi che permettono l'animazione del menu
menuTog.addEventListener('click', () => {
    menuTog.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    nav.classList.toggle('active');


    //per togliere la classe 'active' per poter ricomincaire l'azione 
    navRight.classList.remove('active');

    //se 'LET menuTog' = ".menu-toggle" contiene la classe 'active':
    if(menuTog.classList.contains('active')) {
        //viene stanziata una funzione di tempo per let navRight = ".nav-right" 
        setTimeout(() =>{
            navRight.classList.add('active');
        },200)


        //uso un ciclo for per l'animazione dei link con incremento  di tempo
        for(let i = 0; i < navLinks.length; i++) {
           // funzione di tempo 
            setTimeout(()=> {
                navLinks[i].classList.add('active')
            }, i * 500)
            // per ripetere animazione 
            navLinks[i].classList.remove('active');
        }
    }





})


