//Loads validate function when paeg loads
$('document').ready(function(){
	validate();
});

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
            '<legend>HTML5 Validation</legend>' +
            '<div>' +
              '<label for="cname">Name (required, at least 2 characters)</label>' +
              '<input id="cname" name="name" minlength="2" type="text" required>' +
            '</div>' +
            '<div>' +
              '<label for="cemail">E-Mail (required)</label>' +
              '<input id="cemail" type="email" name="email" required>' +
            '</div>'+
            '<div>' +
              '<label for="age">Your age (required, 5-50)</label>' +
              '<input id="number" name="age" min="5" max="50" value="8" required></input>' +
            '</div>' +
            '<div>' +
              '<label for="curl">URL (optional)</label>' +
              '<input id="curl" type="url" name="url">' +
            '</div>' +
            '<div>' +
              '<label for="ccomment">Your comment (required)</label>' +
              '<textarea id="ccomment" name="comment" required></textarea>' + 
            '</div>' +
            '<div>' +
              '<input class="submit" type="submit" value="Submit">' +
            '</div>' +
          '</fieldset>' +
        '</form>' +
      '</div>');
};

//Empties and loads javascript validaiton
function v2(){
	//$('.content').empty();
	validate();
};

function validate(){
	$('#regForm').validate({

    	//Handler when submit form is valid, popup message and reload in 5 seconds
    	submitHandler: function(form) {
    	  window.alert("Successfully submitted form, reloading");
    	    setTimeout( function() {
    	      $( '#regForm' ).get(0).reset();
    	      location.reload();
    	    }, 5000 );
    	},

   		 //Displays errors when form is invalid
   		 invalidHandler: function( event, validator ) {
   		   var errors = validator.numberOfInvalids();
   		   if( errors ) {
   		     var message = ( errors === 1 ) ? 'highlighted field'
   		                                    : errors + ' highlighted fields';
   		     $( '.submit-error' ).show().find( 'span' ).html( message );
   		   }
   		 },

		//Rules for the elements
		rules: {
			email: {
				required: true,
				email: true
			},
			email_confirm: {
				required: true,
				email: true,
				equalTo: "#email"
			},
			zip: {
				required: true,
			},
			password: {
				required: true,
				minlength: 6
			},
			password_confirm: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			}
		},
		//Error messages
		messages:{
			email: {
				required: "Email cannot be blank",
				email: "Please enter a valid email"
			},
			email_confirm: {
				required: "Email cannot be blank",
				email: "Please enter a valid email",
				equalTo: "Email is the not the same"
			},
			zip: {
				required: "Please enter a zip code",
			},
			password: {
				required: "Please enter a password",
				minlength: "Please enter at least 6 characters"
			},
			password_confirm: {
				required: "Please enter a password",
				minlength: "Please enter at least 6 characters",
				equalTo: "Please enter the same password"
			}
		}
	});
};

//Masks zip code to have 5 digits
$('#zip').mask("99999"), {placeholder: ""};