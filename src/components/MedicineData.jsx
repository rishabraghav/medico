import axios from "axios";
import React, { useState, useEffect } from "react";
// import {medicineArray} from './Inputs';
// import axios from "axios";

const MedicineData = ({setFetchedMedicineArray, handleSubmit, medicineArray, name, setName, description, setDescription, quantity, setQuantity}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState('');

    const open = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }
    useEffect(() => {
        // Your logic to handle the component rendering when `medicineArray` changes
        // You can place the code you want to execute when `medicineArray` changes
        // For example, you can update some UI elements or trigger a re-render of child components
        // Here's a simple example where we log the updated `medicineArray`
        // console.log('medicineArray has changed:', medicineArray);
      }, [medicineArray]);

    const handleClick = (name, description, quantity, _id) => {
        setName(name);
        setDescription(description);
        setQuantity(quantity)
        setId(_id);
        open();

   }

const handleDelete = async () => {
    console.log("delete button pressed : ID is =", id);
  
    const confirmDelete = window.confirm("Are you sure you want to delete this medicine?");
  
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:3001/medicine/${id}`);
        console.log(response.message);
        setFetchedMedicineArray(medicineArray);
        close();
      } catch (error) {
        console.error("error deleting medicine", error);
      }
    }
  };

    return(
        <div className="medicineData">
            <div className="medicineData-headings">
                <h5 style={{textTransform:"uppercase", fontFamily:"serif", width:"40%"}}>Name</h5>
                <h5 style={{display:"flex", justifyContent:"flex-start", width:"50%", textTransform:"uppercase"}}>Description</h5>
                <h5 style={{display:"flex", justifyContent:"flex-end",width:"20%", textTransform:"uppercase"}}>Quantity</h5>
            </div>
            {medicineArray.map((medicine) => (
                <div className="medicineData-contents animated-div" onClick={() => handleClick(medicine.name, medicine.description, medicine.quantity, medicine._id)} key={medicine._id}>
                    <h4 className="floatLeft" style={{textTransform:"uppercase", fontFamily:"serif", width:"40%"}}>{medicine.name}</h4>
                    <p className="floatLeft" style={{display:"flex", justifyContent:"flex-start", width:"50%"}}>{medicine.description}</p>
                    <h4 className="floatLeft" style={{display:"flex", justifyContent:"flex-end",width:"20%"}}>{medicine.quantity}</h4>
                </div>
            ))}
            {isOpen && (
                <div className="addMedicines" >
                <div id="updateMedicine" className="addMedicines-Contents">
                <span className="close" onClick={close}>&times;</span>
                    <form onSubmit={handleSubmit} className="flexbox inputForm">
                        <textarea value={name} onChange={(e)=>{setName(e.target.value)}} className="inputOfAddMedicine name" name="name" placeholder="Medicine" required />
                        <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className="inputOfAddMedicine description" name="description" placeholder="Description" required/>
                        <input value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} className="inputOfAddMedicine quantity" name="quantity" placeholder="Quantity" type="number" required/>
                        <button className="inputFormButton inputOfAddMedicine">Update</button>
                        
                    </form>
                    <button onClick={handleDelete} className="deleteButton inputOfAddMedicine">Delete</button>
                </div>
                </div>
                )}
        </div>
    );
}

export default MedicineData;