/* Nav Bar */

function menuShow(){
    let buttonMobile = document.querySelector('.mobile-menu');
    if(buttonMobile.classList.contains('open')){
        buttonMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg"
        
    } else {
        buttonMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg"
    }
}


/*Button Clicks */

document.querySelector(".certificado").addEventListener('click', function() {
    window.open('https://www.freecodecamp.org/SaraNagahara', '_blank');
});

document.querySelector(".github-logo").addEventListener('click' , function(){
    window.open('https://github.com/SaraNagahara', '_blank');
});

document.querySelector(".code-logo").addEventListener('click' , function(){
    window.open('https://codepen.io/SaraNagahara', '_blank');
});

/*email */

function enviarEmail() {
    window.location.href = 'mailto:sarasfnagahara@gmail.com';
}


