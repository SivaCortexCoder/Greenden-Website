var sideNav = document.getElementById("side-nav")
var menuIcon = document.getElementById("menu-icon")
var closeNav = document.getElementById("close-nav")


menuIcon.addEventListener("click", function(){
    sideNav.style.right="0"

})

closeNav.addEventListener("click",function(){
    sideNav.style.right="-50%"
})



var search = document.getElementById("search")
var productContainer = document.getElementById("product-container")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(e){
    var enteredValue = e.target.value.trim().toUpperCase();

    for(count = 0;count<productList.length;count++)
    {
        var productName = productList[count].querySelector("h1").textContent.toUpperCase()
        if(productName.includes(enteredValue)){
            productList[count].style.display="block"
        }
        else{
             productList[count].style.display="none"
        }
    }
    
})

