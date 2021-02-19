
(function (){
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}
	}
}());

(function () {
	const burger = document.querySelector('.burger');
	const menuList = document.querySelector('.menu__body');
	const bodyLock = document.querySelector('body');
	const linksShowroom = document.querySelector('.link-js-1');
	const linksProduct = document.querySelector('.link-js-2');
	const linksContact = document.querySelector('.link-js-3');
	const linksItem = document.querySelector('.link-js-4');

	

	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
	});
	burger.addEventListener('click', () => {
		menuList.classList.toggle('menu__body_active');
	});
	burger.addEventListener('click', () => {
		bodyLock.classList.toggle('body-lock');
	});
	linksShowroom.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
	linksProduct.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
	linksContact.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
		linksItem.addEventListener('click', () => {
		menuList.classList.remove('menu__body_active');
		burger.classList.remove('active');
	});
}());

