import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import './App.css';

function App() {
  return (
    <div>
      <HomePage/>
      {/* <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addemployee" element={<CreateEmployeePage/>}/>
      </Routes> */}
      
    </div>
  );
}

export default App;
