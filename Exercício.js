function ex22()
{
    var texto = entrada.value;
    if (texto == "A" || texto == "E" || texto == "I" || texto == "O" || texto == "U" || texto == "a" || texto == "e" || texto == "i" || texto == "o" || texto == "u")
        {
            resposta.innerHTML = "A letra é Vogal";
        } else {
            resposta.innerHTML = "A letra é consoante";
        }
}
function ex31()
{
    var texto = entrada.value;
    if (texto == "Domingo" || texto == "Segunda" || texto == "Terça" || texto == "Quarta" || texto == "Quinta" || texto == "Sexta" || texto == "Sábado")
        {
            resposta.innerHTML = "Hoje é " + texto;
        } else {
            resposta.innerHTML = "Dia invalido";
        }

}
function ex54()
{
    var ini = 1;
    var fim = 50;

    while(ini < fim)
        {
            resposta.innerHTML += ini + " ";

            ini = ini + 2;
        }

}
function ex89()
{
    var texto = entrada.value;
    var fim = 0;

    for(var ini = texto.length; ini >= fim; ini -= 1)
        {
            resposta.innerHTML += texto.charAt(ini);
        }
}
function ex97()
{
        var media = [];
        var alunos = [
          "Ana",
          "Pedro",
          "Paulo",
          "João",
          "Maria",
          "Luiza",
          "Daniele",
          "Marcos",
          "Michele",
          "Leandro"
      ];
     
        for(var i = 0; i < 10; i+= 1) {
            var nota1 = prompt("digite a nota 1 do aluno: "+alunos[i]);
            var nota2 = prompt("digite a nota 2 do aluno: "+alunos[i]);
            var nota3 = prompt("digite a nota 3 do aluno: "+alunos[i]);
            var nota4 = prompt("digite a nota 4 do aluno: "+alunos[i]);
            var valor = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;
            media.push(valor);
        }
        for(var i = 0; i < 10; i+= 1)
        {
            resposta.innerHTML += "aluno: " + alunos[i] + " media: " + media[i] + "<br>";
        }


        }