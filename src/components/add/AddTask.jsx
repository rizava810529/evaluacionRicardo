import { useState } from "react";
// El componente está importando las funciones React y useState de la librería de React. React se utiliza para crear componentes, y useState es un hook que permite al componente tener un estado interno.
// paso 2
export default function AddTask({ onAddTask }) {
  // El componente está siendo exportado como la exportación por defecto, lo que significa que se puede importar con cualquier nombre en otros archivos.
  // El componente recibe una prop llamada onAddTask, que es una función que se utilizará para agregar la nueva tarea ingresada por el usuario.

  const [text, setText] = useState("");
  // Aquí se declara un estado local llamado text y una función setText que se utilizará para actualizar el valor del estado. El estado text comienza con un valor inicial de una cadena vacía "".
  console.log("text", text);
  return (
    <>
      {/* Se muestra un campo de entrada (input) que se utiliza para que el usuario ingrese el texto de la nueva tarea. La prop placeholder proporciona un texto de ejemplo para guiar al usuario. La prop value vincula el valor del campo de entrada con el estado text, lo que significa que el valor que el usuario ingrese en el campo de entrada estará reflejado en el estado text. La prop onChange es un evento que se activa cuando el contenido del campo de entrada cambia y, en este caso, actualiza el estado text con el nuevo valor ingresado. */}
      <input
        placeholder="Agregar tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* Se muestra un botón "Agregar" que, cuando se hace clic, ejecuta una función de flecha. Dentro de esta función, se llama a la función onAddTask pasando el contenido actual del estado text como argumento. Luego, se restablece el estado text a una cadena vacía para limpiar el campo de entrada después de agregar la tarea. */}
      <button className="btn custom-btn"
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
