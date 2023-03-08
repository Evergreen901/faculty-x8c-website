import { useTranslation } from 'react-i18next';
import { PrimaryButton, ExternalLink } from '../reusable';
import { Linkedin, Twitter } from '../../assets/icons';
import ArrowDoodle from '../../assets/svg/doodles/arrow-circle.svg';
import BackImage from '../../assets/image/footer.png';

const Footer = () => {
    const { t } = useTranslation();
    const isContact = window?.location?.pathname === '/contact';

    return (
        <footer
            className={`w-screen px-3 md:px-5 py-[60px] ${
                isContact ? '' : 'bg-gradient-to-b from-[#ff006c80] to-black'
            }`}
        >
            {!isContact ? (
                <div className={`w-full flex flex-row items-center justify-center gap-x-[50px]`}>
                    <div className="relative">
                        <p className="text-[30px] md:text-[44px] text-center relative">Let's get started.</p>
                        <a href="/contact" className="">
                            <div className="flex justify-center relative w-fit mx-auto">
                                <PrimaryButton
                                    text="CONTACT US"
                                    theme="dark"
                                    className="mt-6 !px-[60px] md:px-[60px] relative z-0"
                                    hasArrow={false}
                                />
                                <img
                                    src={ArrowDoodle}
                                    alt="arrow doodle"
                                    className="absolute -right-[30px] -bottom-[40px] w-[100px] md:w-[120px] md:-bottom-[50px] z-[10]"
                                />
                            </div>
                        </a>
                    </div>
                    <img src={BackImage} alt="background" className="w-[200px] hidden md:block mask-vertical" />
                </div>
            ) : null}
            <div className={`max-w-[1400px] mx-auto ${isContact ? '' : 'mt-20'} text-pink`}>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="flex items-center gap-y-[60px] flex-col mb-[60px] mt-[100px] md:mb-0 md:flex-row gap-x-12 font-Inter md:mt-0 font-semibold">
                        <p className="opacity-80 transition hover:opacity-100">
                            Proud member of&nbsp;
                            <ExternalLink
                                className="underline md:hover:text-white transition"
                                to="https://faculty.group"
                            >
                                Faculty Group
                            </ExternalLink>
                        </p>
                        <div className="flex flex-row gap-x-8">
                            <a
                                href="/privacy-policy"
                                className="cursor-pointer underline md:hover:text-white transition"
                            >
                                <span className="opacity-80">{t('header.privacy.policy')}</span>
                            </a>
                            {/* <ExternalLink to="terms" className="cursor-pointer underline">
                                <span className="opacity-80 transition hover:opacity-100">
                                    {t('header.terms.conditions')}
                                </span>
                            </ExternalLink> */}
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-x-16 justify-center items-center md:social-links">
                        <div className="flex items-center gap-x-12 mt-[50px] md:mt-0">
                            <ExternalLink to="https://twitter.com/X8C_Official" className="cursor-pointer">
                                <Twitter fill="#ff006c" width={24} height={24} />
                            </ExternalLink>
                            <ExternalLink to="http://www.linkedin.com/company/x8c/" className="cursor-pointer">
                                <Linkedin fill="#ff006c" width={24} height={24} />
                            </ExternalLink>
                        </div>
                        {/* <ExternalLink to="mailto://contact@x8c.io" className=""> */}
                        <span className="text-[20px]">contact@x8c.io</span>
                        {/* </ExternalLink> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
