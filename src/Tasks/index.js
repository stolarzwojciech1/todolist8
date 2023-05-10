import "./style.css";


const Tasks =({tasks, hideDone})=>{

const onDelete = (name) => {

console.log(`sdaqwqZZz ${name}`);

};
    return(
    <ul className="list">
    {tasks.map(task => (
        <li 
        key={tasks.id}
        className={`list__item {
            hideDone && task.done 
            ? "list__item--hidden" : ""}`}>
            
                        <button className="list__button list__button--toggleDone">
                            {task.done ? "✓" : ""}
                        </button>
                        <span className={`list__item${task.done ? "list__item list__item--done" : "list__item"}`}>
                            {task.content}
                        </span>
                        
            
                       
                        
                        <button 
                        className="list__button list__button--remove"
                        onClick = {()=> 
                    {onDelete(task.content);console.log("ssdsdsda");}
                    
                    }
                        
                        >
                        🗑
                        </button>
            
          
    
    
        </li>
    ))}
    
    </ul>
    
);


}

export default Tasks;