

// ------------JS FOR MENU BUTTON----------

const menuIcons = document.querySelector('.menu-icon')
const menuItems = document.querySelector('#MenuItems')

menuItems.style.maxHeight = "0px";

menuIcons.addEventListener('click', () => {

  if(menuItems.style.maxHeight == "0px"){
    menuItems.style.maxHeight = "200px";
  }
  else {
    menuItems.style.maxHeight = "0px";
  }
})

	// -------- JS FOR PRODUCT GALLERY ----------

  const productImg = document.querySelector('#product-img')
  const smallImg = document.querySelectorAll('.small-img')

  smallImg[0].addEventListener('click', () => {
    productImg.src = smallImg[0].src;
  })
  smallImg[1].addEventListener('click', () => {
    productImg.src = smallImg[1].src;
  })
  smallImg[2].addEventListener('click', () => {
    productImg.src = smallImg[2].src;
  })
  smallImg[3].addEventListener('click', () => {
    productImg.src = smallImg[3].src;
  })



