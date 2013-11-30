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
});
function returnpercentage(w) {
w = w / 2.55;
w = Math.floor(w) + "%"
return w
}