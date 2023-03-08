import { testimonials } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { ArrowRightIcon } from '../../assets/icons';

const Testimonials = ({ className, isEmployee = true }) => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(0);
    const data = isEmployee ? testimonials.employee : testimonials.client;
    const testmonialLength = parseInt((data.length + 1) / 2);

    useEffect(() => {
        if (!testmonialLength) return;

        const carouselTimer = setInterval(() => {
            setSelectedTestimonial((prev) => (prev + 1) % testmonialLength);
        }, 15000);

        return () => {
            clearInterval(carouselTimer);
        };
    }, [testmonialLength]);

    return (
        <section className={`w-screen px-8 md:px-5 pt-[50px] pb-[100px] md:pt-[50px] md:pb-[150px] ${className}`}>
            <div
                className={`md:hidden pb-[100px] relative ${
                    isEmployee ? 'h-[550px] mobile:h-[450px]' : 'h-[450px] mobile:h-[350px]'
                }`}
            >
                {data.map((item, index) => (
                    <div
                        className={`absolute w-full h-full ${
                            index === selectedTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } transition-all duration-500 flex flex-col justify-end`}
                        key={index}
                    >
                        <p className="font-Inter text-[18px] mt-4 whitespace-pre-line">{item.text}</p>
                        <p className="text-pink font-Inter text-[16px] flex items-center mt-10 px-[10px] whitespace-pre-line relative">
                            {isEmployee ? (
                                <img src={item.image} className="w-[42px] h-[42px] mr-4 rounded-full" alt="avatar" />
                            ) : null}
                            {item.position}
                            <span
                                className="absolute right-0 top-[130%] transition hover:opacity-60"
                                onClick={() => setSelectedTestimonial((prev) => (prev + 1) % data.length)}
                            >
                                <ArrowRightIcon width={24} height={24} fill="#ff006c" />
                            </span>
                            <span
                                className="absolute left-0 top-[130%] transition hover:opacity-60"
                                onClick={() => setSelectedTestimonial((prev) => (prev + data.length - 1) % data.length)}
                            >
                                <ArrowRightIcon width={24} height={24} fill="#ff006c" className="rotate-180" />
                            </span>
                        </p>
                    </div>
                ))}
            </div>
            <div className="hidden md:block max-w-[1120px] mx-auto pb-[100px] relative h-[400px]">
                {new Array(testmonialLength).fill(0).map((item, index) => (
                    <div
                        className={`absolute grid grid-cols-2 gap-x-16 w-full h-[300px] ${
                            index === selectedTestimonial ? 'opacity-100' : 'opacity-0'
                        } transition-all duration-500`}
                        key={index}
                    >
                        {data.slice(index * 2, index * 2 + 2).map((item, subIndex) => (
                            <div className="col-span-1" key={subIndex}>
                                <p className="text-pink font-Inter text-[20px] flex items-center">
                                    {isEmployee ? (
                                        <img
                                            src={item.image}
                                            className="w-[42px] h-[42px] mr-4 rounded-full"
                                            alt="avatar"
                                        />
                                    ) : null}
                                    {item.position}
                                </p>
                                <p className="font-Inter text-[18px] opacity-80 font-light text-justify mt-4 whitespace-pre-line">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="absolute w-full h-[16px] bottom-0 flex justify-center items-center gap-x-4">
                    {new Array(testmonialLength).fill(0).map((item, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full cursor-pointer ${
                                selectedTestimonial === index ? 'bg-pink' : 'bg-gray-100'
                            }`}
                            onClick={() => {
                                setSelectedTestimonial(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
