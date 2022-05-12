$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

new Swiper('.image-slider',{
  slidesPerView:10,
  centeredSlides: true,
  loop: true,
  breakpoints:{
    160:{
      slidesPerView:2,
    },
    420:{
      slidesPerView:4,
    },
    600:{
      slidesPerView:5,
    },
    800:{
      slidesPerView:6,
    },
    1000:{
      slidesPerView:10,
    },
  }
});

window.onload = function() {
  var tabsHeader = document.querySelector(".tabs-header"),
      tabH = document.getElementsByClassName("tab-h"),
      tabBody = document.getElementsByClassName("tab-b");

   // Добавляем слушателя по клику на элементе и выполняем функцию
  tabsHeader.addEventListener("click", fTabs);

  function fTabs(event) {
    // При нажатии на элемент с определенным классом получаем атрибут элемента на который кликнули
    if (event.target.className == "tab-h") {
       // Присваиваем переменной значение атрибута data-tab элемента по которому кликнули
      var dataTab = event.target.getAttribute("data-tab");
       // Перебираем массив
      for (var i = 0; i < tabBody.length; i++) {
         // Если значение атрибута data-tab элемента равен индексу элемента из массива tabBody (конт. вкладок)
        if (dataTab == i) {
           // Присваиваем стиль контейнерам вкладок
          tabBody[i].style.opacity = "1";
          tabBody[i].style.display = "flex";

           // Присваиваем стиль вкладкам
          event.target.style.color = "#f0f0f0";
          event.target.style.backgroundColor = "black";
        } else {
          tabBody[i].style.opacity = "0";
          tabBody[i].style.display = "none";

           // Перебираем элементы с классом tab-h (вкладки)
          for (var h = 0; h < tabH.length; h++) {
             // Если значение атрибута у вкладок не равно значению атрибута текущей вкладки
            if (tabH[h].getAttribute("data-tab") != dataTab) {
               // Присваиваем стили для неактивных вкладок
              tabH[h].style.color = "black";
              tabH[h].style.backgroundColor = "white";
            }
          }
        }
      }
    }
  }
};

$(document).ready(function() {
	$('.menu__icon').click(function(event) {
		$('.menu__icon,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});