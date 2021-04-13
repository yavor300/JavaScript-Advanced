function solve() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const inputElements = Array.from(document.querySelectorAll('input'));
    const unorderedLists = Array.from(document.querySelectorAll('ul'));

    const onScreenBtn = buttons[0];
    onScreenBtn.addEventListener('click', onScreen);

    const ulMovieItems = unorderedLists[0];
    ulMovieItems.addEventListener('click', archiveMovie);

    const ulArchiveMovies = unorderedLists[1];
    ulArchiveMovies.addEventListener('click', deleteSingleMovie);

    const clearBtn = buttons[1];
    clearBtn.addEventListener('click', clear);

    function onScreen(ev) {
        ev.preventDefault();

        const movieName = inputElements[0].value.trim();
        const movieHall = inputElements[1].value.trim();
        const movieTicketPrice = inputElements[2].value.trim();

        if (movieName.length !== 0 && movieHall.length !== 0 && movieTicketPrice.length !== 0 && !isNaN(Number(movieTicketPrice))) {
            let liMovieItem = createElement('li', '');
            const spanMovieName = createElement('span', movieName);
            const strongMovieHall = createElement('strong', `Hall: ${movieHall}`);
            
            let divPriceContainer = createElement('div', '');
            const strongPriceValue = createElement('strong', Number(movieTicketPrice).toFixed(2));
            const inputTicketsSold = createElement('input');
            inputTicketsSold.placeholder = 'Tickets Sold';
            const buttonArchive = createElement('button', 'Archive');

            divPriceContainer = appendElements(divPriceContainer, strongPriceValue, inputTicketsSold, buttonArchive);
            liMovieItem = appendElements(liMovieItem, spanMovieName, strongMovieHall, divPriceContainer);

            appendElements(ulMovieItems, liMovieItem);
        }

        clearInputFields(inputElements);
    }

    function archiveMovie(ev) {
        if (ev.target.tagName === 'BUTTON') {
            const targetBtn = ev.target;
            const ticketsInput = targetBtn.previousElementSibling;

            const ticketsCount = ticketsInput.value.trim();

            if (ticketsCount.length !== 0 && !isNaN(Number(ticketsCount))) {
                const archiveMoviePrice = Number(targetBtn.previousElementSibling.previousElementSibling.textContent);
                const archiveMovieTotalPrice = Number(ticketsCount) * archiveMoviePrice;
                const archiveMovieName = Array.from(targetBtn.parentNode.parentNode.children)[0].textContent;
                
                let liArchiveItem = createElement('li', '');
                const spanArchiveMovieName = createElement('span', archiveMovieName);
                const strongArchiveTotalAmount = createElement('strong', `Total amount: ${archiveMovieTotalPrice.toFixed(2)}`);
                const buttonDelete = createElement('button', 'Delete');

                liArchiveItem = appendElements(liArchiveItem, spanArchiveMovieName, strongArchiveTotalAmount, buttonDelete);

                appendElements(ulArchiveMovies, liArchiveItem);

                ev.target.parentNode.parentNode.remove();
            }

            ticketsInput.value = '';
        }
    }

    function deleteSingleMovie(ev) {
        if (ev.target.tagName === 'BUTTON') {
            ev.target.parentNode.remove();
        }
    }

    function clear() {
        Array.from(ulArchiveMovies.children).forEach(child => child.remove());
    }

    function createElement(type, content) {
        const result = document.createElement(type);
        result.textContent = content;
        return result;
    }

    function appendElements(parent, ...children) {
        children.forEach(child => {
            parent.appendChild(child);
        });
        return parent;
    }

    function clearInputFields(fields) {
        fields.forEach(field => {
            field.value = '';
        });
    }
}