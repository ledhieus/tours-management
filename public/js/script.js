// slider Tour Detail
var imagesThumb = new Swiper(".imagesThumb", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var imageMain = new Swiper(".imageMain", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: imagesThumb,
    },
  });
// End slider Tour Detail

const alertAddCartSuccess = () => {
  const alert = document.querySelector("[alert-add-cart-success]")
  if(alert){
    alert.classList.remove("alert-hidden")
    setTimeout(()=> {
      alert.classList.add("alert-hidden")
    }, 3000)

    const closeAlert = alert.querySelector("[close-alert]")
    closeAlert.addEventListener("click", ()=> {
      alert.classList.add("alert-hidden")
    })
  }
}










//carts
//Nếu chưa có giỏ hàng thì tạo giỏ hàng
const cart = localStorage.getItem("cart")
if(!cart){
  console.log("card")
  localStorage.setItem("cart", JSON.stringify([]))
}
//Thêm tour vào cart
const formAddToCart = document.querySelector("[form-add-to-cart]")
if(formAddToCart){
  formAddToCart.addEventListener("submit", (event) => {
    event.preventDefault()

    const quantity = parseInt(event.target.elements.quantity.value)
    const tourId = parseInt(formAddToCart.getAttribute("tour-id"))
    if(quantity > 0 && tourId){
      const cart = JSON.parse(localStorage.getItem("cart"))

      const indexExistTour = cart.findIndex(item => item.tourId == tourId)

      if(indexExistTour == -1){
        cart.push({
          tourId: tourId,
          quantity: quantity
        })
      } else {
        cart[indexExistTour].quantity = cart[indexExistTour].quantity + quantity
      }
      

      localStorage.setItem("cart", JSON.stringify(cart))
      alertAddCartSuccess()
    }
  })
}
//end carts
