import React, { useState } from 'react';
import { ArrowRightIcon } from '../../assets/icons';

const CareerItem = ({ item, className, index }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`mt-8 ${className}`}>
            <div className="flex items-center" onClick={() => setCollapsed(false)}>
                {/* <Direction
                    width={16}
                    height={16}
                    className={`${collapsed ? 'rotate-[-90deg]' : 'rotate-[0deg]'} mr-4 transition`}
                /> */}
                <p className="text-[20px] leading-[24px]">{item.title.rendered}</p>
            </div>
            <a
                href={`/career/${index}`}
                className={`text-[16px] mt-4 leading-[20px] grid grid-cols-5 pl-[30px] font-Inter opacity-80 transition-all duration-500 block ${
                    collapsed ? 'max-h-0' : 'max-h-[20px]'
                } overflow-hidden`}
            >
                <span className="col-span-2 opacity-40">{item?.acf?.type}</span>
                <span className="col-span-2 opacity-40">{item?.acf?.salary}</span>
                <span className="col-span-1 flex items-center justify-end cursor-pointer transition hover:opacity-40">
                    <ArrowRightIcon fill="#ff006c" width={20} height={10} />
                </span>
            </a>
        </div>
    );
};

export default CareerItem;
