import { useState } from "react";
import "./App.css";

function App() {
  const [pending, setPending] = useState("");
  const [priority, setPriority] = useState("baja");
  const [taskList, setTaskList] = useState([])


  const colorMap = {
    "baja": "text-success",
    "media": "text-warning",
    "ayer": "text-danger"
  }

  const pendingHandler = (event) => {
    const value = event.target.value;
    setPending(value);
  }

  const priorityHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    setPriority(value);
  }

  const addTaskHandler = () => {
    const newTask = {
        id: taskList.length + 1,
        prioridad: priority,
        description: pending,
        completado: false
    }

    setTaskList([...taskList, newTask]);
}

const completeHandler = (event, id) => {
  const newListTask = taskList.map((task) => {
    if(task.id == id) {
      return{...task, completado: event.target.checked}
    } else {
      return task;
    }
   });
  setTaskList(newListTask);
}

  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
    <div className="container bg-light">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2>Lista de pendientes</h2>
            <form>
              <ul className="list-group">
              {
                   taskList.map(( task )=>(
                    <li key={task.id} className={`list-group-item d-flex ${colorMap[task.prioridad]} ${task.completado && "text-decoration-line-through"}`}>
                    {task.description}
                    <div class="form-check ms-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(event) => completeHandler(event, task.id)}
                        background="#000"
                      />
                    </div>
                  </li>
                  ))
              }
              </ul>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <h2>Nuevo pendiente</h2>
              <div className="form group">
                <input type="text" className="form-control" name="pending" onChange={(event) => pendingHandler(event)}/>
              </div>
            <h2>Prioridad</h2>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priority"
                  id="baja"
                  value="baja"
                  checked={priority=="baja"}
                  onChange={(event) => priorityHandler(event)}
                />
                <label className="form-check-label" htmlFor="baja">
                  Baja
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priority"
                  id="media"
                  value="media"
                  checked={priority=="media"}
                  onChange={(event) => priorityHandler(event)}
                />
                <label className="form-check-label" htmlFor="media">
                  Media
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="priority"
                  id="ayer"
                  value="ayer"
                  checked={priority=="ayer"}
                  onChange={(event) => priorityHandler(event)}
                />
                <label className="form-check-label" htmlFor="ayer">
                  Para ayer!!
                </label>
              </div>
              <button className="btn btn-success mt-2" onClick={() => addTaskHandler()}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
