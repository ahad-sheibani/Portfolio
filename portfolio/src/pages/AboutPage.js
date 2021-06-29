import React from 'react';
import Title from '../components/Title'
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillSection';
import { ProgressBar } from "react-step-progress-bar";
import { instituteData, skillData } from '../constant/meta';
import Certificates from '../components/Certificates';
import { useTranslation } from 'react-i18next';



function AboutPage(props) {
    const {t} = useTranslation()
    return (
        <div className="AboutPage" >
            <Title title={t('aboutMe.title')} subTitle={t('aboutMe.title')} />
            <ImageSection />

            <Title title={t('mySkills.title')} subTitle={t('mySkills.title')} />
            <div className="skillsContainer">
            {skillData.map((item)=>{
                return   <SkillSection skill={item.name} percent={item.scale} label={item.label}/>
            })}
            </div>
            <Title title={t('certifications.title')} subTitle={t('certifications.title')} />
            <div className="certificateContainer" >
            {instituteData.map((item)=>{
                return <Certificates title={item.title} institute={item.institute} date={item.date}/>
            })}
            
            </div>
          
        </div>
    );
}

export default AboutPage;