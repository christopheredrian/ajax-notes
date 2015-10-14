$(document).ready(function(){
	$body = $("body");
	// Change Content button Event here
	$("#change-btn").on('click', function(){
		$.ajax('ajax_info.txt', {
			success: function(response){
				$("#myDiv").find("p")
				.hide()
				.text(response)
				.fadeIn("slow");
			},
			error: function(response, errorType, errorMessage){
				alert("There was an error!");
			},
			beforeSend: function(){
				$body.addClass("loading");
			},
			complete: function(){
				$body.removeClass("loading");
			},
			cache: false
		});
	});
	$("#append-btn").on('click', function(){
		$.ajax("post.php",{
			method: "POST",
			data: {"to-append": $("#to-append").val() },
			success: function(){
				// Check auto-update checkbox
				if($("#auto-update").is(':checked')){
					$("#change-btn").click();
				}
				// alert("Successfully posted to server!");
			},
			error: function(response, errorType, errorMessage){
				alert("There was an error on posting!");
			},
			beforeSend: function(){
				$body.addClass("loading");
			},
			complete: function(){
				$body.removeClass("loading");
			}

		});

	});

});