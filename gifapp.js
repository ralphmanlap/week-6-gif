 var buttons = [];

  $(document).on("click", "#gif-button",function() {
    var search =  $(this).attr("data-topic");
    console.log(search);
    var queryURL = "'http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10'";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	console.log(response.data);

		for (var i = 0; i < 10; i++) {

			var gifImage = $("<img>");

	        gifImage.attr("src", reponse.data[i].images.original_still);
	        gifImage.attr("data-animated", reponse.data[i].images.original);
	        gifImage.attr("data-still", reponse.data[i].images.original_still);
	        gifImage.attr("alt", "gif image");
	        gifImage.attr("status", "still");

	        var gifDiv = $("<div>");

	        var p = $("<p>");

	        p.text(response.data[i].rating);

	        gifDiv.append(p);

	        gifDiv.append(gifImage);

	        $("#gifs").prepend(gifDiv);
		}
	});
    });



$("#add-button").on("click", function(event) {

        // YOUR CODE GOES HERE
        event.preventDefault();

        var new_gif = $("#gif-input").val().trim();

        movies.push(new_gif);

        //$("#movies-view").empty();

        //renderButtons();   
      
      });
