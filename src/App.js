import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Loading180Ring } from './assets/loading';
import GlobalState from './context/global/GlobalState';
import './App.scss';
import './global.scss';
import { Layout } from './components/layout';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const OurWork = lazy(() => import('./components/pages/OurWork'));
const Service = lazy(() => import('./components/pages/Service'));
const CaseStudy = lazy(() => import('./components/pages/CaseStudy'));
const Contact = lazy(() => import('./components/pages/Contact'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));
const CareerDetail = lazy(() => import('./components/pages/CareerDetail'));

function App() {
    return (
        <Router>
            <GlobalState>
                <Suspense
                    fallback={
                        <div className="v-screen h-screen flex justify-center items-center">
                            <Loading180Ring width={48} height={48} fill="#ff006c" />
                        </div>
                    }
                >
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/our-work" element={<OurWork />} />
                            <Route path="/case-study/:slug" element={<CaseStudy />} />
                            <Route path="/service" element={<Service />} />
                            <Route
                                path="/service/marketing-strategy"
                                element={<Service route="marketing-strategy" />}
                            />
                            <Route path="/service/brand-strategy" element={<Service route="brand-strategy" />} />
                            <Route path="/service/branding" element={<Service route="branding" />} />
                            <Route path="/service/ux-ui" element={<Service route="ux-ui" />} />
                            <Route path="/service/content-animation" element={<Service route="content-animation" />} />
                            <Route path="/service/content-writing" element={<Service route="content-writing" />} />
                            <Route
                                path="/service/website-development"
                                element={<Service route="website-development" />}
                            />
                            <Route
                                path="/service/community-management"
                                element={<Service route="community-management" />}
                            />
                            <Route
                                path="/service/guerilla-marketing"
                                element={<Service route="guerilla-marketing" />}
                            />
                            <Route path="/service/pr" element={<Service route="pr" />} />
                            <Route path="/service/kol-management" element={<Service route="kol-management" />} />
                            <Route
                                path="/service/social-media-management"
                                element={<Service route="social-media-management" />}
                            />
                            <Route path="/service/ppc" element={<Service route="ppc" />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/career/:id" element={<CareerDetail />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </Layout>
                </Suspense>
            </GlobalState>
        </Router>
    );
}

export default App;
