var buttons = ["burger"];

//adds event listeners on all buttons/menus
for(var i = 0; i < buttons.length; i++){
	addEventListenerToButton(buttons[i]);
}



//this adds event listeners
function addEventListenerToButton(item){
	//select itemMenu
	var mainButton = document.querySelector("#" + item + "Button");
	//select itemMenu close-button
	var closeButton = document.querySelector("#" + item + "Menu" + " .close-menu-button");

	//add event listeners
	mainButton.addEventListener("click", function(){
		toggleMenu(item);
	});
	closeButton.addEventListener("click", function(){
		toggleMenu(item);
	});
};

//this toggles menu
function toggleMenu(item){
	//select itemMenu
	var container = document.querySelector("#" + item +"Menu");
	//select menu-wrapper inside itemMenu
	var wrapper = document.querySelector("#" + item +"Menu" + " .menu-wrapper");

	//toggle classes
	wrapper.classList.toggle("visible");
	container.classList.toggle("dark");
};
