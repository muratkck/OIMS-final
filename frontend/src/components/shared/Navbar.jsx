/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Logo from "../Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { useUserContext } from '../../context/UserContext';

const Navbar = ({ navbarRef }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useUserContext();
    const navigate = useNavigate();
    console.log(isLoggedIn);

    const handleLogout = () => {
        // Perform logout actions like removing auth token
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        // Redirect to login page
        navigate('/login');
    };

    useEffect(() => {
        // Check if the token exists in local storage
        const token = localStorage.getItem('authToken');
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
    }, []);


    return (
        <Wrapper ref={navbarRef}>
            <div className="container">
                <Logo />
                <div className="container-2">
                    { user?.role !== 'recruiter' && 

                    <NavLink className="nav-item" to="/all-jobs">
                        Opportunities
                    </NavLink>
                    }
                    <NavLink className="nav-item hidden sm:block" to="/dashboard">
                        Dashboard
                    </NavLink>
                    {isLoggedIn ? (
                        <div className="end">
                            <button className="logout nav-item" onClick={handleLogout}>
                                <FiLogOut className="text-base" /> Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink className="nav-item" to="/login">
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};
/*
<div className="end">
<button className="logout" onClick={handleLogout}>
    <FiLogOut className="text-lg mr-1" /> logout
</button>
</div>



    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


*/
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
    .container-2 {
        display: flex;
        justify-content: space-between;
    }
    .container .nav-item.active {
        opacity: 0.7;
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
export default Navbar;
