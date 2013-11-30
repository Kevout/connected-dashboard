function hue1(n,w) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('PUT',
'http://10.0.1.13/api/newdeveloper/lights/1/state',true);


	switch(n)
	{
	case "hue1_on":
	  xmlhttp.send('{"on":true}');
	  break;
	case "hue1_off":
	  xmlhttp.send('{"on":false}');
	  break; 
	case "hue1_white":
	  xmlhttp.send('{"ct":0}');
	  break;
	default:

	}
}

function hue2(n,w) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('PUT',
'http://10.0.1.13/api/newdeveloper/lights/2/state',true);


	switch(n)
	{
	case "hue2_on":
	  xmlhttp.send('{"on":true}');
	  break;
	case "hue2_off":
	  xmlhttp.send('{"on":false}');
	  break; 
	case "hue2_white":
	  xmlhttp.send('{"ct":0}');
	  break;
	default:

	}
}

function hue3(n,w) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('PUT',
'http://10.0.1.13/api/newdeveloper/lights/3/state',true);


	switch(n)
	{
	case "hue3_on":
	  xmlhttp.send('{"on":true}');
	  break;
	case "hue3_off":
	  xmlhttp.send('{"on":false}');
	  break; 
	case "hue3_white":
	  xmlhttp.send('{"ct":0}');
	  break;
	default:

	}
}
//

$(document).ready(function(){
	$("#hue1_on").click(function(){
	  hue1("hue1_on");
	});
	$("#hue1_off").click(function(){
	  hue1("hue1_off");
	});
	$("#hue1_white").click(function(){
	  hue1("hue1_white");
	});
	$("#hue2_on").click(function(){
	  hue2("hue2_on");
	});
	$("#hue2_off").click(function(){
	  hue2("hue2_off");
	});
	$("#hue2_white").click(function(){
	  hue2("hue2_white");
	});
	$("#hue3_on").click(function(){
	  hue3("hue3_on");
	});
	$("#hue3_off").click(function(){
	  hue3("hue3_off");
	});
	$("#hue3_white").click(function(){
	  hue3("hue3_white");
	});
	$("#allhue_off").click(function(){
	  hue1("hue1_off");
	  hue2("hue2_off");
	  hue3("hue3_off");
	});
});
function returnpercentage(w) {
w = w / 2.55;
w = Math.floor(w) + "%"
return w
}