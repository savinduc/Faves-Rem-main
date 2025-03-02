import React from "react";
import "../styles/ServiceList.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Service from "./Service";
import bgImage from "../assets/background2.jpg";
const ServiceList = () => {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Available Services for you....!</h1>
        <div className="frservices-container">
          {Service.map((service) => (
            <div key={service.id} className="frservice-card">
              <img
                src={service.image}
                alt={`Image of ${service.title}`}
                className="frservice-image"
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="frservice-link" aria-label={`Learn more about ${service.title}`}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceList;
