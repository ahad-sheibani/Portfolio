import React from 'react';

function ImageSection(props) {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src='/images/avatar.jpeg' />
            </div>
            <div className="about-info">
                <h4 >
                    I am{" "}
                    <span>
                        Ahad sheibani
                    </span>
                </h4>
                <p className="about-text">
                    Front-End Developer with over 2 years of experience in front-end coding and deployment in a JavaScript environment
                    and developing websites and web applications with react js. 2 years of above experience in working with live
                    applications and troubleshooting exprtiese.
                  
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name:</p>
                        <p>Age:</p>
                        <p>Nationality:</p>
                        <p>Languages</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>Ahad Sheibani</p>
                        <p>27</p>
                        <p>Iranian</p>
                        <p>English,Persian</p>
                        <p>Iran</p>
                    </div>
                </div>
                <a href="https://drive.google.com/drive/u/0/my-drive" className="btn">Download Cv
                </a>
            </div>

        </div>
    );
}

export default ImageSection;