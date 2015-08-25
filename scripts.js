var apiKey = 'AIzaSyALvAYuVddufAShD7fFYsSt9hvAbZyDgYk';
//this is for Google books
function handleResponse(response) {
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
      }
    }


//Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(data) {
    console.log(data);
    var content = $('#results');
   
 console.log(data.items[0].volumeInfo.title);
for (var i=0; i < data.items.length; i++ ){




        var $newDiv = $('<div>');     
   		var $newP = $('<p>');
   		var $newP2 = $('<p>');

        $newDiv.text(data.items[i].volumeInfo.title); 
        $newP.text(data.items[i].volumeInfo.authors).addClass("author");
        $newP2.text(data.items[i].volumeInfo.description);
       	$newDiv.append($newP);
       	$newDiv.append($newP2);
        content.append($newDiv);
  console.log(i);
   };
}


$(document).ready(function() {
 
$('#find').on('click', function(e){
	var book = $('#search').val();
	search(book);


});

});


function search(query){
    console.log('In search: ', query);

    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURI(query) + '&key=' + apiKey,
        crossDomain: true,
        dataType: 'json',
       success: function (response) {
            console.log(response);
            $('#results').empty();
            searchCallback(response);
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        }
    });
};



