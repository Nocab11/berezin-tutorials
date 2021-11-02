import React, { useState, useEffect } from "react";
import { Review } from "./components/Review";
import { FormFeedBack } from "./components/FormFeedBack";

import './App.css';

function App() {

    const [field, setField] = useState([]);

    const [comments, setComments] = useState({
        email: '',
        password: '',
        text: ''
    });

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(field))
    }, [field])

    return (
        <>
            <Review data={field} />
            <FormFeedBack field={field} setField={setField} comments={comments} setComments={setComments} />
        </>
    )
}
export default App;