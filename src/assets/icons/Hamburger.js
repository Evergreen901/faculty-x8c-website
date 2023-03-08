import React from 'react';

const Hamburger = ({ width = 28, height = 28, stroke = 2, fill = 'white', ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 23 22" {...rest}>
            <path d="M22.9131 1L8.58307e-05 0.999998" stroke={fill} strokeWidth="2" />
            <path d="M22.9131 10.5571L8.58307e-05 10.5571" stroke={fill} strokeWidth="2" />
            <path d="M22.9131 20.1143L8.58307e-05 20.1143" stroke={fill} strokeWidth="2" />
        </svg>
    );
};

export default Hamburger;
