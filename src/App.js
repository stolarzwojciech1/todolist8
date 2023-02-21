import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
const tasks = [
{content: "przejść na reacta",finished:  false},
{content: "zjeść obiad", finished: true},
]

const hideDoneTasks = false;
  

function App() {
  return (
    <body className="body">

    <header>
        <h1>Lista zadań</h1>
    </header>

    <section className="input__section">
        <h2 className="input__sectionHeader">Dodaj nowe zadanie</h2>
        <Form />
    </section>
<Tasks tasks={tasks} hideDoneTasks ={hideDoneTasks} />
    <section className="list">
        <h2 className="list__header"></h2>
        <Buttons/>
    </section>

</body>
  );
}

export default App;
