import React from "react";
import { Link } from "react-router-dom";
import "../styles/Service.css";
import im1 from "../assets/p8.jpg";
import im2 from "../assets/p9.jpeg";
import im3 from "../assets/p10.jpg";
import im4 from "../assets/p11.jpeg";
import im5 from "../assets/p12.jpg";
import im6 from "../assets/p13.jpg";

const Service = [
  {
    id: 1,
    title: "Shadow Teacher for School ",
    description: "Trained shadow teachers to assist students in mainstream schools.",
    image: im1,
    link: "/shadow-teacher",
  },
  {
    id: 2,
    title: "Special Needs Teacher for Home ",
    description: "Personalized teaching for children with special needs at home.",
    image: im2,
    link: "/special-needs",
  },
  {
    id: 3,
    title: "School Readiness Program ",
    description: "Helping children transition smoothly into school.",
    image: im3,
    link: "/school-readiness",
  },
  {
    id: 4,
    title: "Student Counseling ",
    description: "Professional counseling to support students with academic and emotional challenges.",
    image: im4,
    link: "/student-counseling",
  },
  {
    id: 5,
    title: "Speech and Behavior Occupational Therapy Sessions ",
    description: "Therapy sessions to improve speech, behavior, and occupational skills.",
    image: im5,
    link: "/speech-therapy",
  },
  {
    id: 6,
    title: "Parent Counseling & Parenting Sessions ",
    description: "Guiding parents to develop effective strategies for supporting their children.",
    image: im6,
    link: "/parent-counseling",
  },
];

export default Service;
