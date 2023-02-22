import "./style.css";


const Tasks =({tasks, hideDoneTasks})=>(

<ul className="list">
{tasks.map(task => (
    <li className={`list__item {hideDoneTasks && task.done ? "list__item--hidden" : ""}`}>
        
                    <button className="list__button list__button--toggleDone">
                        {task.done ? "✓" : ""}
                    </button>
                    <span className={`list__item${task.done ? "list__item list__item--done" : "list__item"}`}>
                        {task.content}
                    </span>
                    
        
                   
                    
                    <button className="list__button list__button--remove">
                    🗑
                    </button>
        
      


    </li>
))}

</ul>

);

export default Tasks;