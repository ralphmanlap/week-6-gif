  $(document).on("click", ".gif-button", function() {
    var search =  $(this).attr("data-topic");
    console.log(search);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	console.log(response.data);

		for (var i = 0; i < 10; i++) {

			var gifImage = $("<img>");

	        gifImage.attr("src", response.data[i].images.original_still.url);
	        console.log(response.data[i].images.original_still.url);
	        gifImage.attr("data-animated", response.data[i].images.original.url);
	        gifImage.attr("data-still", response.data[i].images.original_still.url);
	        gifImage.attr("alt", "gif image");
	        gifImage.attr("status", "still");
	        gifImage.addClass("image");

	        var gifDiv = $("<div>");
	        gifDiv.addClass("col-xs-12 col-md-3");

	        var p = $("<p>");

	        p.text("Rating: " + response.data[i].rating);

	        gifDiv.append(p);

	        gifDiv.append(gifImage);

	        $("#gifs").prepend(gifDiv);
		}
	});
   });


$(document).on("click", ".image", function() {
	console.log(this);

	var myimage = $(this);

	var status = myimage.attr("status");

	if (status == "still"){
		myimage.attr("src", myimage.attr("data-animated"));
		myimage.attr("status", "animated");
	}
	else {
		myimage.attr("src", myimage.attr("data-still"));
		myimage.attr("status", "still");
	}
});



$(document).on("click", "#add-gif", function() {

        // YOUR CODE GOES HERE
        event.preventDefault();
         
        var newButton = $("<button>");
        var new_gif = $("#gif-input").val().trim();
        newButton.addClass("btn gif-button");
        newButton.attr("data-topic", new_gif);
        console.log(new_gif);
        newButton.text(new_gif);
        $("#button-group").append(newButton);
        //$("#movies-view").empty();

      
      });
