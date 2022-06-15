import React, {useRef, useState} from 'react';
import PropType from "prop-types";

const Form = ({children, className, onSubmit}) => {

    const [values, setValues] = useState({})
    const ref = useRef(null)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        onSubmit && onSubmit(values)
        ref.current.reset()
    }

    const handleChange = (e) => {
        setValues(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    return (
        <form
            ref={ref}
            className={className}
            onSubmit={handleSubmitForm}
            onChange={handleChange}
        >
            {children}
        </form>
    );
};
                            
export default Form;

Form.PropType = {
    children: PropType.node.isRequired,
    className: PropType.string,
    onSubmit: PropType.func.isRequired
}