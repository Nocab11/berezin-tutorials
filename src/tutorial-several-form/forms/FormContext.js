import React from "react";
import {FormField} from "../components/FormField";

export const FormContext = () => {

    return (
        <div className="row">
            <div className="row">
                <FormField name="firstName2" label="Имя" />
                <FormField name="lastName2" label="Фамилия" />
                <FormField name="email2" label="почта" />
            </div>
        </div>
    )
}