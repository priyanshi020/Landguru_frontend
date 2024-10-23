import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Landing from './Landing/Landing';

function App() {
  return (
   <>
    <Router>
    <Routes>
       <Route path='/' element={<Landing/>}/>
    </Routes>
    </Router>
   </>
  );
}

export default App;
