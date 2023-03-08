import BackImage from '../../assets/image/home-back.png';
import BackSPImage from '../../assets/image/home-back-sp.png';
import CharacterImage from '../../assets/image/home-character.png';
import TitleDoodle from '../../assets/svg/doodles/arrow-line.svg';
import TrustedByDoodle from '../../assets/svg/doodles/trusted-by.svg';
import { PrimaryButton, Testimonials, TrustedBy } from '../reusable';
import { navigation, serviceCircles, services } from '../../utils/constants';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useWidth } from '../../hooks';

var offset = 0;
var direction = 'down';
var scrolled = false;
var scrolling = false;

const Home = () => {
    const { t } = useTranslation();
    const windowWidth = useWidth();
    const serviceRef = useRef();
    const [serviceHover, setServiceHover] = useState(2);
    const [selectedService, setSelectedService] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (!serviceRef.current) return;
            if (serviceRef.current.scrollTop !== offset) {
                direction = offset > serviceRef.current.scrollTop ? 'up' : 'down';
                offset = serviceRef.current.scrollTop;
                scrolled = false;
                return;
            }

            if (!scrolling) {
                const serviceNumber = parseInt(serviceRef.current.scrollTop / 550);
                setSelectedService(serviceNumber);

                if (serviceNumber < 3) {
                    setServiceHover(2);
                } else if (serviceNumber < 7) {
                    setServiceHover(1);
                } else {
                    setServiceHover(0);
                }
            }

            if (serviceRef.current.scrollTop % 550 === 0 || scrolled || scrolling) return;

            serviceRef.current.scrollTo({
                top: parseInt(serviceRef.current.scrollTop / 550 + (direction === 'down' ? 1 : 0)) * 550,
                behavior: 'smooth',
            });
            scrolled = true;
        }, 20);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const goToService = (index) => {
        serviceRef.current.scrollTo({
            top: index * 550,
            behavior: 'smooth',
        });
        setSelectedService(index);

        if (index < 3) {
            setServiceHover(2);
        } else if (index < 7) {
            setServiceHover(1);
        } else {
            setServiceHover(0);
        }

        scrolling = true;
        const timerId = setInterval(() => {
            if (serviceRef.current.scrollTop === index * 550) {
                clearInterval(timerId);
                scrolling = false;
            }
        }, 0);
    };

    return (
        <div className="w-screen min-h-screen relative">
            <section className="w-screen px-6 md:px-5 pt-[150px] md:pt-[200px]">
                <div className="max-w-[1020px] mx-auto h-full relative z-[10]">
                    <h1 className="whitespace-pre-line text-[36px] leading-[42px] md:text-[60px] md:leading-[72px]">
                        Your Web3 Agency
                        <br />
                        for{' '}
                        <span className="relative">
                            Innovative
                            <img src={TitleDoodle} alt="doodle svg" className="absolute top-[100%] right-0 w-[330px]" />
                        </span>{' '}
                        Brands
                    </h1>
                    <p className="text-[16px] leading-[20px] md:text-[20px] md:leading-[28px] max-w-[830px] opacity-80 mt-8 font-Inter font-light text-justify">
                        {t('home.subtitle')}
                    </p>
                </div>
            </section>

            <section className="w-screen md:px-5 pt-[100px] md:pt-[150px] pb-[0px] md:pb-[60px]">
                <div className="max-w-[1400px] mx-auto relative">
                    <div className="hidden md:block back-glow-3 absolute z-0" />
                    <div className="h-[280px] md:h-[440px] w-full overflow-hidden md:rounded-[32px] relative z-[10]">
                        <img
                            src={windowWidth > 768 ? BackImage : BackSPImage}
                            alt="background"
                            className="w-full h-full object-right md:object-center object-cover"
                        />
                    </div>
                    <img
                        src={CharacterImage}
                        alt="character"
                        className="absolute bottom-0 w-[680px] md:w-[1120px] max-w-[unset] -right-[72px] md:right-[100px] z-[10]"
                    />
                </div>
            </section>

            <section className="md:hidden w-screen px-3 flex flex-col items-center pt-[32px] pb-[50px]">
                <a href="/contact">
                    <PrimaryButton text="CONTACT US" theme="pink" hasArrow={false} className="!py-[6px] md:py-[8px]" />
                </a>
                <div className="flex flex-col mt-[60px]">
                    <h2 className="text-[40px]">Our Services</h2>
                    {navigation[1].children.map((navItem, index) => (
                        <div className={`${index > 0 ? 'mt-[64px]' : 'mt-[40px]'} flex flex-col`} key={navItem.label}>
                            <p className="text-[26px]">{navItem.label}</p>
                            {navItem.submenu.map((item, subIndex) => (
                                <a className={`font-Inter text-[18px] opacity-60 mt-6`} href={item.to} key={item.label}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className="hidden md:block w-screen px-8 md:px-5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="w-full h-[600px] rounded-[32px] bg-[#131418] pl-[80px] py-[50px] pr-[20px] relative">
                        <div
                            className="overflow-hidden h-full overflow-y-scroll relative pr-[500px] hide-scrollbar"
                            ref={serviceRef}
                        >
                            <div className="relative">
                                {services.map((item, index) => (
                                    <div
                                        className={`h-[500px] flex flex-col pt-[50px] ${index < services.length - 1 ? 'mb-[50px]' : ''
                                            }`}
                                        key={item.label}
                                    >
                                        <h2 className="text-[64px] leading-[64px]">{item.label}</h2>
                                        <p className="whitespace-pre-line font-Inter text-[20px] leading-[24px] tracking-[1px] mt-5 opacity-80 font-light text-justify">
                                            {item.description}
                                        </p>
                                        <a href={item.to} className="mt-auto">
                                            <PrimaryButton
                                                text={`Explore Services`}
                                                theme="pink"
                                                className="w-[80vw] mobile:max-w-[60vw] md:w-fit"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute w-[400px] h-[400px] hidden md:block top-[100px] right-[80px]">
                            <div className="relative w-full h-full">
                                {serviceCircles.map((item, index) => (
                                    <div
                                        key={item}
                                        className={`absolute rounded-full ${index === 0
                                            ? 'w-full h-full'
                                            : index === 1
                                                ? 'w-[66.6%] h-[66.6%] top-0 left-[16.6%]'
                                                : 'w-[33.3%] h-[33.3%] top-0 left-[33.3%]'
                                            } border-[2px] transition cursor-pointer ${serviceHover === index ? 'border-pink box-shadow-pink' : 'border-gray-400'
                                            }`}
                                        onClick={() => {
                                            goToService(index === 0 ? 7 : index === 1 ? 3 : 0);
                                        }}
                                    >
                                        <div
                                            className={`w-full ${index === 0
                                                ? 'h-[33.3%] mt-[66.6%]'
                                                : index === 1
                                                    ? 'h-[50%] mt-[50%]'
                                                    : 'h-full'
                                                } flex items-center justify-center`}
                                        >
                                            <p
                                                className={`text-[20px] transition ${serviceHover === index
                                                    ? 'text-pink text-shadow-pink'
                                                    : 'text-gray-400'
                                                    }`}
                                            >
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute w-[16px] h-full flex flex-col justify-center gap-y-[10px] right-[32px] top-0">
                            {services.map((item, index) => (
                                <div
                                    className={`rounded-full transition cursor-pointer ${selectedService === index ? 'bg-pink' : 'bg-[#000000CC]'
                                        } w-4 h-4`}
                                    key={index}
                                    onClick={() => {
                                        goToService(index);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5">
                <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row md:items-center pt-[75px] pb-[75px] md:pt-[230px] md:pb-[200px]">
                    <h1 className="text-[40px] leading-[48px] w-fit mx-auto basis-full flex-grow flex-shrink whitespace-pre-line relative text-center lg:text-left">
                        {t('trusted.by')}
                        <img
                            src={TrustedByDoodle}
                            alt="trusted by doodle"
                            className="absolute -bottom-[30px] right-[0px] w-[280px] md:w-[240px] lg:right-[80px]"
                        />
                    </h1>
                    <TrustedBy className="-mx-12 mt-16 md:mx-0 lg:mt-0" />
                </div>
            </section>

            <Testimonials isEmployee={false} />
        </div>
    );
};

export default Home;
