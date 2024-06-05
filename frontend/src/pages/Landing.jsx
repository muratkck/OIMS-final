import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link, useNavigate } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.png";
import Navbar from "../components/shared/Navbar";

const Landing = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navbarRef = useRef(null);
    const heroRef = useRef(null);
    const navigate = useNavigate();

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

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);

    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef} style={{minHeight: '100vh'}}>
                <div className="hero-content">
                    <div className="text-content">
                        <h1>
                            Welcome to the <span className="fancy"> Online Internship Management System! </span>
                        </h1>
                        {isLoggedIn ? (
                            <p>
                                Welcome, Izmir Institute of Technology computer engineering students.
                                You can find an internship opportunity and manage your internship processes here!
                            </p>
                        ) : (
                            <>
                            <p>
                                Welcome, Izmir Institute of Technology computer engineering students.
                                You can find an internship opportunity and manage your internship processes here! 
                                All you have to do is login with your student email and password.
                            </p>
                                <div className="btn-grp">
                                    <Link className="btn" to="/login">
                                        Login Now
                                    </Link>
                                </div>
                                <p>
                                    If you are a company representative <Link className="fancy" to="/register"> click here </Link> to register.
                                </p>
                            </>
                        )}
                    </div>
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Landing;
