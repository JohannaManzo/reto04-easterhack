// BOTONES POP UP
let btnNO = document.getElementById("btnNO");
let btnSI = document.getElementById("btnSI");

btnNO.addEventListener("click", () => {
  sectionPopUp.style.display = "none";
  sectionCategorias.style.display = "none";
  sectionListaTareas.style.display = "block";
});

// FRASES MOTIVACIONALES
let fraseRandom = document.getElementById("fraseRandom");
const frasesMotivacionales = [
  "El único modo de hacer un gran trabajo es amar lo que haces - Steve Jobs",
  "Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo - Michael Jordan",
  "El dinero no es la clave del éxito; la libertad para poder crear lo es - Nelson Mandela",
  "Cuanto más duramente trabajo, más suerte tengo - Gary Player",
  "La inteligencia consiste no solo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica - Aristóteles",
  "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu - Helena Rubinstein",
  "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan - Elon Musk",
  "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida - Confucio",
];

const random = Math.floor(Math.random() * 7);
fraseRandom.textContent = frasesMotivacionales[random];

// DECLARACION VARIABLES
let fabBtn = document.getElementById("fabBtn");
let sectionCategorias = document.getElementById("sectionCategorias");
let sectionBienvenidx = document.getElementById("sectionBienvenidx");
let btnGuardar = document.getElementById("btnGuardar");
let iptTituloTarea = document.getElementById("iptTituloTarea");
let textTarea = document.getElementById("textTarea");
let tareasHogar = document.getElementById("tareasHogar");
let tareasTrabajo = document.getElementById("tareasTrabajo");
let tareasCuidadoPersonal = document.getElementById("tareasCuidadoPersonal");
let selectCategorias = document.getElementById("selectCategorias");
let emojiCategorias = "";
let iptTituloTareaValue = "";
let textTareaValue = "";
let listaDeTareas = document.getElementById("listaDeTareas");
let classTareaARealizar = document.getElementsByClassName(
  "classTareaARealizar"
);
let sectionPopUp = document.getElementById("sectionPopUp");
let selectOne = document.getElementById("selectOne");
let tachar = false;

// ARRAY
let listado = [];
let idTarea = 0;

// FAB BUTTON
fabBtn.addEventListener("click", () => {
  sectionCategorias.style.display = "block";
  sectionBienvenidx.style.display = "none";
  sectionListaTareas.style.display = "none";
  listaDeTareas.innerHTML = "";
});

btnGuardar.addEventListener("click", () => {
  funcionGuardarTarea();
  iptTituloTarea.value = "";
  textTarea.value = "";
  selectCategorias.value = "Seleccione la categoria";

  //LOCALSTORAGE
  localStorage.setItem("localGuardado", JSON.stringify(listado));
});

// GUARDAR LAS TAREAS
let funcionGuardarTarea = () => {
  sectionBienvenidx.style.display = "none";
  sectionCategorias.style.display = "none";
  sectionListaTareas.style.display = "block";

  iptTituloTareaValue = iptTituloTarea.value;
  textTareaValue = textTarea.value;

  if (selectCategorias.value == "Hogar 🏡") {
    emojiCategorias = "🏡";
  }
  if (selectCategorias.value == "Trabajo 🔨") {
    emojiCategorias = "🔨";
  }
  if (selectCategorias.value == "Cuidado personal 🛀") {
    emojiCategorias = "🛀";
  }

  listado.push({
    id: idTarea,
    iptTituloTareaValue,
    textTareaValue,
    emojiCategorias,
  });

  // Lo que hace, es un contador que suma el ID cada vez que se agrega a la lista
  idTarea++;

  console.log(listado);
  listado.map((tareita) => {
    listaDeTareas.innerHTML += `<div id="${tareita.id}"><li><h3 id="${tareita.iptTituloTareaValue}">${tareita.iptTituloTareaValue}</h3> 
        ${tareita.emojiCategorias} ${tareita.textTareaValue}  
        <button id="btnCheck" onclick="funcionTachar(${tareita.id})">✔</button> <button id="btnDelete" onclick="funcionTachito(${tareita.id})">X</button> </li> </div>`;
  });
};

// ELIMINAR TAREA
let funcionTachito = (tareitaId) => {
  let tareaABorrar = document.getElementById(tareitaId);
  sectionPopUp.style.display = "flex";
  sectionListaTareas.style.display = "none";
  fabBtn.style.display = "none";
  sectionPopUp.style.flexDirection = "column";
  let btnNO = document.getElementById("btnNO");
  let btnSI = document.getElementById("btnSI");

  btnSI.addEventListener("click", (e) => {
    console.log(e);
    listado.splice(tareitaId, 1);
    tareaABorrar.innerHTML = "";
    sectionPopUp.style.display = "none";
    sectionListaTareas.style.display = "block";
    fabBtn.style.display = "block";
    console.log(listado);
  });
  btnNO.addEventListener("click", () => {
    sectionPopUp.style.display = "none";
    fabBtn.style.display = "block";
  });
};

let datosRecuperados = localStorage.getItem("localGuardado");
datosRecuperados = JSON.parse(datosRecuperados);
if (datosRecuperados.length > 0) {
  listado = datosRecuperados;
}
console.log(datosRecuperados.length);

// TACHAR TAREA
let funcionTachar = (tituloTarea) => {
  let textoATachar = document.getElementById(tituloTarea);
  tachar = !tachar;
  if (tachar == true) {
    textoATachar.style.textDecoration = "line-through";
  } else {
    textoATachar.style.textDecoration = "inherit";
  }
};

// BOTON CHECK Y DELETE
let btnCheck = document.getElementById("btnCheck");
let btnDelete = document.getElementById("btnDelete");
