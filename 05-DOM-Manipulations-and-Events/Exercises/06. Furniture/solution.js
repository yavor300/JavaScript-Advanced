function solve() {
  const parentElement = document.querySelector('#exercise');

  parentElement.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Generate') {
      const furniture = JSON.parse(document.querySelector('textarea').value)
      
      furniture.forEach(element => {
        const row = document.createElement('tr');

        const tableDataImage = document.createElement('td');
        const image = document.createElement('img');
        image.src = element.img;
        tableDataImage.appendChild(image);

        row.appendChild(tableDataImage);

        const tableDataProductName = document.createElement('td');
        const productNameP = document.createElement('p');
        productNameP.textContent = element.name;
        tableDataProductName.appendChild(productNameP);

        row.appendChild(tableDataProductName);

        const tableDataProductPrice = document.createElement('td');
        const productPriceP = document.createElement('p');
        productPriceP.textContent = element.price;
        tableDataProductPrice.appendChild(productPriceP);

        row.appendChild(tableDataProductPrice);

        const tableDataProductDecFactor = document.createElement('td');
        const productDecFactorP = document.createElement('p');
        productDecFactorP.textContent = element.decFactor;
        tableDataProductDecFactor.appendChild(productDecFactorP);

        row.appendChild(tableDataProductDecFactor);

        const tableDataMark = document.createElement('td');
        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        tableDataMark.appendChild(inputCheckbox);

        row.appendChild(tableDataMark);

        document.querySelector('tbody').appendChild(row);
      });
    } else if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Buy') {
        const boughtItems = [];

        Array.from(document.querySelectorAll('input')).forEach(checkbox => {
          if (checkbox.checked) {
            const checkedRowElements = Array.from(checkbox.parentNode.parentNode.children);
            const checkedProductName = checkedRowElements[1].firstChild.textContent;
            const checkedProductPrice = Number(checkedRowElements[2].firstChild.textContent);
            const checkedProductDecFactor = Number(checkedRowElements[3].firstChild.textContent);

            const item = {
              name: checkedProductName,
              price: checkedProductPrice,
              decFactor: checkedProductDecFactor
            };

            boughtItems.push(item);
          }
        });

        const boughtFurnitureItemNames = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        boughtItems.forEach(item => {
          boughtFurnitureItemNames.push(item.name);
          totalPrice += item.price;
          totalDecFactor += item.decFactor;
        })
        const averageDecFactor = totalDecFactor / boughtItems.length;

        const textareaOutput = document.querySelectorAll('textarea')[1];
        textareaOutput.value += `Bought furniture: ${boughtFurnitureItemNames.join(', ')}\n`;
        textareaOutput.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        textareaOutput.value += `Average decoration factor: ${averageDecFactor}`;
    }
  });

  
}