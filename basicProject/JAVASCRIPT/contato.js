$(document).ready(function(){
    $(".button").click(function(event){
        event.preventDefault();

        var nome = $("#nome").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        var idade = $("#idade").val();
        var linkedin = $("#linkedin").val();

        alert("Nome: " + nome + "\nEmail: " + email + "\nTelefone: " + tel + "\nIdade: " + idade + "\nLinkedin: " + linkedin);
    });
}) 

    


