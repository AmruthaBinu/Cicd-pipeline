import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title">Welcome, Amrutha 👋</h1>
      <p className="subtitle">Classic React Counter App</p>

      <div className="counter-box">
        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      <footer className="footer">
        <p>Built with React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;
