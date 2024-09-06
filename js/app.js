// linkItem=document.querySelector(".list-item");
// function show(params) {
    
// }
let num=document.querySelector(".timer");
let num2=document.querySelector(".timer-2");
let num3=document.querySelector(".timer-3");
let num4=document.querySelector(".timer-4");

increase(num,400)
increase(num2,80,40)
function increase(el,number,timer=10){
    let counter=0;
let interval=setInterval(() => {
    counter+=10;
    el.innerHTML=counter;
    if(counter>=number){
        clearInterval(interval)
    }
}, timer);
}


var products;
var xhr=new XMLHttpRequest();
xhr.open('get','http://kdkdoko');
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        console.log(xhr.responseText);
        products=xhr.responseText;
    }
}
xhr.send();