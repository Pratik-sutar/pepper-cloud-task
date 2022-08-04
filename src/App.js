import './App.css';
import ActivityTabs from './components/ActivityTabs';
import ActivitySteps from './components/ActivitySteps'

function App() {
  return (
    <div className="bg-light">
      <ActivitySteps/>
      <ActivityTabs/>
    </div>
  );
}

export default App;

