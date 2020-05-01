/*

Javascript es el lenguaje encargado de dar interactividad al usuario con la pagina, se recomienda que los script se ejecuten de ultimo debido a que tiene prioridad por encima de la estructura html, es decir, si necesitas algun valor del html no se parasa si tienes primero las etiquetas del script.

Recuerda documentar el codigo.

Variables: Puedes declarar variables con tres paralabras clave pero la estructura debe de respetarse, debes de comenzar son signos como _ o $ con caracteres pero jamas debe de comenzar primero con numeros.

var -> palabra reservada para variables que tendras apertura dentro del cuerpo principal es decir puedes declararla dentro de un bucle de una funcion y puedes usarla fuera de ese bucle pero siempre dentro de esa funcion.

let -> es para declarar variables pero que solo se pueden usar dentro del cuerpo declarado.

const-> declarar variables que no se cambiaran valores jamas.

Operadores logicos:

&& representa una union and (y) que solo retorna verdadero si ambas condiciones se cumplen.

|| representa una union or (o) que solo retorna falso si ninguna de las dos condiciones se cumplen.

= representa la asignacion, con ese operador a diferencia en maticatica no representa el igual sino asigna un valor.

Operadores Aritmeticos:

== representa el igual.
!= representa desigual.
+ representa suma o concatenacion (dependiendo del tipo de dato).
- representa resta
/ representa division
% representa resto
* representa multiplicacion
=== Representa identico -> a diferencia del "igual" este compara el contenido y el tipo de dato
!== Representa el no identico -> compara contenido y tipo de dato.
<= menor o igual que
>= mayor o igual que
<script menor que
> mayor que
++ Incremento en uno
-- Decremento en uno
+= Incremento de la variable segun el valor asignado (2+=4 => 2=2+4)
-= Decremento de la variable segun el valor asignado
--------------------------------------------
Estructuras:

if (condicion){bloque de instrucciones}    Condicional simple
if (condicion){bloque de instrucciones} else {bloque de instrucciones} Condicional Compuesta.
if (condicion){Bloque de instrucciones} else if(condicion){bloque de instrucciones}else{bloque de instrucciones} Condicional anidada

switch (variable a evaluar) { case valorVariable: instrucciones; break; default: instrucciones que debe de realizarse si no se cumple ninguno de los casos anteriores; break;}

while (condicion){bloque de instrucciones  a realizar mientras la condicion returne true}

do {bloque de instrucciones} while(condicion); -> a diferencia del while aqui se ejecuta al menos una ves el bloque de codigo.

for (inicializacion de variable, condicion a cumplir, incremento o decremento en cada interaccion){Bloque de instrucciones}

las funciones se declaran con la palabra clave function seguido del nombre posteriormente los parentesis y las llaves de la siguiente forma:

function funcionEjemplo (Parametros si Aplica) {Bloque de instrccuines}

Existen clases que debes de tener en cuenta como por ejemplo:
Date() y Math() que poseen varios metodos para fecha y acciones matematicas relacionadas.

Los string tienen metodos a tener en cuenta:

CharAt(Numero) -> En numero va un numero que depende de la longitud del stringte metodo retorna el caracter del indice indicado.

substring(inicial,final) -> Crea una nueva cadena a partir de la posicion que se indique, ten encuenta que la posicion final nose cuenta.

indexOf(string) -> Se utiliza para buscar un string en caso de no conseguirlo retorna -1.

toUpperCase() -> Convierte todo el string en mayuscula
toLowerCase() -> Convierte todo el string en minuscula
------------------------------------
--- Controles de elementos HTML  ---
------------------------------------
TODOS LOS ELEMENTOS deben de poseer un ID por medio de ese ID Javascript, dependiendo del elemento tiene un valor el cual es el que se utiliza para realizar las acciones ejemplo
------------
--- TEXT ---
------------

<input type="text" id="ejemplo">  -> esto es una casilla del lado de HTML para usar lo que se introdusca dentro de la casilla se debe realizar la siguiente linea de instrucciones desde Javascript.

document.getElementById.value    -> ten encuenta que JS tiene otras formas pero para elementos especificos el lo busca por el document.getElementById una vez que tenemos el elemento html seleccionado gracias a este metodo podemos obtener diferentes informaciones en este caso el Valor.

--------------
--- SELECT ---
--------------

En caso de las listas de select ejemplo  en html tenemos esto:
<select id="Ejemplo"><option value="valor1">textoUno</option></select>

el select en JS funciona como un vector  que tiene un valor (value) y un texto asociado (lo que se encuentre entre las opciones) y se trabaja de la siguiente manera:

document.getElementById('Ejemplo')           -> aqui tenemos seleccionado TODO el select

document.getElementById('Ejemplo').selectedIndex               -> Este es el indice del vector que se selecciono. (en este caso solo hay una opcion y como el select se comporta como vector recuerda que su posicion inicial es 0). sin embargo para acceder al texto asociado o al valor debes respetar este cuerpo.


document.getElementById('Ejemplo').options[].text   -> para extraer el texto asociado (texto que se encuentra entre las etiquetas option)
document.getElementById('Ejemplo').options[].value  -> para extraer el valor asociado al select (lo que se encuente dentro de su propiedad value)

Ojo para que esto funcione debes incluir entre los [] del metodo opstions el indice del vector que se selecciono es decir el cuerpo es el siguiente:
document.getElementById('Ejemplo').options[document.getElementById('Ejemplo').selectedIndex].text      -> para el texto
document.getElementById('Ejemplo').options[document.getElementById('Ejemplo').selectedIndex].value     -> para el valor

puedes guardar en variables para recodar el codigo.

----------------
--- CHECKBOX ---
----------------

En el caso de los CHECKBOX tienes solo 2 estados, seleccionado o no seleccionado sin embargo para js el metodo es "checked" y retorna valor true o false.
entonces mientras que en html tenemos la siguiente estructura:

<input type="checkbox" id="cajaEjemplo">

En js tenemos la accion de saber si tildo o no la casilla de la siguiente forma

if ( document.getElementById('cajaEjemplo').checked ) {acciones a realizar en caso de que si este selecionado} 

-------------
--- RADIO ---
-------------

En el caso de de las casillas Radio tenemos el mismo caso que en el checkbox  js determina si esta o no tildado.

----------------
--- TEXTAREA ---
----------------

En caso de un TEXTAREA el valor se obtiene igual que con una casilla de tipo text es decir .value

--------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------
--- EVENTOS ---
---------------

Los eventos en js son los que se producen por acciones en la pagina uno de los mas fundamentales es onclick="" este evento lo que nor permite es llamar a una funcion js en el momento que el boton sea precionado. 

Otros eventos pueden ser:

onFocus=""  -> llama a una funcion js cuando el elemento tiene foco.

onBlur=""   -> llama a una funcion js cuando el elemento pierde el foco.

onMouseOver="" -> LLama a una funcion js cuando el mouse se encuentra en el elemento.

onMouseOut="" -> Llama a una funcion js cuando el mouse sale del elemento.

onLoad="" -> Es un evento que permite posicionar el Foco en algun elemento normalmente se crea una funcion js a la cual hace referencia y desde esa funcion la estructura document.getElementById('').focus, e le indica en que elemento debe posicionarse justo despues de cargar toda la pagina html.

----------------
--- Ventanas ---
----------------

Existen multiples ventanas que puden utilizarse para acciones como lo son:

prompt('');  -> Pide un string al usuario.
alert('');   -> Le da un aviso al usuario desde una ventana externa.
confirm(''); -> Desde una ventana externa indica un string al usuario y le permite escoger entre confirmar y cancelar (retorna true o false segun sea el caso)

Para llamar a un archivo js externo se coloca la siguiente estructura

<script src="ubicacion del archivo js " type="Text/Javascript"></script>

Los objetos se declaran igual que una funcion pero dependen de una funcion principal llamada constructor dicha funcion utiliza la palabra clave this para especificar los atributos del objeto de los parametros.

function Objeto (){ this.name='Teo'}

aunque tambien existen los objetos literales que cumplen esta estructura 

var nombreObjeto={ propiedad:valor }

----------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------
--- ARRAYS O ARREGLOS ---
-------------------------

Los arreglos son vectores se declaran de varias formas de declararlos.

var formaUno = new Array();
var formaDos = [];

Ten en cuenta un vector en el que almacenes informacion de forma continua son considerados Array Densos.
en el caso de que tenemos espacios no definidos en un vector se concidera un Array Disperso.
existen metodos para trabajar con los vectores como por ejemplo:

.push()   -> ingresa el valor que le indiquemos entre los () de ultima posicion.

.pop()    -> Extrae el ultimo valor del vector.

.unshift() -> Ingresa el valor en la primera posicion y mueve el resto de elementos del vector 1 posicion

.shift()  -> Extrae el valor de la primera posicion y retroce el resto de elementos del vector en 1 posicion

.sort() -> permite organizar el vector alfabeticamente de menor a mayor, ten en cuenta que si lo usaras para organizar valores numericos de menor a mayor debes de implementar una funcion para que compare quien es mayor en caso de retornar 1 cambiara posicion y si retorna -1 simplemente seguira comparando, quedando de la siguiente forma para el cado de los numeros
.sort(function (x1,x2){ if(x1>x2){return 1} else {return -1} });

.reverse() -> invierte el orden de los valores del vector de mayor a menor

Tambien puedes eliminar valores especificos como por ejemplo si tienes un vector con que almacena un string y deceas eliminar ese valor se ingresa la siguiente instruccion:

delete ejemplo[0];

eliminando el valor en la posicion 0 del vector ejemplo.

Existen metodos que facilitan acciones en los vectores como por ejemplo 

.splice()   para explicar este metodo ten en cuenta que su funcion principal es segun la posicion del ventor que nosotros le indicamos eliminar o agregar campos
en caso de solo eliminar no se coloca un tercer parametro y en caso de querer solo insertar en el segundo parametro se indica 0, partiendo de eso tenemos esta estrcutura en sus parametros 


.splice ( indiceInicial, numeroValoresEliminar, campoAgregar1,campoAgrenarN);


Otro metodo muy conocido y parecido al anterior es slice que nos retorna un troso del vector recibe 2 parametros el primero es la posicion inicial y el segundo la posicion final el solo extraera del vector esos valores menos el ultimo.

.slide(indiceInicial, indiceFinal);

si queremos imprimir los valores concatenados de un vector con un separador que queramos se utiliza

.join();  si indicamos ("-") lo que separara a cada valor del vector sera el guion, si no se coloca nada los concatenara separandolos por coma.

El metodo concat crea un nuevo vector y añade elementos en caso de ser necesario

.concat(); -> ten en cuenta que no modifica el vector original.

En caso de requerir que nuestro vector se convierta en un string separando cada elemento por una coma basta con llamar al metodo

.toString();

----------------------------------------------------------------------------------------------------------------------------------------------------

Formas de recorrer un vector:

Las vectores se recorren con la estructura for, ten encuenta que existes 3 variantes de esa estructura para los vectores.

Forma numero 1:

        for (var i=0 ;i<=vector.lenght; i++){bloque de instrucciones} si el vector esta indefinido, lo tomara en cuenta.

Forma numero 2:
        for(var i in vector){bloque de instrucciones} Si en el vector existen valores indfefinidos no los toma en cuenta, fijate que se pasa en esta estructura solo el  vector no se pasa con indice, esto es por el "in" que recorre todo el vector por dentro.

Forma numero 3 -> Ten en cuenta que en los vectores esta es la forma mas comun de recorrerlos:
cuando declaras un vector ejemplo vector=['x1','x2']; existe un metodo llamado .forEach() este metodo recibe una funcion anonima (explicaremos mas adelante) en la cual si pasamos tres parametros el primero representa el valor el segundo representa el indice y el tercero representa el vector en si, mayormente solo se pasa un parametro.


vector.forEach(function (i){document.write(i+' ')}); 


---------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------
--- Detalle de las funciones ---
--------------------------------

Cuando llamamos a una una funcion de forma automatica se crea un objeto llamado arguments que se utiliza como un vector puesto que recibe cada uno de los parametros que nosotros lo indiquemos, funciona mas que nada para casos en los que no sabemos cuantos parametros vamos a recibir y necesitamos que se realice una funcion como por ejemplo sumar cada uno de los valores que se ingresen en una funcion. en lugar de crear una funcion que recibe 2 parametros, indicamos en su creacion que no es necesario que lleguen parametros, y utilizamos este objeto, escrito de forma practica creamos esto:

function sumar(){ var s=0; for (var i=0; i< arguments.length; i++){s=s+arguments[i];} return s;}

ahora sin importar la cantidad que pasemos de argumentos siempre los tendremos en cuenta.

---------------------------------
Variables Globales y Variables locales:

Dicho de la forma mas sencilla

Variable Gobal => aquella variable que se declara fuera de una funcion y se tiene acceso a ella en todo momento.
Variable Local => aquella variable que se declara dentro de una funcion por lo cual no se tiene acceso fuera de la funcion.

Es posible crear variables globales en una funcion por error para evitarte los dolores de cabeza en la primera linea de tu archivo js
escribe => 'use strict'; => esto activara  el uso estricto de js cuya funcion es obligarnos a declarar correctamente siempre las variables por lo que 
si nosotros por error declaramos una variable global en una  funcion lanzara error.

---------------------------------------
Se puede crear funciones anidadas tambien conocidad como funciones locales dentro de funciones

recuerda que los script js comienzan con la inicializacion, es decir, no se toma en cuenta las funciones hasta que son llamadas, con esto podremos crear funciones dentro de funciones y generar acciones locales, estas funciones que declaremos dentro de otra funcion no pueden ser llamadas desde afuera.

ejemplo  crear un texto:


function creacionTexto(contenido)
{
    function pInicial(){ p="<p>";}
    function pFinal(){ p=p+"</p>";}

    var p="";
    pInicial();
    for (var i=0; i < contenido.lenght; i++)
    {
        p=p+" "+contenido[i]+" ";
    }
    pFinal();
    return p;
}

=> llegados a este punto p contiene  => <p> string string </p>


























*/

