import React from 'react';

export const Phrase = ({ phrase }) => {
    return (
        <div className="list">
            {phrase.map((el, i) => {
                return (
                    <div className="block" key={i}>
                        {el}
                    </div>
                )
            })}
        </div>
    )
}