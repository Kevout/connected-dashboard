<?php
include 'settings.php';

//Hue setup to create a user.
$data = array("devicetype" => "user", "username" => $hue_user);                                                                    
$data_string = json_encode($data);                                                                                   
 
$ch = curl_init($hue_url);                                                                      
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json',                                                                                
    'Content-Length: ' . strlen($data_string))                                                                       
);                                                                                                                   
 
$result = curl_exec($ch);

echo "Push the button on your Hue bridge now.";
sleep(60); //Gives you 60 seconds to click the button.

//Hue setup to create a user.
$data = array("devicetype" => "user", "username" => $hue_user);                                                                    
$data_string = json_encode($data);                                                                                   
 
$ch = curl_init($hue_url);                                                                      
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json',                                                                                
    'Content-Length: ' . strlen($data_string))                                                                       
);                                                                                                                   
 
$result = curl_exec($ch);

?>