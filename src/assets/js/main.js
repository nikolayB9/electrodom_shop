//JQuery
$(document).on('changed', function () {


//Скрипт для проверки полей формы (Validation в Bootstrap)
// Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    //Задаем класс headernav-scroll элементу с id = header-nav при
    //скролле вниз более чем 167.85px (высота header-top + header-middle)
    window.addEventListener('scroll', function () {
        document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 167.85)
    });


    //Показ/скрытие кнопки #top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    //При клике на кнопку #top подъем наверх за полсекунды
    $('#top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });

    //Вызов функции инициализации OwlCarousel
    $(".owl-carousel-full").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


});