var home = document.querySelector("div#link");
home.addEventListener("click",function(e){
    console.log("click on link");
    e.stopPropagation();
    e.preventDefault();
},false)

document.getElementById("ulID").addEventListener("click",function(e){
    console.log("click on ULID");
//    alert("this is context menu");
//    e.preventDefault();
},false);


