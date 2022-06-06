import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <div >
     <BrowserRouter>
      <Routes>
        <Route path="*" element={<Dashboard />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
