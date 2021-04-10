function lockedProfile() {
    const main = document.getElementById('main');

    main.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'BUTTON') {
            const button = ev.target;
            const inputUnlocked = Array.from(ev.target.parentNode.children)[4];
            
            if (button.textContent === 'Show more') {
                if (inputUnlocked.checked === true) {
                    ev.target.previousElementSibling.style.display = 'block';
                    button.textContent = 'Hide it';
                }
            } else {
                if (inputUnlocked.checked === true) {
                    ev.target.previousElementSibling.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }           
        }
    });
}