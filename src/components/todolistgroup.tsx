import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListGroup from "./listgroup";

function TodoList() {
    const [todolist, setTodolist] = useState<any[]>([]); 
    const {id} = useParams();
  
    useEffect(() => {
      fetch("http://localhost:8080/getTodoByUser/"+id) 
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodolist(data);
        });
    }, []); 
  
  return (
    <div>
        <h1>Danh sách việc cần làm</h1>
        <ul className="list-group">
            {
                todolist.map((todoitem) => {
                    return(
                        <li className="list-group-item">
                          {todoitem.title} - {todoitem.content}
                          <p className="time">{todoitem.RemindTime}</p>
                        </li>
                    )
                } )
            }
        </ul>
    </div>
  );
  }
  
  export default TodoList;