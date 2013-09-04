//función constructora del prototipo
var AJAX = function(){
	this.httpRequest;//Objeto httpRequest que es un atributo mi prototipo
						
//http://es.wikipedia.org/wiki/XMLHttpRequest
	if(window.XMLHttpRequest){
		console.log("Objeto XMLHttpRequest detectado");
		this.httpRequest = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		console.log("Objeto ActiveXObject");
		try{
			this.httpRequest = new ActiveXObject("MSXML2.XMLHTTP");
		}catch(e){
			try{
				this.httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(err){
				console.log("Error: "+e.message);
			}
		}
	}
						
	if(!this.httpRequest){
		console.log("No se pudo crear el objeto XMLHttpRequest");
		return null;
	}
}
					
AJAX.prototype.requestText = function(url, func){
	console.log("requestText");
	this.httpRequest.open('GET', url, true);
	this.httpRequest.send(null);
						
	//Se define esta condición debido a que al ejecutar la función request
	this.httpRequest.onreadystatechange = function(){
	//this dentro de la función es this.httpRequest
		if(this.readyState == 4 && this.status == 200){
			func(this.responseText);
		}
	};
};

AJAX.prototype.requestXML = function(url, func){
	console.log("requestXML");
	this.httpRequest.open('GET', url, true);
	this.httpRequest.send(null);
	this.httpRequest.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			func(this.responseXML);
		}
	};
};