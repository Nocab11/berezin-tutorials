import React from 'react';
import { useParams } from "react-router-dom";

export const Article = () => {

    const { id } = useParams();



    return (
        <article>
            <div>
                <h1>Статья № {id}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga animi
                    aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia amet possimus?
                    Impedit nemo ducimus fuga rem!
                </p>
                <a href="/"><button>Назад</button></a>
            </div>
        </article>
    );
}