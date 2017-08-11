var allEmployees= []; 

var employee1 = {
	image: "https://scontent.fbna1-2.fna.fbcdn.net/v/t1.0-9/1916450_520325213294_4260991_n.jpg?oh=304386b31598ee6d095decdcad0d69d3&oe=59F48F72",
	imageAlt: "Ronnie",
	name: "Ronnie Hickman",
	position: "Assistant to the Regional Manager",
	bio: "Ronnie started his management career at a small paper company, but decided that education was where he wanted to be. He uses the skills he learned for the great Michael Scott to bring amazing educators your way."
};

var employee2 = {
  image: "https://media.creativemornings.com/uploads/user/avatar/128994/me.jpg",
	imageAlt: "Gina",
	name: "Gina Antonini",
	position: "Touch Quality Control",
	bio: "Gina began her journey into world of touch quality back when she was in her early 20's. She was touched by a teacher long ago and knew that it was her destiny. She spent many years travelling around the world analyzing touch before she made the transition into educational touch."
};

var employee3 = {
  image:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/08c/372/120d823.jpg",
	imageAlt: "Amber", 
	name: "Amber Stuart", 
	position: "Janitorial Engineer", 
	bio: "After serving some time in Vietnam, Amber realized that education was her true passion. She attended the Academy of Janitorial Education and got her Masters in Custodial Arts. She now dedicates her time to making sure the facilites are as clean as can be."
};

allEmployees.push(employee1);
allEmployees.push(employee2);
allEmployees.push(employee3);

function createEmployee(image, imageAlt, name, position, bio) {
	var newEmployee = {
		image: image,
		imageAlt: imageAlt,
		name: name,
		position: position,
		bio: bio
	}
	return allEmployees.push(newEmployee);
};

createEmployee("https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAslAAAAJDQ3MTk4NTlhLWYyMmUtNDA2ZS1hMmVhLTNjNTNjOGY4NjlkOQ.jpg", "Gib", "Gib Bowden", "Chief Inspiration Officer", "Teachers Touch brought in Gib as CIO after a company revamp in 1992. Gib spent 5 years as founder of the start up, 'Rent-A-Granny', that was sold for $500,000. Gib brings in new ways of touching students and is an inspriration to the company.");
createEmployee("http://photovide.com/wp-content/uploads/2016/09/zoo-portraits-animals-dressed-like-humans-20.jpg", "Mr. Sloth", "Mr. Sloth", "CEO", "Mr. Sloth started off as a humble wild sloth, but after graduating from Harvard and later recieving his graduate degree at Yale, he was determined to provide quality educators to students across the US.");
createEmployee("https://i.pinimg.com/736x/e6/92/25/e6922593ff85d3931bb6bd31e9370d8d--animal-heads-animal-masks.jpg", "Devin", "Devin Bacon", "CTO", "Devin's background is a mystery to us all, but he's one hell of a tech wiz!!");

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



