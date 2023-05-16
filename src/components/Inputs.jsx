import React, {useState} from "react";

const Inputs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    let obj = {
        name: undefined,
        description: undefined,
        quantity: undefined
    }

    const open = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        obj = {
            name: name,
            description: description,
            quantity: quantity
        }

        console.log(obj);
    }
    return(
        <div className='inputs'>
            <div className='search'>
            <input className='searchItem' type='text' placeholder='Search an Item' />
            <button className='searchButton' type='submit'>+</button>
            </div>
            <div className='add'>
            <button className='addButton' onClick={open} type='submit' >Add Item</button>
            {isOpen && (
                <div className="addMedicines">
                    <div className="addMedicines-Contents">
                        <span className="close" onClick={close}>&times;</span>
                        <form onSubmit={handleSubmit} className="inputForm flexbox">
                            <textarea onChange={(e)=>{setName(e.target.value)}} className="inputOfAddMedicine name" name="name" placeholder="Medicine" />
                            <textarea onChange={(e)=>{setDescription(e.target.value)}} className="inputOfAddMedicine description" name="description" placeholder="Description" />
                            <textarea onChange={(e)=>{setQuantity(e.target.value)}} className="inputOfAddMedicine quantity" name="quantity" placeholder="Quantity" />
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