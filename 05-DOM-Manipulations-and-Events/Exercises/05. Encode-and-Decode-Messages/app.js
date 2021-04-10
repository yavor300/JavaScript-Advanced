function encodeAndDecodeMessages() {
    const main = document.querySelector('#main');
    main.addEventListener('click', (ev) => {
        const textAreaInput = document.querySelector('textarea');
        const textAreaOutput = Array.from(document.querySelectorAll('textarea'))[1];
        const message = textAreaInput.value;

        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Encode and send it') {
            let encodedMessage = '';
            for (let i = 0; i < message.length; i++) {
                encodedMessage += (String.fromCharCode(message.charCodeAt(i) + 1));
            }
            textAreaInput.value = '';
            textAreaOutput.value = encodedMessage;
        } else if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Decode and read it') {
            let decodedMessage = '';
            for (let i = 0; i < textAreaOutput.value.length; i++) {
                decodedMessage += (String.fromCharCode(textAreaOutput.value.charCodeAt(i) - 1));
            }
            textAreaOutput.value = decodedMessage;
        }
    });
}