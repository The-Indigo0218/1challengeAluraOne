
//select element and change element's value
const selectAndChangeElement = (element, text) => {
  const select = document.getElementById(element);
  select.value = text;
  select.innerHTML = text;
};

//select element by id
const selectElment = (id) => {
  return (select = document.getElementById(id));
};

//limpiar
const FuncionClear = () => {
  const limpiar = selectElment("img");
  limpiar.addEventListener("click",clear);
};

const clear =  () => {
  selectAndChangeElement("textareaEntrada", "");
  selectAndChangeElement("textareaSalida", "");

}

const btnCopiar = () => {
  const copiar = selectElment("copiar");
  copiar.addEventListener("click", () => {
    const texto = selectElment("textareaSalida").value;
    selectAndChangeElement("textareaSalida", " ");
    navigator.clipboard.writeText(texto);
    selectAndChangeElement("copiado", "Texto copiado con exito")
    const contendor = selectElment("contenedor")
    contendor.classList.add("moficadoContenedor")
    temporizador(contendor, "copiado")
    selectAndChangeElement("textareaEntrada", texto)    
    });  
}

//Valida que el campo no esta vacio
const validator = () => {
  const input = selectElment("textareaEntrada");
  const text = input.value;
  const contendor = selectElment("contenedor");
  if (text.trim() === "") {
    selectAndChangeElement("error", "Campo vacio");
    contendor.classList.add("moficadoContenedor");
    temporizador(contendor, "error");
    return false;
  } else {
    const regex = /[^a-zñ\s]/g;
    if (regex.test(text)) {
      contendor.classList.add("moficadoContenedor");
      selectAndChangeElement(
        "error",
        "Solo se permiten letras minuculas y espacios"
      );
      temporizador(contendor, "error");
      return false;
    } else {
      return true;
    }
  }
};

const temporizador = (contendor, p) => {
  setTimeout(() => {
    selectAndChangeElement(p, " ");
    contendor.classList.remove("moficadoContenedor");
  }, 2000);
};

//Funcion para dar accion a los botones
const handleBtn = (id, cifrado) => {
  const btn = selectElment(id);
  btn.addEventListener("click", () => {
    if (validator()) {
      cifrado();     
    } else {
    }
  });
};

/**
 * cifrar
 */

const cifrar = () => {
  const text = selectElment("textareaEntrada").value
  const arrayPalabras = text.split(" ");

  for (let index = 0; index < arrayPalabras.length; index++) {
    let element = arrayPalabras[index];
    element = searchAndReplace(element, "a", "ass")
    element = searchAndReplace(element, "e", "tr")
    element = searchAndReplace(element, "i", "bdo")
    element = searchAndReplace(element, "o", "avv")
    element = searchAndReplace(element, "u", "tte")
    element = searchAndReplace(element, "m", "zet")
    element = searchAndReplace(element, "h", "anm")
    element = searchAndReplace(element, "l", "apj")
    arrayPalabras[index] = element;
  }
  arrayPalabras.forEach(element => {
    selectElment("textareaSalida").value += element + " ";
    });         
  }
   


const decrifrar = () =>{
  const text = selectElment("textareaEntrada").value
  const arrayPalabras = text.split(" ");
  
  for (let index = 0; index < arrayPalabras.length; index++) {    
    let element = arrayPalabras[index];
    element = searchAndReplace(element, "ass", "a")
    element = searchAndReplace(element, "tr", "e")
    element = searchAndReplace(element, "bdo", "i")
    element = searchAndReplace(element, "avv", "o")
    element = searchAndReplace(element, "tte", "u")
    element = searchAndReplace(element, "zet", "m")
    element = searchAndReplace(element, "anm", "h")
    element = searchAndReplace(element, "apj", "l") 
    arrayPalabras[index] = element;        
  }

  arrayPalabras.forEach(element => {
    selectElment("textareaSalida").value += element + " ";
  })
  
}

const searchAndReplace = (element, letter, replace) => {
  if (element.includes(letter)) {
    const regex = new RegExp(letter, 'g')
    return element = element.replace(regex, replace);
  }else{
    return element;
  }
};

FuncionClear();
handleBtn("btn1", cifrar)
handleBtn("btn2", decrifrar)
btnCopiar()

