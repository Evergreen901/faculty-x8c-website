import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CaseStudyItem, PrimaryButton, ProcessDesktopItem, ProcessItem } from '../reusable';
import { useWidth } from '../../hooks';
import MarketingStrategyJSON from '../../utils/services/marketing-strategy.json';
import BrandStrategyJSON from '../../utils/services/brand-strategy.json';
import BrandingJSON from '../../utils/services/branding.json';
import UXUIJSON from '../../utils/services/ux-ui.json';
import ContentAnimationJSON from '../../utils/services/content-animation.json';
import ContentWritingJSON from '../../utils/services/content-writing.json';
import WebsiteDevelopmentJSON from '../../utils/services/website-development.json';
import CommunityManagementJSON from '../../utils/services/community-management.json';
import GuerillaMarketingJSON from '../../utils/services/guerilla-marketing.json';
import PRJSON from '../../utils/services/pr.json';
import KOLManagementJSON from '../../utils/services/kol-management.json';
import SocialMediaManagementJSON from '../../utils/services/social-media-management.json';
import PPCJSON from '../../utils/services/ppc.json';
import BrandingImage from '../../assets/image/service/branding.png';
import MarketingStrategyImage from '../../assets/image/service/marketing-strategy.png';
import BrandStrategyImage from '../../assets/image/service/brand-strategy.png';
import UXUIImage from '../../assets/image/service/ux-ui.png';
import ContentAnimationImage from '../../assets/image/service/content-animation.png';
import ContentWritingImage from '../../assets/image/service/content-writing.png';
import WebsiteDevelopmentImage from '../../assets/image/service/website-development.png';
import CommunityManagementImage from '../../assets/image/service/community-management.png';
import GuerillaMarketingImage from '../../assets/image/service/guerilla-marketing.png';
import PRImage from '../../assets/image/service/pr.png';
import KOLManagementImage from '../../assets/image/service/kol-management.png';
import SocialMediaManagementImage from '../../assets/image/service/social-media-management.png';
import PPCImage from '../../assets/image/service/ppc.png';
import DoodleImage from '../../assets/svg/doodles/trusted-by.svg';
import GlobalContext from '../../context/global/GlobalContext';
import { Loading180Ring } from '../../assets/loading';

const Service = ({ route = 'default' }) => {
    const windowWidth = useWidth();
    const { t } = useTranslation();
    const [zoom, setZoom] = useState(0);
    const { serviceToCaseStudy, caseStudyData, caseStudyLoaded } = useContext(GlobalContext);
    const [caseStudies, setCaseStudies] = useState([]);

    const serviceData =
        route === 'marketing-strategy'
            ? MarketingStrategyJSON
            : route === 'brand-strategy'
            ? BrandStrategyJSON
            : route === 'branding'
            ? BrandingJSON
            : route === 'ux-ui'
            ? UXUIJSON
            : route === 'content-animation'
            ? ContentAnimationJSON
            : route === 'content-writing'
            ? ContentWritingJSON
            : route === 'website-development'
            ? WebsiteDevelopmentJSON
            : route === 'community-management'
            ? CommunityManagementJSON
            : route === 'guerilla-marketing'
            ? GuerillaMarketingJSON
            : route === 'pr'
            ? PRJSON
            : route === 'kol-management'
            ? KOLManagementJSON
            : route === 'social-media-management'
            ? SocialMediaManagementJSON
            : route === 'ppc'
            ? PPCJSON
            : null;

    const [backImage] =
        route === 'marketing-strategy'
            ? [MarketingStrategyImage]
            : route === 'brand-strategy'
            ? [BrandStrategyImage]
            : route === 'branding'
            ? [BrandingImage]
            : route === 'ux-ui'
            ? [UXUIImage]
            : route === 'content-animation'
            ? [ContentAnimationImage]
            : route === 'content-writing'
            ? [ContentWritingImage]
            : route === 'website-development'
            ? [WebsiteDevelopmentImage]
            : route === 'community-management'
            ? [CommunityManagementImage]
            : route === 'guerilla-marketing'
            ? [GuerillaMarketingImage]
            : route === 'pr'
            ? [PRImage]
            : route === 'kol-management'
            ? [KOLManagementImage]
            : route === 'social-media-management'
            ? [SocialMediaManagementImage]
            : route === 'ppc'
            ? [PPCImage]
            : [BrandingImage];
    const serviceDescRef = useRef();

    useEffect(() => {
        const timerId = setInterval(() => {
            if (document.documentElement.clientWidth <= 768) {
                setZoom(100);
                return;
            }
            setZoom(
                document.documentElement.scrollTop > document.documentElement.clientHeight
                    ? 100
                    : (document.documentElement.scrollTop * 100) / document.documentElement.clientHeight
            );
        }, 20);

        document.documentElement.scrollTop = 0;

        return () => {
            clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        if (serviceDescRef.current) serviceDescRef.current.innerHTML = serviceData?.introDescription;
        if (serviceData.title && serviceToCaseStudy && caseStudyData && serviceToCaseStudy[serviceData.title]) {
            setCaseStudies(
                serviceToCaseStudy[serviceData.title].map((item) => caseStudyData.find((data) => data.slug === item))
            );
        } else {
            setCaseStudies([]);
        }
    }, [serviceData, serviceToCaseStudy, caseStudyData]);

    return (
        <div className="w-screen min-h-screen relative">
            <section className="w-screen md:h-[600px] pt-[90px] md:pt-[70px] md:px-5">
                <div className="max-w-[1400px] mx-auto h-full relative">
                    <div className="w-full h-[330px] md:h-full overflow-hidden flex justify-center items-center md:rounded-[32px] relative">
                        <img
                            src={windowWidth > 768 ? backImage : backImage}
                            alt="background"
                            className="h-full w-full object-cover object-right transition-all duration-500 ease-linear md:mask-vertical-1"
                            style={{
                                transform: `scale(${1.2 - (zoom / 100) * 0.2})`,
                            }}
                        />
                    </div>
                    <div className="md:absolute md:bottom-16 md:top-[unset] md:left-20 md:pr-0 px-6 mt-8 md:mt-0">
                        <h1 className="text-[36px] leading-[42px] md:text-[64px] md:leading-[64px] whitespace-pre-line">
                            {serviceData.title}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="w-screen px-6 md:px-5 relative z-10">
                <div className="max-w-[930px] mx-auto pb-[30px] md:pt-16 md:pb-16 flex flex-col-reverse md:block">
                    <p
                        className="text-[16px] md:text-[20px] leading-[28px] font-Inter font-light whitespace-pre-line opacity-80 service-detail text-justify"
                        ref={serviceDescRef}
                    ></p>
                    <a href="/contact" className="block mb-12 mt-8 md:mt-16">
                        <PrimaryButton
                            text={t('btn.book.call')}
                            theme="pink"
                            className="w-fit !py-[6px] md:!py-[8px]"
                            hasArrow={windowWidth > 768}
                        />
                    </a>
                </div>
            </section>

            {/* <section className="w-screen px-0 md:px-5 pt-[40px] pb-[40px] md:pt-[120px] pb-[120px]">
                <TrustedBy oneRow={true} className="!max-w-[1120px] mx-auto" />
            </section> */}

            {route !== 'content-animation' ? (
                <section className="w-screen px-8 md:px-5 pt-[40px] pb-[150px] overflow-hidden relative">
                    <div className="hidden md:block absolute w-full h-full back-glow z-0" />
                    <div className="max-w-[1200px] mx-auto relative z-[10]">
                        <h1 className="text-[36px] leading-[42px] md:text-[64px] md:leading-[80px] w-fit mx-auto relative whitespace-pre-line text-center">
                            {serviceData.processTitle}
                            <img
                                src={DoodleImage}
                                alt="doodle"
                                className="absolute right-0 md:-bottom-[20px] w-[140px] -bottom-[20px] md:w-auto"
                            />
                        </h1>
                        <div className="pt-8 block md:hidden">
                            {serviceData.processList &&
                                serviceData.processList.map((item, index) => <ProcessItem key={index} item={item} />)}
                        </div>
                        <div className="pt-8 hidden md:block">
                            {serviceData.processList &&
                                serviceData.processList.map((item, index) => (
                                    <ProcessDesktopItem key={index} item={item} />
                                ))}
                        </div>
                    </div>
                </section>
            ) : null}

            {/* <Testimonials /> */}

            <section
                className={`w-screen ${
                    caseStudies?.length > 0 ? 'md:pt-[50px] md:pb-[200px] pb-[50px]' : ''
                } px-3 md:px-5`}
            >
                <div className="max-w-[1180px] mx-auto h-full relative">
                    {!caseStudyLoaded ? (
                        <div className="w-full h-60 flex items-center justify-center">
                            <Loading180Ring width={48} height={48} />
                        </div>
                    ) : caseStudies?.length > 0 ? (
                        caseStudies.map((item, index) => <CaseStudyItem key={index} index={index} data={item} />)
                    ) : null}
                </div>
            </section>
        </div>
    );
};

export default Service;
