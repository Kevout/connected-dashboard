<?php

//Settings File - all of your files should go here.

//API Keys
$hue_bridge = '10.0.1.13'; //IP Address of Hue => http://www.meethue.com/api/nupnp

/* You have to create a new user first. Go to http://HUEIPHERE/debug/clip.html then enter the following information:
	URL: http://HUEIPHERE/api
	MESSAGE BODY: {"devicetype":"user","username":"newdeveloper"}
	Click POST
	Press the button on your Hue Bridge
	Click POST again. You should get a success message in Command Response
*/

$hue_user = 'newdeveloper'; //Username that you created on your Hue device. 
$hue_url = 'http://' . $hue_bridge . '/api'; //url of Hue bridge
$hue_api_url = $hue_url . '/' . $hue_user . '/';

?>