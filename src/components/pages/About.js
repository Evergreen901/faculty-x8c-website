import { CareerItem, ExternalLink, NumberAnimation, Testimonials } from '../reusable';
import { useWidth } from '../../hooks';
import { numbersInfo, teamMembers } from '../../utils/constants';
import { useContext, useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from '../../assets/icons';
import BackImage from '../../assets/image/back-about.jpg';
import BackEarchImage from '../../assets/image/contact-back.png';
import ExpertsDoodle from '../../assets/svg/doodles/about.svg';
import PositionDoodle from '../../assets/svg/doodles/position.svg';
import MascotImage from '../../assets/image/about-mascot.png';
import GlobalContext from '../../context/global/GlobalContext';

const About = () => {
    const numbersRef = useRef();
    const useNumberRef = useRef(false);
    const windowWidth = useWidth();
    const [offset, setOffset] = useState(0);
    const { careerData } = useContext(GlobalContext);

    useEffect(() => {
        const onScroll = () => {
            if (!useNumberRef.current) setOffset(window.pageYOffset);
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!numbersRef.current || useNumberRef.current) return;
        const vh = document.documentElement.clientHeight;

        if (
            numbersRef.current.offsetTop - vh + (windowWidth < 768 ? 300 : 0) <= offset &&
            numbersRef.current.offsetTop - vh + numbersRef.current.clientHeight >= offset
        ) {
            useNumberRef.current = true;
            setOffset(0);
        }
    }, [offset, windowWidth, useNumberRef]);

    return (
        <div className="w-screen min-h-screen relative">
            <section className="w-screen pt-[90px] md:pt-[70px] px-6 md:px-5">
                <div className="max-w-[1280px] mx-auto h-full relative">
                    <h1 className="text-[34px] leading-[40px] pt-[70px] block md:hidden">
                        We’re on a mission to make an impact on the global adoption of blockchain through our suite of{' '}
                        <span className="text-pink">tailored</span> services, incredible talent and by fuelling exciting{' '}
                        <span className="text-pink">Web3</span> projects.
                    </h1>
                    <div className="back-glow-2 absolute hidden md:block" />
                    <div className="w-full h-full relative">
                        <h1 className="whitespace-pre-line text-[30px] leading-[36px] pt-[150px] md:text-[60px] md:pt-[250px] md:leading-[60px]">
                            Meet our passionate
                            <br /> team of{' '}
                            <span className="relative">
                                experts
                                <img
                                    src={ExpertsDoodle}
                                    alt="experts doodle"
                                    className="absolute right-0 -bottom-[20px] w-full md:w-[80%]"
                                />
                            </span>
                        </h1>
                        <p className="mt-12 text-[14px] leading-[18px] md:text-[20px] md:leading-[28px] max-w-[920px] font-Inter font-light opacity-80 text-justify">
                            We’re proud to play a part in a{' '}
                            <ExternalLink to="https://faculty.group">group of companies</ExternalLink> creating a
                            monumental impact in the world of Web3. <br className="block md:hidden" />
                            <br className="block md:hidden" />
                            Our team is the fuel that powers the X8C engine, a collective of thought leaders, creatives
                            and process driven marketeers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-screen py-[80px] md:py-[180px] px-6 md:px-5">
                <div className="max-w-[1220px] mx-auto h-full relative">
                    <div className="absolute w-full h-full back-glow-1 z-0 hidden md:block" />
                    <img
                        className="w-[120%] h-full absolute top-[20%] -left-[10%] object-contain max-w-[unset] mix-blend-overlay hidden md:block"
                        src={BackEarchImage}
                        alt="contact background"
                    />
                    <div className="flex justify-center flex-wrap w-full gap-y-[20px] mobile:gap-y-[40px] md:gap-y-[70px] gap-x-[100px] mx-auto relative">
                        {teamMembers.map((member, index) => (
                            <div
                                className={`relative flex items-center mobile:block w-[330px] md:w-[280px]`}
                                key={index}
                            >
                                <div className="overflow-hidden min-w-[160px] mobile:w-[220px] rounded-[20px] mobile:rounded-[32px] relative">
                                    <div className="absolute w-full h-[140px] mobile:h-[180px] top-[40px] bg-[#DDDDDD] rounded-[20px] mobile:rounded-[32px]" />
                                    <ExternalLink to={member.link}>
                                        <img
                                            src={member.image}
                                            alt="team member"
                                            className="w-full h-[160px] mobile:h-[220px] object-cover relative"
                                        />
                                    </ExternalLink>
                                </div>

                                <div className="ml-4">
                                    <ExternalLink
                                        to={member.link}
                                        className="text-[20px] leading-[24px] md:text-[30px] whitespace-pre-line md:leading-[36px] mt-6 w-fit hover:text-pink transition block"
                                    >
                                        {member.name}
                                    </ExternalLink>
                                    <span className="block text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] mt-[10px] w-fit">
                                        {member.position}
                                    </span>
                                    <ExternalLink
                                        to={member.link}
                                        className="text-pink block mobile:hidden mt-6 font-Inter underline"
                                    >
                                        Linkedin
                                    </ExternalLink>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="hidden md:block text-pink text-[24px] mt-[72px] text-center">
                        +80 other amazing creators
                    </p>
                </div>
            </section>

            <section className="hidden md:block w-screen pt-[150px] pb-[100px] px-3 md:px-5">
                <div className="max-w-[1200px] mx-auto h-full relative flex gap-x-[100px]">
                    <div className="">
                        <span className="uppercase text-[22px] opacity-80 font-Inter">Our Mission</span>
                        <h1 className="text-[40px] leading-[48px] w-full mt-6 text-justify">
                            We’re on a mission to make an impact on the global adoption of blockchain through our suite
                            of &nbsp;<span className="text-pink">tailored</span> services, incredible talent and by
                            fuelling exciting <span className="text-pink">Web3</span> projects.
                        </h1>
                    </div>
                    <img src={MascotImage} alt="mascot" className="" />
                </div>
            </section>

            <section className="w-screen px-6 md:px-5 md:pt-[100px] md:pb-[150px]" ref={numbersRef}>
                <div className="max-w-[900px] mx-auto">
                    <div className="mt-12 lg:mt-0 lg:ml-16">
                        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-x-2 gap-y-10 md:gap-x-6">
                            {[0, 1].map((index) => (
                                <NumberAnimation
                                    key={index}
                                    data={numbersInfo[index]}
                                    number={useNumberRef.current ? numbersInfo[index].number : 0}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-1 mobile:grid-cols-2 gap-x-2 gap-y-10 md:gap-x-4 mt-10 md:mt-6">
                            {[2, 3].map((index) => (
                                <NumberAnimation
                                    key={index}
                                    data={numbersInfo[index]}
                                    number={useNumberRef.current ? numbersInfo[index].number : 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <section className="w-screen px-8 md:px-5 bg-gray-300 py-[100px] md:py-[150px] mt-[50px]" id="career">
                <div className="max-w-[1400px] mx-auto flex flex-col-reverse gap-y-[40px] md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-16 items-center">
                    <img
                        src={BackImage}
                        alt="background"
                        className="rounded-[20px] mobile:rounded-[32px] h-[200px] mobile:h-[350px] w-full object-cover"
                    />
                    <div className="">
                        <h2 className="text-[30px] md:text-[44px] lg:text-[64px]">Your career at X8C</h2>
                        <p className="text-[14px] md:text-[18px] lg:text-[20px] font-Inter mt-8 font-light opacity-80 text-justify">
                            We’re proud of the autonomous, agile culture we have created at X8C, meaning your career
                            trajectory and where you can go is in your hands.
                            <br />
                            <br />
                            You’ll find a group of passionate people with an energy that means we get results, while
                            enjoying the journey. Work from anywhere in the world on your own terms.{' '}
                        </p>
                    </div>
                </div>
                <div className="max-w-[800px] mx-auto mt-[100px]" id="career">
                    <h2 className="text-[40px]">
                        Open{' '}
                        <span className="relative">
                            positions
                            <img src={PositionDoodle} alt="positions doodle" className="absolute right-0 w-full" />
                        </span>
                    </h2>
                    <div className="w-full flex-col mt-4 hidden md:flex">
                        {careerData
                            ? careerData.map((item, index) => (
                                  <a
                                      className={`grid grid-cols-9 py-6 ${
                                          index > 0 ? 'border-t-[2px]' : ''
                                      } border-gray-200`}
                                      key={item.title}
                                      href={`/career/${index}`}
                                  >
                                      <div className="col-span-4">{item.title.rendered}</div>
                                      <div className="col-span-2 opacity-40">{item?.acf?.type}</div>
                                      <div className="col-span-2 opacity-40">{item?.acf?.salary}</div>
                                      <div className="col-span-1 flex items-center justify-end cursor-pointer transition hover:opacity-40">
                                          <ArrowRightIcon fill="#ff006c" width={20} height={10} />
                                      </div>
                                  </a>
                              ))
                            : null}
                    </div>
                    <div className="flex w-full flex-col mt-4 md:hidden">
                        {careerData
                            ? careerData.map((item, index) => <CareerItem key={index} item={item} index={index} />)
                            : null}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
