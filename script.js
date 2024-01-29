var istatus = document.querySelector("h5")
var add = document.querySelector("#add")
var btn = document.querySelector("button")
var check = 0;

add.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "FRIENDS!";
        istatus.style.color = "green";
        btn.innerHTML = "REMOVE FRIEND"
        check = 1;
    }else{
        istatus.innerHTML = "Add?";
        istatus.style.color = "red";
        btn.innerHTML = "ADD FRIEND"
        check = 0;
    }
   
})
