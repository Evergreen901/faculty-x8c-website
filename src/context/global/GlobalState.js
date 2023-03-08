import React, { useReducer } from 'react';
import { fetchWrapper } from '../../helpers/fetch-wrapper';
import GlobalContext from './GlobalContext';
import GlobalReducer from './GlobalReducer';
import {
    SET_CAREER_DATA,
    SET_CAREER_LOADED,
    SET_CASE_STUDY_DATA,
    SET_CASE_STUDY_LOADED,
    SET_SERVICE_DATA,
} from '../types';
import { services } from '../../utils/constants';

const GlobalState = ({ children }) => {
    const initialState = {
        caseStudyData: [],
        careerData: [],
        serviceData: {},
        caseStudyLoaded: false,
    };

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const { caseStudyLoaded, caseStudyData, serviceData, careerData, careerLoaded } = state;

    const setCareerData = async () => {
        try {
            const res = await fetchWrapper.get('/wp-json/wp/v2/career?_embed=true&tags=24');
            dispatch({
                type: SET_CAREER_DATA,
                payload: res,
            });
            setCareerLoaded(true);
        } catch (e) {
            console.log(e);
            setCareerLoaded(true);
        }
    };

    const setCaseStudyData = async () => {
        try {
            const res = await fetchWrapper.get('/wp-json/wp/v2/x8c_case_studies?_embed=true');
            const temp = {};

            res.forEach((item) => {
                const service = services.find((service) => service.label === item.acf.service);
                if (temp[service.label]) temp[service.label].push(item.slug);
                else temp[service.label] = [item.slug];
            });

            setServiceData(temp);

            dispatch({
                type: SET_CASE_STUDY_DATA,
                payload: res
                    .map((item) => {
                        const content = item.content.rendered;
                        // parse first <p> tag from content
                        const regex1 = /<p>(.*?)<\/p>/;
                        const heading = regex1.exec(content);

                        // parse the first <p> tag following <h2>The Challenges</h2> The Challenges not case sensitive
                        let regex2 = /<h2[^>]*>the challenges<\/h2>\s*<p>(.*?)<\/p>/i;
                        let challenges = regex2.exec(content);
                        if (!challenges) {
                            regex2 = /<h2[^>]*>the challenge<\/h2>\s*<p>(.*?)<\/p>/i;
                            challenges = regex2.exec(content);
                        }

                        const regex3 = /<h2[^>]*>the solution<\/h2>\s*<p>(.*?)<\/p>/i;
                        const solution = regex3.exec(content);

                        // parse all <td> elements from content
                        const regex4 = /<td>(.*?)<\/td>/g;
                        // gather all <td> elements into an array
                        const tableArray = [...content.matchAll(regex4)];

                        // tableArray odd elements are value, even elements are label, make json object array
                        const tableData = tableArray.reduce((acc, curr, index) => {
                            if (index < tableArray.length / 2) {
                                acc.push({
                                    value: curr[1],
                                    label: tableArray[index + tableArray.length / 2][1],
                                });
                            }
                            return acc;
                        }, []);

                        const lastContent = content.split('</figure>');

                        return {
                            slug: item.slug,
                            service: item.acf.service,
                            title: item.title.rendered,
                            subtitle: item.excerpt.rendered,
                            image: item._embedded['wp:featuredmedia'][0].source_url,
                            backgroundColor: item.acf.background_color,
                            backgroundColor2: item.acf.background_color_2,
                            heading: heading?.length ? heading[1] : '',
                            challenges: challenges?.length ? challenges[1] : '',
                            solution: solution?.length ? solution[1] : '',
                            content,
                            results: tableData,
                            lastContent: lastContent[lastContent.length - 1],
                        };
                    })
                    .reverse(),
            });
            setCaseStudyLoaded(true);
        } catch (e) {
            setCaseStudyLoaded(true);
        }
    };

    const setCaseStudyLoaded = (value) => {
        dispatch({
            type: SET_CASE_STUDY_LOADED,
            payload: value,
        });
    };

    const setCareerLoaded = (value) => {
        dispatch({
            type: SET_CAREER_LOADED,
            payload: value,
        });
    };

    const setServiceData = (value) => {
        dispatch({
            type: SET_SERVICE_DATA,
            payload: value,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                caseStudyLoaded,
                caseStudyData,
                serviceToCaseStudy: serviceData,
                careerData,
                careerLoaded,
                setCaseStudyLoaded,
                setCaseStudyData,
                setServiceData,
                setCareerData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
