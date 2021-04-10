function solve() {
   const cart = {
      'Bread': 0,
      'Milk': 0,
      'Tomatoes': 0
   }

   const shoppingCart = Array.from(document.getElementsByClassName('shopping-cart'))[0];

   shoppingCart.addEventListener('click', onClick);

   function onClick(ev) {
      const textArea = Array.from(document.getElementsByTagName('textarea'))[0];

      if (ev.target.tagName === 'BUTTON' && ev.target.className.includes('add-product')) {
         const productData = Array.from(ev.target.parentNode.parentNode.children);
         const productName = Array.from(productData[1].children)[0].firstChild.textContent;
         const productPrice = productData[3].textContent;
         

         textArea.value += `Added ${productName} for ${productPrice} to the cart.\n`

         cart[productName] += Number(productPrice);
      }

      if (ev.target.tagName === 'BUTTON' && ev.target.className.includes('checkout')) {
         const boughtProducts = [];
         let total = 0;
         for (const [key, value] of Object.entries(cart)) {
            if (value !== 0) {
               if (!boughtProducts.includes(key)) {
                  boughtProducts.push(key);
               }
               total += value;
            }
         }

         textArea.value += `You bought ${boughtProducts.join(', ')} for ${total.toFixed(2)}.`

         disableButtons();
         shoppingCart.removeEventListener('click', onClick);
      }
   }

    function disableButtons() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }
}