var allBlogs= []; 

var blog1 = {
	image: "./images/blogpost3.jpg",
	imageAlt: "kids",
	title: "These Crazy Kids Love to Code",
	blog: "<p>Man, these kids love. to. code. Look how excited they are getting about the code! I am Mr. Sloth, CEO of Teachers Touch. You can really tell how touched these kids are by the code they are learning! At Teachers Touch we feel so touched by how touched our students are.</p><p>In today’s digital world, coding is a fundamental skill alongside math and reading, but too few kids have the opportunity to learn to program because it is rarely taught in school. That's why Teacher's Touch made it a mission to provide kids with the opportunity to code their hearts out!</p>",
	author: "Mr. Sloth"
};

var blog2 = {
  	image: "./images/BlogImage1.jpg",
	imageAlt: "blog1",
	title: "Coding with Bacon",
	blog: "<p>One of the problems we have encountered in 100 years of touching students is that many students love to compare coding to bacon. Sure, it's all about bacon, but what about beef? I think it's easier for students to eat bacon since it's so thin.</p><p>I try not to eat my own kind so it's very hard for me to encourage teaching class with bacon comparisons. I try to encourage our instructors to push a different agenda: beef.",
	author: "Devin Bacon"
};

var blog3 = {
	image: "./images/turkeyleg.jpg",
	imageAlt: "turkey leg",
	title: "Healthy Eating Habits For Students",
	blog: "<p>These students need turkey legs. Every day. Sometimes twice a day. For the best results the turkey legs should be eaten with a side of yogurt parfait. It's also recommended to use a chin hammock to keep the crumbs and grease off of the computer.</p><p>Fruits and vegetables are low in calories and nutrient dense, which means they are packed with vitamins, minerals, antioxidants, and fiber. Focus on eating the recommended daily amount of at least five servings of fruit and vegetables and it will naturally fill you up and help you cut back on unhealthy foods.</p>",
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
blogString +=		'<div class="blogContent">';
blogString +=			'<div class="blogTitle">';
blogString +=				'<h2>' + currentBlog.title +'</h2>';
blogString +=			'</div>';
blogString +=			'<div class="blogText">';
blogString +=				'<p>' + currentBlog.blog+ '<p>';
blogString +=			'</div>';
blogString +=			'<div class="author-text">';
blogString +=				'<p>' + currentBlog.author + '</p>';
blogString +=			'</div>';
blogString +=		'</div>';
blogString +=	'</section>';


blogsContainer.innerHTML += blogString;
}