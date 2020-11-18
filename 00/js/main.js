(function () {
    //Variables
    var lista = document.getElementById("lista"), tareaIntup = document.getElementById("tareaInput"),
        btn = document.getElementById("btn_agregar");

    //Funciones
    var agregarTarea = function () {
        var nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tareaIntup.value);
        var checkbox = document.createElement("input");
        if (tareaIntup.value !== '') {
            enlace.appendChild(contenido);
            enlace.appendChild(checkbox);
             enlace.id = lista.children.length + lista.className;
            checkbox.type = "checkbox";
            checkbox.id = lista.children.length + 'cbox';
            nuevaTarea.appendChild(enlace);
            lista.appendChild(nuevaTarea);
            tareaIntup.value = "";
        }
    }
    //Add
    btn.addEventListener("click", agregarTarea);


}());