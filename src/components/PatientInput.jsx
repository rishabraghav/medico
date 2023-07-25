import React from "react";

function PatientInput({handleSubmit, setName, setAge, setSex, setAddress, setContact, setSymptoms, setTests, setMedicineSuggested}) {
    return (
        <div className="patientsInput flexbox">
        <form className="patientsInputForm flexbox" onSubmit={handleSubmit}>
            <input className="patientInputField" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input className="patientInputField" onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" required />
            <input className="patientInputField" onChange={(e) => setSex(e.target.value)} placeholder="Sex" required />
            <input className="patientInputField" onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <input className="patientInputField" onChange={(e) => setContact(e.target.value)} type="number" placeholder="Contact" required />
            <input className="patientInputField" onChange={(e) => setSymptoms(e.target.value)} placeholder="Symptoms" />
            <input className="patientInputField" onChange={(e) => setTests(e.target.value)} placeholder="Tests" />
            <input className="patientInputField" onChange={(e) => setMedicineSuggested(e.target.value)} placeholder="Medicine given" required />
            <button className="patientInputButton"  type="submit">Submit</button>
        </form>
        </div>
    );
}

export default PatientInput;