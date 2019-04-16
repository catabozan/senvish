var pita = [
	{
		name: 'Franzelutza',
		price: 1,
		selected: true
	},
	{
		name: 'Pita™ Neagra',
		price: 1,
		selected: false
	},
	{
		name: 'Pita™ Graham',
		price: 1,
		selected: false
	},
	{
		name: 'Chifla',
		price: 0.5,
		selected: false
	},		
];

var mezeluri = [
	{
		name: 'Burger',
		price: 2,
		selected: true
	},
	{
		name: 'Salam',
		price: 1,
		selected: false
	},
	{
		name: 'Sunculita',
		price: 1,
		selected: false
	}
	
];

var legume = [
	{
		name: 'Salatica',
		price: 0.5,
		selected: false
	},
	{
		name: 'Castraveciori',
		price: 0.5,
		selected: false
	},
	{
		name: 'Rosiute',
		price: 0.5,
		selected: false
	},
	{
		name: 'Cascaval',
		price: 1,
		selected: false
	},
	{
		name: 'Crema de Branza',
		price: 1,
		selected: false
	},
	{
		name: 'Unt',
		price: 0.5,
		selected: false
	}
];

var sosuri = [
	{
		name: 'Ketchup',
		price: 0.5,
		selected: false
	},
	{
		name: 'Maioneza',
		price: 0.5,
		selected: false
	},
	{
		name: 'Barbecue',
		price: 0.5,
		selected: false
	},
	{
		name: 'Sos Burger',
		price: 0.5,
		selected: false
	},
	{
		name: 'Picant',
		price: 0.5,
		selected: false
	},
	{
		name: 'Ketchup',
		price: 0.5,
		selected: false
	}
]

var app = new Vue({
	el: '#app',
	data: {
		pita: pita,
		mezeluri: mezeluri,
		legume: legume,
		sosuri: sosuri,
		totalPrice: 0
	},
	methods: {
		selectOneItem: function(itemList, index){
			for(var i = 0; i < itemList.length; i++){
				itemList[i].selected = false;
			}
			itemList[index].selected = true;
		},

		selectItem: function(itemList, index){
			itemList[index].selected = !itemList[index].selected;
		}
	}
});