import React from 'react';
import s from './Button.module.scss';
import PropType from 'prop-types';
import cn from 'classnames';

const Button = ({
                    color,
                    children,
                    onHandleClick,
                }) => {

    const handleClick = () => {
        onHandleClick && onHandleClick()
    };

    return (
        <button className={cn(s.root, s[color])} onClick={handleClick}>
            <span>{children}</span>
        </button>
    );
};

Button.defaultProps = {
    color: 'default'
};

Button.propTypes = {
    color: PropType.oneOf(['default', 'black']),
    children: PropType.node,
    onHandleClick: PropType.func,

};

export default Button;