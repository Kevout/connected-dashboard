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
	case "hue1_fall":
	  xmlhttp.send('{"on":true, "bri":124, "hue":6491, "sat":213, "ct":500}');
	  break;
	case "hue1_night":
	  xmlhttp.send('{"on":true, "bri":1, "hue":46988, "sat":254, "xy":[0.1683, 0.0426], "ct":500}');
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
	case "hue2_fall_wakeup":
	  xmlhttp.send('{"on":true, "bri":2, "hue":2005, "sat":206, "ct":500}');
	  break;
	case "hue2_fall":
	  xmlhttp.send('{"on":true, "bri":124, "hue":2005, "sat":206, "ct":500}');
	  break;
	case "hue2_night":
	  xmlhttp.send('{"on":true, "bri":7, "hue":49344, "sat":254, "xy":[0.1943, 0.0551], "ct":500}');
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
	case "hue3_fall":
	  xmlhttp.send('{"on":true, "bri":124, "hue":11228, "sat":165, "ct":432}');
	  break;
	case "hue3_night":
	  xmlhttp.send('{"on":true, "bri":3, "hue":46988, "sat":254, "xy":[0.1683, 0.0426], "ct":500}');
	  break;
	default:

	}
}
//

$(document).ready(function(){
	//Hue 1
	$("#hue1_on").click(function(){
	  hue1("hue1_on");
	});
	$("#hue1_off").click(function(){
	  hue1("hue1_off");
	});
	$("#hue1_white").click(function(){
	  hue1("hue1_white");
	});
	
	//Hue 2
	$("#hue2_on").click(function(){
	  hue2("hue2_on");
	});
	$("#hue2_off").click(function(){
	  hue2("hue2_off");
	});
	$("#hue2_white").click(function(){
	  hue2("hue2_white");
	});
	$("#hue2_wakeup").click(function(){
	  hue2("hue2_fall_wakeup");
	});
	
	//Hue 3
	$("#hue3_on").click(function(){
	  hue3("hue3_on");
	});
	$("#hue3_off").click(function(){
	  hue3("hue3_off");
	});
	$("#hue3_white").click(function(){
	  hue3("hue3_white");
	});
	
	//All Hues
	$("#allhue_off").click(function(){
	  hue1("hue1_off");
	  hue2("hue2_off");
	  hue3("hue3_off");
	});
	$("#allhue_fall").click(function(){
	  hue1("hue1_fall");
	  hue2("hue2_fall");
	  hue3("hue3_fall");
	});
	$("#allhue_night").click(function(){
	  hue1("hue1_night");
	  hue2("hue2_night");
	  hue3("hue3_night");
	});
});
function returnpercentage(w) {
w = w / 2.55;
w = Math.floor(w) + "%"
return w
}