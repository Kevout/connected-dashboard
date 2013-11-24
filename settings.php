<?php

//Settings File - all of your files should go here.

//API Keys
$hue_bridge = '10.0.1.13'; //IP Address of Hue => http://www.meethue.com/api/nupnp
$hue_user = 'dashboard'; //Username that will be created on your Hue device. Default is dashboard, but choose whatever you want.
$hue_url = 'http://' . $hue_bridge . '/api'; //url of Hue bridge
$hue_api_url = $hue_url . '/' . $hue_user . '/';

?>