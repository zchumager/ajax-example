
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
						var xmlDocument = response.documentElement;
						alert(xmlDocument);
					});
					break;
				case "php":		
			}
		};
				
	};
