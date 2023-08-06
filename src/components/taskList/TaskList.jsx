// paso 4

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Accordion: Es un componente que muestra un acordeón, un contenedor que puede expandirse o contraerse para mostrar u ocultar contenido.
// AccordionSummary: Es un componente que representa el resumen del acordeón, donde se muestra el encabezado y el ícono de expansión.
// AccordionDetails: Es un componente que contiene el contenido expandido del acordeón.
// Typography: Es un componente de Material-UI para mostrar texto.
// ExpandMoreIcon: Es un icono de flecha hacia abajo que se utiliza como ícono de expansión en el AccordionSummary.

export default function TaskList({ tasks = [] }) {
  // El componente TaskList es una función de React que recibe una prop llamada tasks, que es un array que contiene objetos con la información de cada tarea. Si no se proporciona la prop tasks, se inicializa con un array vacío.
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Tareas Agregadas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              {/* Dentro de AccordionDetails, hay un componente Typography que contiene una lista no ordenada (ul). Para cada tarea en la prop tasks, se está utilizando map() para generar un elemento de lista (li) con el texto de cada tarea (task.text). La prop key se establece en el índice del elemento en el array tasks, lo que se considera una práctica común para ayudar a React a identificar los elementos de la lista de manera única. */}
              {tasks.map((task, key) => (
                <li key={key}>{task.text}</li>
              ))}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>






  );
}