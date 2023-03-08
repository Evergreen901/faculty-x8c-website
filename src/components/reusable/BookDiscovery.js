import PrimaryButton from './PrimaryButton';
import ArrowDoodle from '../../assets/svg/doodles/arrow-circle.svg';
import BackImage from '../../assets/image/footer.png';

const BookDiscovery = ({ className }) => {
    return (
        <section
            className={`w-screen pb-[100px] pt-[50px] md:pb-0 md:pt-[100px] bg-[#E8E8E8] flex flex-row items-center justify-center ${className} text-black gap-x-[50px]`}
        >
            <div className="relative">
                <p className="text-[44px] text-center relative">
                    Let's get started
                    <img
                        src={ArrowDoodle}
                        alt="arrow doodle"
                        className="absolute right-0 md:right-[20px] top-[190%] w-[150px] md:w-[120px] z-[10]"
                    />
                </p>
                <a href="/contact">
                    <PrimaryButton
                        text="CONTACT US"
                        theme="dark"
                        className="mt-6 px-[60px] relative z-0 mx-auto md:mx-0"
                        hasArrow={false}
                    />
                </a>
            </div>
            <img src={BackImage} alt="background" className="w-[200px] hidden md:block" />
        </section>
    );
};

export default BookDiscovery;
