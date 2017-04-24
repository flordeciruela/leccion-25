
function creandoDiv(getUrl) {
	var contenedor = document.getElementById('contenedor');
	var div = document.createElement("div");
	var img = document.createElement("img");
	img.setAttribute("src", getUrl);
	div.classList.add("contenedor-imagen");
	div.appendChild(img);
	contenedor.appendChild(div);
}

var inputUrl = document.getElementById('url');
function getUrl(e) {
	if(e.keyCode == 13) {
		creandoDiv(this.value);
		this.value = "";
	}
}
inputUrl.onkeydown = getUrl;
