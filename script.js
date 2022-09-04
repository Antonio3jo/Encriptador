// para tomar el valor de los text area usaremos el quieryselector. primero creamos constante la llamare inputTexto y debo usar el.textoInicial para llamar la clase del textarea
const inputTexto = document.querySelector(".textoInicial");

//y ahora para el texto final
const mensajeFinal = document.querySelector(".mensaje");

//Funcion con btn+nombre para captar el resultado de la funciòn y guardarlo  textoencriptado en mensajeFinal
function btnencriptar(){

    //aqui vamos a poner el valor de otra funcion que sera la que hare para encriptar luego
    const textoEncriptado = encriptar(inputTexto.value);
    mensajeFinal.value = textoEncriptado;
    mensajeFinal.style.backgroundImage= "none";
}

// luego creo la funcion encriptar que recibe un string, creo una variable que sera la matrizguia
function encriptar(StringAEncriptar){

    let matrizGuia = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

    //el texto lo ponemos en minuscula
    StringAEncriptar = StringAEncriptar.toLowerCase();

    for (let i = 0; i< matrizGuia.length; i++){

        if(StringAEncriptar.includes(matrizGuia[i][0])){
            StringAEncriptar = StringAEncriptar.replaceAll(matrizGuia[i][0],matrizGuia[i][1])
        }
    }
    return StringAEncriptar;
}

// DESENCRIPTAR

function desEncriptar(StringAdesEncriptar){

    let matrizGuia = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]

    //el texto lo ponemos en minuscula
    StringAdesEncriptar = StringAdesEncriptar.toLowerCase();

    for (let i = 0; i< matrizGuia.length; i++){

        if(StringAdesEncriptar.includes(matrizGuia[i][0])){
            StringAdesEncriptar = StringAdesEncriptar.replaceAll(matrizGuia[i][0],matrizGuia[i][1])
        }
    }
    return StringAdesEncriptar;
}

//Funcion con btn+nombre para captar el resultado de la funciòn y guardarlo  textoencriptado en mensajeFinal
function btndesEncriptar(){

    //aqui vamos a poner el valor de otra funcion que sera la que hare para encriptar luego
    const textoEncriptado = desEncriptar(inputTexto.value);
    mensajeFinal.value = textoEncriptado;

    
}

//BOTON COPIAR

//botón copiar

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("copiado");
    mensaje.style.backgroundImage ="";
    mensaje.placeholder = "Texto copiado";
}



//botón pegar

function pegar() {
	navigator.clipboard.readText()
  	.then(text => {
    	inputTexto.value = text;
         })
    .catch(text => {
    	inputTexto.placeholder = "No se obtuvo permiso de Pegar";
        })
}
  

        
