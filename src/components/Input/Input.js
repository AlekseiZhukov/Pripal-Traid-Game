import React from 'react';
import PropType from "prop-types";
import s from './Input.module.scss';
import cn from "classnames";


                            
const Input = ({type, required, autoComplete, label, value, color, handleChange, name, className}) => {
    return (
        <div className={cn(s.root, className)}>
            <input type={type} name={name} required={required} autoComplete={autoComplete} value={value} onChange={handleChange}/>
            <label className={s[color]} >{label}</label>
            <div className={cn(s.bar, s[color])} />
        </div>
    );
};

Input.defaultProps = {
    required: true,
    autoComplete: 'off',
    color: 'default',
};

Input.propTypes = {
    name: PropType.string.isRequired,
    onChange:PropType.func,
    value: PropType.string,
    color: PropType.oneOf(['default', 'white']),
    label: PropType.string,
    type: PropType.oneOf(['email', 'password', 'text', 'number']),
    required: PropType.bool,
    autoComplete: PropType.oneOf(['on', 'off']),
    className: PropType.string
};
                            
export default Input;