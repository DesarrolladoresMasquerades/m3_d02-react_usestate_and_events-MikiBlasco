import Counter from "./components/Counter";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState("dark")
  function toggleTheme(e) {
    setTheme(e.target.value)
  }

  return (

    <div className={`App ${theme}`}>
    
       <h1>React - state and events</h1>

       <select onChange={toggleTheme}>
         <option value="light">Light theme</option>
         <option value ="dark">Dark theme</option>
       </select>

    </div>
  );
}

export default App;
