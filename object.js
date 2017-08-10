var allProducts = [];

	var product1 = {
		name:"Jack Goff",
		description:"Description goes here",
		price:"",
		image:"",
		link:"",
		used: true 
	};

	var product2 = {
		name:"Professer X",
		description:"Description goes here",
		price:"",
		image:"",
		link:"",
		used: true 
	};

	var product3 = {
		name:"Smart Teacher",
		description:"Description goes here",
		price:"5pies/perClass",
		image:"",
		link:"",
		used: true 
	};

	var product4 = {
		name:"Funny Teacher",
		description:"Description goes here",
		price:"5pies/perClass",
		image:"",
		link:"",
		used: true 

	};

	var product5 = {
		name:"Old Teacher",
		description:"",
		price:"5pies/perClass",
		image:"Description goes here",
		link:"",
		used: true 
	};

	var product6 = {
		name:"Crap Teacher",
		description:"Description goes here",
		price:"5pies/perClass",
		image:"",
		link:"",
		used: true 
	};

	var product7 = {
		name:"Newbie Teacher",
		description:"Description goes here",
		price:"5pies/perClass",
		image:"",
		link:"",
		used: true 
	};

	var product8 = {
		name:"Boring Teacher",
		description:"Description goes here",
		price:"5pies/perClass",
		image:"",
		link:"",
		used: true 
	};


//insert product objects into the array 
allProducts.push(product1)
allProducts.push(product2)
allProducts.push(product3)
allProducts.push(product4)
allProducts.push(product5)
allProducts.push(product6)
allProducts.push(product7)
allProducts.push(product8)


//*****This is the code that calls the function to populate the page******
printProductArraytoDom(allProducts);

//prints an array filled with product objects into the containter HTML
//takes the name of the product array as an argument
function printProductArraytoDom(arr) {
var productContainer = document.getElementById("product-container");
  for (var i = 0; i < arr.length; i++) {
    productContainer.innerHTML += buildDomString(arr[i]);
    }
}

// builds a dom string with explicit HTML structure
// param product takes the product object 

function buildDomString(product) {
  domString = "";

  domString +=  '<section class="product">'
  domString +=    '<div class="title">'
  domString +=      '<h2>'+product.name+'</h2>'
  domString +=    '</div>'
  domString +=    '<div class="teacher-image">'
  domString +=      '<a href="'+product.link+'"><img src="'+product.imagePath+'"></a>'
  domString +=    '</div>'
  domString +=    '<div class="description">'
  domString +=      '<p>'+product.description+'</p>'
  domString +=      '<h6>$'+product.price+'</h6>'
  domString +=    '</div>'
  if (product.used) {
    domString += '<div class="used">'
    domString +=  '<img class="used-img" src="./images/sale-red.png" alt="used">'
    domString += '</div>'
   } 
  domString += '</section>'
  return domString
}