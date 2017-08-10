var testimonials = [];

var testimonial1 = {
	name: "Seymour Buttes",
	instructor: "Instructor: Lauren Rouse",
	course: "Course: Why the US Should Switch to the Metric System",
	content: '"Teacher\'s Touch really puts in the time and the effort to find top notch new and used instructors! I had Lauren as an instructor for my very first course towards my PhD in Measurement Studies. I was very concerned that I didn\'t make the right decision as far as what academic path to take, but Lauren always assured me that Measurement Studies will be vital to our future and that I made the right decision. Her teaching style is quite unique! We spent the very first week making our very own meter sticks, which became useful throughout the course. We did a lot of field research, which included offsite measuring using our meter sticks! Lauren made us feel like we were in a safe space and could talk to her about anything. She even went as far to confide in us that she had 9 toes, GROSS! But overall, she was an awesome instructor and would take ANY of her courses!"'
};

var testimonial2 = {
	name: "Randi Sevage",
	instructor: "Instructor: Zoe Ames",
	course: "Course: Why Astrophysics is Just Okay 101",
	content: '"If you\'re looking to become the ultimate Astrophysicist, Zoe is NOT the instructor for you. BUT, if you\'re looking to become the most okay Astrophysicist, then she\'s got your back! The way she explains blackholes and the evolution of the universe is top notch. She cross stitched every photo and diagram we used for class, now that\'s dedication! Her course included TONS of field research which included star gazing. Unfortunately, we were unable to meet after nightfall, due to Zoe\'s fear of the dark. To resolve that issue, Zoe made a galaxy quilt that she pinned up to the ceiling of the classroom. She would turn the lights out and we would gaze at that. You\'d be amazed at how accurate it was!! She\'s seriously a genius. Every time someone had a question, her answer would take a wrong turn. She would go on these rants about "The Pie Lady", but never did tell us who said pie lady was. Once, she was so deep into the rant that she started yelling in Cantonese. I guess having an IQ of 7688 really has its drawbacks. 10/10 would take her course again as long as no one asks questions."'
};

var testimonial3 = {
	name: "Miley Pyrus",
	instructor: "Instructor: Callan Morrison",
	course: "Course: Pies Are Acceptable for Every Meal 202",
	content: '"You know you\'re being taught by someone who knows their stuff if they live, eat and breathe it. I jumped at the chance to be taught by the woman who knew anything and everything about pies, and as an aspiring pie master, I couldn\'t resist. She is so dedicated to her teachings that she came into class every day in a pie costume. Her motto was "To know the pie, is to be the pie.", the deepest words I\'ve ever heard. She would bring in her experimental pies for us to taste. Most were total hits, but once she brought in a pickle pie. Let me tell you....I LOVE pickles, but I HATED her for bringing that in. When we graduated the course, she gifted every student a bottle of cherry scented perfume that she made and bottled herself in her mother\'s basement. She really was a great inspiration for us."'
};

var testimonial4 = {
	name: "George Costanza",
	instructor: "Instructor: Cosmo Kramer",
	course: "Course: Photography",
	content: '"I decided to take the course with Mr. Kramer to woo a nice young lady that worked the counter at the photo processing joint. She had been processing my film rolls for a while and I KNEW she was into me. It wasn\'t until she stuck a risque photo of herself in my pack of finished photos, that I had to return the favor and take a photography course. I enrolled into Mr. Kramer\'s class and became obsessed with photography almost immediately. You wanna know how awesome this guy is?? He offered a free photoshoot so I can win over the love of my life! It didn\'t pan out well, but it showed that he had cared for his students deeply, in and outside of the classroom."'
};

testimonials.push(testimonial1);
testimonials.push(testimonial2);
testimonials.push(testimonial3);
testimonials.push(testimonial4);

var testimonialContainer = document.getElementById("testimonial-container");

for (var i = 0; i < testimonials.length; i++) {
	var currentTestimonial = testimonials[i];
	var testimonialString = "";

testimonialString +=	'<div class="testimonial-card">';
testimonialString +=		'<p>' + currentTestimonial.content +'</p>';
testimonialString +=		'<div class="testimonial-student-info">';
testimonialString +=		 '<h4>'+ currentTestimonial.name +'</h4>';
testimonialString +=		 '<h5>'+ currentTestimonial.instructor +'</h5>';
testimonialString +=		 '<h5>'+ currentTestimonial.course +'</h5>';
testimonialString +=		'</div>'
testimonialString +=	'</div>'

testimonialContainer.innerHTML += testimonialString;
};






