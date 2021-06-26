import React from 'react';
import { useTranslation } from 'react-i18next';

function ImageSection(props) {
    const {t} = useTranslation()
    return (
        <div className="ImageSection">
            <div className="img">
                <img src='/images/avatar.jpeg' />
            </div>
            <div className="about-info">
                <h4 >
                {t('aboutMeImageSection.tile')}
                    <span>
                    {t('aboutMeImageSection.span')}
                    </span>
                </h4>
                <p className="about-text">
                {t('aboutMeImageSection.main')}


                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>{t('aboutMeImageSection.nameTitle')}</p>
                        <p>{t('aboutMeImageSection.ageTitle')}</p>
                        <p>{t('aboutMeImageSection.nationalityTitle')}</p>
                        <p>{t('aboutMeImageSection.langTitle')}</p>
                        <p>{t('aboutMeImageSection.countryTitle')}</p>
                    </div>
                    <div className="right-section">
                        <p>{t("aboutMeImageSection.name")}</p>
                        <p>{t("aboutMeImageSection.age")}</p>
                        <p>{t("aboutMeImageSection.Nationality")}</p>
                        <p>{t("aboutMeImageSection.lang")}</p>
                        <p>{t("aboutMeImageSection.country")}</p>
                    </div>
                </div>
                <a href="https://drive.google.com/drive/u/0/my-drive" className="btn">{t('aboutMeImageSection.btn')}
                </a>
            </div>

        </div>
    );
}

export default ImageSection;