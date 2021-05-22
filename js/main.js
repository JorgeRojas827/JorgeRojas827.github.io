import Typed from 'typed.js';

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.mainText', options);

const carga = document.querySelector('.pantallacarga')

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", `transform: translateY(${(e.pageY - 100)}px) translateX(${(e.pageX + 10)}px)`);
// })

$('ul li').click(function () { 
    let widthItem = $('.navbaritem').width();
    let numElemento = $(this).index();

    console.log(widthItem)

    let box = $('#cajamovible')
    box.width(widthItem + 15);
    box.css({
        "top": `${(numElemento) * 64.438}px`
    })
});


