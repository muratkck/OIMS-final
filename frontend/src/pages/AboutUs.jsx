/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/shared/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="container">
            <h1>About Us</h1>
            <p>
                Welcome to the Online Internship Management System (OIMS), where we bridge the gap between aspiring professionals and industry leaders. Our platform is dedicated to providing students with invaluable internship opportunities that pave the way for their future careers.
            </p>
            <p>
                Our mission is to streamline the internship application process, making it easier for students to find, apply for, and secure internships that match their skills and career goals. We work closely with a network of reputable companies to ensure that our users have access to high-quality internship experiences.
            </p>
            <p>
                At OIMS, we believe in the power of internships to shape the next generation of professionals. Our platform offers a user-friendly interface, robust search features, and comprehensive support to help students and employers alike. Join us in our mission to create a brighter future for all.
            </p>
            <h2>Our Team</h2>
            <p>
                Our team is composed of dedicated professionals from various industries, all working together to make the internship process as seamless as possible. We are passionate about education, professional development, and helping young talent reach their full potential.
            </p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
        background-image: url("https://ceng.iyte.edu.tr/wp-content/uploads/sites/124/2017/02/100_3495.jpg");
        background-size: cover;
        background-position: center;
        height: 90vh;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: white;
        padding: 2rem 0;
        .container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .container {
        background: white;
        opacity: 0.9;
        width: 100%;
        border: 1px solid #e1e2f0;
        border-radius: 4px;
        box-shadow: 0 0 5px 0 rgba(42, 45, 48, 0.12);
        transition: all 0.3s ease;
        text-allign: center;
        height: 60vh;
    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: rgb(151, 21, 21);
    }
    h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: rgb(151, 21, 21);
    }
    p {
        font-size: 1rem;
        margin-bottom: 1rem;
        line-height: 1.5;
        color: #333;
    }
`;

export default AboutUs;
