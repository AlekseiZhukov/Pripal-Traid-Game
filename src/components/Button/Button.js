import React from 'react';
import s from './Button.module.scss';
import PropType from 'prop-types';
import cn from 'classnames';


const Button = ({
                    black,
                    name,
                    onHandleClick,

                }) => {

    const handleClick = () => {
        onHandleClick()
    };

    return (
        <button className={cn(s.root, {[s.black]: black})} onClick={onHandleClick && handleClick}>
            {name}
        </button>
    );
};

Button.defaultProps = {
    black: false
};

Button.propTypes = {
    black: PropType.bool,
    name: PropType.string,
    onHandleClick: PropType.func,

};

export default Button;