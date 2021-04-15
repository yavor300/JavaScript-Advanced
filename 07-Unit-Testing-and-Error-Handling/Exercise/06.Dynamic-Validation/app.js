function validate() {
    const email = document.querySelector('#email');
    email.addEventListener('blur', (ev) => {
        if (!/^[a-z]+@[a-z]+.[a-z]+$/gm.test(ev.target.value)) {
            ev.target.classList.add('error');
        } else {
            ev.target.classList.remove('error');
        }
    });
}