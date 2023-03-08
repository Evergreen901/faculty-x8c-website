import {
    SET_CASE_STUDY_DATA,
    SET_CASE_STUDY_LOADED,
    SET_SERVICE_DATA,
    SET_CAREER_DATA,
    SET_CAREER_LOADED,
} from '../types';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CASE_STUDY_LOADED:
            return {
                ...state,
                caseStudyLoaded: action.payload,
            };
        case SET_CAREER_LOADED:
            return {
                ...state,
                careerLoaded: action.payload,
            };
        case SET_CASE_STUDY_DATA:
            return {
                ...state,
                caseStudyData: action.payload,
            };
        case SET_SERVICE_DATA:
            return {
                ...state,
                serviceData: action.payload,
            };
        case SET_CAREER_DATA:
            return {
                ...state,
                careerData: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default reducer;
