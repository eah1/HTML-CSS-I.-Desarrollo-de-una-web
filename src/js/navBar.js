var menu = document.querySelector('.menu-container')
var bodyPage = document.querySelector('.body')

document.querySelector('.menu-btn').addEventListener('click', function(){
    this.innerHTML = (this.innerHTML === 'Menu')? '<-return' : 'Menu'
    this.classList.toggle('anim-btn')
    menu.classList.toggle('show')
    bodyPage.classList.toggle('show')
})
