<?php 


if (isset($_POST['to-append'])) {
	$msg = $_POST['to-append'] . "\n";
	echo $msg;
	 file_put_contents('ajax_info.txt', $msg, FILE_APPEND | LOCK_EX);
	// $handle = fopen("ajax_info.txt", 'a');
	// fwrite($handle, $_POST['to-append']);
	// fclose($handle);
	echo "Success <- from server";
} else {
	echo "Not Successful <- from server";
}


 ?>