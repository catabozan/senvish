var buttons = ["burger", "toast", "drinks"];

//selects menu items
var bread = document.querySelectorAll(".bread .item-name");
var meat = document.querySelectorAll(".meat .item-name");
var veggie = document.querySelectorAll(".veggie .item-name");
var SOS = document.querySelectorAll(".SOS .item-name");

var oneItemMenu = [bread, meat];
var moreItemMenu = [veggie, SOS];

//select homePage
var homePage = document.querySelector("#homePage");
//select body
var body = document.querySelector("body");

//adds event listeners on all buttons/menus
for(var i = 0; i < buttons.length; i++){
	addEventListenerToButton(buttons[i]);
}

//adds event listeners on all single item menus
for(var i = 0; i < oneItemMenu.length; i++){
	for(var j = 0; j < oneItemMenu[i].length; j++){
		addOneItemMenuLogic(oneItemMenu[i][j], oneItemMenu[i])
	}
}

//adds event listeners on all multiple item menus
for(var i = 0; i < moreItemMenu.length; i++){
	for(var j = 0; j < moreItemMenu[i].length; j++){
		addMoreItemsMenuLogic(moreItemMenu[i][j])
	}
}

function addMoreItemsMenuLogic(item){
	item.addEventListener("click", function(){
		//adds "selected" class on clicked item
		this.classList.toggle("selected");
		//updates price
		updatePrice();
	})
}

//add event listeners on one item per menu items
function addOneItemMenuLogic(item, menu){
	item.addEventListener("click", function(){
		//removes "selected" class on all items
		for(var i = 0; i < menu.length; i++){
			menu[i].classList.remove("selected");
		}
		//adds "selected" class on clicked item
		this.classList.add("selected");
		//updates price
		updatePrice();
	})
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
	container.classList.toggle("dark");
	wrapper.classList.toggle("visible");
	homePage.classList.toggle("blurred");
	body.classList.toggle("stop-scrolling");
	//updates price
	updatePrice();
};

//updates price in ".visible" menu
function updatePrice(){
	//selects the price <span>
	var displayPrice = document.querySelector(".visible .total-price .price");
	//initializes the total price
	var totalPrice = 0;
	//selects all ".selected" items in ".visible" menu
	var selectedItem = document.querySelectorAll(".visible .selected");

	//for every selectedItem
	for(var i = 0; i < selectedItem.length; i++){
		//saves "price" attribute into iTemPrice
		var itemPrice = selectedItem[i].getAttribute("price");
		//converts "price" attribute into integer and adds it to the totalPrice
		totalPrice += Number(itemPrice);
	}
	//updates content of ".total-price" <span>
	displayPrice.innerHTML = totalPrice + " LEUȚI";
}