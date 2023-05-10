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

];
const hideDone = false;
function App() {
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
       body={<Tasks tasks={tasks} hideDone={hideDone}/>}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone}/>}
/>



    </Container>
</body>
  );
}

export default App;

