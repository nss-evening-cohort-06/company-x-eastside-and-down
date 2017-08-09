//DEFINING EMPLOYEES IN CARD ARRAY//

var allEmployees= []; 

var employee1 = {
	image: "img",
	imageAlt: "imgAlt",
	name: "ahh",
	position: "ahh",
	bio: "ahh"
};

var employee2 = {
  image: "img",
	imageAlt: "imgAlt",
	name: "ahh",
	position: "ahh",
	bio: "ahh"
};

var employee3 = {
  image: "img",
	imageAlt: "imgAlt",
	name: "ahh",
	position: "ahh",
	bio: "ahh"
};

allEmployees.push(employee1);
allEmployees.push(employee2);
allEmployees.push(employee3);


allEmployees.push({image:"img", imageAlt: "7777", name: "George", position: "CEO", bio: "alsdjlskjf;alsdkj"});
allEmployees.push({image:"img", imageAlt: "7777", name: "George", position: "CEO", bio: "alsdjlskjf;alsdkj"});

// console.log(allEmployees);

var employeesContainer = document.getElementById("employeeCards");

for (var i = 0; i < allEmployees.length; i++) {
	var currentemployees = allEmployees[i];
	var employeeString = "";

employeeString += '<section class="employeeOne">';
employeeString +=		'<div>';
employeeString +=			'<img src=' + employee.image + 'alt=' + employee.imageAlt + '>';
employeeString +=		'</div>';
employeeString +=		'<div class="name">';
employeeString +=			'<h2>' + employee.name +'</h2>';
employeeString +=		'</div>';
employeeString +=		'<div class="position">';
employeeString +=			'<h3>' + employee.position + '</h3>';
employeeString +=		'</div>';
employeeString +=		'<div class="biography">';
employeeString +=			'<p>' + employee.bio + '</p>';
employeeString +=		'</div>';
employeeString +=	'</section>';


employeeslContainer.innerHTML += employeeString;
}

//ahhhh

