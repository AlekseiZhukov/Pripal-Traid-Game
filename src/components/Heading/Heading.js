import React from "react";
import s from './Heading.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Heading = ({
                     children,
                     level,
                     className,
                     backLine

                 }) => {

    const el = `h${level}`

    return React.createElement(el, {
        className: cn(
            s.root,
            className,
            s[`level${level}`],
            {
                [s.backline]: backLine
            }

        )
    }, children);
};

Heading.defaultProps = {
    level: 1,
    backLine: false
};

Heading.propTypes = {
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5]),
    children: PropTypes.node,
    backLine: PropTypes.bool,
};

export default Heading;