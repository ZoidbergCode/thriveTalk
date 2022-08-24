let burger = document.getElementById("burger");
let wrapper = document.getElementsByClassName("wrapper");

// Changing of burger's class name and his style "left"
function changeBurger () {
	if (burger.classList.contains("icon-menu")) {
		burger.classList.remove("icon-menu");
		burger.classList.add("icon-menu_active");
		document.getElementsByClassName("menu__items")[0].style.left = "0";
		burger.href = "#menu";

		wrapper[0].style.maxHeight = "100vh";
		console.log(menuHeight)

	} else if (burger.className == "icon-menu_active") {
			burger.className = "icon-menu";
			document.getElementsByClassName("menu__items")[0].style.left = "-100%";
			burger.href = "#";
			wrapper[0].style.maxHeight = "none";
	}
}

burger.addEventListener("click", changeBurger);

// Remove burger button if display size more than 599px and close menu
window.addEventListener("resize", function(){
    if (document.documentElement.clientWidth > 599 && burger.classList.contains("icon-menu_active")) {
    	burger.classList.remove("icon-menu_active");
    	burger.classList.add("icon-menu");
		document.getElementsByClassName("menu__items")[0].style.left = "-100%";
		wrapper[0].style.maxHeight = "none";
    }
});