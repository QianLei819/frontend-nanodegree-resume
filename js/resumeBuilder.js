
//var awesomeThoughts="I am QianLei and I am AWESOME!";
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%","QianLei");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness","programming","teaching","JS"];
$("#main").append(skills.length);