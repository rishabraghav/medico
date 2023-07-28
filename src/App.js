import './App.css';
import Medicine from './components/Medicine';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Patient from './components/Patient';
import Payment from './components/Payment';


function App() {

  return (
    <div className="App">
    <Router>
      <nav className='navigations flexbox'>
      <Link className='cute-button' to="/app">Medicines</Link>
      <Link className='cute-button' to= "/">Patients</Link>
      </nav>
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
