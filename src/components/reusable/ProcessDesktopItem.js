import { useEffect, useRef } from 'react';

const ProcessDesktopItem = ({ item }) => {
    const textRef = useRef();

    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerHTML = item.text;
        }
    }, [item]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-x-[70px] mt-[80px]">
            <div className="col-span-1 flex flex-col md:items-end">
                <p className="text-[24px] leading-[30px] md:text-[32px] md:leading-[40px] md:text-right">
                    {item.label}
                </p>
            </div>
            <p
                className="col-span-2 text-[16px] mt-2 md:text-[18px] leading-[22px] font-Inter text-justify opacity-80 service-detail"
                ref={textRef}
            ></p>
        </div>
    );
};

export default ProcessDesktopItem;
