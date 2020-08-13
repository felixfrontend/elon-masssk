$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu, .header__menu-add').toggleClass('active')
		$('body').toggleClass('lock')		

			$('.header__list').click(function(event) {
			        $('.header__burger,.header__menu').removeClass('active');
			        $('body').removeClass('lock')})
	})
}) 