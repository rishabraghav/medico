import React from "react";
import { useState  } from "react";
import axios from "axios";

function PatientsRecord({setTempArray ,patientsArray }) {
    const [showContent, setShowContent] = useState(false);

    const handleReadMore = () => {
        setShowContent(!showContent);
        // console.log(Date().full);
    }
    const handleDelete = async (id) => {
        console.log(id);
        const confirm = window.confirm("ARE YOU SURE WANT TO DELETE THE PATIENT?");

        if(confirm) {
            try {
                const response = await axios.delete(`https://medico-backend.cyclic.app/patients/${id}`);
                console.log("Deleted Patient: ", response.data);
                setTempArray(patientsArray);
            } catch (err) {
                console.error("error deleting the patient: ", err);
            }
        }
    }

    const handleDelete2 = async (id, infoId) => {
        console.log("delete button : ", id, " ", infoId);
        const confirm = window.confirm("ARE YOU SURE WANT TO DELETE THE RECORD?");

        if(confirm) {
            try{
                const response = await axios.delete(`https://medico-backend.cyclic.app/patients/${id}/${infoId}`);
                console.log("deleted patient's record: ", response.data);
                setTempArray(patientsArray);
            } catch (err) {
                console.error("error in deleting the patient record from client side: ", err);
            }
        }
    }


    return (
        <div className="columnReverse">
            {
                patientsArray.map((item, index) => (
                    <div className="patientsRecord" key={index}>
                    <button className="deletePatient flexbox" onClick={()=> {handleDelete(item._id)}}><img className="deletePatientImg" width="40" height="40" src="https://img.icons8.com/ultraviolet/40/waste.png" alt="cancel"/></button>
                        <p>Unique Health Identification(Uhid): <span>{item.Uhid}</span></p>
                        <p>Name: <span>{item.name}</span></p>
                        <p>Age/Sex: <span>{item.age}</span> <span>{item.sex}</span></p>
                        <p>Address: <span>{item.address}</span></p>
                        <p>Contact Number: <span>{item.contact}</span></p>


                        {showContent ?
                            <div className="columnReverse">
                                {item.Info.map((info, infoIndex) => (
                                    <div className="patientsSymptoms" key={infoIndex}>
                                        <button className="deletePatient flexbox" onClick={()=> {handleDelete2(item._id,info._id)}}><img className="deletePatientImg" width="40" height="40" src="https://img.icons8.com/ultraviolet/40/waste.png" alt="cancel"/></button>
                                        <p>Date: <span>{info.date}</span></p>
                                        <p>Symptoms: <span>{info.symptoms}</span></p>
                                        <p>Tests: <span>{info.tests}</span></p>
                                        <p>Medicine Suggested: <span>{info.medicineSuggested}</span></p>

                                    </div>
                                ))}
                                <button className="readMore" onClick={handleReadMore}>Read Less</button>
                            </div>
                            :
                            <button className="readMore" onClick={handleReadMore}>Read More</button>
                        }


                    </div>
                ))
            }
        </div>
    );
}

export default PatientsRecord;