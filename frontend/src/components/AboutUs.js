import React from 'react';
import "../styles/AboutUs.css";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <>
        <Header />
        <section className="frabout-us-section">
            <div className="frabout-us-content">
                <h2>About Us</h2>
                <p>
                <br/>
                Welcome to FAVES REMEDIES, a dedicated provider of Special Education Needs (SEN) services committed to supporting students with diverse learning needs. Our mission is to empower children with the individualized support they need to succeed in mainstream educational settings, and to create a more inclusive, understanding, and adaptive learning environment.<br/>

                    At the heart of our services is our highly trained team of shadow teachers, who play a crucial role in ensuring that students with special educational needs are fully integrated into their classrooms. These educators work one-on-one with students, offering tailored academic support and behavioral guidance that helps them reach their full potential. By fostering strong communication and collaboration between students, teachers, parents, and therapists, we help promote not only academic success but also personal growth and social integration.<br/>

                    We provide comprehensive assessments that evaluate both the academic and behavioral needs of each student, ensuring that all interventions are individualized and effective. Based on these assessments, we create Individualized Education Plans (IEPs) and Behavioral Intervention Plans (BIPs) to guide our approach to teaching, ensuring that each child receives the specific support they require. Our services also include daily monitoring and supervision by our team of Registered Behavior Technicians (RBTs), ensuring that our shadow teachers are always supported in delivering the highest quality care.<br/>

                    Our approach is highly personalized and flexible. We collaborate with parents to conduct interviews and select the best-suited shadow teacher candidates for each child. Should a parent feel that the selected candidate is not the best fit, we offer an alternative set of teachers to ensure that the child receives the optimal support. Our service model also includes individualized lesson planning, customized academic toolkits, and behavior reduction strategies, all designed to enhance the child’s learning experience.<br/>

                    FAVES REMEDIES also believes in continuous improvement and communication. We provide daily updates to parents, as well as weekly progress reports that track the child’s development in key areas such as academic performance and behavior. Our shadow teachers and RBTs maintain a detailed log of observations, including ABC data sheets (Antecedent-Behavior-Consequence) that are shared with all team members to ensure consistent, effective support. Additionally, we encourage the collection and sharing of photos of the child’s progress, providing tangible evidence of the child’s accomplishments.<br/>

                    In addition to our direct support to students and teachers, we work closely with the school team, which includes class teachers, behavior therapists, and parents, creating a strong, unified support system for the child. This collaborative approach is essential for maintaining the consistency and effectiveness of our services.<br/>

                    At FAVES REMEDIES, we are more than just a service provider , we are a committed partner in the educational journey of every child we support. We understand the challenges that come with teaching children with special needs, and we are here to make that journey as smooth and rewarding as possible.<br/>

                    Our services are available islandwide, and we pride ourselves on the quality and dedication of our team, all of whom undergo specialized training tailored to the needs of each individual child. Whether it’s academic support, behavioral management, or fostering social inclusion, we are dedicated to helping every child thrive in their learning environment.<br/>

                    By choosing FAVES REMEDIES, you are partnering with a team that values inclusion, compassion, and personalized care, ensuring that every child receives the education and support they deserve. We are here to help students, teachers, and parents build brighter futures together, and to ensure that every child has the opportunity to succeed in an inclusive, supportive, and adaptive educational setting.<br/>

                </p>
            </div>
           
            <div className="frabout-us-images">
                <div className="aboutimage aboutimage1"></div>
                <div className="aboutimage aboutimage2"></div>
                <div className="aboutimage aboutimage3"></div>
                <div className="aboutimage aboutimage4"></div>
                <div className="aboutimage aboutimage5"></div>
                <div className="aboutimage aboutimage6"></div>
            </div>
            
        </section>
        <Footer />
    </>
    );
};

export default AboutUs;

