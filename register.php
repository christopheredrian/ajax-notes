<?php if (isset($_POST['response-json'])): ?>
	<?php if ($_POST['response-json'] === 'on'): ?>
		<?php
		$arr = [];
		foreach ($_POST as $key => $value) {
			$arr[$key] = $value;
		}
		echo json_encode($arr);
		?>
	<?php endif ?>
<?php else: ?>
	<p>Thank you for registering</p>
	<p>These are your details: </p>
	<?php foreach ($_POST as $key => $value): ?>
		<?php echo htmlspecialchars($key) . " is " . htmlspecialchars($value) . "<br>" ?>
	<?php endforeach ?>
<?php endif ?>

