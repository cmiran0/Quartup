(function () {
    //Variables
    let contador = 0;
    var lista = document.getElementById("lista"),
        tareaIntup = document.getElementById("tareaInput"),
        btn = document.getElementById("btn_agregar");

    //Funciones
    var agregarTarea = function () {
        var li = document.createElement("li")
        li.id = ++contador

        //enlace = document.createElement("div"),
        const contenido = document.createTextNode(tareaIntup.value);
        var checkbox = document.createElement("input");
        checkbox.addEventListener('change', (e) => {
            const id_li = checkbox.id.split('-')[0]
            if (checkbox.checked) {
                document.getElementById(id_li).className = 'terminada'
            } else {
                document.getElementById(id_li).className = ''
            }
        })

        if (li.value !== '') {
            li.appendChild(contenido);
            li.appendChild(checkbox);
            checkbox.type = "checkbox";
            checkbox.id = contador + '-ch';
            lista.appendChild(li);
            tareaIntup.value = "";
            return false
        }

        alert('el input no puede estar vacio')
    }
    //Add
    btn.addEventListener("click", agregarTarea);


}());
