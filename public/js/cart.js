// ====== CART.JS ======

// ----- UTILITIES -----
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || []
  } catch {
    return []
  }
}

function setCart(nextCart) {
  localStorage.setItem('cart', JSON.stringify(nextCart))
}

// ----- REFERENCES -----
const cartContainer = document.getElementById('cart-container')
const cartTotal = document.getElementById('cart-total')
const checkoutBtn = document.getElementById('checkout-btn')

// ----- RENDER CART -----
function renderCart() {
  const cart = getCart()
  if (!cartContainer) return

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>Your cart is empty.</p>`
    if (cartTotal) cartTotal.textContent = '0'
    return
  }

  let total = 0
  cartContainer.innerHTML = cart
    .map((item, index) => {
      total += Number(item.price) || 0
      return `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.title}" />
          <div class="info">
            <h3>${item.title}</h3>
            <p>₦${Number(item.price).toLocaleString()}</p>
          </div>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `
    })
    .join('')

  if (cartTotal) cartTotal.textContent = total.toLocaleString()
}

// ----- REMOVE ITEM -----
function removeFromCart(index) {
  const cart = getCart()
  cart.splice(index, 1)
  setCart(cart)
  renderCart()
}

// Expose remove function globally for button onclick
window.removeFromCart = removeFromCart

// ----- FLUTTERWAVE CHECKOUT -----
function payWithFlutterwave() {
  const cart = getCart()
  if (cart.length === 0) {
    alert('Your cart is empty!')
    return
  }

  const totalAmount = cart.reduce((sum, item) => sum + Number(item.price), 0)

  FlutterwaveCheckout({
    public_key: 'FLWPUBK_TEST-f56eef65392791133763befa8ae5048c-X', // replace with live key in production
    tx_ref: 'txn-' + Date.now(),
    amount: totalAmount,
    currency: 'NGN',
    payment_options: 'card, banktransfer, ussd, mobilemoney',
    customer: {
      email: 'customer@example.com', // dynamically replace if needed
      phonenumber: '08000000000',
      name: 'Artifact Buyer',
    },
    callback: function (payment) {
      if (payment.status === 'successful') {
        alert('✅ Payment successful!')
        setCart([])
        renderCart()
      } else {
        alert('❌ Payment failed or cancelled')
      }
    },
    onclose: function () {
      console.log('Payment modal closed')
    },
    customizations: {
      title: 'Benin Vault Purchase',
      description: 'Payment for selected artifacts',
      logo: 'image/download (1).png',
    },
  })
}

// Bind checkout button safely
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', payWithFlutterwave)
}

// ----- INITIALIZE -----
document.addEventListener('DOMContentLoaded', () => {
  renderCart()
})
