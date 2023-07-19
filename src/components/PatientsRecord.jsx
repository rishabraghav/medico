import React from "react";
import { useState, useEffect  } from "react";

function PatientsRecord({ patientsArray }) {
    const [showContent, setShowContent] = useState(false);



    useEffect(() => {
        // console.log(patientsArray);
    }, [patientsArray]);

    const handleReadMore = () => {
        setShowContent(!showContent);
        // console.log(Date().full);
    }

    return (
        <div>
            {
                patientsArray.map((item, index) => (
                    <div className="patientsRecord" key={index}>
                        <p>Unique Health Identification(Uhid): <span>{item.Uhid}</span></p>
                        <p>Name: <span>{item.name}</span></p>
                        <p>Age/Sex: <span>{item.age}</span> <span>{item.sex}</span></p>
                        <p>Address: <span>{item.address}</span></p>
                        <p>Contact Number: <span>{item.contact}</span></p>


                        {showContent ?
                            <>
                                {item.Info.map((info, infoIndex) => (
                                    <div className="patientsSymptoms" key={infoIndex}>
                                        <p>Date: <span>{info.Date}</span></p>
                                        <p>Symptoms: <span>{info.symptoms}</span></p>
                                        <p>Tests: <span>{info.tests}</span></p>
                                        <p>Medicine Suggested: <span>{info.medicineSuggested}</span></p>

                                    </div>
                                ))}
                                <button className="readMore" onClick={handleReadMore}>Read Less</button>
                            </>
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