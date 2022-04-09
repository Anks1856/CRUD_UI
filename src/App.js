import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my USER CRUD App. 
        </p>
        <button className='btn btn-primary' onClick={() => navigate('/home')}>Explore</button>
      </header>
    </div>
  );
}

export default App;
