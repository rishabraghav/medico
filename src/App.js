// import logo from './logo.svg';
import './App.css';
import Inputs from './components/Inputs';
import Header from './components/Header';
import MedicineData from './components/MedicineData';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [medicineArray, setMedicineArray] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
      setIsOpen(true);
  }
  const close = () => {
      setIsOpen(false);
  }
  useEffect(() => {
    const fetchMedicine = async () => {
        try {
            const response = await axios.get('https://medico-backend.cyclic.app/');

            const data = response.data
            console.log(data);
            setMedicineArray(data);

        } catch (error) {
            console.error(error);
        }
    };
    fetchMedicine();
},[]);

let obj = {
  name: undefined,
  description: undefined,
  quantity: undefined
}

var medicineArray2 = [];
const handleSubmit = (event) => {
  event.preventDefault();
  obj = {
      name: name,
      description: description,
      quantity: quantity
  }

  axios
  .post('https://medico-backend.cyclic.app/add', obj)
  .then((response) => {
      medicineArray2 = [...medicineArray, response.data];
      setMedicineArray(medicineArray2);
  })
  .catch((error) => {
      console.error('Error adding medicine:', error);
  });
  close();
}

  return (
    <div className="App">
      <Header />
      <Inputs isOpen={isOpen} open={open} close={close} handleSubmit={handleSubmit} medicineArray={medicineArray} updateArray={setMedicineArray} name={name} setName={setName} description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity}/>
      <MedicineData handleSubmit={handleSubmit} medicineArray={medicineArray} updatedArray={setMedicineArray} name={name} setName={setName} description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity}/>
    </div>
  );
}

export default App;
