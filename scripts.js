$(document).ready(function() {

    $('#name').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 5 && name_length <= 15){
			input.removeClass("invalid").addClass("valid");
		}
		else{
			input.removeClass("valid").addClass("invalid");
            //alert('Wprowadź Imię i nazwisko!');
		}
    });

    $('#email').on('blur', function() {
		var input = $(this);
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = pattern.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			//alert('Wprowadź adres e-mail');
		}
    });

    $('#submit').click(function(event){
        var name = $('#name');
        var email = $('#email');
        
        if(name.hasClass('valid') && email.hasClass('valid')){
            alert("Twoje ciacha są już w drodze! :)");	
        }
        else {
            event.preventDefault();
            alert("Uzupełnij poprawnie wszystkie pola!");	
        }
    });
});
