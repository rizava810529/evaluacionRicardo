// paso 5
/* Es un hook de React que permite al componente tener un estado interno.
 */
import { useState } from 'react';
import TaskList from '../taskList/TaskList';


/* { task, onChange, onDelete }: El componente Task recibe tres props: task, onChange y onDelete. Estas props son proporcionadas por el componente padre cuando se utiliza el componente Task. */
export default function Task({task, onChange, onDelete}) {
  /* const [isEditing, setIsEditing] = useState(false): Aquí se declara un estado local llamado isEditing y una función setIsEditing. El estado isEditing se utiliza para controlar si la tarea está en modo de edición o no. El valor inicial de isEditing es false. */  
  const [isEditing, setIsEditing] = useState(false);
  /*  */
    let taskContent;
    /* El usuario editar el texto de la tarea. El valor del campo de entrada se inicializa con el texto de la tarea actual (task.text).
Cuando el usuario escribe en el campo de entrada, se activa el evento onChange, que actualiza el estado task con el nuevo valor ingresado utilizando la función onChange. La función onChange es una prop que proviene del componente padre y se utiliza para actualizar la tarea en el estado global de la aplicación.
También se muestra un botón "Guardar" que, cuando se hace clic, establece el estado isEditing en false, lo que saca la tarea del modo de edición. */
    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Guardar</button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </>
      );
    }
    return (
      /* Finalmente, se muestra un botón "Borrar" que, cuando se hace clic, llama a la función onDelete pasando el id de la tarea como argumento. La función onDelete es una prop que proviene del componente padre y se utiliza para eliminar la tarea del estado global de la aplicación. */
      <label>
      {/* ... (resto del código) */}
      <button onClick={() => onDelete(task.id)}>Borrar</button>
    </label>
    );
}
