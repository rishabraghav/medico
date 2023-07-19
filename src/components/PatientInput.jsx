import React from "react";

function PatientInput({handleSubmit, setName, setAge, setSex, setAddress, setContact, setSymptoms, setTests, setMedicineSuggested}) {
    return (
        <div className="patientInput">
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => {setName(e.target.value)}} placeholder="Name" required />
            <input onChange={(e) => setAge(e.target.value)} type="number" placeholder="Age" required />
            <input onChange={(e) => setSex(e.target.value)} placeholder="Sex" required />
            <input onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <input onChange={(e) => setContact(e.target.value)} type="number" placeholder="Contact" required />
            <input onChange={(e) => setSymptoms(e.target.value)} placeholder="Symptoms" />
            <input onChange={(e) => setTests(e.target.value)} placeholder="Tests" />
            <input onChange={(e) => setMedicineSuggested(e.target.value)} placeholder="Medicine given" required />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default PatientInput;