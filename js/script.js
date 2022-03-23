// botões sem funcionalidade (por enquanto)


let links = document.getElementsByClassName('links')
for (let i = 0; i < links.length; i++){
  let link = links[i]
  link.addEventListener('click',() => {
    alert('Em breve...')
  } )
}


let checkOut = document.getElementById('btn-b')
checkOut.addEventListener('click', () => {
  alert('Em breve...')
})

let buttonCategories = document.getElementsByClassName('btn-categories')
for (let i = 0; i < buttonCategories.length; i++){
  let buttonCategorie = buttonCategories[i]
  buttonCategorie.addEventListener('click',() => {
    alert('Em breve...')
  } )
}

let buttonOffer = document.getElementsByClassName('offer-btn')[0]
buttonOffer.addEventListener('click', () => {
  alert('Em breve...')
})


let seeMoreButtons = document.getElementsByClassName('see-more-btn')
for (let i = 0; i < seeMoreButtons.length; i++){
  let seeMoreButton = seeMoreButtons[i]
  seeMoreButton.addEventListener('click',() => {
    alert('Em breve...')
  } )

  
}


// abrindo e fechando o carrinho

let cartIcon = document.getElementsByClassName('nav-icon')[0]
cartIcon.addEventListener('click', () => {
  let cartShop = document.getElementsByClassName('container-cart-shop')[0]
  if (cartShop.classList.contains('hide')){
    cartShop.classList.add('show')
    cartShop.classList.remove('hide')
  }else{
    cartShop.classList.add('hide')
    cartShop.classList.remove('show')
  }
  
})

// funcionalidade do carrinho

let removeButtons = document.getElementsByClassName('remove-item')
for (let i = 0; i < removeButtons.length; i++) {
  let removeButton = removeButtons[i]
  removeButton.addEventListener('click', removeFromCart)
}

let addButtonns = document.getElementsByClassName('add-to-cart-btn')
for (let i = 0; i < addButtonns.length; i++) {
  let addButton = addButtonns[i]
  addButton.addEventListener('click', addToCart)
}

let inputQuantity = document.getElementsByClassName('inputs-quantity')
for (let i = 0; i < inputQuantity.length; i++) {
  let input = inputQuantity[i]
  input.addEventListener('change', inputChanged)
}

let purchaseButton = document.getElementsByClassName('purchase-btn')[0].addEventListener('click', purchaseFunction)


function removeFromCart(event) {
  let buttonRmv = event.target
  buttonRmv.parentElement.parentElement.remove()
  updateCartTotal()
}

function addToCart(event) {
  let buttonAdd = event.target
  let shopItem = buttonAdd.parentElement.parentElement
  let itemName = shopItem.getElementsByClassName('name-product')[0].innerText
  let priceItem = shopItem.getElementsByClassName('price-product')[0].innerText
  let imageSrc = shopItem.getElementsByClassName('img-item')[0].src
  addItemToTheCart(itemName, priceItem, imageSrc)
  updateCartTotal()
}


function inputChanged(event) {
  let inputs = event.target
  if (isNaN(inputs.value) || inputs.value <= 0) {
    inputs.value = 1
  }
  updateCartTotal()
}

function addItemToTheCart(itemName, priceItem, imageSrc) {
  let itemsShop = document.createElement('div')
  itemsShop.classList.add('items')
  let cartItems = document.getElementsByClassName('cart-shop-items')[0]
  let nameOfItem = document.getElementsByClassName('name-item')
  for (let i = 0; i < nameOfItem.length; i++) {
    if (nameOfItem[i].innerText == itemName) {
      alert('Você já adicionou este item ao seu carrinho!')
      return
    }
  }
  let cartContent = ` <div class="item-content">
  <img src="${imageSrc}" alt="Calça masculina" width="100px">
  <span class="name-item">${itemName}</span>
</div>

  <span class="price-item">${priceItem}</span>

<div class="quantity-and-remove">
  <input type="number" value="1" class="inputs-quantity">
  <button class="remove-item">REMOVER</button>
</div>`
  itemsShop.innerHTML = cartContent
  cartItems.append(itemsShop)
  itemsShop.getElementsByClassName('remove-item')[0].addEventListener('click', removeFromCart)
  itemsShop.getElementsByClassName('inputs-quantity')[0].addEventListener('change', inputChanged)
}


function updateCartTotal() {
  let containerItems = document.getElementsByClassName('cart-shop-items')[0]
  let ItemsInsideCart = containerItems.getElementsByClassName('items')
  let total = 0
  for (let i = 0; i < ItemsInsideCart.length; i++) {
    let itemInside = ItemsInsideCart[i]
    let priceItem = itemInside.getElementsByClassName('price-item')[0]
    let quantityItem = itemInside.getElementsByClassName('inputs-quantity')[0]
    let price = parseFloat(priceItem.innerText.replace('$', ''))
    let quantity = quantityItem.value
    total = total + (price * quantity)
  }
  total = Math.floor(total * 100) / 100
  document.getElementById('h2-total').innerText = '$' + total
}

function purchaseFunction() {
  let totalPurchase = document.getElementById('h2-total')
  if (totalPurchase.innerText == '$0'){
    alert('Por favor, adicione itens ao carrinho')
  } else {
    let someCartItems = document.getElementsByClassName('cart-shop-items')[0]
    while (someCartItems.hasChildNodes()) {
      someCartItems.removeChild(someCartItems.firstChild)
    }
    alert('Obrigado por comprar na GreatShop!')
    updateCartTotal()
  }
}


// countdown do fim da promoção

const daysCD = document.getElementById('days')
const hoursCD = document.getElementById('hours')
const minutesCD = document.getElementById('minutes')
const secondsCD = document.getElementById('seconds')

const endOfPromotion = '28 mar 2022'

function countdownPromotion() {
  const promotion = new Date(endOfPromotion)
  const currentDate = new Date()

  const totalSeconds = (promotion - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const secs = Math.floor(totalSeconds) % 60


  daysCD.innerHTML = days
  hoursCD.innerHTML = formatTime(hours)
  minutesCD.innerHTML = formatTime(minutes)
  secondsCD.innerHTML = formatTime(secs)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdownPromotion()

setInterval(countdownPromotion, 1000)

// slider com glider.js

new Glider(document.querySelector('.slider'), {
  slidesToShow: 1,
  dots: '.slider-dots',
  draggable: true,
  arrows: {
    prev: '.slider-prev',
    next: '.slider-next'
  }
});