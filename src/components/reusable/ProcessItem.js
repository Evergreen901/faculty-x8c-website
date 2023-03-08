import React, { useEffect, useRef, useState } from 'react';
import { Direction } from '../../assets/icons';

const ProcessItem = ({ item, className }) => {
    const [collapsed, setCollapsed] = useState(true);
    const textRef = useRef();

    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerHTML = item.text;
        }
    }, [item]);

    return (
        <div className={`mt-8 ${className}`}>
            <div className="flex items-center" onClick={() => setCollapsed((prev) => !prev)}>
                <Direction
                    width={16}
                    height={16}
                    className={`${collapsed ? 'rotate-[-90deg]' : 'rotate-[0deg]'} mr-4 transition`}
                />
                <p className="text-[20px] leading-[24px]">{item.label}</p>
            </div>
            <p
                className={`text-[16px] mt-4 leading-[20px] font-Inter opacity-80 transition-all duration-500 ease-linear service-detail ${
                    collapsed ? 'max-h-0' : 'max-h-[200px]'
                } overflow-hidden`}
                ref={textRef}
            ></p>
        </div>
    );
};

export default ProcessItem;
