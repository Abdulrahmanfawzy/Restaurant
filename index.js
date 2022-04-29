
let faDropping = document.getElementById("faDropping"),
    drops = document.getElementById("drops");
faDropping.onclick = function(){
    if(drops.style.display == "block"){
        drops.style.display = "none"
    }else{
        drops.style.display = "block"
    }
}
let navIcon = document.getElementById("navIcon"),
    marvel = document.querySelector(".nav-column"),
    closer = document.querySelector(".closer-postion");
navIcon.onclick = function(){
    if(marvel.style.width <= "50%"){
        marvel.style.left = "0%"
    }
    if(marvel.style.width >= "51%"){
        marvel.style.left = "0%"
    }
}
closer.onclick = function(){
    if(marvel.style.width < "50%"){
        marvel.style.left = "-100%"
    }
    if(marvel.style.width === "100%"){
        marvel.style.left = "-100%";
    }
}

let increase = document.querySelector(".increase"),
    decrease = document.querySelector(".decrease"),
    input = document.querySelector(".input"),
    price = document.querySelector(".pItem");

increase.onclick = function(){
    var x = input.value++;
    price.innerHTML = x * 21.00 + 21.00;
}
decrease.onclick = function(){
    if(input.value > 0){
        var t = input.value--;
        price.innerHTML = t * 21.00 - 21.00;
    }else{
        input.value;
    }
}

let increase2 = document.querySelector(".increase2"),
    decrease2 = document.querySelector(".decrease2"),
    input2 = document.querySelector(".input2"),
    price2 = document.querySelector(".pItem2");

increase2.onclick = function(){
    var x = input2.value++;
    price2.innerHTML = x * 17.00 + 17.00;
}
decrease2.onclick = function(){
    if(input2.value > 0){
        var t = input2.value--;
        price2.innerHTML = t * 17.00 - 17.00;
    }else{
        input2.value;
    }
}


let increase3 = document.querySelector(".increase3"),
    decrease3 = document.querySelector(".decrease3"),
    input3 = document.querySelector(".input3"),
    price3 = document.querySelector(".pItem3");

increase3.onclick = function(){
    var x = input3.value++;
    price3.innerHTML = x * 26.00 + 26.00;
}
decrease3.onclick = function(){
    if(input3.value > 0){
        var t = input3.value--;
        price3.innerHTML = t * 26.00 - 26.00;
    }else{
        input3.value;
    }
}

let increase4 = document.querySelector(".increase4"),
    decrease4 = document.querySelector(".decrease4"),
    input4 = document.querySelector(".input4"),
    price4 = document.querySelector(".pItem4");

increase4.onclick = function(){
    var x = input4.value++;
    price4.innerHTML = x * 31.00 + 31.00;
}
decrease4.onclick = function(){
    if(input4.value > 0){
        var t = input4.value--;
        price4.innerHTML = t * 31.00 - 31.00;
    }else{
        input4.value;
    }
}

let increase5 = document.querySelector(".increase5"),
    decrease5 = document.querySelector(".decrease5"),
    input5 = document.querySelector(".input5"),
    price5 = document.querySelector(".pItem5");

increase5.onclick = function(){
    var x = input5.value++;
    price5.innerHTML = x * 31.00 + 31.00;
}
decrease5.onclick = function(){
    if(input5.value > 0){
        var t = input5.value--;
        price5.innerHTML = t * 31.00 - 31.00;
    }else{
        input5.value;
    }
}

let heart = document.getElementsByClassName("heart-menu");
function myFun(x){
    for(var i = 0; i < heart.length; i++){
        heart[i].style.display = "none";
    }
    document.getElementById(x).style.display = "block"
}
    
let close = document.getElementsByClassName("close");
function myClose(){
    for(var i = 0; i < close.length; i++){
        close[i].addEventListener("click",function(){
            for(var i = 0; i < heart.length; i++){
                heart[i].style.display = "none"
            }
        })
    }
}
myClose();

let button = document.getElementsByClassName("button");
function myBtn(z){
    for(var i = 0 ; i < button.length; i++){
        button[i].classList.remove("active");
    }
    z.currentTarget.classList.add("active")
}
document.getElementById("idbutton").click();


let videoIcon = document.querySelector(".video-icon"),
    videoOver = document.querySelector(".video-over"),
    windows = document.querySelector(".windows");

videoIcon.onclick = function(){
    videoOver.style.display = "block"
}
windows.onclick = function(){
    videoOver.style.display = "none"
}

function myHeart(){
    let ourHeart = document.querySelector(".hearticon");
    ourHeart.addEventListener("click" , function(){
        if(this.className == "fas fa-heart"){
            this.className = "far fa-heart"
        }else{
            this.className = "fas fa-heart"
        }
    })
}
myHeart()


















