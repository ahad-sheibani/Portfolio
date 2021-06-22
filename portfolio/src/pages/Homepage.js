import React from 'react';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function Homepage(props) {
    return (
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hello I am{" "}
                    <span>Ahad Sheibani</span>
                </h1>
                <p className="h-sub-text">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie leo justo, sed mollis metus lacinia nec. Nunc ac eros luctus libero sodales imperdiet. Fusce nibh ante, imperdiet vitae iaculis sed, condimentum condimentum magna. Sed nibh nisi, elementum quis sagittis vel, sollicitudin a ligula. Proin luctus ultrices scelerisque. Suspendisse fermentum mi a lectus auctor, nec tempus dolor consequat. Fusce luctus turpis ut ipsum mollis congue.
                </p>
                <div className="icons">
                <a href="https://www.linkedin.com/feed/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon ln" />
                    </a>
                    <a href="https://github.com/ahad-sheibani?tab=repositories" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://twitter.com/home?lang=en" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                    </a>

                </div>

            </header>
        </div>
    );
}

export default Homepage;