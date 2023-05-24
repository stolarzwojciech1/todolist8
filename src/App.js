import React, {useState} from  'react';
import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import * as goodBye from "./utils/hello"

goodBye.goodBye();
console.log(goodBye.name);

function App() {

const [hideDone, setHideDone] = useState(false);
const [tasks, setTasks] = useState([
  {id:1, content:"ss", done:false},
  {id:2, content:"ssss", done:true},
  {id:3, content:"ssss", done:true},
  
  ]);


const toggleHideDone = () => {

  setHideDone(hideDone => !hideDone);

}

const removeTask = (id) =>{
setTasks(tasks => tasks.filter(task => tasks.id !==  id));


}


  return (
    <body className="body">
    <Container>
        <Header
        title="Lista zadań" 
        
        />
        <Section 
        title="Dodaj nowe zadanie" 
        body ={<Form/>}
        />
       
       <Section
       title="Lista zadań"
       body={
       <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask}/>
      }
        extraHeaderContent={
        <Buttons 
        tasks={tasks} 
        hideDone={hideDone} 
        toggleHideDone = {toggleHideDone} />
        }
/>



    </Container>
</body>
  );
}

export default App;

