jQuery(document).ready(function() {

    $(".entrada").click(function()
    {
      var  cor = $("#bt").val();
        if (cor.trim() == "" || cor.trim().length < 3) {
            alert("Nome é obrigatório!")
            $("#bt").addClass("erro");
        }   else {
            $("#bt").removeClass("erro");
        }
        var  sex = $("#sex").val();
        if (sex == '') {
            alert("Sexo é obrigatório!")
            $("#sex").addClass("erro");
        } else {
            $("#sex").removeClass("erro");
        }
    });


});

