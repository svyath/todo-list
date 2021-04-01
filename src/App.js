import './App.css';
import SubmitForm from './components/SubmitForm/SubmitForm';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <SubmitForm />
      <TasksList />
    </div>
  );
}

export default App;
