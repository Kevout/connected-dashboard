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
	$("#hue3_on").click(function(){
	  hue3("hue3_on");
	});
	$("#hue3_off").click(function(){
	  hue3("hue3_off");
	});
	$("#hue3_white").click(function(){
	  hue3("hue3_white");
	});
});
function returnpercentage(w) {
w = w / 2.55;
w = Math.floor(w) + "%"
return w
}