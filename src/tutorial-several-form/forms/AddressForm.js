import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    city: yup.string().required('Укажите город'),
    street: yup.string().required('Укажите улицу'),
    appartment: yup.number('должно быть число').min(1, 'Укажите номер квартиры').required('Укажите квартиру'),
}).required();

export const AddressForm = ({ nextStep, setFormValues }) => {

    const { handleSubmit, register, formState, reset } = useForm({
        defaultValues: {
            city: '',
            street: '',
            appartment: 0
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => {
        console.log("ФОРМА!", values);
        setFormValues(formValues => {
            return {...formValues, ...values}

        })
        nextStep('result');
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <TextField
                    name="city"
                    label="Город"
                    {...register("city")}
                    helperText={formState.errors.city && formState.errors.city.message}
                    error={!!formState.errors.city}
                    fullWidth
                />
                <TextField
                    name="street"
                    label="Улица"
                    {...register("street")}
                    helperText={formState.errors.street && formState.errors.street.message}
                    error={!!formState.errors.street}
                    fullWidth
                />
                <TextField
                    name="appartment"
                    label="Номер квартиры"
                    {...register("appartment")}
                    helperText={formState.errors.appartment && formState.errors.appartment.message}
                    error={!!formState.errors.appartment}
                    fullWidth
                />

            </div>

            <br />
            <div className="row">
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
                <Button onClick={handleSubmit(onSubmit)} variant="contained" color="info">
                    Далее
                </Button>

            </div>
        </form>
    )
}