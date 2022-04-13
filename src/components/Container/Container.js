import React from 'react';
import s from './Container.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types';


const Container = ({children, className}) => {
    return (
        <div className={cn(s.root, className)}>
            {children}
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default Container;