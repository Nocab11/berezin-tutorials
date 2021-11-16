import React from "react";
import { Paper } from "@mui/material";

export const Result = ({ formValues }) => {

    const {firstName, lastName, email, password, about, city, street, appartment} = formValues;

    return (
        <Paper>
            <h2>Персональная информация:</h2>
            <ul>
                <li>Имя : {firstName}</li>
                <li>Фамилия: {lastName}</li>
                <li>email: {email}</li>
                <li>password: {password}</li>
                <li>about: {about}</li>

            </ul>
            <h2>Адрес:</h2>
            <ul>
                <li>Город: {city}</li>
                <li>Улица: {street}</li>
                <li>Номер квартиры: {appartment}</li>
            </ul>
        </Paper>
    )
}