import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWidth } from '../../hooks';
import Logo from '../../assets/logo/x8c.svg';
import { Cross, Direction, Hamburger, Minus, Plus } from '../../assets/icons';
import { navigation } from '../../utils/constants';

const SPMenu = ({ isOpen, changeStatus }) => {
    const windowWidth = useWidth();
    const [subOpened, setSubOpen] = useState(false);
    const [openedIndex, setOpenedIndex] = useState(-1);

    useEffect(() => {
        if (!isOpen) return;

        if (windowWidth > 768) closeSPMenu();
        // eslint-disable-next-line
    }, [windowWidth, isOpen]);

    const closeSPMenu = () => {
        setOpenedIndex(-1);
        setSubOpen(false);
        changeStatus();
        document.documentElement.scrollTop = 0;
    };

    return (
        <div
            className={`left-0 ${
                isOpen ? 'top-0' : 'top-[-100vh]'
            } transition-all duration-[.5s] fixed w-screen h-screen hide-scrollbar overflow-y-scroll bg-black p-[28px] flex flex-col z-[10]`}
        >
            <div className={`w-full flex justify-end`}>
                <Cross className="cursor-pointer" onClick={(e) => closeSPMenu()} />
            </div>
            <div className="flex flex-col gap-y-[56px] pt-16 w-max ml-auto items-end">
                {navigation.map((item) => (
                    <div key={item.label} className="flex flex-col items-end">
                        <div
                            className="cursor-pointer flex items-center menu-over"
                            onClick={(e) => {
                                if (!item?.children) return;
                                setSubOpen((prev) => !prev);
                                setOpenedIndex(-1);
                            }}
                        >
                            <Link
                                to={item.to}
                                onClick={() => {
                                    if (!item.children) closeSPMenu();
                                }}
                            >
                                <span className={`text-[30px] ${item?.children && subOpened ? 'text-[#FF006C]' : ''}`}>
                                    {item.label}
                                </span>
                            </Link>
                            {item?.children && (
                                <>
                                    <Direction
                                        className={`ml-2 ${subOpened ? 'rotate-180' : 'rotate-0'}`}
                                        width={14}
                                        height={14}
                                        stroke={4}
                                        fill={item?.children && subOpened ? '#FF006C' : 'white'}
                                    />
                                </>
                            )}
                        </div>
                        {item?.children && (
                            <div
                                className={`flex flex-col transition-all overflow-hidden duration-[.5s] ${
                                    subOpened ? `opacity-1` : 'opacity-0'
                                }`}
                                style={{
                                    maxHeight: subOpened ? 400 : 0,
                                }}
                            >
                                {item.children.map((children, index) => (
                                    <div className="flex flex-col flex-1 mt-4 ml-8" key={children.label}>
                                        <div
                                            className="flex justify-end mb-4 mr-[32px] items-center"
                                            onClick={(e) => setOpenedIndex((prev) => (prev === index ? -1 : index))}
                                        >
                                            <span
                                                className={`text-[20px] cursor-pointer mr-4 ${
                                                    index === openedIndex ? '' : 'text-gray-400'
                                                }`}
                                            >
                                                {children.label}
                                            </span>
                                            <div className="w-[24px] h-[24px] flex items-center justify-center">
                                                {index === openedIndex ? (
                                                    <Minus width={16} height={16} className="cursor-pointer" />
                                                ) : (
                                                    <Plus width={24} height={24} className="cursor-pointer" />
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className={`flex flex-col transition-all overflow-hidden duration-[.5s] mb-2 ${
                                                index === openedIndex ? `opacity-1` : 'opacity-0'
                                            }`}
                                            style={{
                                                maxHeight: index === openedIndex ? children.submenu.length * 35 : 0,
                                            }}
                                        >
                                            {children.submenu.map((sub) => (
                                                <span
                                                    className="mt-2 ml-2 cursor-pointer hover:text-[#FF006C] transition text-[16px] text-right mr-[64px]"
                                                    key={sub.label}
                                                >
                                                    <Link to={sub.to} onClick={closeSPMenu}>
                                                        {sub.label}
                                                    </Link>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* <div className="flex flex-col gap-6 pb-6 mt-auto -mx-8 mobile:mx-0">
                <div className="flex justify-center mt-16 gap-x-8">
                    <ExternalLink to="#" className="cursor-pointer">
                        <Telegram />
                    </ExternalLink>
                    <ExternalLink to="#" className="cursor-pointer">
                        <Twitter />
                    </ExternalLink>
                    <ExternalLink to="#" className="cursor-pointer">
                        <Discord />
                    </ExternalLink>
                    <ExternalLink to="#" className="cursor-pointer">
                        <Linkedin />
                    </ExternalLink>
                </div>
                <div className="flex justify-center mt-8 gap-x-8">
                    <ExternalLink to="policy" className="cursor-pointer">
                        <span className="text-gray-400">{t('header.privacy.policy')}</span>
                    </ExternalLink>
                    <ExternalLink to="terms" className="cursor-pointer">
                        <span className="text-gray-400">{t('header.terms.conditions')}</span>
                    </ExternalLink>
                </div>
                <div className="flex justify-center text-gray-400">
                    A part of&nbsp;
                    <ExternalLink className="underline" to="https://faculty.group">
                        Faculty Group
                    </ExternalLink>
                </div>
            </div> */}
        </div>
    );
};

const Header = () => {
    const [isSPOpen, setOpen] = useState(false);
    let location = useLocation();
    const [showGlow, setShowGlow] = useState(location?.pathname === '/');

    const closeSPMenu = () => {
        setOpen(false);
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            setShowGlow(document.documentElement.scrollTop === 0 && location?.pathname === '/');
        }, 100);

        return () => clearInterval(timerId);
    }, [location]);

    return (
        <div
            className={`fixed md:fixed z-[100] w-screen px-8 md:px-5 menu-wrapper py-4 md:py-0 top-0 transition-all duration-500 bg-black h-[60px] md:h-[70px] pb-[6px]`}
        >
            <div
                className={`block md:hidden fixed w-[200%] h-[400px] bg-white opacity-30 -top-[200px] -left-[50%] header-glow z-0 pointer-events-none ${
                    showGlow ? 'opacity-40' : '!opacity-0'
                } transition`}
            />
            <div className={`max-w-[1400px] h-full mx-auto flex justify-between items-center relative z-[1]`}>
                <Link to="/" className="unselectable">
                    <img src={Logo} alt="logo" className={`h-[24px] md:h-[40px]`} />
                </Link>
                <div className="hidden md:flex items-center">
                    {navigation.map((item) => (
                        <div
                            className={`text-[20px] ml-10 cursor-pointer flex items-center menu-over ${
                                location?.pathname === item.to && item.label !== 'Services' ? 'text-pink' : ''
                            }`}
                            key={item.label}
                        >
                            <Link
                                to={item.to}
                                className={
                                    item.to === '/contact'
                                        ? 'rounded-full bg-pink text-black pt-1 pb-[5px] px-6 not-hover border-[1px] border-pink'
                                        : !item.to
                                        ? 'not-hover'
                                        : ''
                                }
                                onClick={() => {
                                    document.documentElement.scrollTop = 0;
                                }}
                            >
                                <span>{item.label}</span>
                            </Link>
                            {item?.children && (
                                <>
                                    <Direction className="ml-2 mt-1 rotate-0" width={13} height={7} fill={'white'} />
                                    <div
                                        className={`absolute right-[-420px] w-[840px] top-[30px] bg-black sub-menu-wrapper rounded-2xl backdrop-filter backdrop-blur-[10px]`}
                                    >
                                        <div className="flex py-12 px-12">
                                            {item.children.map((children) => (
                                                <div className="flex flex-col flex-1" key={children.label}>
                                                    <span className="mb-4 text-gray-400">{children.label}</span>
                                                    {children.submenu.map((sub) => (
                                                        <span
                                                            className={`${
                                                                location?.pathname === sub.to
                                                                    ? 'text-pink'
                                                                    : 'text-white'
                                                            } mt-2 hover:text-[#FF006C] transition`}
                                                            key={sub.label}
                                                        >
                                                            <Link
                                                                to={sub.to}
                                                                onClick={() => {
                                                                    document.documentElement.scrollTop = 0;
                                                                }}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </span>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="md:hidden">
                    <Hamburger width={20} height={20} className="cursor-pointer" onClick={(e) => setOpen(true)} />
                </div>
            </div>
            <SPMenu isOpen={isSPOpen} changeStatus={closeSPMenu} />
        </div>
    );
};

export default Header;
