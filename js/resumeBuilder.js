var bio = 
{
	"name": "Mehreen Malik",
  	"role": "Junior Developer",
  	"contacts": 
  	{
    	"mobile": "089 705 7352",
    	"email": "mehreenmalik08@gmail.com",
    	"github": "www.github.com/MehreenMalik",
    	"location": "Dublin, Ireland"
  	},
  	"welMessage": "Welcome to my cv, if you require further information please contact me by my mobile number or email.",
  	"skills": 
  	[
    	"Android Development", "Java", "HTML",  "PHP", "MySQL", "XML", "Android Studio", "Quick learner"
  	],
  	"bioPic": "images/me.jpg",

  	display: function() 
  	{
  		var formattedName = HTMLheaderName.replace("%data%", bio.name);
    	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    	$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

    	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    	$("#topContacts").append(formattedMobile);
    	$("#footerContacts").append(formattedMobile);
    	
    	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    	$("#topContacts").append(formattedEmail);
    	$("#footerContacts").append(formattedEmail);
    	
    	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    	$("#topContacts").append(formattedGithub);
    	$("#footerContacts").append(formattedGithub);
    	
    	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    	$("#topContacts").append(formattedLocation);
    	$("#footerContacts").append(formattedLocation);
    	
    	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welMessage);
    	$("#header").append(formattedWelcome);
    	
    	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    	$("#header").append(formattedBioPic);
    	
    	if (bio.skills.length > 0)
    	{
    		$("#header").append(HTMLskillsStart);
      		for (var i = 0; i < bio.skills.length; i++)
      		{
        		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        		$("#skills").append(formattedSkill);
      		}
    	}
  	}
}

var work = 
{
	"jobs": 
	[
		/*{
            "employer": "Self-Employed",
            "title": "Student",
            "location": "Dublin, Ireland.",
            "dates": "1995-2018",
            "description": "A student my whole life, I consider it a job."
        }*/
    ],
  	
  	display: function() 
  	{
    	for (job in work.jobs)
    	{
      		$("#workExperience").append(HTMLworkStart);
      		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      		var formettedEmployerTitle = formattedEmployer + formattedTitle;
      		$(".work-entry:last").append(formettedEmployerTitle);
      		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      		$(".work-entry:last").append(formattedDates);
      		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      		$(".work-entry:last").append(formattedDescription);
    	}
  	},

  	//Find all locations that I have worked
  	locationizer: function(_work)
  	{
    	var allLocation = [];
    	for (var work in _work.jobs)
    	{
      		var _workLoc = _work.jobs[work].location;
      		allLocation.push(_workLoc);
    	}
    	
    	return allLocation;
  	}
}

var projects = 
{
  	"projects": 
  	[
  		{
            "title": "Android Attendance Application",
            "dates": "2017-2018",
            "description": "Attendance android application that allows lecturer's to record attendance for modules and see real time statistics.",
            "images": ['images/att_1.png','images/att_2.png','images/att_3.png','images/att_4.png']
        },
        {
            "title": "Weather Application",
            "dates": "2017-2018",
            "description": "Weather application which provides current temperature with description and humidity.",
            "images": ['images/wea_1.png','images/wea_2.png','images/wea_3.png','images/wea_4.png']
        },
        {
            "title": "Restaurant Management System",
            "dates": "2016-2017",
            "description": "The result of this project was a fully functional android application that handles all the operations that occur inside a restaurant setting. It used volley to handle client-server operations and incorporated NotificationManager to alert waiters about changes to their order statuses.",
            "images": ['images/rms_1.png','images/rms_2.png','images/rms_3.png','images/rms_4.png','images/rms_5.png']
        }
    ],

  	//Display projects in resume page
  	display: function() 
  	{
    	for (project in projects.projects) 
    	{
      		$("#projects").append(HTMLprojectStart);
	      	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	      	$(".project-entry:last").append(formattedTitle);
	      	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	      	$(".project-entry:last").append(formattedDates);
	      	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	      	$(".project-entry:last").append(formattedDescription);
	      	
	      	if (projects.projects[project].images.length > 0)
	      	{
	        	for (image in projects.projects[project].images) 
	        	{
	          		var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	          		$(".project-entry:last").append(formattedImages);
	        	}
	      	}
    	}
  	}
}

var education = 
{
	"schools": 
	[
		{
			"name" : "Institute of Technology, Blanchardstown",
			"location" : "Blanchardstown, Ireland",
			"degree": "Bachelor of Science (Hon) in Computer Science.",
			"majors" : ["B.S. (Hon)"],
			"dates" : "2018",
			"url": "http://www.itb.ie/studyatitb/bn104.html"
		},
		{
			"name" : "Institute of Technology, Blanchardstown",
			"location" : "Blanchardstown, Ireland",
			"degree": "Bachelor of Science in Computer Science.",
			"majors" : ["B.S."],
			"dates" : "2017",
			"url": "http://www.itb.ie/studyatitb/bn104.html"
		}
	],
  	"onlineCourses": 
  	[
  		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": "2018",
			"url": "http://www.udacity.com/course/ud804"
		},
  		{
			"title": "Android Basics: Networking",
			"school": "Udacity",
			"dates": "2018",
			"url": "http://www.udacity.com/course/ud843"
		},
		{
			"title": "Firebase in a Weekend (Android)",
			"school": "Udacity",
			"dates": "2017",
			"url": "http://www.udacity.com/course/ud0352"
		},
		{
			"title": "Android Basics: Multiscreen Apps",
			"school": "Udacity",
			"dates": "2016",
			"url": "http://www.udacity.com/course/ud0352"
		}
	],

	display: function()
	{
    	for (edu in education.schools) 
    	{
      		$('#education').append(HTMLschoolStart);
      		var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
      		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
      		var formattedNameAndDegree = formattedName + formattedDegree;
      		$(".education-entry:last").append(formattedNameAndDegree);
      		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
      		$(".education-entry:last").append(formattedDate);
      		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
      		$(".education-entry:last").append(formattedLocation);
      		if (education.schools[edu].majors.length > 0)
      		{
        		for (major in education.schools[edu].majors) 
        		{
          			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
          			$(".education-entry:last").append(formattedMajor);
        		}
      		}
    	}

    	$('#education').append(HTMLonlineClasses)
    	
    	for (online in education.onlineCourses)
    	{
      		$('#education').append(HTMLschoolStart);
      		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
      		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
      		var formattedTitleAndSchool = formattedTitle + formattedSchool;
      		$(".education-entry:last").append(formattedTitleAndSchool);
      		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
      		$(".education-entry:last").append(formattedDate);
      		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
      		$(".education-entry:last").append(formattedURL);
    	}
  	}
}

work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
//$("#main").append( internationalizeButton );