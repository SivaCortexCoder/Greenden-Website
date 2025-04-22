//selecting navbar
var sideNav = document.getElementById("side-nav")
var menuIcon = document.getElementById("menu-icon")
var closeNav = document.getElementById("close-nav")

//products search
// var input = document.getElementById("search");
// var productContainer = document.getElementById("products");
// var productItems = productContainer.getElementsByTagName("div");

// input.addEventListener("keyup", function () {
//     var filter = input.value.toLowerCase();

//     for (var i = 0; i < productItems.length; i++) {
//         var h1 = productItems[i].getElementsByTagName("h1")[0];
//         var textValue = h1.textContent || h1.innerText;

//         if (textValue.toLowerCase().includes(filter)) {
//             productItems[i].style.display = "block";
//         } else {
//             productItems[i].style.display = "none";
//         }
//     }
// }); 

menuIcon.addEventListener("click", function(){
    sideNav.style.right="0"

})

closeNav.addEventListener("click",function(){
    sideNav.style.right="-50%"
})