import React, { useState, useEffect } from "react";
import { Review } from "./components/Review";
import { FormFeedBack } from "./components/FormFeedBack";

const App = () => {

    const [listComments, setListComments] = useState([]);

    useEffect(() => {
        setListComments(JSON.parse(localStorage.getItem('comments')) || []);
    }, []);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(listComments));
    }, [listComments]);

    const addComment = (arr) => {
        setListComments([...listComments, arr])
    };

    return (
        <>
            <Review listComments={listComments} />
            <FormFeedBack addComment={addComment} />
        </>
    );
}

export default App;