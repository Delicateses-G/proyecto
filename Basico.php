<?php
/*
Para declarar variables simplemente se debe de colocar $ seguidamente del nombre de la variable.

operadores logicos 

|| => or    && => and   == => igual  != => distinto
---------------------------------------
Ciclos:
1-while(condicion){ acciones a realizar mientras se cumpla la condicion}

2-do{acciones a realizar} while (condicion);

3-for (inicializar una variable ; condicion que debe estarse cumpliendo ; incremento o decremento) { acciones a realizar}

4- switch(variable a evaluar){ case "valor para el caso": break; default:"aciones a realizar por defecto si no es ninguno
                                de los casos evaluados" break;}

5-if (condicion) {acciones a realizar si cumple condicion}

6-if (condicion) {acciones a realizar si cumple condicion} else { acciones a cumplir si no las cumple}

7-if (condicion uno) {acciones a realizar si cumple la condicion uno} else {if (condicion dos) { acciones a realizar
si cumple la condicion dos} else { acciones a realizar si no cumple ninguna de las otras 2 condiciones}}

------------------------------------------------------------------------------------------------------------------------------

En php se reciben los valores del formulario en html, dicho formulario posee la caracteristica action que es la que
indico hacia donde van los datos, y la caracteristica method que indica el metodo de envio de los datos POST es oculto
GET visible.

cada elemento tiene una propiedad llamada name="" ese nombre es al que en php hace referencia, cada uno de esos name
basicamente se tratan como variables y los valores son los datos ingresados o en algunos casos lo que se encuentre
dentro de la caracteristica value=""

El vector que se utiliza para recibir los valores utiliza como subindice el name colocado de la siguiente forma:

    $_REQUEST['name']

El vector se llama $_REQUEST y entre los [] y '', se coloca el nombre ingresado en la caracteristica name="" del
formulario html 

Otra cosa muy importante es que php depende de que en el formulario se encuntre un boton de tipo de envio, es decir,
el formulario en alguna parte debe de tener una estructura como: <input type="submit">, dicho boton es el que permite
el envio de esos datos por el metodo especificado al archivo especificado.

---------------------------------------------------------------------------------------------------------------------------------
Para los elementos de html existen controles, forma resumida de saber que nombre tenemos que tener en cuenta y que valor tomaria
para cada uno de esos elementos:

Estructura del Select:
<select name="">
<option value=""> texto </option>
</select>

***********************************
Estructura del Textarea:

<textarea name=""> "lo ingresado aqui es lo que se almacena en su caracteristica value" </textarea>
**********************************
Estructura del Radio:
<input type="radio" name="" value=""> texto

nota: En este elemento recuerda que cada input de este tipo debe poseer el MISMO NOMBRE.
**********************************
Estructura del Checkbox:

<input type="checkbox" name=""> "El texto ingresado aqui en esta casilla se almacena en value"

nota: En este elemento recuerda que cada input de este tipo debe poseer el DISTINTO NOMBRE.
**********************************

Para comprobar que se a marcado alguna casilla o pulsado algun boton se debe de emplear la funcion isset(){acciones a realizar 
si la condicion se cumple (si precionaron o marcaron alguna casilla o boton)}

Como puedes ver cada uno de estos elementos tiene una estrcutura que poseen name="" y value="" (indirecta o directamente)

Cuando nosotros utilizamos el vector $_REQUEST[''], colocamos el nombre del elemento y lo que contiene es lo que existe en value=""
la estructura para usar el isset de componentes como el checkbox es la siguiente:

if (isset ($_REQUEST['name'])){ acciones a realizar}

---------------------------------------------------------------------------------------------------------------------------------
Para declarar vectores basta con declarar la variable comunmente y adicionarle los [] al final.
el uso de un subindice se recomienda para mayor control, en caso de ignorarse el ira guardndo valores en diferentes posiciones.

Ejemplo:

$vector[]; // en estos momentos ya se declaro un vector y se encuentra esperando un valor que se almacena en la posicion 0.

$vector[] = 1;  // en la posicion 0 se encuentra el valor 1
$vector[] = 2;  // en la posicion 1 se encuentra el valor 2
$vector[] = 3;  // en la posicion 2 se encuentra el valor 3

De igual forma puedes declararlos de la siguiente forma:

$vector[0] = 1;  // En el vector con subindice 0 se encuentra el valor 1
$vector[1] = 2;  // En el vector con subindice 1 se encuentra el valor 2
$vector[2] = 3;  // En el vector con subindice 2 se encuentra el valor 3

Incluso puedes colocarlo de forma asociativa a un texto siempre y cuando lo identifiques entre las '' de la siguiente forma:

$vector['dia'] = 17;     // El vector con el subindice 'dia' tiene el valor 17;
$vector['mes'] = 04;     // El vector con el subindice 'mes' tiene el valor 04;
$vector['anio'] = 2020;  // El vector con el subindice 'anio' tiene el valor 2020;
----------------------------------------------------------------------------------------------------------------------------
Creacion de funciones en PHP:
Sintaxis

function nombreFuncion (parametros){ acciones a realizar}.
// ten en cuanta que si no recibe parametros simplemente se deja vacio ().

----------------------------------------------------------------------------------------------------------------------------
Abrir una Conexion con de BD  MySQL con Php
Para mayor comodidad se guarda la siguiente informacion en variables (no es obligatorio)
$host=""   //  Hosting
$user=""   // Usuario de Base de Datos
$pass=""  // Contraseña del Usuario de Base de datos
$bd=""    // Nombre de la base de datos.

Estructura Principal.

mysqli_connect($host,$user,$pass,$bd) or die ("Error en sentencia de conexion");

Para todas las acciones con SQL necesitamos colocar esa estructura como parametro de conexion
por lo que para poder usarla de forma practica lo utilizamos de la siguiente forma:

$conexion = mysqli_connect($host,$user,$pass,$bd) or die ("Error en sentencia de conexion");

----------------------------------------------------------------------------------------------------------------------
todas las Acciones de SQL son conocidas como query o consulta, en php existe una funcion ya predeterminada llamada
mysqli_query(Conexion,Consulta), que recibe como parametro la conexion y la consulta a realizar.
el mismo modo existe una funcion llamada mysqli_error(conexion), que recibe como parametro los datos de conexion, cuya 
funcion simplemente es indicarnos por que la accion de MySQL no se esta realizando.
----------------------------------------------------------------------------------------------------------------------
Acciones Basicas mas comunes en una base de datos son:
-Seleccionar
-Insertar
-Actualizar
-Borrar

Para ello dependemos de la tabla y campos que en ella existan, para el ejemplo supongamos que existe una tabla con dos 
campos.

Estructura de las sentencias Basicas:

Seleccionar:

mysqli_query($conexion,"SELECT * FROM tabla") 
                or die ("Problemas en la sentencia select".mysqli_error($conexion));

Insertar:

mysqli_query($conexion,"INSERT INTO tabla (campo1,campo2) VALUES ('Ejemplo1','Ejemplo2')") 
                or die ("Problemas en la sentencia insert".mysqli_error($conexion));

Actualizar:

mysqli_query($conexion,"UPDATE tabla SET campo1 = 'Nuevo valor'") 
                or die ("Problemas en la sentencia update".mysqli_error($conexion));

Borrar:

mysqli_query($conexion,"DELETE FROM tabla") 
                or die ("Problemas en la sentencia delete".mysqli_error($conexion));

En el caso que nosotros queremos RECORER los registros se utiliza una funcion "fetch de arreglos", es decir,
iniciamos una variable que almacenara el recorrido de esa consulta, para acceder a los datos se debe de
colocar dicha variable con un subindice que indica el campo a devolver, ejemplo:

Se realizo un select, y ahora queremos mostrar los registros, usaremos una estructura condicional
que nos muestre los valores de nuestra consulta.

$select = mysqli_query($conexion,"SELECT * FROM tabla") or die ("Problemas en la sentencia select".mysqli_error($conexion));

while( $registros = mysqli_fetch_array($select))
{
    echo $registros['camp1'];
    echo $registros['camp2'];
}
Mientras que esa busqueda tenda data retornara true y mostrara los registros
cuando se termine la busquea saldra del ciclo.

Nota: Ten en cuenta que son acciones BASICAS realmente el segundo parametro son consultas
estructuradas en SQL, donde colocas los filtos, el orden, los limites, funciones de SQL, uniones de tabla entre otros.
---------------------------------------------------------------------------------------

*/


?>