import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const FormHook = () => {

    const { register, handleSubmit, formState } = useForm();

    const onSubmit = data => console.log(data);

    console.log()

    return (
        <section className="form-ui">
            <div className="form-ui__item">
                <TextField
                    name="firstName"
                    className="form-ui__textfield"
                    label="Имя"
                    variant="standard"
                    {...register('firstName', {
                        required: 'Поле обезательно '
                    })}
                    helperText={formState.errors.firstName && formState.errors.firstName.message}
                    error={!!formState.errors.firstName}
                    fullWidth
                />
                <TextField
                    name="lastName"

                    className="form-ui__textfield"
                    label="Фамилия"
                    variant="standard"
                    {...register('lastName', {
                        required: 'Поле обезательно '
                    })}
                    helperText={formState.errors.lastName && formState.errors.lastName.message}
                    error={!!formState.errors.lastName}
                    fullWidth
                />
            </div>
            <div className="form-ui__item">
                <TextField
                    name="email"

                    className="form-ui__textfield"
                    label="E-mail"
                    variant="standard"
                    {...register('email', {
                        required: 'Поле обезательно ',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Неверный формат email адреса",
                        },
                    })}
                    helperText={formState.errors.email && formState.errors.email.message}
                    error={!!formState.errors.email}
                    fullWidth
                />
                <TextField
                    name="password"

                    className="form-ui__textfield"
                    label="Пароль"
                    variant="standard"
                    {...register('password', {
                        required: 'Поле обезательно '
                    })}
                    helperText={formState.errors.password && formState.errors.password.message}
                    error={!!formState.errors.password}
                    fullWidth
                />
            </div>
            <br/>
            <div className="form-ui__item">
                <Button onClick={handleSubmit(onSubmit)} className="btn-primary" variant="contained" color="primary">Зарегистрироваться</Button>
                <Button variant="contained" color="secondary">Очистить</Button>
            </div>

        </section>
    )
}