import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";

export const FormOwn = () => {

    const [fields, setFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });



    const handlerClickClear = () => {
        setFields({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    };

    const handlerClickRegister = () => {

        if (!fields.email.includes('@')) {
            alert('email not valid')
            return;
        }

        if (fields.firstName.length < 3 | fields.lastName.length < 3) {
            alert('name or lastname error')
            return;
        }

        handlerClickClear();
    };

    const handlerChangeInput = (event) => {
        const { name, value } = event.target;
        setFields({
            ...fields,
            [name]: value
        })
        console.log(fields)
    };

    const isValid = !!fields.firstName && !!fields.lastName && !!fields.password && !!fields.email

    console.log(isValid)

    return (
        <section className="form-ui">
            <div className="form-ui__item">
                <TextField
                    name="firstName"
                    onChange={handlerChangeInput}
                    value={fields.firstName}
                    className="form-ui__textfield"
                    label="Имя"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    name="lastName"
                    onChange={handlerChangeInput}
                    value={fields.lastName}
                    className="form-ui__textfield"
                    label="Фамилия"
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className="form-ui__item">
                <TextField
                    name="email"
                    onChange={handlerChangeInput}
                    value={fields.email}
                    className="form-ui__textfield"
                    label="E-mail"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    name="password"
                    onChange={handlerChangeInput}
                    value={fields.password}
                    className="form-ui__textfield"
                    label="Пароль"
                    variant="standard"
                    fullWidth
                />
            </div>
            <br/>
            <div className="form-ui__item">
                <Button disabled={!isValid} onClick={handlerClickRegister} className="btn-primary" variant="contained" color="primary">Зарегистрироваться</Button>
                <Button onClick={handlerClickClear} variant="contained" color="secondary">Очистить</Button>
            </div>

        </section>
    )
}