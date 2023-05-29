import React from "react";
// import {medicineArray} from './Inputs';
// import axios from "axios";

const MedicineData = ({medicineArray, updatedArray, name, setName, description, setDescription, quantity, setQuantity}) => {
   const handleClick = (name, description, quantity) => {

    console.log("Name:", name);
    console.log("Description:", description);
    console.log("Quantity:", quantity);
        
   }
   const handleSubmit = () => {
    console.log("got submitted");
   }
    return(
        <div className="medicineData">
            <div className="medicineData-headings">
                <h5 style={{textTransform:"uppercase", fontFamily:"serif", width:"40%"}}>Name</h5>
                <h5 style={{display:"flex", justifyContent:"flex-start", width:"50%", textTransform:"uppercase"}}>Description</h5>
                <h5 style={{display:"flex", justifyContent:"flex-end",width:"20%", textTransform:"uppercase"}}>Quantity</h5>
            </div>
            {medicineArray.map((medicine) => (
                <div className="medicineData-contents animated-div" onClick={() => handleClick(medicine.name, medicine.description, medicine.quantity)} key={medicine._id}>
                    <h4 style={{textTransform:"uppercase", fontFamily:"serif", width:"40%"}}>{medicine.name}</h4>
                    <p style={{display:"flex", justifyContent:"flex-start", width:"50%"}}>{medicine.description}</p>
                    <h4 style={{display:"flex", justifyContent:"flex-end",width:"20%"}}>{medicine.quantity}</h4>
                </div>
            ))}
            <div id="updateMedicine" className="hidden">
                <form onSubmit={handleSubmit} >
                    <textarea onChange={(e)=>{setName(e.target.value)}} className="inputOfAddMedicine name" name="name" placeholder="Medicine" required />
                    <textarea onChange={(e)=>{setDescription(e.target.value)}} className="inputOfAddMedicine description" name="description" placeholder="Description" required/>
                    <input onChange={(e)=>{setQuantity(e.target.value)}} className="inputOfAddMedicine quantity" name="quantity" placeholder="Quantity" type="number" required/>
                    <button className="inputFormButton inputOfAddMedicine">Update</button>
                    <button className="inputFormButton inputOfAddMedicine">Delete</button>
                </form>
            </div>
        </div>
    );
}

export default MedicineData;