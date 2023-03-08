import { useParams } from 'react-router-dom';
import { PrimaryButton } from '../reusable';
import DoodleArrow from '../../assets/svg/doodles/arrow-right-black.svg';
import GlobalContext from '../../context/global/GlobalContext';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { Loading180Ring } from '../../assets/loading';

const CaseStudy = () => {
    const titleRef = useRef();
    const headingRef = useRef();
    const challengesRef = useRef();
    const solutionRef = useRef();
    const customRef = useRef();

    const { slug } = useParams();
    const { loading, caseStudyData } = useContext(GlobalContext);

    const data = useMemo(() => {
        const result = caseStudyData.filter((item) => item.slug === slug);
        if (result.length > 0) return result[0];
    }, [caseStudyData, slug]);

    useEffect(() => {
        if (!data) return;
        titleRef.current.innerHTML = data.title;
        headingRef.current.innerHTML = data.heading;
        challengesRef.current.innerHTML = data.challenges
            .split('<br>')
            .map((item) => `<span>${item}</span>`)
            .join('');
        solutionRef.current.innerHTML = data.solution;
        customRef.current.innerHTML = data.lastContent;
    }, [data]);

    return (
        <div className="w-screen min-h-screen relative">
            {loading ? (
                <div className="w-full h-screen flex items-center justify-center">
                    <Loading180Ring width={48} height={48} />
                </div>
            ) : (
                <>
                    <section className="w-screen h-[470px] pt-[70px] hidden md:block">
                        <img
                            src={data?.image}
                            alt="background"
                            className="relative z-10 object-cover object-right w-full h-full max-w-[unset]"
                        />
                    </section>

                    <section
                        className="w-screen px-6 md:px-5 pt-[140px] pb-[40px] md:pt-16 md:pb-32"
                        style={{
                            backgroundColor: data?.backgroundColor,
                        }}
                    >
                        <div className="max-w-[1400px] mx-auto text-black">
                            <span className="font-Inter text-[14px] md:text-[20px]">{data?.service}</span>
                            <h1
                                className="text-[28px] leading-[34px] md:text-[80px] md:leading-[80px] mt-5"
                                ref={titleRef}
                            >
                                {' '}
                            </h1>
                            <p
                                className="hidden md:block mt-[60px] text-[20px] leading-[32px] font-Inter text-justify"
                                ref={headingRef}
                            ></p>
                        </div>
                    </section>

                    <section className="w-screen h-[220px] block md:hidden">
                        <img
                            src={data?.image}
                            alt="background"
                            className="relative z-10 object-cover object-right w-full h-full max-w-[unset]"
                        />
                    </section>

                    <section
                        className="w-screen px-6 md:px-5 py-[60px] md:pt-40 md:pb-[100px] text-black"
                        style={{
                            backgroundColor: data?.backgroundColor2,
                        }}
                    >
                        <div className="max-w-[1400px] mx-auto">
                            <div className="w-full grid md:grid-cols-2 gap-x-[100px]">
                                <div className="">
                                    <h2 className="text-[20px] md:text-[64px] w-fit relative">
                                        The Challenges
                                        <img
                                            src={DoodleArrow}
                                            alt="doodle svg"
                                            className="absolute hidden md:block bottom-[100%] left-[100%]"
                                        />
                                    </h2>
                                    <p
                                        className="font-Inter text-[14px] md:text-[20px] mt-3 whitespace-pre-line challenge-paragraph"
                                        ref={challengesRef}
                                    ></p>
                                </div>
                                <div className="mt-[40px] md:mt-0">
                                    <h2 className="text-[20px] md:text-[64px]">The Solution</h2>
                                    <p
                                        className="font-Inter text-[14px] md:text-[20px] mt-3 text-justify"
                                        ref={solutionRef}
                                    ></p>
                                </div>
                            </div>
                            <h2 className="text-[20px] md:text-[64px] mt-[40px] md:mt-[120px]">Results</h2>
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-5 mt-4">
                                {data?.results
                                    ? data.results.map((item, index) => (
                                          <div
                                              key={index}
                                              className="flex flex-col justify-center items-center relative bg-[#0000001A] rounded-[20px] md:rounded-[32px] px-6 py-4 md:py-6 md:px-8"
                                          >
                                              <span className="text-[20px] md:text-[40px] md:leading-[40px] text-center">
                                                  {item.value}
                                              </span>

                                              <span className="text-[14px] md:text-[20px] md:leading-[20px] text-center mt-4">
                                                  {item.label}
                                              </span>
                                          </div>
                                      ))
                                    : null}
                            </div>
                        </div>

                        <div className="max-w-[950px] mx-auto pt-[50px] pb-[50px] md:pb-[150px]">
                            <div className="custom-area" ref={customRef}></div>
                            {/* <h2 className="text-[64px] mt-32">Conclusion</h2>
                            <p className="text-[20px] leading-[32px] font-Inter mt-4">{caseStudies[id].conclusion}</p> */}
                            <a href="/our-work">
                                <PrimaryButton
                                    text="SEE ALL PROJECTS"
                                    theme="light"
                                    className="text-[14px] md:text-[20px] !py-2 md:!py-4 mt-16 mx-auto md:float-right"
                                />
                            </a>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default CaseStudy;
