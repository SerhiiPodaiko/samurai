import React from 'react';

import './Input.css';

const Input = (props) => {

    const { type, name, placeholder } = props;

    return (
        <input type={type} className="input-group" name={name} placeholder={placeholder} />
    );
};

export default Input;