import React from 'react';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hello I{"'"}m Ahad
                    <br/>
                    <span> I{"'"}m a Developer</span>
                </h1>
                <p className="h-sub-text">
                    Front-End Developer with over 2 years of experience in front-end coding and deployment in a JavaScript environment
                    and developing websites and web applications with react js. 2 years of above experience in working with live
                    applications and troubleshooting exprtiese.                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/feed/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon ln" />
                    </a>
                    <a href="https://github.com/ahad-sheibani?tab=repositories" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://twitter.com/home?lang=en" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw" />
                    </a>

                </div>

            </header>
        </div>
    );
}

export default Homepage;