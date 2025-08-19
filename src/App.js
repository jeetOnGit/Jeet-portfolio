import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Terminal from "./Components/Terminal";


function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/terminal' element={<Terminal />}/>
      </Routes>
    </div>
  );
}

export default App;


