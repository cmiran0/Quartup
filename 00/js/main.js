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
            // Agregamos el contenido al enlace
            enlace.appendChild(contenido);
            enlace.appendChild(checkbox);
            // Le establecemos un atributo href
            enlace.id = lista.children.length + lista.className;
            checkbox.type = "checkbox";
            checkbox.id = lista.children.length + 'cbox';
            // Agrergamos el enlace (a) a la nueva tarea (li)
            nuevaTarea.appendChild(enlace);
            // Agregamos la nueva tarea a la lista
            lista.appendChild(nuevaTarea);
            tareaIntup.value = "";
        }
    }
    //Add
    btn.addEventListener("click", agregarTarea);


}());