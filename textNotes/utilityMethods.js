$(document).ready(function(){
	var collection = {};
	// 1. each
	$.each(collection, function(index, object){


	});

	// 2. $.getJSON
	$.getJSON('person.json', function(result){
		var books = $.map(result, function(item, index){
			// return item + 1; 
			// USAGE
			var listItem = $('<li></li>');
			$("<h1>Title" + item.title + "</h1>").appendTo(listItem);
			$("<p>Description: " + item.description + "</p>");
			return listItem;
		});
		div.html(books);

	});

	// 3. $.map();
	// where collection contains books (title, description))
$.map(collection, function(item, index){
		// return item + 1; 
		// USAGE
		var listItem = $('<li></li>');
		$("<h1>Title" + item.title + "</h1>").appendTo(listItem);
		$("<p>Description: " + item.description + "</p>");
		return listItem;
	});


element.detach().append().appendTo(); // remove element from the dom more efficient

	//  MAV VS EACH?
	// each: returns none
	// map: returns modified array

});