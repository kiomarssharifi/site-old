import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import {faGraduationCap, faEnvelope, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import AllProjects from "../components/projects/allProjects";
import myArticles from "../data/articles";
import Article from "../components/articles/article";

const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "home");

    return (
        <React.Fragment>
            <Helmet>
                <title>{INFO.main.title}</title>
                <meta name="description" content={currentSEO.description}/>
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active=""/>
                <div className="content-wrapper">
                    <div className="homepage-logo-container">
                        {/*<div style={logoStyle}>*/}
                        {/*	<Logo width={logoSize} link={false} />*/}
                        {/*</div>*/}
                    </div>

                    <div className="homepage-container" id="about">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title" style={{fontSize: "35px"}}>
                                    Wellcome!
                                </div>

                                <div className="subtitle homepage-subtitle">
                                    I'm <b>Kiomars Sharifi</b>, a recent <b>M.Sc.</b> graduate in <b>Biomedical Engineering</b> 
                                    from <b>Sharif University</b>, specializing in <b>neuroscience</b> and <b>AI</b>. 
                                    <br/><br/>
                                    My current research focuses on exploring how the brain processes <b>visual information</b> 
                                    and recognizes objects of <b>value</b> in our environment.
                                    <br/><br/>
                                    My goal is to create technologies that improve the lives of individuals with neurological 
                                    disabilities, using <b>brain-computer interfaces</b> and <b>neuroprosthetics</b>. 
                                    <br/><br/>
                                    Join me in exploring the intersection of technology and the human mind.
                                </div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="homepage-image-container">
                                    <div className="homepage-image-wrapper">
                                        <img
                                            src="homepage2.png"
                                            alt="about"
                                            className="homepage-image"
                                        />
                                    </div>
                                </div>

                                <div className="homepage-socials">
                                    {/*<a*/}
                                    {/*    href={INFO.socials.twitter}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noreferrer"*/}
                                    {/*>*/}
                                    {/*    <FontAwesomeIcon*/}
                                    {/*        icon={faTwitter}*/}
                                    {/*        className="homepage-social-icon"*/}
                                    {/*    />*/}
                                    {/*</a>*/}
                                    {/*<a*/}
                                    {/*    href={INFO.socials.github}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noreferrer"*/}
                                    {/*>*/}
                                    {/*    <FontAwesomeIcon*/}
                                    {/*        icon={faGithub}*/}
                                    {/*        className="homepage-social-icon"*/}
                                    {/*    />*/}
                                    {/*</a>*/}
                                    {/*<a*/}
                                    {/*    href={INFO.socials.instagram}*/}
                                    {/*    target="_blank"*/}
                                    {/*    rel="noreferrer"*/}
                                    {/*>*/}
                                    {/*    <FontAwesomeIcon*/}
                                    {/*        icon={faInstagram}*/}
                                    {/*        className="homepage-social-icon"*/}
                                    {/*    />*/}
                                    {/*</a>*/}
                                    <a
                                        href="https://scholar.google.com/citations?hl=en&user=66x2RX0AAAAJ"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGraduationCap}
                                            className="homepage-social-icon"
                                        />
                                    </a>
                                    <a
                                        href="CV-Kiomars-Sharifi.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFilePdf}
                                            className="homepage-social-icon"
                                        />
                                    </a>
                                    <a
                                        href={`mailto:${INFO.main.email}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="homepage-social-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{width: "100%", height: "10px"}}/>

                        <div className="homepage-first-area" style={{paddingTop: "30px"}}>
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title" style={{fontSize: 39}}>
                                    Research Interests
                                </div>

                                <div className="subtitle homepage-subtitle">
  
                                    <ul style={{width: "108%", lineHeight: "1.9"}}>
                                        <li><b>Neuroscience (vision, learning, sensorimotor)</b></li>
                                        <li><b>Brain-computer interfaces and Neuroprosthetics</b></li>
                                        <li><b>Machine Learning in Neuroscience</b></li>
                                        <li><b>Signal Processing and Code Implementation</b></li>
                                        <li><b>Real-time Computation</b></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="homepage-first-area-right-side">
                                <div className="homepage-works">
                                    <Works/>
                                </div>
                            </div>
                        </div>


                        <div className="articles-main-container" id="publications" style={{paddingTop: "50px"}}>
                            <div className="title-and-link-container">
                                <div className="title homepage-title-others">
                                    Publications
                                </div>
                                {/* <div className="subtitle articles-subtitle" style={{paddingBottom: "30px"}}> */}
                                    <a
                                        href="https://scholar.google.com/citations?hl=en&user=66x2RX0AAAAJ"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGraduationCap}
                                            className="homepage-social-icon"
                                        />
                                        Google Scholar
                                    </a>
                            </div>
                            {/* </div> */}

                            <div className="articles-container" style={{paddingTop: "20px"}}>
                                <div className="articles-wrapper">
                                    {myArticles.map((article, index) => (
                                        <div
                                            className="articles-article"
                                            key={(index + 1).toString()}
                                        >
                                            <Article
                                                key={(index + 1).toString()}
                                                date={article().date}
                                                title={<div dangerouslySetInnerHTML={{ __html: article().title }} />}
                                                description={article().description}
                                                link={article().link}
                                                image={article().image}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="projects-container" id="projects" style={{paddingTop: "50px"}}>
                            <div className="title homepage-title-others">
                                Projects
                            </div>
                            <div className="projects-list">
                                <AllProjects />
                            </div>
                        </div>

                        
                        <div className="page-footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Homepage;