var buttonSearch = document.querySelector('.fa-search'), 
	menuSearch = document.querySelector('.search'); 

document.addEventListener("click", function(event) { 
	if(event.target === buttonSearch){ //проверяем, является ли элемент, по которому мы кликнули кнопкой поиска
		menuSearch.classList.toggle('open'); //Если да => переключаем класс open и добавляем фокус инпуту,
		menuSearch.querySelector('input').focus(); 
	} else { 
		if(!event.target.classList.contains('searchInput')){    //проверяем не кликнули ли мы на поле поиска,
		menuSearch.classList.remove('open'); 					//если это не оно, то убираем класс open
	} 
} 
})
