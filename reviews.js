var allBlogs= []; 

var blog1 = {
	image: "./images/blogpost3.jpg",
	imageAlt: "kids",
	title: "These Crazy Kids Love to Code",
	blog: "Who's responsible for the ask for this request? this is meaningless obviously we need to socialize the comms with the wider stakeholder community commitment to the cause , it's a simple lift and shift job data-point. Dog and pony show. We've got to manage that low hanging fruit driving the initiative forward and bleeding edge. Sacred cow sacred cow, or you better eat a reality sandwich before you walk back in that boardroom imagineer helicopter view, nor old boys club. Red flag at the end of the day. Draw a line in the sand bleeding edge, or on your plate, or driving the initiative forward but pull in ten extra bodies to help roll the tortoise. Quick win loop back bake it in but we don't want to boil the ocean put in in a deck for our standup today, let's unpack that later. Moving the goalposts. I have zero cycles for this. We need to dialog around your choice of work attire out of scope.",
	author: "Mr. Sloth"
};

var blog2 = {
  	image: "./images/BlogImage1.jpg",
	imageAlt: "blog1",
	title: "Student Carnivores",
	blog: "We need more paper forcing function and we need to leverage our synergies, nor who's responsible for the ask for this request? yet forcing function and put in in a deck for our standup today and who's responsible for the ask for this request?. Dog and pony show design thinking, for reach out. Move the needle open door policy, nor thought shower, or enough to wash your face and powerPointless. Critical mass curate wiggle room, so going forward, we want to see more charts so organic growth game-plan. T-shaped individual obviously. You better eat a reality sandwich before you walk back in that boardroom commitment to the cause but low-hanging fruit. Strategic high-level 30,000 ft view put in in a deck for our standup today. This vendor is incompetent work can I just chime in on that one, nor imagineer UX. New economy at the end of the day, so first-order optimal strategies but at the end of the day. ",
	author: "Gina"
};

var blog3 = {
	image: "./images/turkeyleg.jpg",
	imageAlt: "turkey leg",
	title: "Healthy Eating Habits For Students",
	blog: "Show pony. Run it up the flagpole, ping the boss and circle back drink the Kool-aid design thinking for knowledge process outsourcing but deliverables or pig in a python, and pig in a python. This proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables root-and-branch review, for value prop after I ran into Helen at a restaurant, I realized she was just office pretty. Shelfware. Red flag game-plan, so drink from the firehose cannibalize anti-pattern, so drink the Kool-aid locked and loaded. Feature creep quick-win. Helicopter view. Strategic high-level 30,000 ft view. After I ran into Helen at a restaurant, I realized she was just office pretty UX. Future-proof helicopter view, and paddle on both sides, or drink from the firehose put in in a deck for our standup today. We need to leverage our synergies hit the ground running pull in ten extra bodies to help roll the tortoise. Into the weeds one-sheet data-point, or driving the initiative forward so to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders vertical integration critical mass.",
	author: "GibHub"
};

allBlogs.push(blog1);
allBlogs.push(blog2);
allBlogs.push(blog3);


// allBlogs.push({image:"", imageAlt: "", title: "", blog: "", author: ""});
// allBlogs.push({image:"", imageAlt: "", title: "", blog: "", author: ""});

// console.log(allblogs);

var blogsContainer = document.getElementById("blogsCards");

for (var i = 0; i < allBlogs.length; i++) {
	var currentBlog = allBlogs[i];
	var blogString = "";

blogString += '<section class="blogSection">';
blogString +=		'<div>';
blogString +=			'<img src="' + currentBlog.image + '"alt=' + currentBlog.imageAlt + '>';
blogString +=		'</div>';
blogString +=		'<div class="title">';
blogString +=			'<h2>' + currentBlog.title +'</h2>';
blogString +=		'</div>';
blogString +=		'<div class="blog">';
blogString +=			'<h3>' + currentBlog.blog+ '</h3>';
blogString +=		'</div>';
blogString +=		'<div class="author">';
blogString +=			'<p>' + currentBlog.author + '</p>';
blogString +=		'</div>';
blogString +=	'</section>';


blogsContainer.innerHTML += blogString;
}