//Click handler to load html5 validation
$('.btn1').click(function(){
	v1();
});

//Click handler to load javascript validation
$('.btn2').click(function(){
	v2();
});

//Empties and loads html5 validation
function v1(){
	$('.content').empty();

	$('.content').append('<div id="v1">' + 
        '<h1>HTML5 Validation</h1>' + 
        '<form class="cmxform" id="commentForm" method="get" action="">' +
          '<fieldset>' +
            '<legend>Please provide your name, email address (won\'t be published) and a comment</legend>' +
            '<p>' +
              '<label for="cname">Name (required, at least 2 characters)</label>' +
              '<input id="cname" name="name" minlength="2" type="text" required>' +
            '</p>' +
            '<p>' +
              '<label for="cemail">E-Mail (required)</label>' +
              '<input id="cemail" type="email" name="email" required>' +
            '</p>'+
            '<p>' +
              '<label for="age">Your age (required, 5-50)</label>' +
              '<input id="number" name="age" min="5" max="50" value="8" required></input>' +
            '</p>' +
            '<p>' +
              '<label for="curl">URL (optional)</label>' +
              '<input id="curl" type="url" name="url">' +
            '</p>' +
            '<p>' +
              '<label for="ccomment">Your comment (required)</label>' +
              '<textarea id="ccomment" name="comment" required></textarea>' + 
            '</p>' +
            '<p>' +
              '<input class="submit" type="submit" value="Submit">' +
            '</p>' +
          '</fieldset>' +
        '</form>' +
      '</div>');
}


//Empties and loads javascript validaiton
function v2(){
	$('.content').empty();
	
}

