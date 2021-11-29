// это для слайдера
document.querySelector("#leftZnachok").onclick = leftBtn ;
document.querySelector("#rightZnachok ").onclick = rightBtn;

function leftBtn(){
    document.querySelector("#first_img").style.opacity = '0';
    document.querySelector("#second_img").style.opacity = '1'; 
}

function rightBtn(){
    document.querySelector("#first_img").style.opacity = '1';
    document.querySelector("#second_img").style.opacity = '0';
 }

 // это для переписки в tab
document.querySelector("#addTrack2").onclick=chatMissing;
function chatMissing(){
    const trackInput = document.querySelector("#trackInput");
    const fromInput =  document.querySelector("#fromInput");

    // получаем значение вписанное пользователем в поле инпут
    const value = trackInput.value;

    // передаём его в поле с id=fromInput
    fromInput.innerHTML += ` <li>${value}</li>`;

    // очищаем поле инпут
    trackInput.value = ' ' ;
}