// Importaciones:

/* El componente está importando varios módulos y componentes de React, Material-UI, Emotion y componentes personalizados. Algunas de las importaciones relevantes son:

useState: Un hook de React que permite al componente tener un estado interno.
AddTask, TaskList, Acordeon: Son componentes personalizados definidos en archivos separados, que se importan y se utilizan dentro de App.
Typography y ExpandMoreIcon: Componentes de Material-UI que se utilizan dentro de Acordeon.
styled: Una función de Emotion que permite crear componentes estilizados. */

import { useState } from "react";
import "./App.css";
import AddTask from "./components/add/AddTask";
import TaskList from "./components/taskList/TaskList";
import Acordeon from "./components/acordeon/acordeon";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';

// nextId: Una variable que se utilizará para asignar un ID único a las nuevas tareas.
// initialTasks: Un array que contiene una tarea inicial con id, text y done predefinidos.
let nextId = 1;
const initialTasks = [{ id: 0, text: "TODAS TUS TAREAS", done: true }];
// El componente App utiliza el hook useState para mantener un estado llamado tasks, que se inicializa con el valor de initialTasks.
function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // paso 3 , paso 4 cree TaskList

  // handleAddTask(text): Una función que se pasa como prop onAddTask al componente AddTask. Esta función agrega una nueva tarea al array tasks utilizando el hook setTasks y el operador de propagación (...) para mantener las tareas existentes y agregar la nueva tarea con el contenido del parámetro text.
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

  // paso 6

  // handleChangeTask(task): Una función que se utilizará para actualizar una tarea existente en el array tasks. Se pasa como prop onChangeTask al componente TaskList. La función mapea todas las tareas, encuentra la tarea correspondiente en función de su id y la actualiza con los datos de la tarea pasada como argumento.

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

  // paso 7

  // handleDeleteTask(taskId): Una función que se utilizará para eliminar una tarea del array tasks. Se pasa como prop onDeleteTask al componente TaskList. La función filtra las tareas y mantiene todas las tareas cuyo id no coincide con taskId.
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      {/* Renderizado:
        El componente App muestra una estructura de contenedores y componentes, incluyendo:

        Un título "ALL App".
        El componente AddTask, que permite al usuario agregar nuevas tareas.
        El componente TaskList, que muestra todas las tareas y permite editarlas y eliminarlas mediante los props onChangeTask y onDeleteTask. */}
      <div className="container">
      
        <div>
          <p className="title">ALL App</p>
        </div>
        <AddTask onAddTask={handleAddTask} />
        {/* paso 9 */}
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
