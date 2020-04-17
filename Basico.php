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





*/

?>