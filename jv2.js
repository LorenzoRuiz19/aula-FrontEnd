
function oi()
{
    console.log(valor)
    alert(valor.value) 
}
function Maius()
{
    var texto = valor.value;
    alert(texto.toUpperCase());
}
function Primeira()
{
    var texto = valor.value;
    var letra = texto.charAt(0);
    var resto = texto.substring(1);
    var novo = letra.toUpperCase() + resto.toLowerCase();
    alert(novo)
}
function Contagem()
{
    var texto = valor.value
    while (texto > 0) {
        alert(texto - 1);
        texto = texto - 1;

    }
}