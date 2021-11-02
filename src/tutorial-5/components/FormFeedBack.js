import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const FormFeedBack = ({ addComment }) => {

    const [arrComments, setArrComments] = useState([]);

    const [comments, setComments] = useState({
        name: '',
        email: '',
        createdAt: Date(),
        text: ''
    });

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (!comments.name || !comments.email || !comments.text) {
            alert('Все поля должны быть заполнены!');
        } else {
            setArrComments([...arrComments, comments])
            if (addComment) {
                addComment(comments);
                setComments({ name: '', email: '', createdAt: Date(), text: '' });
            }
            e.target.reset();
        }
    }

    const handlerChange = (e) => {

        const {name, value} = e.target

        if (name === 'name') {
            setComments({
                ...comments,
                name: value
            })
        }
        if (name === 'email') {
            setComments({
                ...comments,
                email: value
            })
        }
        if (name === 'text') {
            setComments({
                ...comments,
                text: value
            })
        }
    }

    return (
        <>
            <h2>Обратная связь:</h2>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '400px' }}
                noValidate
                autoComplete="off"
                onSubmit={handlerSubmit}
            >
                <TextField
                    id="name"
                    label="Имя..."
                    variant="outlined"
                    name="name"
                    onChange={handlerChange}
                />
                <TextField
                    id="email"
                    label="Почта..."
                    variant="outlined"
                    name="email"
                    onChange={handlerChange}
                />
                <TextField
                    id="text"
                    fullWidth
                    label="Текст..."
                    variant="outlined"
                    name="text"
                    margin="dense"
                    multiline
                    rows={4}
                    onChange={handlerChange}
                />
                <Button variant="contained" type="submit">Отправить</Button>
            </Box>
        </>
    )
}