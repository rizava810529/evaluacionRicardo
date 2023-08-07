/* Es un hook de React que permite al componente tener un estado interno. */
import { useState } from "react";
/*  El componente AddTask recibe una prop llamada onAddTask, que es una función que se utilizará para agregar la nueva tarea ingresada por el usuario. Esta función se pasa como prop desde el componente padre que utiliza AddTask */
export default function AddTask({ onAddTask }) {
  /* Aquí se declara un estado local llamado text y una función setText que se utilizará para actualizar el valor del estado. El estado text comienza con un valor inicial de una cadena vacía "". El estado text representa el contenido del campo de entrada (input) donde el usuario escribe la nueva  */
  const [text, setText] = useState("");

  return (
    <>
    {/* El componente muestra un botón "Agregar" que, cuando se hace clic, ejecuta una función de flecha.
Dentro de esta función, se llama a la función onAddTask pasando el contenido actual del estado text como argumento. Es decir, se pasa la nueva tarea ingresada por el usuario al componente padre para que se agregue a la lista de tareas.
Luego, se restablece el estado text a una cadena vacía "" para limpiar el campo de entrada después de agregar la tarea. */}
      <input
        placeholder="Agregar tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn custom-btn"
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Agregar
      </button>
    </>
  );
}
