import React from 'react';
import PropType from "prop-types";
import s from './Input.module.scss';
import cn from "classnames";


                            
const Input = ({type, required, autoComplete, id, label, value, color, handleChange, name}) => {
    return (
        <div className={s.root}>
            <input type={type} id={id} name={name} required={required} autoComplete={autoComplete} value={value} onChange={handleChange}/>
            <label className={s[color]} htmlFor={id}>{label}</label>
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
    value: PropType.string.isRequired,
    color: PropType.oneOf(['default', 'white']),
    label: PropType.string,
    id: PropType.string.isRequired,
    type: PropType.string.isRequired,
    required: PropType.bool,
    autoComplete: PropType.oneOf(['on', 'off'])
};
                            
export default Input;