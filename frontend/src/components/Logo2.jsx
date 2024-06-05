import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/media/logo2.png";
import styled from "styled-components";

const Logo2 = () => {
    return (
        <Wrapper>
            <Link to="/">
                <img src={logo} alt="OIMS-Logo" />
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 175px;
    @media screen and (max-width: 600px) {
        max-width: 100px;
    }
    a {
        text-decoration: none;
    }
    img {
        width: 100%;
        object-fit: cover;
        
    }
`;

export default Logo2;
