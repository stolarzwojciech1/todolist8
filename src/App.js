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
 
const tasks =[
{id:1, content:"ss", done:false},
{id:2, content:"ssss", done:true},
{id:2, content:"ssss", done:true},

];

function App() {

const [hideDone, setHideDone] = useState(false);

const toggleHideDone = () => {

  setHideDone(hideDone => !hideDone);

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
       <Tasks tasks={tasks} hideDone={hideDone}/>
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

