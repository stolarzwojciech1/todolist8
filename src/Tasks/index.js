import "./style.css"


const Tasks = (props)=>(

    <ul>
{props.tasks.map(task=>(


<li classNameName={`list__item {task.finished && props.hideDoneTasks ? "list__item--hidden" : ""}`}>
<button className="list__button list__button--finish "></button>
            <span className={`list__itemText {task.finished === true ? "list__item--finished" : ""}`}>
            {task.content}
            </span>
            <button className="list__button list__button--delete ">k</button>

</li>

))}


    </ul>


);


export default Tasks;