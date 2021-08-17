function solve() {
   let shoppingCartElement = document.querySelector('.shopping-cart');
   let total = 0;
   let set = new Set();
   let resultElement = shoppingCartElement.querySelector('textarea');

   shoppingCartElement.addEventListener('click', function (e) {

      if (e.target.className === 'add-product') {
         let productElement = e.target.parentNode.parentNode;
      let productName = productElement.querySelector('.product-title').textContent;
      let productPrice = Number(productElement.querySelector('.product-line-price').textContent);

      total += productPrice;
      set.add(productName);

      resultElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      }
   })

   let checkoutElement = document.querySelector('.checkout');

   checkoutElement.addEventListener('click', function (e) {

      resultElement.textContent += `You bought ${Array.from(set).join(', ')} for ${total.toFixed(2)}.`;

      let buttonElements = Array.from(shoppingCartElement.querySelectorAll('button'));

      buttonElements.map(x => x.disabled = true);
   })
   
}