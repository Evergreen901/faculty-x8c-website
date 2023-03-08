import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CaseStudyItem, PrimaryButton, TrustedBy } from '../reusable';
import TrustedByDoodle from '../../assets/svg/doodles/trusted-by.svg';
import DisruptDoodle from '../../assets/svg/doodles/position.svg';
import GlobalContext from '../../context/global/GlobalContext';
import { Loading180Ring } from '../../assets/loading';

const OurWork = () => {
    const { t } = useTranslation();
    const { caseStudyLoaded, caseStudyData } = useContext(GlobalContext);

    return (
        <div className="w-screen min-h-screen relative">
            <section className="w-screen pt-[90px] md:pt-[70px] px-6 md:px-5">
                <div className="max-w-[1000px] mx-auto h-full relative">
                    <div className="back-glow-2 absolute hidden md:block" />
                    <div className="w-full h-full relative">
                        <h1 className="whitespace-pre-line text-[34px] leading-[40px] pt-[70px] md:text-[80px] md:pt-[250px] md:leading-[80px]">
                            We help our clients <br className="block mobile:hidden md:block" />
                            <div className="relative w-fit inline">
                                <span className="relative z-10">disrupt</span>
                                <img src={DisruptDoodle} alt="disrupt doodle" className="absolute right-0 w-full z-0" />
                            </div>{' '}
                            markets
                        </h1>
                        <a href="/contact">
                            <PrimaryButton
                                text={t("LET'S BUILD")}
                                theme="pink"
                                className="w-fit mt-[40px] md:mt-[60px] !py-[6px] md:!py-[12px]"
                            />
                        </a>
                    </div>
                </div>
            </section>

            <section className="w-screen md:pt-[150px] px-3 md:px-5">
                <div className="max-w-[1180px] mx-auto h-full relative">
                    {!caseStudyLoaded ? (
                        <div className="w-full h-60 flex items-center justify-center">
                            <Loading180Ring width={48} height={48} />
                        </div>
                    ) : (
                        caseStudyData.map((item, index) => <CaseStudyItem key={index} index={index} data={item} />)
                    )}
                </div>
            </section>

            <section className="w-screen px-8 md:px-5">
                <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row md:items-center pt-[75px] pb-[75px] md:pt-[230px] md:pb-[200px]">
                    <h1 className="text-[40px] leading-[48px] basis-full flex-grow flex-shrink whitespace-pre-line relative text-center mobile:text-left">
                        Trusted by
                        <br />
                        <span className="relative">
                            +160 companies
                            <img
                                src={TrustedByDoodle}
                                alt="trusted by doodle"
                                className="absolute -bottom-[30px] right-0 w-full mobile:w-[80%]"
                            />
                        </span>
                    </h1>
                    <TrustedBy className="-mx-12 mt-8 md:mx-0 lg:mt-0" />
                </div>
            </section>
        </div>
    );
};

export default OurWork;
