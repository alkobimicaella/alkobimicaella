// Initialize the PayPal button
paypal.Buttons({
  createOrder: function(data, actions) {
    // Calculate the total price from the items in the cart
    const totalPrice = parseFloat(document.getElementById('cart-total').innerText);

    // Set up the transaction details
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: totalPrice.toFixed(2) // Round to 2 decimal places
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    // Capture the payment and handle post-payment actions
    return actions.order.capture().then(function(details) {
      alert('Transaction completed!'); // Display a confirmation message
      // You can add additional actions here, like updating the database
      // Redirect to another page
      window.location.href = 'https://spankbang.com/7ponh/video/the+beginning+by+one+ok+rock+featuring+ameri+ichinose'; // Replace 'thankyou.html' with your desired page URL
    });
  }
}).render('#paypal-button-container');

// Add event listener to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const price = parseFloat(button.getAttribute('data-price'));
    addToCart(price);
  });
});

// Function to add items to the shopping cart
function addToCart(price) {
  const cartTotalElement = document.getElementById('cart-total');
  const currentTotal = parseFloat(cartTotalElement.innerText);
  const newTotal = currentTotal + price;
  cartTotalElement.innerText = newTotal.toFixed(2);

  const cartItemsList = document.querySelector('.cart-items');
  const listItem = document.createElement('li');
  listItem.innerText = `$${price.toFixed(2)}`;
  cartItemsList.appendChild(listItem);
}
