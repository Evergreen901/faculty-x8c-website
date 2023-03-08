import React, { useContext } from 'react';
import { Widget } from 'react-typeform-embed';
import { Link, useParams } from 'react-router-dom';
import { ContentWrapper, ExternalLink, PrimaryButton } from '../reusable';
import { Loading180Ring } from '../../assets/loading';
import GlobalContext from '../../context/global/GlobalContext';
import { ArrowRightIcon } from '../../assets/icons';
import { useWidth } from '../../hooks';

const CareerDetail = () => {
    const { careerData, careerLoaded } = useContext(GlobalContext);
    const { id } = useParams();
    const careerIndex = Number(id.replace(':', ''));
    const windowWidth = useWidth();

    return (
        <div className="w-screen">
            <div className="w-full px-6 pt-[150px] relative pb-[150px]">
                <div className="blog-detail-container font-Inter">
                    <div className="relative z-30 w-full">
                        {/* first section */}

                        {!careerLoaded ? (
                            <div className="w-full h-[500px] flex items-center justify-center">
                                <Loading180Ring width={48} height={48} />
                            </div>
                        ) : (
                            <div className="max-w-[750px] mx-auto">
                                <Link to="/about" className="flex items-center">
                                    <ArrowRightIcon
                                        width={windowWidth > 768 ? 24 : 18}
                                        className="mr-2 rotate-[180deg]"
                                    />
                                    Back to jobs
                                </Link>

                                <ContentWrapper
                                    className="detail pb-8"
                                    description={careerData[careerIndex]?.content.rendered}
                                />
                                {careerData[careerIndex].acf.application_type === 'external' ? (
                                    <ExternalLink to={careerData[careerIndex].acf.application_site}>
                                        <PrimaryButton text="Apply Now" className="w-60 mt-8" />
                                    </ExternalLink>
                                ) : (
                                    <div className="mx-auto w-full h-full flex flex-col justify-center mt-[0px]">
                                        <Widget
                                            id="a1bfHYMj"
                                            style={{
                                                width: '100%',
                                                height: '700px',
                                            }}
                                            opacity={0}
                                            hidden={{
                                                from_website: window.location.href,
                                                job_posting: careerData[careerIndex].title.rendered,
                                                company: 'X8C',
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDetail;
