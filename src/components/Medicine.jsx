import '../App.css';
import Inputs from './Inputs';
import Header from './Header';
import MedicineData from './MedicineData';
import { useState, useEffect } from 'react';
import axios from "axios";

function Medicine() {

  const [medicineArray, setMedicineArray] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [fetchedMedicineArray, setFetchedMedicineArray] = useState([]);
  const [isOpenForUpdate, setIsOpenForUpdate] = useState(false);

  const openForUpdate = ()=> {
    setIsOpenForUpdate(true);
  }
  const closeForUpdate = () => {
    setIsOpenForUpdate(false);
  }

  const open = () => {
      setIsOpen(true);
  }
  const close = () => {
      setIsOpen(false);
  }
  useEffect(() => {
    const fetchMedicine = async () => {
        try {
            const response = await axios.get('https://medico-backend-0d0d.onrender.com/medicine');

            const data = response.data
            // console.log(data);
            setMedicineArray(data);

        } catch (error) {
            console.error(error);
        }
    };
    fetchMedicine();
},[fetchedMedicineArray]);



const handleSubmit = (event) => {
  event.preventDefault();
  const newMedicine = {
    name: name,
    description: description,
    quantity: quantity
  };

  axios
    .post('https://medico-backend-0d0d.onrender.com/medicine/add', newMedicine)
    .then((response) => {
      const updatedMedicineArray = medicineArray.map((medicine) => {
        // if (medicine._id === response.data._id) {
        //   // Update the existing medicine object with the new data
        //   return response.data;
        // }
        return medicine; // Keep other medicines unchanged
      });
      setFetchedMedicineArray(updatedMedicineArray);
      setMedicineArray(updatedMedicineArray);
      
    })
    .catch((error) => {
      console.error('Error adding/updating medicine:', error);
    });
    close();
    closeForUpdate();
};


return (
    <div className="App">
      <Header />
      <Inputs isOpen={isOpen} open={open} close={close} handleSubmit={handleSubmit} medicineArray={medicineArray} updateArray={setMedicineArray} name={name} setName={setName} description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity}/>
      <MedicineData isOpenForUpdate={isOpenForUpdate} setIsOpenForUpdate={setIsOpenForUpdate} openForUpdate={openForUpdate} closeForUpdate={closeForUpdate} setFetchedMedicineArray={setFetchedMedicineArray} handleSubmit={handleSubmit} medicineArray={medicineArray} updatedArray={setMedicineArray} name={name} setName={setName} description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity}/>
    </div>
  );
}

export default Medicine;