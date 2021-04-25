let burger = document.querySelector('.burger');
let list = document.querySelector('.header-nav')

console.log(list.classList)


burger.addEventListener('click', () => {
	list.classList.toggle('open')
	burger.classList.toggle('open')
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}