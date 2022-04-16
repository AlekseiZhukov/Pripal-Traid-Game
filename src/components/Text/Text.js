import React from 'react';
import s from './Text.module.scss'
import cn from 'classnames'
import PropTypes from "prop-types";


const Text = ({element, children, className, strong = false, italic = false, disabled = false}) => {

    return React.createElement(
        element,
        {
            className: cn(
                s.root,
                className,
                {
                    [s.strong]: strong,
                    [s.italic]: italic,
                    [s.disabled]: disabled
                }
            )
        },
        children
    )

};

Text.defaultProps = {
    element: 'div',
}

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool
};

export default Text;