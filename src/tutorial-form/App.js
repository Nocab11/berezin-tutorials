import * as React from 'react';
import './form.css';
import { FormOwn } from "./components/FormOwn";
import { FormHook } from "./components/FormHook";

const App = () => {
    return (
        <>
            <FormOwn />
            <FormHook />
        </>
    );
}

export default App;