function solve() {
    const addBtn = document.querySelector('button');
    const modulesParent = document.querySelector('div.modules');

    addBtn.addEventListener('click', addNewLecture);
    modulesParent.addEventListener('click', removeLecture);

    function removeLecture(ev) {
        if (ev.target.tagName === 'BUTTON') {
            if (Array.from(ev.target.parentNode.parentNode.children).length === 1) {
                ev.target.parentNode.parentNode.parentNode.remove();
            } else {
                ev.target.parentNode.remove();
            }
        }
    };

    function addNewLecture(ev) {
        ev.preventDefault();

        const inputFields = Array.from(document.querySelectorAll('input'));
        const lectureNameInputField = inputFields[0];
        const dateInputField = inputFields[1];
        const selectField = document.querySelector('select');

        if (validateInput(lectureNameInputField, dateInputField, selectField)) {
            const divModule = createElement('div', '');
            divModule.classList.add('module');
            const moduleName = createElement('h3', selectField.value.toUpperCase() + '-MODULE');
            appendElements(divModule, moduleName);

            let ulLectures = createElement('ul', '');
            const liLecture = createElement('li', '');
            liLecture.classList.add('flex');

            const dateTimeTokens = dateInputField.value.split('T');

            const h4LectureName = createElement('h4', lectureNameInputField.value + ' - ' + dateTimeTokens[0].replaceAll('-', '/') + ' - ' + dateTimeTokens[1]);
            const delButton = createElement('button', 'Del');
            delButton.classList.add('red');

            ulLectures = appendElements(ulLectures, appendElements(liLecture, h4LectureName, delButton));


            const modulesChildren = Array.from(modulesParent.children);
            let isModulePresent = false;
            let existingModuleHeading;
            for (let i = 0; i < modulesChildren.length; i++) {
                if (Array.from(modulesChildren[i].children)[0].textContent === moduleName.textContent) {
                    isModulePresent = true;
                    existingModuleHeading = Array.from(modulesChildren[i].children)[0];
                    break;
                }
            }

            if (isModulePresent) {
                const existingModuleUl = existingModuleHeading.nextElementSibling;
                appendElements(liLecture, h4LectureName, delButton);
                appendElements(existingModuleUl, liLecture);

                const childrenUl = Array.from(existingModuleUl.children);
                existingModuleUl.innerHTML = '';

                childrenUl.sort((f, s) => {
                    const firstEl = Array.from(f.children)[0].textContent.split(' - ')[1];
                    const secondEl = Array.from(s.children)[0].textContent.split(' - ')[1];

                    return firstEl.localeCompare(secondEl);
                })
                .forEach(element => {
                    appendElements(existingModuleUl, element);
                });
            } else {
                appendElements(modulesParent, appendElements(divModule, ulLectures));
            }
        }
    };

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

    function validateInput(...input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i].tagName === 'SELECT' && input[i].value === 'Select module') {
                return false;
            } else {
                if (input[i].value.length === 0) {
                    return false;
                }
            }
        }
        return true;
    }
};