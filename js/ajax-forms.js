$(document).ready(function(){

	// AJAX forms with 2 conditions 
	$('#register-form').on('submit', function(event){
		// IMPORTANT: to prevent the form from submitting
		event.preventDefault();
		console.log($(this).serialize());
		var registerForm = $(this);
		$.ajax(registerForm.attr('action'), {
			type: registerForm.attr('method'),
			// PULLS ALL THE DATA OUT OF THE FORM
			data: registerForm.serialize(),
			success: function(response){
				try {
					var respJson =  JSON.parse(response);
					console.log(respJson);
					$("#responseDivJson").hide().html(JSON.stringify(respJson)).fadeIn();
					// This means the response is not JSON
				} catch(error) {
					console.log('on catch');
					showAsHtml(response);
				}

			},
			error: function(response, errorType, errorMessage){
				console.log("There was an error!" + errorMessage);
			}
		}); // -- end $.ajax

		function showAsHtml(response){
			console.log('registered!');
			registerForm.remove();
			$("#responseDiv").hide().html(response).fadeIn();
		}

	}); // - end on submit


	// AJAX with PURE JSON
	$('#jsonRequestBtn').on('click', function(){
		$.ajax('person.json', {
			type: 'GET',
			dataType: 'json',
			success: function(response){
				$('#personResponseJson').html(JSON.stringify(response));
				// Barbaric! haha atleast do concatenation instead!
				$('#personResponseJson').append('<br>Id: ' + response.id);
				$('#personResponseJson').append('<br>First Name: ' + response.firstName);
				$('#personResponseJson').append('<br>Last Name: ' + response.lastName);
				$('#personResponseJson').append('<br>age: ' + response.age);
			},
			contentType: 'application/json' // Tells the server that we want a JSON format
		});
	});

});