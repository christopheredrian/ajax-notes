<p>Thank you for registering</p>
<p>These are your details: </p>
<?php 

foreach ($_POST as $key => $value)
	echo htmlspecialchars($key) . " is " . htmlspecialchars($value) . "<br>";
?>