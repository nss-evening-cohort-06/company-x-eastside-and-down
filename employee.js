var allEmployees= []; 

var employee1 = {
	image:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/08c/372/120d823.jpg",
	imageAlt: "Amber", 
	name: "Amber Stuart", 
	position: "Janitorial Engineer", 
	bio: "After serving some time in Vietnam, Amber realized that education was her true passion. She attended the Academy of Janitorial Education and got her Masters in Custodial Arts. She now dedicates her time to making sure the facilites are as clean as can be."
};

var employee2 = {
  image: "img",
	imageAlt: "Gina",
	name: "Gina Antonini",
	position: "Touch Quality Control",
	bio: "ahh"
};

var employee3 = {
  image: "",
	imageAlt: "Ronnie",
	name: "Ronnie Hickman",
	position: "ahh",
	bio: "ahh"
};

allEmployees.push(employee1);
allEmployees.push(employee2);
allEmployees.push(employee3);


allEmployees.push({image:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAslAAAAJDQ3MTk4NTlhLWYyMmUtNDA2ZS1hMmVhLTNjNTNjOGY4NjlkOQ.jpg", imageAlt: "Gib", name: "Gib Bowden", position: "sdjflkdj", bio: "alsdjlskjf;alsdkj"});
allEmployees.push({image: "http://photovide.com/wp-content/uploads/2016/09/zoo-portraits-animals-dressed-like-humans-20.jpg", imageAlt: "Mr. Sloth", name: "Mr. Sloth ", position: "CEO", bio: "Mr. Sloth started off as a humble wild sloth, but after graduating from Harvard and later recieving his graduate degree at Yale, he was determined to provide quality educators to students across the US."});



// console.log(allEmployees);

var employeesContainer = document.getElementById("employeeCards");

for (var i = 0; i < allEmployees.length; i++) {
	var currentemployees = allEmployees[i];
	var employeeString = "";

employeeString += '<section class="employee-card">';
employeeString +=		'<div class="employee-image">';
employeeString +=			'<img src="' + currentemployees.image + '" alt=' + currentemployees.imageAlt + '>';
employeeString +=		'</div>';
employeeString +=		'<div class="employee-info">';
employeeString +=		 '<div class="employee-name">';
employeeString +=			 '<h2>' + currentemployees.name +'</h2>';
employeeString +=		 '</div>';
employeeString +=		 '<div class="employee-position">';
employeeString +=		  	'<h3>' + currentemployees.position + '</h3>';
employeeString +=		 '</div>';
employeeString +=		 '<div class="employee-bio">';
employeeString +=			 '<p>' + currentemployees.bio + '</p>';
employeeString +=		 '</div>';
employeeString +=		'</div>';
employeeString +=	'</section>';


employeesContainer.innerHTML += employeeString;
}

//ahhhh

