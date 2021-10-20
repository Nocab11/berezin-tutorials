import React, { useState } from 'react';
import './App.css';
import { EmptyBlock } from "./components/EmptyBlock";
import { Phrase } from "./components/Phrase";

const App = () => {

    const adjectivesArr = [
        "абсолютный",
        "адский",
        "азартный",
        "активный",
        "ангельский",
        "астрономический",
        "баснословный",
        "безбожный",
        "безбрежный",
        "безвозвратный",
        "безграничный",
        "бездонный",
        "бездушный",
        "безжалостный",
        "замечательно",
        "замечательный",
        "записной",
        "запредельный",
        "заядлый",
        "звериный",
        "зверский",
        "зеленый",
        "злой",
        "злостный",
        "значительный",
        "неоспоримый",
        "неотразимый",
        "неоценимый",
        "непередаваемый"
    ];

    const nounsArr = [
        "лгун",
        "день",
        "конь",
        "олень",
        "человек",
        "программист",
        "ребёнок",
        "конец",
        "город",
        "дурак"
    ];

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const random = (arr) => {
        return arr[getRandomInt(0, arr.length - 1)];
    };

    const [phrase, setPhrase] = useState([]);

    const addPhrase = () => {
        const adjective = random(adjectivesArr);
        const noun = random(nounsArr);
        setPhrase([adjective, noun])
    };

    const removePhrase = () => {
        setPhrase([])
    };

    return (
        <div className="wrapper">
            {phrase.length === 0 ? <EmptyBlock /> : <Phrase phrase={phrase} />}
            <button className="btn btn_generate" onClick={addPhrase}>Сгенерировать</button>
            <button className="btn btn_clear" onClick={removePhrase}>Очистить</button>
        </div>
    )
};

export default App;