import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import { trustedCompanies } from '../../utils/constants';

const TrustedBy = ({ className, oneRow = false }) => {
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);
    const [list3, setList3] = useState([]);

    useEffect(() => {
        setList1([...trustedCompanies.slice(0, 10)]);
        setList2([...trustedCompanies.slice(10, 20)]);
        setList3([...trustedCompanies.slice(20, 28)]);
    }, []);

    return (
        <div className={`max-w-[800px] flex flex-col ${className}`}>
            <Marquee gradientColor={[0, 0, 0]} speed={30}>
                <div className="flex items-center opacity-40">
                    {list1.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            alt="company"
                            className="mx-6 h-[50px] w-[120px] md:mx-8 md:h-[60px] md:w-[160px] object-contain"
                        />
                    ))}
                </div>
            </Marquee>
            {!oneRow && (
                <>
                    <Marquee gradientColor={[0, 0, 0]} className="mt-4">
                        <div className="flex items-center opacity-40">
                            {list3.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt="company"
                                    className="mx-6 h-[50px] w-[120px] md:mx-8 md:h-[60px] md:w-[160px] object-contain"
                                />
                            ))}
                        </div>
                    </Marquee>
                    <Marquee gradientColor={[0, 0, 0]} className="mt-4" speed={40}>
                        <div className="flex items-center opacity-40">
                            {list2.map((item, index) => (
                                <img
                                    key={index}
                                    src={item}
                                    alt="company"
                                    className="mx-6 h-[50px] w-[120px] md:mx-8 md:h-[60px] md:w-[160px] object-contain"
                                />
                            ))}
                        </div>
                    </Marquee>
                </>
            )}
        </div>
    );
};

export default TrustedBy;
