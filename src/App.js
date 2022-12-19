import './App.css';
import UserList from './components/UserList';
import Repo from './components/Repo';

function App() {
  return (
    <div className="App" id='header'>
      <UserList/>
      <Repo/>
    </div>
  );
}

export default App;
