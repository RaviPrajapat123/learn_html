let btn=document.getElementById("btn")
let count=0
let p=document.getElementById("para")
btn.addEventListener("click",function(){
        count++
       p.innerHTML =count
       console.log(count)
})