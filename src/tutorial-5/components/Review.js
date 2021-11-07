import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const Review = ({ listComments }) => {
    const review = [...listComments]
    console.log('review', review.name)
    return (
        <List>
            {listComments.length > 0 ? <h1>Отзывы:</h1> : ''}
            {listComments.map((arr, index) => (
                <ListItem alignItems="flex-start" key={index}>
                    <ListItemText primary={arr.name} secondary={arr.text} />
                    {  }
                </ListItem>
            ))}
        </List>
    );
}