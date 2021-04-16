function validate() {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const email = document.querySelector('#email');
    const isCompany = document.querySelector('#company');
    const companyInfo = document.querySelector('#companyInfo');
    const btnSubmit = document.querySelector('#submit');

    isCompany.addEventListener('change', showOrHideCompanyInfo);
    btnSubmit.addEventListener('click', validateForm);


    function showOrHideCompanyInfo() {
        if (isCompany.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function validateForm(ev) {
        ev.preventDefault();

        const usernameRegex = /^[a-zA-Z0-9]*$/gm;
        const passwordRegex = /^[a-zA-Z0-9_]*$/gm;
        const confirmPasswordRegex = /^[a-zA-Z0-9_]*$/gm;
        const emailRegex = /^(.+@(.+)?\.(.+)?)$/gm;

        let areAllValid = true;
    
        if (username.value.length < 3 || username.value.length > 20 || !usernameRegex.test(username.value)) {
            username.style.borderColor = 'red';
            areAllValid = false;
        } else {
            username.style.border = 'none';
        }
    
        if (password.value.length < 5 || password.value.length > 15 || !passwordRegex.test(password.value)) {
            password.style.borderColor = 'red';
            areAllValid = false;
        } else {
            password.style.border = 'none';
        }
    
        if (confirmPassword.value.length < 5 || confirmPassword.value.length > 15 || !confirmPasswordRegex.test(confirmPassword.value)) {
            console.log(confirmPassword.value)
            confirmPassword.style.borderColor = 'red';
            areAllValid = false;
        } else {
            confirmPassword.style.border = 'none';
        }

        if (password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            areAllValid = false;
        }
    
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'red';
            areAllValid = false;
        } else {
            email.style.border = 'none';
        }

        if (companyInfo.style.display === 'block') {
            const companyNumber = document.querySelector('#companyNumber');
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                areAllValid = false;
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if (areAllValid) {
            document.querySelector('#valid').style.display = 'block';
        } else {
            document.querySelector('#valid').style.display = 'none';
        }
    }
}