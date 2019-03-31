var buttons = ["burger"];

for(var i = 0; i < buttons.length; i++){
	addEventListenerToButton(buttons[i]);
}



function addEventListenerToButton(item){
	var mainButton = document.querySelector("#" + item + "Button");
	var closeButton = document.querySelector("#" + item + "Menu" + " .close-menu-button");
	mainButton.addEventListener("click", function(){
		toggleMenu(item);
	});
	closeButton.addEventListener("click", function(){
		toggleMenu(item);
	});
};

function toggleMenu(item){
	var container = document.querySelector("#" + item +"Menu");
	var wrapper = document.querySelector("#" + item +"Menu" + " .menu-wrapper");
	wrapper.classList.toggle("visible");
	container.classList.toggle("dark");
};
