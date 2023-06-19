import React from 'react';
import { useStyles } from './overviewStyles';
import DataTransfer from './assets/glti_hero_image.svg';

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.heroContent}>
                <div className={classes.heroContext}>
                    <div className={classes.heroHeader}>Guided Learning Tool Integration</div>
                    <div className={classes.heroText}>
                        Learning tool development and integration made easy.
                    </div>
                    <div className={classes.heroSubtext}>
                        Kickstart your understanding of Learning Tool Interoperability and how to implement these principles to create LTI compliant applications for the Canvas Learning Management System.
                    </div>
                </div>
                <div className={classes.heroImage}>
                    <img src={DataTransfer} alt="data-transfer"/>
                </div>
            </div>
            <div className={classes.overview}>
                <div className={classes.quickstartContext}>
                    <div className={classes.quickstartHeader}>
                        GLTI Quickstart
                    </div>
                    <div className={classes.quickstartContent}>
                        <a href="/">What is LTI?</a>
                        <a href="/">Building an LTI Compliant Application</a>
                        <a href="/">Validating an LTI Launch Request</a>
                    </div>
                    <button className={classes.exploreButton}>
                        Explore Content
                    </button>
                </div>
                <div className={classes.overviewContext}>
                    <div className={classes.divider}></div>
                    <div className={classes.overviewTextGroup}>
                        <div className={classes.overviewHeader}>
                            GLTI Overview
                        </div>
                        <div className={classes.overviewContent}>
                            Let’s be honest, technology-related documentation may not always be the easiest to comprehend, especially in regard to “Learning Tool Interoperability”, or LTI for short. That’s why we’ve created GLTI (Guided Learning Tool Interoperability) , a collection of instructional resources, tools, tips, and guides to help aid the developer, or any professional in the education field toward understanding and utilizing LTI standards to enhance the learning experience within the Canvas LMS.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;