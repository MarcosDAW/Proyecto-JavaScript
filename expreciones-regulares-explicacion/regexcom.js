/*
^   <--- busca las palabras que empiecen por lo ingresado
$   <--- que finalice con 
\d  <--- cualquier digito (0,9)
\D  <--- Lo contrario a \d
\w  <--- cualquier letra minuzcula de la a-z , A-Z , 0-9 (no los acentados ni ñ)
\W  <--- negamos \w
\s  <---cualquier espacio , tabulador

+     <--- uno o mas
?     <--- cero o uno
*     <--- cero o mas
{3}   <---  Exáctamente 3
{3,9} <--- Rango entre 3 y 9

[]      <-- Busca los caracteres dentro de los corchetes
[^ ]    <-- niega lo anterior
[a-zA-ZÀ-ÿ] <--- cualquier palabra con acentos y ñ
()      <--- grupo
( | )   <--- uno u otro dentro del grupo.

*/
/*
    generar una exprecion irregular que capture 
    cualquier dirección ip
    /(\d{1,3}\.){3}\d{1,3}/gim -->g-->i-->m
*/
/*
let miExprecion = RegExp();
miExprecion = /hola/gi;
let texto = "hola como estas";
miExprecion.text(texto);
*/

