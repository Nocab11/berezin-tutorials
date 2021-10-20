import React from 'react';

export const Phrase = ({ phrase }) => {
    return (
        <div className="list">
            <div className="block">
                {phrase}
            </div>
        </div>
    )
}