//needs css

var testimonials = [];

var testimonial1 = {
	name: "George",
	instructor: "Zoe",
	course: "Social Studies",
	content: "some sort of weird testimonial about the instructors"
};

var testimonial2 = {
	name: "George",
	instructor: "Zoe",
	course: "Social Studies",
	content: "some sort of weird testimonial about the instructors"
};

var testimonial3 = {
	name: "George",
	instructor: "Zoe",
	course: "Social Studies",
	content: "some sort of weird testimonial about the instructors"
};


testimonials.push(testimonial1);
testimonials.push(testimonial2);
testimonials.push(testimonial3);


var testimonialContainer = document.getElementById("testimonial-container");
var currentTestimonial = testimonials[i];

for (var i = 0; i < testimonials.length; i++) {
	var currentTestimonial = testimonials[i];
	var testimonialString = "";

testimonialString +=	'<div class="testimonial-card">';
testimonialString +=		'<p>'+ currentTestimonial.content +'</p>';
testimonialString +=		'<div class="tesimonial-student-info">';
testimonialString +=		 '<h3>'+ currentTestimonial.name +'</h3>';
testimonialString +=		 '<h4>'+ currentTestimonial.instructor +'</h4>';
testimonialString +=		 '<h4>'+ currentTestimonial.course +'</h4>';
testimonialString +=		'</div>'
testimonialString +=	'</div>'


testimonialContainer.innerHTML += testimonialString;
}