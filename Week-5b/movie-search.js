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
    //  var li = document.createElement("li");
    //  li.classList.add("movie");

     var li = $("<li>").addClass("movie");
     var title = $("<div>").addClass("movie-title");
     var date = $("<div>").addClass("movie-release-date");
     var link = $("<a>").attr("href", "http://www.imdb.com/title/" + array[i]["imdbID"]);

//anchor: declare variables, add the link,

    //  var title = document.createElement("div");
    //  title.classList.add("movie-title");
     //
    //  var date = document.createElement("div");
    //  date.classList.add("movie-release-date");
     //
    //  var link = document.createElement("a");
    //  link.setAttribute("href", "http://www.imdb.com/title/" + array[i]["imdbID"]);

//Grabbing results and appending them to a list


    var $li = $("#movies").append($li);
    var $title = $li.append($title);
    var $text = $title.append("link").text(array[i]["Title"]);
    var $year = $li.append("date").text(array[i]["Year"]);

    //  document.querySelector("#movies").appendChild(li);
    //  li.appendChild(title);
    //  title.appendChild(link).textContent = array[i]["Title"];
    //  li.appendChild(date).textContent = array[i]["Year"];

  }
}
