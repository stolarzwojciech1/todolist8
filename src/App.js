import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
const tasks =[
{content:"ss", done:false},
{content:"ssss", done:true},

];
const hideDoneTasks = false;
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
       body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
/>

        
    </Container>
</body>
  );
}

export default App;

