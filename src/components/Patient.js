import React, { useState, useEffect } from "react";
import Header from "./Header";
import PatientsRecord from "./PatientsRecord";
import '../Patient.css';
import PatientInput from "./PatientInput";
import axios from "axios";
import generateID from "./patientsArray";



const Patient = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [tests, setTests] = useState('');
    const [medicineSuggested, setMedicineSuggested] = useState('');

    const [patientsArray, setPatientsArray] = useState([]);


    function generateDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const date = currentDate.getDate().toString().padStart(2, '0');
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        return `${year}/${month}/${date} - ${hours}:${minutes}:${seconds}`;
      }

    useEffect(() => {
        // console.log(patientsArray);
    }, [patientsArray]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const existing = patientsArray.find((item) => item.contact === contact);

        if(existing) {
            existing.Info.push({
                Date: generateDate(),
                symptoms: symptoms,
                tests: tests,
                medicineSuggested: medicineSuggested
            });

        } else {
            const newPatient = {
                Uhid: generateID(),
                name: name,
                age: age,
                sex: sex,
                address: address,
                contact: contact,
                Info: [
                    {
                        Date: generateDate(),
                        symptoms: symptoms,
                        tests: tests,
                        medicineSuggested: medicineSuggested
                    }
                ]
            }
            const newArray = [...patientsArray, newPatient]
            setPatientsArray(newArray);

        }

        axios.post("http://localhost:3001/patients/add", patientsArray)
        .then( (response) => {
            console.log("successfully sent: ", response);
            console.log("data: ", response.data);
        }).catch((error) => {
            console.error("error getting the patients: ", error);
        });
    }

    return (
        <div className="patient">
            <Header />
            <PatientInput handleSubmit={handleSubmit} setName={setName} setAge={setAge} setSex={setSex} setAddress={setAddress} setContact={setContact} setSymptoms={setSymptoms} setTests={setTests} setMedicineSuggested={setMedicineSuggested}/>
            <PatientsRecord patientsArray={patientsArray} setPatientsArray={setPatientsArray} name={name} age={age} sex={sex} address={address} contact={contact} symptoms={symptoms} tests={tests} medicineSuggested={medicineSuggested}/>
        </div>
    );
}

export default Patient;