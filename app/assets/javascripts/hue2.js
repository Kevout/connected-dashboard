function lampstuur(n,w) {
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open('PUT',
'http://10.0.1.13/api/newdeveloper/lights/2/state',true);


	switch(n)
	{
	case "lamp_on":
	  xmlhttp.send('{"on":true}');
	  break;
	case "lamp_off":
	  xmlhttp.send('{"on":false}');
	  break; 
	case "lamp_white":
	  xmlhttp.send('{"ct":0}');
	  break;
	default:

	}
}
//

$(document).ready(function(){
	$("#lamp_on").click(function(){
	  lampstuur("lamp_on");
	});
	$("#lamp_off").click(function(){
	  lampstuur("lamp_off");
	});
	$("#lamp_white").click(function(){
	  lampstuur("lamp_white");
	});
});
function returnpercentage(w) {
w = w / 2.55;
w = Math.floor(w) + "%"
return w
}