import React from "react";
import s from './Heading.module.css';
import cn from 'classnames';
import PropTypes from "prop-types";

const Heading = ({
                     children,
                     level,
                     className,

                 }) => {

    const el = `h${level}`
    return React.createElement(el, {
        className: cn(s.root, className, s[`level${level}`])
    }, children);

};

Heading.defaultProps = {
    level: 1,

}

Heading.propTypes = {

    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
    children: PropTypes.node
};

export default Heading;