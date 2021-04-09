function focused() {
    // Array.from(document.getElementsByTagName('div'))[0].addEventListener('click', () => {
    //     Array.from(document.getElementsByTagName('input'))
    //     .forEach(element => {
    //         if (element === document.activeElement) {
    //             element.parentNode.className = 'focused';
    //         } else {
    //             element.parentNode.className = '';
    //         }
    //     })
    // })

    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    })

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}