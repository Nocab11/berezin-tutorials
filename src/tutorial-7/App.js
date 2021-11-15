import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
    firstName: yup.string().required('это обязательное поле'),
    lastName: yup.string().min(2, 'Минимум 2 символа').required('это обязательное поле'),
    email: yup.string().email('неверная почта').required('это обязательное поле'),
    // password: yup.string().min(6).max(32),
    password: yup.string().when('email', {
        is: val => val.includes('@'),
        then: yup.string().min(6).max(32),
        // otherwise: yup.number().min(0),
    })
}).required();

function App() {
    const { handleSubmit, register, formState, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => {
        console.log("ФОРМА!", values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <TextField
                    name="firstName"
                    label="Имя"
                    {...register("firstName")}
                    helperText={formState.errors.firstName && formState.errors.firstName.message}
                    error={!!formState.errors.firstName}
                    fullWidth
                />
                <TextField
                    name="lastName"
                    label="Фамилия"
                    {...register("lastName")}
                    helperText={formState.errors.lastName && formState.errors.lastName.message}
                    error={!!formState.errors.lastName}
                    fullWidth
                />
            </div>
            <div className="row">
                <TextField
                    {...register("email")}
                    helperText={formState.errors.email && formState.errors.email.message}
                    error={!!formState.errors.email}
                    name="email"
                    label="E-Mail"
                    defaultValue=""
                    fullWidth
                />
                <TextField
                    {...register("password", {
                        required: "Это обязательное поле!"
                    })}
                    helperText={formState.errors.password && formState.errors.password.message}
                    error={!!formState.errors.password}
                    name="password"
                    type="password"
                    label="Пароль"
                    fullWidth
                />
            </div>
            <div className="row">
                <TextField name="about" label="Обо мне" fullWidth />
            </div>
            <br />
            <div className="row">
                <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                    Зарегистрироваться
                </Button>
                <Button
                    onClick={() => {
                        reset({
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            about: "",
                        });
                    }}
                    variant="contained"
                    color="secondary">
                    Очистить
                </Button>
            </div>
        </form>
    );
}

export default App;
