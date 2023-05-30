import axios from "axios";
import React, { useState } from "react";
// import {medicineArray} from './Inputs';
// import axios from "axios";

const MedicineData = ({handleSubmit, medicineArray, updatedArray, name, setName, description, setDescription, quantity, setQuantity}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [id, setId] = useState('');

    const open = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }

    const handleClick = (name, description, quantity, _id) => {
        setName(name);
        setDescription(description);
        setQuantity(quantity)
        setId(_id);
        open();

   }

   const handleDelete = () => {
    console.log("delete button pressed : ID is = ", id);
    axios.delete(`/${id}`)
    .then((response) => {
        console.log(response.message);
   })
   .catch((error) => {
    console.error("error deleting medicine", error);
   });

   window.location.reload();
   }

    return(
        <div className="medicineData">
            <div className="medicineData-headings">
                <h5 style={{textTransform:"uppercase", fontFamily:"serif", width:"40%"}}>Name</h5>
                <h5 style={{display:"flex", justifyContent:"flex-start", width:"50%", textTransform:"uppercase"}}>Description</h5>
                <h5 style={{display:"flex", justifyContent:"flex-end",width:"20%", textTransform:"uppercase"}}>Quantity</h5>
            </div>
            {medicineArray.map((medicine) => (
                <div className="medicineData-contents animated-div" onClick={() => handleClick(medicine.name, medicine.description, medicine.quantity, medicine._id)} key={medicine._id}>
                    <h4 style={{textTransform:"uppercase", fontFamily:"serif", width:"40%"}}>{medicine.name}</h4>
                    <p style={{display:"flex", justifyContent:"flex-start", width:"50%"}}>{medicine.description}</p>
                    <h4 style={{display:"flex", justifyContent:"flex-end",width:"20%"}}>{medicine.quantity}</h4>
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