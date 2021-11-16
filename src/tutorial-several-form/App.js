import React, {useState} from "react";
import "./style.css";
import {PersonalInfoForm} from "./forms/PersonalInfoForm";
import {AddressForm} from "./forms/AddressForm";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Result} from "./forms/Result";
import {FormContext} from "./forms/FormContext";
import * as yup from "yup";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";

const schema = yup.object({
    firstName2: yup.string().required('это обязательное поле'),
    lastName2: yup.string().min(2, 'Минимум 2 символа').required('это обязательное поле'),
    email2: yup.string().email('неверная почта').required('это обязательное поле'),

}).required();

function App() {

    const [formValues, setFormValues] = useState({});

    const navigate = useNavigate();

    const nextStep = (name) => {
        navigate(name)
    }

    console.log('главная форма', formValues)

    // 2 часть с FormContext

    const methods = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (values) => {
        console.log("ФОРМА!", values);

    }

    return (
        <>
            <Routes>
                <Route path="/" element={<PersonalInfoForm nextStep={nextStep} setFormValues={setFormValues} />} exact />
                <Route path="/address" element={<AddressForm nextStep={nextStep} setFormValues={setFormValues} />} />
                <Route path="/result" element={<Result formValues={formValues} />} />
                <Route path="*" element={<h1 style={{ textAlign: 'center'}}>Страница отсутствует</h1>} />
            </Routes>

            <br/>

            <FormProvider {...methods}>
                <FormContext />
            </FormProvider>
            <Button onClick={methods.handleSubmit(onSubmit)} variant="contained" color="info">
                Далее
            </Button>
        </>
    );
}

export default App;
