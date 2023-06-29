import React from "react";
import Header from "./Header";
import Inputs from "./Inputs";

const Patient = () => {
    console.log("working?")
    return (
        <div className="patient">
            <Header />
            <Inputs />
        </div>
    );
}

export default Patient;