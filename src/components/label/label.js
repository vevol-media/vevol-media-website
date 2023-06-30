import React from 'react';
import './label.scss';

export default function Label({ text, colorScheme }) {
    return (
        <div className={`label__box label__box--${colorScheme}`}>
            <p className="title is-6 ">{text}</p>
        </div>
    )
}