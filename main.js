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
					
					var txt = "";
					
					//el metodo getElements regresa un arreglo de etiquetas o elementos
					var people = xml.getElementsByTagName('person');
					var fullName = null;
					var programmingLanguages = null;
					
					for(i  =0; i<people.length; i++){
						fullName = people[i].getElementsByTagName('full-name')[0];
						txt += fullName.getElementsByTagName('first-name')[0].childNodes[0].nodeValue;
						txt += ' ' + fullName.getElementsByTagName('last-name')[0].childNodes[0].nodeValue;
						
						//En XML se busca accesar a la etiqueta a toda etiqueta que tiene un nodo de texto directamente 
						txt += '\n' + people[i].getElementsByTagName('nickname')[0].childNodes[0].nodeValue;
						//childNodes[0].nodeValue se traduce como el valor del primer elemento que es el texto
						
						//como el numero de lenguajes es variable obtengo la lista de elementos etiquetados como programming-languages
						programmingLanguages = people[i].getElementsByTagName('programming-language');
						for(j=0; j<programmingLanguages.length; j++){
							txt += '\n' + programmingLanguages[j].childNodes[0].nodeValue;
						}
						
						//Para que no escriba el separador debajo del último registro
						if(i != people.length-1){
							txt += '\n';
							txt += '-------------------------------';
							txt += '\n';
						}
					}	
					
					alert(txt);
					
				});
				break;
			case "php":
				console.log(tipoPeticion[tipoPeticion.selectedIndex].value);
		}
	};
};
