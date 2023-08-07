/* useState: Es un hook de React que permite al componente tener un estado interno.
Accordion, AccordionSummary, AccordionDetails, Typography y ExpandMoreIcon: Son componentes de Material-UI que se utilizan para construir el componente de acordeón.
 */
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* { tasks = [], onChangeTask, onDeleteTask }: El componente TaskList recibe tres props: tasks, onChangeTask y onDeleteTask. Estas props representan las tareas a mostrar en la lista, la función que se utilizará para actualizar una tarea y la función que se utilizará para eliminar una tarea, respectivamente. Estas props son proporcionadas por el componente padre que utiliza TaskList. */
export default function TaskList({ tasks = [], onChangeTask, onDeleteTask }) {
  return (
    <div>
      {/* El componente muestra una lista de tareas dentro de un componente de acordeón (Accordion). El acordeón proporciona una funcionalidad para expandir o contraer el contenido. */}
      <Accordion>
        {/* Es el componente que representa el resumen del acordeón. Muestra un título "Tareas Agregadas" y un ícono de expansión (ExpandMoreIcon) que se muestra cuando el acordeón está contraído y se oculta cuando está expandido. Al hacer clic en el ícono de expansión, el contenido del acordeón se expande o contrae. */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tareas Agregadas</Typography>
        </AccordionSummary>
        {/* AccordionDetails: Es el componente que contiene el contenido expandido del acordeón. En este caso, contiene una lista no ordenada (<ul>) donde se muestran todas las tareas. */}
        <AccordionDetails>
          <div>
          {/* las ul deben estar en un div para que no generen error */}
            <ul>
              {/* : Se utiliza para recorrer el array de tareas (tasks) y generar elementos de lista (<li>) para cada tarea utilizando el método map().
                  */}{/* Se utiliza para recorrer el array de tareas (tasks) y generar elementos de lista (<li>) para cada tarea utilizando el método map(). */}
              {tasks.map((task) => (
                <li key={task.id}>
                  {/* Cada tarea se representa con su texto (task.text) y un botón "Borrar" (<button>) que tiene un evento onClick que llama a la función onDeleteTask(task.id). Al hacer clic en este botón, se eliminará la tarea correspondiente utilizando la función onDeleteTask pasando el id de la tarea como argumento. */}
                  {task.text} <button onClick={() => onDeleteTask(task.id)}>Borrar</button>
                </li>
              ))}
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
