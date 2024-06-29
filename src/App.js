import logo from './logo.svg';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"red",
      textAlign:"center",
      fontWeight:"bolder"
      }}>Tic-Tac Game</h1>
   <Board/>
    </div>
  );
}

export default App;
