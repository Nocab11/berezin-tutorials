import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const Review = ({ data }) => {
    return (
        <List>
            {data.length > 0 ? <h1>Отзывы:</h1> : ''}
            {data.map((arr, index) => (
                <ListItem alignItems="flex-start" key={index}>
                    <ListItemText primary={arr.name} secondary={arr.text} />
                </ListItem>
            ))}
        </List>
    );
}