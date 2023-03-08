import React, { useContext, useEffect } from 'react';
import { Footer, Header } from './';
import GlobalContext from '../../context/global/GlobalContext';

const Layout = ({ children }) => {
    const { setCaseStudyData, setCareerData } = useContext(GlobalContext);

    useEffect(() => {
        setCaseStudyData();
        setCareerData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="w-screen min-h-screen relative">
            <Header />
            {children}
            {window?.location?.pathname === '/contact' ? null : <Footer />}
        </div>
    );
};

export default Layout;
