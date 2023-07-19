import './App.css';
import Medicine from './components/Medicine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patient from './components/Patient';
import Payment from './components/Payment';


function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Patient />} />
        <Route path="/app" element={<Medicine />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
