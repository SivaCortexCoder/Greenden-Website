var sideNav = document.getElementById("side-nav")
var menuIcon = document.getElementById("menu-icon")
var closeNav = document.getElementById("close-nav")


menuIcon.addEventListener("click", function(){
    sideNav.style.right="0"

})

closeNav.addEventListener("click",function(){
    sideNav.style.right="-50%"
})

