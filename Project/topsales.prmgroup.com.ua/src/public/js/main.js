// scrollTop
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {});
});

// lightGallery
lightGallery(document.getElementById('animated-thumbnails-gallery'), {
    thumbnail: true,
    plugins: [lgVideo],
});

// ========================FORM BLOCK=============================

const buttonsModal = document.querySelectorAll('.modal-js');
if (buttonsModal) {
    buttonsModal.forEach(function (item) {
        item.addEventListener('click', (event) => {
            const modal = document.querySelector('#modal');
            if (modal) {
                modal.classList.add('active');
                document.body.classList.add('overflow');
            }
        });
    });
}

const buttonModalClose = document.querySelector('#modal-close');
if (buttonModalClose) {
    buttonModalClose.addEventListener('click', (event) => {
        const modal = document.querySelector('#modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.classList.remove('overflow');
        }
    });
}

$(".form-modal__close-button").click(function () {
    $(".form-message").removeClass("active");
});


$(".form-modal__close-button").click(function () {
    $("body").removeClass("overflow active");
});



//E-mail Send ==================================================
const form = document.querySelector('.form-static');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let comment = document.getElementById('comment').value;


        let date = new Date();
        let timestamp = date.getTime();
        const data = new FormData();
        data.append('action', 'submit_form');
        data.append('name', name);
        data.append('phone', phone);
        data.append('email', email);
        data.append('comment', comment);


        fetch('send.php', {
                method: "POST",
                body: data
            })
            .then((response) => response)
            .then(result => {
                console.log(result.status);
                if (result.status === 200) {
                    const formMessage = document.querySelector('.form-message');
                    const scrollHiden = document.querySelector('body');
                    const formModalClose = document.querySelector('.form-modal-wrapper');
                    if (formMessage) {
                        scrollHiden.classList.add('active');
                        formMessage.classList.add('active');
                        formModalClose.classList.remove('active');
                    }
                }
            });
    });
}
