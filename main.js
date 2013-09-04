window.onload = function(){
	console.log("main.js");
	var tipoPeticion = document.getElementById("tipo-peticion");
	var btnPedirDatos = document.getElementById("btn-pedir-datos");
	var ajax = new AJAX();
					
	btnPedirDatos.onclick = function(){
		switch (tipoPeticion[tipoPeticion.selectedIndex].value){
			case "txt":
				console.log(tipoPeticion[tipoPeticion.selectedIndex].value);
				ajax.requestText('lorem.txt', function(response){
					alert(response);
				});
				break;
			case "xml":
				console.log(tipoPeticion[tipoPeticion.selectedIndex].value);
				ajax.requestXML('personal.xml', function(response){
					var xml = response;
					
					//el metodo getElements regresa un arreglo por eso es que se le especifica el index
					var personOne = xml.getElementsByTagName('person')[0];
					
					var fullName = personOne.getElementsByTagName('full-name')[0];
					var firstName = fullName.getElementsByTagName('first-name')[0].childNodes[0].nodeValue;
					var lastName = fullName.getElementsByTagName('last-name')[0].childNodes[0].nodeValue;
					
					//en este caso el primer nodo hijo es el texto y de ese nodo saco su valor
					var nickname = personOne.getElementsByTagName('nickname')[0].childNodes[0].nodeValue;
					
				});
				break;
			case "php":
				console.log(tipoPeticion[tipoPeticion.selectedIndex].value);
		}
	};
};
