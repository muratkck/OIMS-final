import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from "../components/Logo2";
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <Logo2 />
        <div>
          <Link to="/" className="nav-item text-xl font-bold">Online Internship Management System</Link>
          <p className="nav-item-2 text-sm mt-2 text-white">© 2024 OIMS, Inc. All rights reserved.</p>
        </div>
        <div className="flex justify-end items-center">
          <Link className="nav-item" to="/about">About Us</Link>
          <Link className="nav-item" to="/contact">Contact</Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgb(151, 21, 21);
    box-shadow: 0 5px 5px var(--shadow-light);
    padding: 1rem 0;
    .container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .container .nav-item {
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        margin-left: 20px;
        color: white;
        transition: border-bottom 0.1s;
    }
    .container .nav-item:hover {
      border-bottom: 1px solid white;
    }
    .container .nav-item.active {
    }
    .nav-item-2 {
      font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        margin-left: 30px;
        color: white;
        transition: border-bottom 0.1s;
    }
    @media screen and (max-width: 1200px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width: 600px) {
        padding: 1.2rem 1rem;
        .container {
            display: flex;
            /* justify-content: center; */
        }
    }
    .end .logout {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        color: white;
        letter-spacing: 0.5px;
    }
    @media (max-width: 768px) {
        .nav {
        flex-wrap: wrap;
        }
    }
    `;

export default Footer;
