$(document).ready(function(){

    /* LOGIN Page START */
    var inputDefaultColor = '#ccc';
    $('body#login_page input[name="username"]').focus(function(){
        var $_this = $(this);
        if($_this.val() == 'Username') $_this.val('');
        $_this.css('color', '#000');
    }).blur(function(){
            var $_this = $(this);
            if($_this.val() == '') {
                $_this.val('Username');
                $_this.css('color', inputDefaultColor);
            }
        });

    $('body#login_page input[name="password"]').focus(function(){
        var $_this = $(this);
        if($_this.val() == 'Password') $_this.val('');
        $_this.attr('type', 'password');
        $_this.css('color', '#000');
    }).blur(function(){
            var $_this = $(this);
            if($_this.val() == '') {
                $_this.attr('type', 'text');
                $_this.val('Password');
                $_this.css('color', inputDefaultColor);
            }
        });

    $('body#login_page input[name="email"]').focus(function(){
        var $_this = $(this);
        if($_this.val() == 'Email') $_this.val('');
        $_this.css('color', '#000');
    }).blur(function(){
            var $_this = $(this);
            if($_this.val() == '') {
                $_this.val('Email');
                $_this.css('color', inputDefaultColor);
            }
        });

    $('body#login_page a').click(function(e){
        e.preventDefault();
        var $_this = $(this);

        if($_this.hasClass('registration')){
            $_this.text('Login');
            $_this.removeClass('registration');
            $_this.addClass('login');
            $('body#login_page input[name="email"]').show();
            $('body#login_page input[name="login"]').attr('name', 'registration').val('Register');

        } else if($_this.hasClass('login')){
            $_this.text('Registration');
            $_this.removeClass('login');
            $_this.addClass('registration');
            $('body#login_page input[name="email"]').hide();
            $('body#login_page input[name="registration"]').attr('name', 'login').val('Login');
        }
    });
    /* LOGIN Page END */

//    $('#login_page input[name="registration"]').click(function(){
//        console.log('mongodb?');
//    });

    $( document ).on( "click", '#login_page input[name="registration"]', function( e ) {
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var email = $('input[name="email"]').val();

        $.ajax({
            url: 'http://localhost:8888/registration',
            data:{
                user: username,
                pass: password,
                email: email
            },
            success: function(data, textStatus, jqXHR ){
                console.log('data: ' + JSON.stringify(data));
                console.log('textStatus: ' + textStatus);
                console.log('jqXHR: ' + JSON.stringify(jqXHR));
            }
        });
    } );


});
