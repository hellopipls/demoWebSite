$(document).ready(function(){
  
// при нажатии на внешнюю ссылку-якорь(href) сделаmm активным нужный ТАБ (и перебрось туда !!!!)
$('a#add_hover_review').click(function(e){  
     $("input[name='tab-btn']:last").click();
     //т.е. при клике по ссылке, кликни ещё и по последнему ТАБу
  });

 // счётчик  увеличивает число по клику 
$('#qty button#countI1').click(function(e){
    // достать число с html_страницы можно как строку
     $countBtn = $('#qty span#sifra').text();
     // преобразовать строку в число можно так!!!
     $intValue = parseInt($countBtn);     
      //увеличили число на 1
     $countItog= $intValue+1;
     //отправили увеличенное число обратно в html_страницу
     $('#qty span#sifra').text($countItog);
}); 

// счётчик  уменьшает число по клику 
$('#qty button#countI2').click(function(e){    
     $countBtn = $('#qty span#sifra').text();
     $intValue = parseInt($countBtn);
     if( $intValue>0){
       $countItog= $intValue-1;
       $('#qty span#sifra').text($countItog);
     }    
     $('#qty span#sifra').text();
}); 


  // ЗВЁЗДНЫЙ РЕЙТИНГ
  /* 1.первая часть поведение элементов при наведении и отведении мышки (добавляем и удаляем классHover )- */
  $('#stars span').on('mouseover', function(){        //наведение мышки на элементы с id=stars и после него тег <span>
    var onStar = parseInt($(this).data('value'), 10); // достаём значения строки  "data-value='...' "
   
    // выделяем все звёзды до активной звезды(вкл. и её)
    $(this).parent().children('span.star').each(function(e){ //е - это глобальное событие, которое сработает при наведении
      if (e < onStar) { //если мышка наведена на элемент с "data-value='...' " то присваиваем элементу класс 'hover'
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover'); //иначе удаляем класс 'hover'
      }
    });

    //обрабатываем событие при отведениии мышки от элемента
  }).on('mouseout', function(){ //
    $(this).parent().children('span.star').each(function(e){
      $(this).removeClass('hover'); // удаляем класс 'hover'
    });
  });
  
  
  /* 2. вторая часть поведение элемента при событии click */
  $('#stars span').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // достаём значения строки  "data-value='...' "
    var stars = $(this).parent().children('span.star');// достаём всех детей имеющих <span.class="star">
    
    //перебираем детей имеющих <span.class="star"> пока клики не превышают их количество
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }  //удаляем у каждого ребёнка класс 'selected'
    
    //перебираем строки имеющие "data-value='...' "
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    } // добавляем класс 'selected'
    
    // подсчёт кликов(рейтинга)
    var ratingValue = parseInt($('#stars span.selected').last().data('value'), 10); //последний "data-value='...' " из выделенных элементов <span.class="star selected">
    var msg = "";   //создали пустую перемннную

    if (ratingValue > 1) { //если выделенных эментов больше 1
        msg = ratingValue ; //присваиваем переменной msg   значение переменной ratingValue
    }
    else {
        msg = ratingValue ; //иначе (всё-равно) присваиваем переменной msg   значение ratingValue
    }
    responseMessage(msg);  //вызывает функцию responseMessage(msg) и передаём ей аргумент с сообщением
    
  });
  
  
});

//функция передающая значение рейтинга в код html
function responseMessage(msg) {
  $('.success-box').fadeIn(200);  
  $('.success-box div.text-message').html( msg );
 // конец ЗВЁЗДНЫЙ РЕЙТИНГ

}

// Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления. 
//синтаксис:  parseInt(string[, radix])  
// radix=10 даст десятичное число, 16 - шестнадцатиричное и т.п. 
//Для radix>10 цифры после девяти представлены буквами латинского алфавита.
// Если входная строка начинается с "0х", то radix = 16
// Если входная строка начинается с "0", то radix = 8. Этот пункт зависит от реализации и в некоторых браузерах (Google Chrome) отсутствует.
//В любом другом случае radix=10

// ПРИМЕРЫ
// html=>  <..data-value='1'>  jquery=>parseInt($(this).data('value'), 10);
// html=>  <.. data-item='1'>  jquery=>parseInt($(this).data('item'), 10);

//========================

//// выбор родительского элемента
//$( selector ).parent()

// выбор родительского элемента с определенным селектором
// $( selector ).parent( selector )

//метод .parent() схож с методом .parents() за тем исключением, что 
//первый перемещается только на один уровень вверх по дереву DOM, а второй возвращает всех предков.

// .children(), как и большинство методов для фильтрации не возвращает текстовые узлы, 
//чтобы получить все дочерние элементы, включая текстовые узлы и узлы комментариев Вы можете воспользоваться методом .contents().
//=======================

//each() это Функция jQuery  - используется для перебора элементов объекта jQuery.

//======================
// fadeIn() позволяет плавно изменить прозрачность для отдельных элементов (из скрытого состояния в видимое). 
//Другими словами, метод производит анимацию изменения прозрачности выбранных элементов плавно переводя их из скрытого состояния в видимое.


//.html() это  метод jQuery задает содержимое выбранных элементов, или возвращает значение первого элемента в наборе.
//т.е. возвращает значение в код_html 

