import React, {useState} from "react";
import "./style.css";
import {PersonalInfoForm} from "./forms/PersonalInfoForm";
import {AddressForm} from "./forms/AddressForm";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Result} from "./forms/Result";


function App() {

    const [formValues, setFormValues] = useState({});

    const navigate = useNavigate();

    const nextStep = (name) => {
        navigate(name)
    }

    console.log('главная форма', formValues)

    return (
        <>

            <Routes>
                <Route path="/" element={<PersonalInfoForm nextStep={nextStep} setFormValues={setFormValues} />} exact />
                <Route path="/address" element={<AddressForm nextStep={nextStep} setFormValues={setFormValues} />} />
                <Route path="/result" element={<Result formValues={formValues} />} />
                <Route path="*" element={<h1 style={{ textAlign: 'center'}}>Страница отсутствует</h1>} />
            </Routes>
        </>
    );
}

export default App;
