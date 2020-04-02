import React from 'react';

import './Form.css';
import Input from "../Input";

const Form = ({ onSubmit }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <Input type="text" name="firstname" placeholder="Ім'я" />
                <Input type="text" className="input-group" name="lastname" placeholder="Фамілія" />
                <Input type="email" className="input-group  " name="email" placeholder="Email" />
                <Input type="password" className="input-group" name="password" placeholder="Пароль" />
            </div>
            <div className="btn-group">
                <button type="submit" className="btn btn-success btn-xl">Зареєструватися</button>
            </div>
        </form>
    );
};

export default Form;