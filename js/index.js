
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