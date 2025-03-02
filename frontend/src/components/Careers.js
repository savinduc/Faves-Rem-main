import React, {  } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SelectTeacherCategory.css';
import Header from './Header';
import Footer from './Footer';
import bgImage from "../assets/background2.jpg";
const shadow = require('../assets/Shadow-Teacher.jpg');
const specialNeeds = require('../assets/Special.jpg');
const readiness = require('../assets/Readiness.jpg');
const Counsellor = require('../assets/Counsellor.jpg');
const Behavior = require('../assets/behavior.jpg');
const ParentCounselling = require('../assets/Parent-Counseling.jpg');

const Careers = () => {
 
    return (
        
        <>
        <Header />
        <section
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
        <div className='label-container'>
            <label htmlFor="teacher-category" style={{ fontSize: '3rem', display: 'inline', color: 'white' }}>Available careers for you !</label>
        </div>
        <div className='dv-container'>

            <div className='div1'>
                <img className='img1' src={shadow} alt='Shadow Teacher' />
                <label>Shadow Teacher</label>
            </div>
            <div className='div1'>
                <img className='img1' src={specialNeeds} alt='Special Needs Teacher' />
                <label>Special Needs Teacher</label>
            </div>
            <div className='div1'>
                <img className='img1' src={readiness} alt='School Readiness Program' />
                <label>School Readiness Program</label>
            </div>
            <div className='div1'>
                <img className='img1' src={Counsellor} alt='Counsellor' />
                <label>Student Counsellor</label>
            </div>
            <div className='div1'>
                <img className='img1' src={Behavior} alt='Speech and Behavior Occupational Therapist' />
                <label>Speech and Behavior Occupational Therapist</label>
            </div>
            <div className='div1'>
                <img className='img1' src={ParentCounselling} alt='Parent Counsellor' />
                <label>Parent Counsellor</label>
            </div>
            
        </div>
       <button className='butn-apply'><a href='/signup'> Apply Now</a></button> 
       </section>
       <Footer/>
        </>
    )
};

export default Careers;
