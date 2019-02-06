var buttonSearch = document.querySelector('.fa-search'),
	menuSearch = document.querySelector('.search');

buttonSearch.addEventListener("click", function(){                //слушаем клик по кнопке
    if(menuSearch.classList.contains('open')){ 
        menuSearch.classList.remove('open');                      //удаляем класс overflow у body
    } else {                                                     //если нет класса open
        menuSearch.classList.add('open');                         //добавляем класс overflow для body
    }
});
