var allProducts = [];

	var product1 = {

		name:"Zoe",
		description:"Vows to never become a crap teacher. Also may accept pies as a bribe.",
		price:"4",
		imagePath:"./images/zoe.jpg",
		link:"./images/zoe.jpg",
		used: true 
	};

	var product2 = {
		name:"Lauren",
		description:"Takes a patient and caring approach to reach out and touch students on a daily basis.",
		price:"10",
		imagePath:"./images/lauren.jpg",
		link:"./images/lauren.jpg",
		used: true 
	};

	var product3 = {
		name:"Callan",
		description:"Always excited to help which goes far in our journey to touch our students.",
		price:"10",
		imagePath:"./images/callan.jpg",
		link:"./images/callan.jpg",
		used: true 
	};

	var product4 = {
		name:"Mr. Strickland",
		description:"New here to Teacher Touch Jack is determined to make a good impression touching different students around campus.",
		price:"100",
		imagePath:"./images/stock-headshot1.jpg",
		link:"./images/stock-headshot1.jpg",
		used: false 

	};

	var product5 = {
		name:"Mr. O'Leery",
		description:"Touching students with his old man tales",
		price:"200",
		imagePath:"./images/OldMan.jpg",
		link:"./images/OldMan.jpg",
		used: false 
	};

	var product6 = {
		name:"Mr. Pempen",
		description:"Laughter and learning combined to touch countless students",
		price:"200",
		imagePath:"./images/katW.jpeg",
		link:"./images/katW",
		used: false 
	};

	var product7 = {
		name:"Mr.Young",
		description:"The passion to teach keeps him feeliing young. New to the scene Mr.Young is ready to show he wasn't born yesterday. Ready to touch lives",
		price:"200",
		imagePath:"./images/baby.jpg",
		link:"",
		used: false 
	};

	var product8 = {
		name:"Mr. Snell",
		description:"Although lacking in energy the drive to reach out and touch helps Mr. Snell to connect with our students.",
		price:"200",
		imagePath:"./images/benStein.jpg",
		link:"15",
		used: false 
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