import React from 'react';

const Direction = ({ width = 13, height = 7, fill = 'white', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            viewBox={`0 0 13 7`}
            width={width}
            height={height}
            {...rest}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4152 0.682845C12.6672 0.430859 12.4888 1.90346e-06 12.1324 1.87231e-06L0.400697 1.80037e-06C0.044335 1.76921e-06 -0.134131 0.430858 0.117855 0.682844L5.98371 6.5487C6.13992 6.70491 6.39318 6.70491 6.54939 6.5487L12.4152 0.682845Z"
                fill={fill}
            />
        </svg>
    );
};

export default Direction;
