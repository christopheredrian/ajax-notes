$(document).ready(function(){


	$('#register-form').on('submit', function(event){
		// IMPORTANT: to prevent the form from submitting
		event.preventDefault();
		console.log($(this).serialize());
		var registerForm = $(this);
		$.ajax('register.php', {
			type: 'POST',
			// PULLS ALL THE DATA OUT OF THE FORM
			data: registerForm.serialize(),
			success: function(response){
				alert('registered!');
				registerForm.remove();
				$("#responseDiv").hide().html(response).fadeIn();
			},
			error: function(response, errorType, errorMessage){
				alert("There was an error!" + errorMessage);
			}
		});

	});

});