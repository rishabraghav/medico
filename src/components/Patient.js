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
    const [contact, setContact] = useState();
    const [symptoms, setSymptoms] = useState('');
    const [tests, setTests] = useState('');
    const [medicineSuggested, setMedicineSuggested] = useState('');

    const [patientsArray, setPatientsArray] = useState([]);
    const [tempArray, setTempArray] = useState([]);
    // const [tempArray, setTempArray] = useState();

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
        const fetchPatients = async() => {
            try{
                const response = await axios.get("https://medico-backend.cyclic.app/patients");
                console.log("Fetched Patients: ", response.data);
                setPatientsArray(response.data);
            } catch(err) {
                console.error("error in fetching patients: " , err);
            }
        }
        console.log(tempArray);
        fetchPatients();
    }, [tempArray]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const confirm = window.confirm("Are all the details correct?");
        if (confirm) {
            let data;
            const existingPatient = patientsArray.find((item) => item.contact === contact);
            if (existingPatient) {
                existingPatient.Info.push({
                    date: generateDate(),
                    symptoms: symptoms,
                    tests: tests,
                    medicineSuggested: medicineSuggested
                });
                data = existingPatient;
            } else {
                data = {
                    Uhid: generateID(),
                    name: name,
                    age: age,
                    sex: sex,
                    address: address,
                    contact: contact,
                    Info: [{
                        date: generateDate(),
                        symptoms: symptoms,
                        tests: tests,
                        medicineSuggested: medicineSuggested,
                    },
                    ]
                }
                setPatientsArray([...patientsArray, data]);
                setTempArray([...patientsArray, data]);
            }
            try {
                const response = await axios.post("https://medico-backend.cyclic.app/patients/add", data);
                console.log(response.data);
            } catch (err) {
                console.error("error in making POST request: ", err);
            }
        }
    }

    return (
        <div className="patient">
            <Header />
            <PatientInput handleSubmit={handleSubmit} setName={setName} setAge={setAge} setSex={setSex} setAddress={setAddress} setContact={setContact} setSymptoms={setSymptoms} setTests={setTests} setMedicineSuggested={setMedicineSuggested}/>
            <PatientsRecord setTempArray={setTempArray} patientsArray={patientsArray} setPatientsArray={setPatientsArray} name={name} age={age} sex={sex} address={address} contact={contact} symptoms={symptoms} tests={tests} medicineSuggested={medicineSuggested}/>
        </div>
    );
}

export default Patient;