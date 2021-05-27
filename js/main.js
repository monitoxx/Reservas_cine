window.onload = init;

function init (){
	pintarCuadricula();
}
function pintarCuadricula(){

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