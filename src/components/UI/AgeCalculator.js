import React, { useState } from "react";
import "./Agecalculator.css";

function Agecalculator() {
    const [birthdate, setBirthdate] = useState("");
    const [Age, setAge] = useState(0);

    const findAge = () => {
        const today = new Date();
        const birthData = new Date(birthdate);

        let Age = today.getFullYear() - birthData.getFullYear();
        const month = today.getMonth() - birthData.getMonth();
        if (
            month < 0 ||
            (month === 0 && today.getDate() < birthData.getDate())
        ) {
            Age--;
        }
        setAge(Age);
    };

    const resetbutton = () => {
        setBirthdate("");
        setAge(0);
    };
    return (
        <div className="container">
            <h2 className="heading">Age Calculator</h2>
            <p className="paragraph">
                The Age Calculator shows your age in years, months, and days.
            </p>

            <div className="container_middle">
                <div className="right">
                    <h2>Date of Birth</h2>
                    <input
                        className="Date"
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    ></input>
                    <div className="anotherdiv">
                        <button className="button65" onClick={findAge}>
                            Age calculator
                        </button>
                        <button className="button65" onClick={resetbutton}>
                            refresh
                        </button>
                    </div>
                </div>

                <div className="left">
                    <div className="container_middle_para">
                        <h2 className="leftage">your age is</h2>
                    </div>

                    <h2 className="age_heading">{Age > 0 ? Age : " "}</h2>
                </div>
            </div>
        </div>
    );
}

export default Agecalculator;
