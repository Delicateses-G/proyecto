var menu = document.getElementById('menu');
/*alert(menu.offsetTop); para saber cuanta distancia hay entre el inicio hasta lo que vayas a colocar*/
var altura = menu.offsetTop;
/*alert(window.pageYOffset); para saber cuanta distancia se a hecho de scroll*/
window.addEventListener('scroll', function(){
	if (window.pageYOffset > altura)
	{
		menu.classList.add('fixed');
	}
	else
	{
		menu.classList.remove('fixed');
	}
})