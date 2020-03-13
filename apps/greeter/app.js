var g = G$('Mary', 'Jane');

g.greet().setLang('es').greet(true).log();

$('#login').click(function(){
    var loginGrtr = G$('Mary', 'Jane');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
