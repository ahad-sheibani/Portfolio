import React from 'react';
import Title from '../components/Title'
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillSection';
import { ProgressBar } from "react-step-progress-bar";
import { instituteData, skillData } from '../constant/meta';
import Certificates from '../components/Certificates';
function AboutPage(props) {
    return (
        <div className="AboutPage" >
            <Title title={"About ME"} subTitle={"About ME"} />
            <ImageSection />

            <Title title={"My Skills"} subTitle={"My Skills"} />
            <div className="skillsContainer">
            {skillData.map((item)=>{
                return   <SkillSection skill={item.name} percent={item.scale} label={item.label}/>
            })}
            </div>
            <Title title={"Certifications"} subTitle={"Certifications"} />
            <div className="certificateContainer" >
            {instituteData.map((item)=>{
                return <Certificates title={item.title} institute={item.institute} date={item.date}/>
            })}
            
            </div>
          
        </div>
    );
}

export default AboutPage;