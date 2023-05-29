import React, {useState} from "react";


const Inputs = ({handleSubmit, medicineArray, updateArray, name, setName, description, setDescription, quantity, setQuantity}) => {
    const [isOpen, setIsOpen] = useState(false);


    const open = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }


    return(
        <div className='inputs'>
            <div className='search flexbox'>
            <input className='searchItem' type='text' placeholder='Find medicine' />
            <button className='searchButton' type='submit'><img style={{height:"22px", width:"22px"}} src="https://img.icons8.com/?size=512&id=21101&format=png" alt="search-img"></img></button>
            </div>
            <div className='add'>
            <button className='addButton flexbox' onClick={open} type='submit' >Add Medicine  <img width="20" height="20" src="https://img.icons8.com/ultraviolet/40/pill.png" alt="pill"/></button>
            {isOpen && (
                <div className="addMedicines">
                    <div className="addMedicines-Contents">
                        <span className="close" onClick={close}>&times;</span>
                        <form onSubmit={handleSubmit} className="inputForm flexbox">
                            <textarea value={name} onChange={(e)=>{setName(e.target.value)}} className="inputOfAddMedicine name" name="name" placeholder="Medicine" required />
                            <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className="inputOfAddMedicine description" name="description" placeholder="Description" required/>
                            <input value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} className="inputOfAddMedicine quantity" name="quantity" placeholder="Quantity" type="number" required/>
                            <button className="inputFormButton inputOfAddMedicine">SUBMIT</button>
                        </form>
                    </div>  
                </div>
            )}
            </div>
        </div>
    );
}

export default Inputs;
export const medicineArray=[];
  