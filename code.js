//---------Event (anticuado)--------------------------------
/*

const boton = document.querySelector(".pie_depagina");

	boton.onclick = function (){
		alert("Estamos trabajando en esto");
		const fragmento = document.createDocumentFragment();
		for (i=0; i<4; i++){
	const item = document.createElement("P");
	item.innerHTML = "Q esta pasanda";
	fragmento.appendChild(item);
	
}

//document.write(boton);


//boton.appendChild(fragmento);
}*/



//const textDelItem = document.createTextNode("Aui si");



//----------------Event List--------------------------------


const boton = document.querySelector(".pie_depagina");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

boton.addEventListener("click", (e)=>{
	alert("estamos trabajando en esto.");
});