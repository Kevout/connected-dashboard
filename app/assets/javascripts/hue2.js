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
//

$(document).ready(function(){
	$("#hue2_on").click(function(){
	  hue2("hue2_on");
	});
	$("#hue2_off").click(function(){
	  hue2("hue2_off");
	});
	$("#hue2_white").click(function(){
	  hue2("hue2_white");
	});
});
function returnpercentage(w) {
w = w / 2.55;
w = Math.floor(w) + "%"
return w
}