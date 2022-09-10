//Extraigo del DOM
const input = document.querySelector(".input-text");
const addForm = document.querySelector(".add-form");
const tasksList = document.querySelector(".tasks-list"); // <ul></ul>
const deleteAllBtn = document.querySelector(".delete-all");

//Defino una variable, que va a ser todo lo que traiga del local storage
let tasks = JSON.parse(localStorage.getItem("tareas")) || [] // || = o [] = array vacio;


const hideDeleteAllBtn = (tasksList) => {
    // En caso de que las tareas no contengan un length, se cumple lo siguiente
    if(!tasks.length) {
        deleteAllBtn.classList.add("hidden");
        return;
    }
    //En caso de que las tareas contengan algo, se cumple lo siguiente
    deleteAllBtn.classList.remove("hidden");
}


const saveToLocalStorage = (tasksList) => {
    //Esta funcion recibe una lista de tareas y la setea en mi local storage.
    localStorage.setItem("tareas", JSON.stringify(tasksList));
}

const renderList = (list) => {
    tasksList.innerHTML = list.map((task) => `<li> ${task.name} <img src= "./img/delete-button.svg" alt= "Boton para borrar tarea" class= "delete-btn" data-id= ${task.tasksId} </li>`).join("");
}

// E =  EVENTO
const addTask = (e) => {
    e.preventDefault()

const taskName = input.value.trim();

    if (taskName.length === 0 /* o !taskName.length*/) {
        console.log("Por favor escriba algo.")
        alert("Por favor escriba algo.")
    } else if
    (tasks.some(task => task.name.toUpperCase() === taskName.toUpperCase())) {
        alert("Esa tarea ya existe.");
        return;
    } else {
                // spread operator
        tasks = [...tasks, { name: taskName, tasksId: tasks.length + 1 }]
        // Agregar la tarea al localStorage.
        saveToLocalStorage(tasks);
        renderList(tasks);
        hideDeleteAllBtn(tasks)

        input.value = ""; //De esta forma estoy LIMPIANDO el input.
    }
};

const deleteTask = (e) => {
    if (!e.target.classList.contains("delete-btn")) {
        return;
    }
    //Nos preguntamos:
    // Si la lista de clases de lo que estoy apretando contiene la clase delete-btn.

    //TODO borrar la tarea de la lista
    //Necesitamos el id de la tarea que estamos apretando



    
    //Borrarla de localstorage
    //Pintar la lista nueva
}


deleteAll = () => {

}

const init = () => {
    renderList(tasks);
    addForm.addEventListener("submit", addTask);
    tasksList.addEventListener("click", deleteTask);
    deleteAllBtn.addEventListener("click", deleteAll);
    hideDeleteAllBtn(tasks);

    //Cuando esto se submitea, ejecuta la funcion addTask la cual se encarga de validar que hayas escrito algo, y en caso de que hayas escrito algo se va a cumplir la funcion saveToLocalStorage, la cual se encarga de guardar lo que se ingrese en el localStorage.
};

init() //Ejecutamos init.