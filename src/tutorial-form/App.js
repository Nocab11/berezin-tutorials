import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './form.css';
import {useState} from "react";

const App = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerClickClear = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    const handlerClickRegister = () => {
        const form = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(form)
        handlerClickClear();
    }

    return (
        <section className="form-ui">
            <div className="form-ui__item">
                <TextField
                    onChange={(event) => setFirstName(event.target.value)}
                    value={firstName}
                    className="form-ui__textfield"
                    label="Имя"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastName}
                    className="form-ui__textfield"
                    label="Фамилия"
                    variant="standard"
                    fullWidth
                />
            </div>
            <div className="form-ui__item">
                <TextField
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    className="form-ui__textfield"
                    label="E-mail"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    className="form-ui__textfield"
                    label="Пароль"
                    variant="standard"
                    fullWidth
                />
            </div>
            <br/>
            <div className="form-ui__item">
                <Button onClick={handlerClickRegister} className="btn-primary" variant="contained" color="primary">Зарегистрироваться</Button>
                <Button onClick={handlerClickClear} variant="contained" color="secondary">Очистить</Button>
            </div>

        </section>
    );
}

export default App;