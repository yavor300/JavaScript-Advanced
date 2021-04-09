function validate() {
    const emailElement = document.getElementById('email');

    emailElement.addEventListener('change', (ev) => {
        const email = emailElement.value;
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!regex.test(email)) {
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }
    })
}