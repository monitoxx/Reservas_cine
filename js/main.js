var puesto_actual;
var id_actual;
var id_boton;
var reservas;

window.onload = init;

function init (){
	//pintarCuadricula();
	cerrar.addEventListener("click",cerrarVentana);
	cargarReserva();
}

function cargarReserva(){
	var puesto;
	for (var i = 1; i <= 9; i++) //i = i+1
	{
		//console.log(localStorage.getItem("puesto_"+i));
		if (localStorage.getItem("puesto_"+i)!=null) 
		{
				puesto = document.getElementById("puesto_"+i);
				usuario = JSON.parse(localStorage.getItem("puesto_"+i));
				actualizarEstado(puesto,usuario);
		}
	}
}
function crearReserva(numero)
{//este me lo está trayendo del onclick del html.

	/*ventana.className = "ligthbox";
	alert(numero);
	alert("puesto_"+numero);
	var puesto = document.getElementById("puesto_"+numero); //Para que traiga el puesto al que le dan click y así modificarle la clase. 
	Reservado está difinido en css, por esto se creó puesto. 

	puesto.className = "reservado";*/
	
	id_actual = "puesto_"+numero;
	id_boton = numero;
	puesto_actual = document.getElementById(id_actual);
	ventana.className = "ligthbox"; // aquí estoy haciendo que se muestre lightbox
	input_name.value = ""; //acá es donde se establece el nombre del que hace la reserva
}

function editarReserva(numero){
	alert(numero);
}
function cerrarVentana(){
	ventana.className = "ligthbox hidden"; 
	// className es una propiedad para cambiar el nombre de la clase en el html (como sobrescribir la info)
}
function actualizarEstado(puesto,usuario)
{
	 var temp;
	  puesto.className = "reservado";
		temp = "<h2>Reservado</h2>"+usuario.nombre;
		temp += '<img class="btn_editar" onClick="editarReserva('+usuario.id+');" src="imgs/btn_editar.svg" alt="">';
		puesto.innerHTML = temp;
}
function reservar(){
	var usuario;
	if (input_name.value!="") 
	{
		usuario = {nombre:input_name.value,id:id_boton};
		actualizarEstado(puesto_actual,usuario);
		localStorage.setItem(id_actual,JSON.stringify(usuario));
		cerrarVentana();
	}
	else {
		alert("Error, introduzca el nombre de la reserva");
	}
}
function pintarCuadricula()
{

	var html = "";
	// var inicio = 1;
	var fin = 3;
	var grid = document.getElementById("cuadricula");
	var contador = 1; // aca inicio

	var valor = 0;
	var salon =[];
	salon[0] = [true, false, true];
	salon[1] = [false, false, true];
	salon[2] = [true, false, false];

	var fila = 0;
	var columna = 0;

	console.log(salon[0][0]);
	console.log(salon[1][1]);
	console.log(salon[2][2]);

	if(localStorage.getItem("esta_logeado")=="true")
	{
		while(contador<=fin)
		{
			console.log(fila,columna)
			valor = salon[0][columna];
			fila = fila + 1;
			columna = columna + 1;
			if(valor)//if (contador%2==0) //Quiere decir que los que sean igual a cero(serán los pares) sea verdadero, sino ejecuta else.
			{
				html = html + '<input type="button" class="naranja" value="'+contador+'">' // concatené la variable contador (para que haya 1, 2 , 3.. 100)
			}
			else{
				html = html + '<input type="button" class="gris" value="'+contador+'">' // ese + luego de html quiere decir que a la variable html (que estaba vacía) le agrego input
			}
			contador = contador + 1; // le sumo 1 para que el ciclo no sea infinito y en algún momento se vuelva falso; 
			//además le cambio el valor automáticamente, sin necesidad de copy-paste
		}

		grid.innerHTML = html; // el grid está almacenando y procesando la información (ahí están todos los input del 1 al 100)

	}
	else
	{
		grid.innerHTML = "<h1>Esta seccion es bajo logeo</h1>"; //Si llegara a acceder a la página por otro medio, 
		//entonces no se me habilitaría la vista de los asientos y no permite hacer ninguna accion a menos que esté logeado
	}
}
