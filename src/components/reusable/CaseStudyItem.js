import { useEffect, useRef } from 'react';
import { useWidth } from '../../hooks';
import PrimaryButton from './PrimaryButton';

const CaseStudyItem = ({ data, index }) => {
    const titleRef = useRef();
    const titleSPRef = useRef();
    const subtitleRef = useRef();
    const windowWidth = useWidth();

    useEffect(() => {
        if (titleRef.current) titleRef.current.innerHTML = data.title;
        if (titleSPRef.current) titleSPRef.current.innerHTML = data.title;
        if (subtitleRef.current) subtitleRef.current.innerHTML = data.subtitle;
    }, [data]);

    return windowWidth > 768 ? (
        <a
            href={`/case-study/${data.slug}`}
            className={`block w-full md:h-[440px] ${
                !index ? 'mt-[80px]' : 'mt-[128px]'
            } cursor-pointer relative case-study-item transition-all overflow-hidden rounded-[32px] bg-gray-300`}
        >
            <figure className="w-full h-[300px] md:h-full flex items-center justify-center overflow-hidden transition-all rounded-[32px] z-[10]">
                <img
                    className="w-full h-full object-cover transition-all duration-[1000ms] z-[0]"
                    src={data.image}
                    alt="case study"
                    preload="auto"
                />
            </figure>
            <div className="hidden md:block absolute top-0 left-0 w-[50%] h-full case-study-overlay transition-all duration-[1000ms] rounded-l-[32px]" />
            <div className="hidden md:flex absolute top-0 left-0 w-[50%] h-full flex flex-col p-16 pt-8 transition-all">
                <p className="text-[32px] leading-[36px] mt-auto" ref={titleRef}></p>
                <p
                    className="text-[16px] leading-[22px] mt-6 tracking-[1px] font-Inter font-light text-justify"
                    ref={subtitleRef}
                ></p>
            </div>
        </a>
    ) : (
        <div
            className={`block w-full md:h-[440px] mt-[40px] cursor-pointer relative case-study-item transition-all overflow-hidden rounded-[32px] bg-gray-300`}
        >
            <figure className="w-full h-[300px] md:h-full flex items-center justify-center overflow-hidden transition-all rounded-[32px] z-[10]">
                <img
                    className="w-full h-full object-cover transition-all duration-[1000ms] z-[0]"
                    src={data.image}
                    alt="case study"
                    preload="auto"
                />
            </figure>
            <div className="w-full block md:hidden">
                <p className="text-[18px] leading-[22px] text-center mt-5" ref={titleSPRef}></p>
                <a href={`/case-study/${data.slug}`}>
                    <PrimaryButton
                        text={'READ CASE STUDY'}
                        theme="dark"
                        hasArrow={false}
                        className="w-fit mt-[32px] mb-[24px] !py-[6px] mx-auto"
                    />
                </a>
            </div>
        </div>
    );
};

export default CaseStudyItem;
