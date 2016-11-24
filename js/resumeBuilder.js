/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Aline Vianna",
    "role": "Web Developer",
    "contacts": {
        "generic": "ACDC",
        "email": "acdc@gmail.com",
        "mobile": "0999-0999",
        "twitter": "aghi-la",
        "github": "aghi-la",
        "blog": "http://wwww.google.com",
        "location": "Nashville, TN"
    },
    "welcomeMessage": "Hello, how are you? I'm Aline Vianna, nice to meet you.",
    "skills": ["css", "html", "javascript"],
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/100/358/19e5526.jpg"
};

var education = {
    "schools": [{
        "name": "PUC",
        "location": "Rio de Janeiro`",
        "degree": "Pós Graduação",
        "major": ["Análise de Sistemas", "Banco de Dados", "Programação", "Projeto de Sistemas"],
        "dates": "2013 - 2015",
        "url": "http://www.puc.br"
    }, {
        "name": "PUC",
        "location": "Rio de Janeiro`",
        "degree": "Graduação",
        "major": ["Desenho Industrial", "Design Gráfico", "Design de Produto"],
        "dates": "2005 - 2009",
        "url": "http://www.puc.br"
    }],

    "onlineCourses": [{
        "title": "Nanodegree Front-end",
        "school": "Udacity",
        "dates": "2015 - 2016",
        "url": "http://www.udacity.com",
    }]
};

var work = {
    "jobs": [{
        "employer": "ATSNET",
        "title": "Web Designer",
        "location": "Rio de Janeiro",
        "dates": "01/2016 - Atual",
        "description": "Trabalho com web"

    }, {
        "employer": "Ingresso.com",
        "title": "Web Designer",
        "location": "Rio de Janeiro",
        "dates": "09/2013 - 12/2015",
        "description": "Trabalho com web"
    }]
};

var projects = {
    "projects": [{
        "title": "Portal JUCERJA",
        "dates": "01/2016 - 12/2016",
        "description": "Fusce tempor leo quis odio semper tempor. Morbi viverra nisl sed massa euismod, sed consequat odio aliquet. Nulla pellentesque odio egestas iaculis pretium. Suspendisse lacinia posuere metus, sed pulvinar elit gravida sed. Aliquam ultrices.",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
    }, {
        "title": "Ingresso",
        "dates": "09/2013 - 12/2015",
        "description": "Fusce tempor leo quis odio semper tempor. Morbi viverra nisl sed massa euismod, sed consequat odio aliquet. Nulla pellentesque odio egestas iaculis pretium. Suspendisse lacinia posuere metus, sed pulvinar elit gravida sed. Aliquam ultrices.",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150", "http://placehold.it/350x150"]
    }]
};


bio.display = function() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var ocupation = HTMLheaderRole.replace("%data%", bio.role);
    var picture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(ocupation).prepend(name).append(picture);

    var contactGeneric = HTMLcontactGeneric.replace("%contact%", "contact: ").replace("%data%", bio.contacts.generic);
    var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var contactBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(contactGeneric).append(contactEmail).append(contactMobile).append(contactTwitter).append(contactGithub).append(contactBlog).append(contactLocation);
    $("#footerContacts").append(contactGeneric).append(contactEmail).append(contactMobile).append(contactTwitter).append(contactGithub).append(contactBlog).append(contactLocation);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var skillsFormatadas = HTMLskills.replace("%data%", skill);
            $("#skills:last").append(skillsFormatadas);
        })
    }
};
bio.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var scholNameDegree = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
        var schoolCity = HTMLschoolLocation.replace("%data%", school.location);
        var schoolYears = HTMLschoolDates.replace("%data%", school.dates);
        var schoolUrl = HTMLschoolUrl.replace("%data%", school.url);

        $(".education-entry:last").append(scholNameDegree).append(schoolCity).append(schoolYears).append(schoolUrl);

        if (school.major.length > 0) {
            school.major.forEach(function(maior) {
                var schoolMajor = HTMLschoolMajor.replace("%data%", maior);
                $(".education-entry:last").append(schoolMajor)
            });
        }
    });

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLschoolStart);
            var onlineTitleSchool = HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var onlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var onlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(onlineTitleSchool).append(onlineDates).append(onlineURL);
        })
    }
};

education.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var empregadorFormadato = HTMLworkEmployer.replace("%data%", job.employer);
        var tituloEmpregoFormadato = HTMLworkTitle.replace("%data%", job.title);
        var empregadorTituloFormatado = empregadorFormadato + tituloEmpregoFormadato;
        var dataEmpregoFormadato = HTMLworkDates.replace("%data%", job.dates);
        var LocalEmpregoFormadato = HTMLworkLocation.replace("%data%", job.location);
        var DescricaoEmpregoFormadato = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(empregadorTituloFormatado).append(dataEmpregoFormadato).append(LocalEmpregoFormadato).append(DescricaoEmpregoFormadato);
    });
};
work.display();

$("#main").prepend(internationalizeButton);

function inName() {
    var nome = bio.name;
    nome = nome.split(" ");
    nome[0] = nome[0].slice(0, 1).toUpperCase() + nome[0].slice(1).toLowerCase();
    nome[1] = nome[1].toUpperCase();
    return nome[0] + " " + nome[1];
};


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();



$("#mapDiv").append(googleMap);
