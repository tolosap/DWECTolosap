<?php header("Access-Control-Allow-Origin: *");
// Generar un número aleatorio
srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, 10);
// Simular un falso retardo por la red y el servidor (entre 0 y 3 segundos)
sleep($numeroAleatorio % 3);
// El script devuelve aleatoriamente 1 o 0 para que la aplicación
// cliente pueda comprobar dos casos
echo ($numeroAleatorio % 2 == 0)? 1 : 0;
?>
