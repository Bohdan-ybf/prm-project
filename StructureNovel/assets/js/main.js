document.addEventListener('DOMContentLoaded', function () {

    if (window.innerWidth > 1060) {
        window.onscroll = function () {
            let header = document.querySelector(".header");
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll >= 50) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }
        };
    }

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

    //E-mail Ajax Send =====================================================
    const form = document.querySelector('.form');

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
                        const formModal = document.querySelector('.form-modal');
                        if (formModal) {
                            formModal.classList.add('success');
                        }
                    }
                });
        });
    }
});