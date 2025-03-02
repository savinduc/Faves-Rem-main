import React from "react";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";

function Home() {

    const goals = [
        { title: "Enhance Individualized Learning", description: "Implement personalized education plans to meet every student's unique needs." },
        { title: "Expand Teacher Network", description: "Recruit 100+ qualified teachers to support diverse learning goals." },
        { title: "Increase Parent Engagement", description: "Launch a communication platform to strengthen parent-teacher collaboration." },
        { title: "Support Lifelong Learning", description: "Prepare students for future challenges with a holistic approach to education." },
        { title: "Promote Teacher Growth", description: "Provide training programs to empower teachers with modern methodologies." },
    ];
    
    return (
        <>
        <Header />
        <div className="frhome-container">

            {/* Hero Section */}
            <section className="frhero-section">
                <div className="frhero-content">
                    <h1>Faves Remedies</h1>
                    <p>Working with children with special needs to help them build a brighter future through education</p>
                    <a href="#frfeatures-section" className="homecta-btn">
                        View Our Core Services
                    </a>
                </div>
            </section>

            <section className="homegoals-section">
            <h2>Our Goals</h2>
            <div className="homegoals-container">
                {goals.map((goal, index) => (
                    <div className="homegoal-card" key={index}>
                        <div className="homegoal-icon">
                            <i className="bx bxs-rocket"></i>
                        </div>
                        <h3>{goal.title}</h3>
                        <p>{goal.description}</p>
                    </div>
                ))}
            </div>
        </section>

            {/* Features Section */}
            <section id="frfeatures-section" className="frfeatures-section">
                <h2>Our Core Services</h2>
                <p>Discover how Faves Remedies can transform education for children with special needs in your community</p>
                <div className="frfeature-boxes">
                    <div className="frfeature-box">
                        <i className="bx bxs-user-check"></i>
                        <h3>Providing one on one supervision</h3>
                        <p>We provide personalized support to ensure focused learning and progress.</p>
                    </div>

                    <div className="frfeature-box">
                        <i className="bx bxs-bar-chart-alt-2"></i>
                        <h3>Progress assesment pre test post test</h3>
                        <p>Pre and post-tests help track progress and guide our strategies.</p>
                    </div>

                    <div className="frfeature-box">
                        <i className="bx bxs-pencil"></i>
                        <h3>IEP Goal setting</h3>
                        <p>We create customized goals to meet each child’s unique needs.</p>
                    </div>

                    <div className="frfeature-box">
                        <i className="bx bxs-flag"></i>
                        <h3>Behavior Reduction plan</h3>
                        <p>We address challenging behaviors and encourage positive learning.</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="homestats-section">
                <div className="homestats-box">
                    <h3>100K+</h3>
                    <p>Students Enrolled</p>
                </div>
                <div className="homestats-box">
                    <h3>200K+</h3>
                    <p>Children Supported</p>
                </div>
                <div className="homestats-box">
                    <h3>500+</h3>
                    <p>Certified Educators</p>
                </div>
                <div className="homestats-box">
                    <h3>100+</h3>
                    <p>Qualified Teachers</p>
                </div>
            </section>

        </div>
        <Footer />
    </>
    );
}

export default Home;
