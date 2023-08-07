import { useState } from "react";
import "./App.css";
import AddTask from "./components/add/AddTask";
import TaskList from "./components/taskList/TaskList";


/* nextId: Es una variable que se utilizará para asignar un ID único a las nuevas tareas.*/
let nextId = 1;
/* initialTasks: Es un array que contiene una tarea inicial con id, text y done predefinidos.  */
const initialTasks = [{ id: 0, text:"Tus tareas", done: true }];

/* Aquí se utiliza el hook useState para mantener un estado llamado tasks, que se inicializa con el valor de initialTasks. tasks es el estado que almacenará la lista de tareas de la aplicación. */

function App() {
  const [tasks, setTasks] = useState(initialTasks);
/* handleAddTask(text): Esta función se pasa como prop onAddTask al componente AddTask. Su función es agregar una nueva tarea al array tasks utilizando el hook setTasks y el operador de propagación ... para mantener las tareas existentes y agregar la nueva tarea con el contenido del parámetro text. */
  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }
/* Esta función se pasa como prop onChangeTask al componente TaskList. Su función es actualizar una tarea existente en el array tasks. La función mapea todas las tareas, encuentra la tarea correspondiente en función de su id y la actualiza con los datos de la tarea pasada como argumento. */
  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }
/* Esta función se pasa como prop onDeleteTask al componente TaskList. Su función es eliminar una tarea del array tasks. La función filtra las tareas y mantiene todas las tareas cuyo id no coincide con taskId */
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (

    /* Renderizado:

El componente App muestra una estructura de contenedores y componentes, incluyendo:
Un título "ALL App".
El componente AddTask, que permite al usuario agregar nuevas tareas.
El componente TaskList, que muestra todas las tareas y permite editarlas y eliminarlas mediante los props onChangeTask y onDeleteTask. */
    <>
      <div className="container">
        <div>
          <p className="title">ALL App</p>
        </div>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}

export default App;
