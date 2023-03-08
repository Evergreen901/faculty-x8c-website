import { Widget } from 'react-typeform-embed';
import BackImage from '../../assets/image/contact-back.png';
import useWidth from '../../hooks/useWidth';

const Contact = () => {
    const windowWidth = useWidth();
    return (
        <div className="w-screen min-h-screen relative">
            <section className="w-screen pt-[60px] md:pt-[70px] pb-[50px] md:pb-0 px-3 md:px-5 relative">
                <div className="max-w-[1000px] mx-auto h-full relative">
                    <div className="back-glow-4 absolute" />
                    <img
                        className="w-[120%] h-full absolute top-[20%] -left-[10%] object-contain max-w-[unset] mix-blend-overlay"
                        src={BackImage}
                        alt="contact background"
                    />
                    <div className="w-full h-full relative flex flex-col">
                        {/* <h1 className="text-[44px] leading-[54px] pt-[100px] relative w-fit"> */}
                        {/* {t('contact.title')} */}
                        {/* <img
                                src={DoodleImage}
                                alt="doodle arrow"
                                className="absolute -right-[200px] bottom-[0px]"
                            /> */}
                        {/* </h1> */}
                        <Widget
                            id="sU8Kuofi"
                            style={{
                                width: '100%',
                                height: windowWidth > 768 ? '800px' : 'calc(100vh - 200px)',
                            }}
                            opacity={0}
                        />

                        {/* <h2 className="text-[40px] mt-[40px]">Email works, too</h2>
                        <ExternalLink to="mailto://contact@x8c.io" className="text-[20px] font-Inter mt-4">
                            contact@x8c.io
                        </ExternalLink> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
