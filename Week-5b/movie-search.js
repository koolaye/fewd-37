// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);


// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);

}
function resultsReceived(results) {
var array = results["Search"];

     for (var i = 0; i < array.length; i++) {

//adding classes to new elements
     var li = document.createElement("li");
     li.classList.add("movie");

     var title = document.createElement("div");
     title.classList.add("movie-title");

     var date = document.createElement("div");
     date.classList.add("movie-release-date");

     var link = document.createElement("a");
     link.setAttribute("href", "http://www.imdb.com/title/" + array[i]["imdbID"]);

//Grabbing results and appending them to a list
     document.querySelector("#movies").appendChild(li);
     li.appendChild(title);
     title.appendChild(link).textContent = results["Search"][i]["Title"];
     li.appendChild(date).textContent = results["Search"][i]["Year"];

  }
}
