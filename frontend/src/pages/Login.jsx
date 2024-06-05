/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styled from "styled-components";
import Logo2 from "../components/Logo2";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useUserContext } from "../context/UserContext";

const Login = () => {
    const { handleFetchMe } = useUserContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/"; // to navigate right location after login

    const onSubmit = async (data) => {
        setIsLoading(true);
        // password: A@1abcde

        // posting
        try {
            const response = await axios.post(
                "https://oims-tan.vercel.app/api/v1/auth/login",
                data,
                {
                    withCredentials: true,
                }
            );
            Swal.fire({
                icon: "success",
                title: "Succesfull",
                text: response?.data?.message,
                customClass: {
                    confirmButton: 'swal2-confirm',
                },
            });
            handleFetchMe();

            console.log(response.data.token);
            localStorage.setItem('authToken', response.data.token); // Store authentication token
            setIsLoggedIn(true);
            reset();
            navigate("/");


            // navigate("/dashboard");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.response?.data,
            });
        }
        setIsLoading(false);
    };
    
    if (isLoggedIn) {
        // Redirect to main page if user is logged in
        navigate('/');
    }

    return (
        <Wrapper style={{minHeight: '100vh'}}>
            <div className="container">
                <div className="flex justify-center">
                    <Logo2 />
                </div>
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="row">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email@example.com"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "A valid email is required",
                                },
                            })}
                        />
                        {errors?.email && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Here"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                            })}
                        />
                        {errors?.password && (
                            <span className="text-[10px] font-semibold text-red-600 mt-1 pl-1 tracking-wider">
                                {errors?.password?.message}
                            </span>
                        )}
                    </div>
                    <div className="login flex justify-center">
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                    </div>
                    <br />
                </form>
                
                <div className="texts">
                    <br></br>
                    <p className="text-center text-[10px] font-semibold opacity-9 mt-3">
                        Don't have an account.
                        <br />
                        <Link className="ml-1 link" to="/register">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f9faff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    background-image: url("https://ceng.iyte.edu.tr/wp-content/uploads/sites/124/2017/02/100_3495.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    
    .container {
        background: white;
        opacity: 0.9;
        max-width: 360px;
        width: 100%;
        padding: 58px 44px;
        border: 1px solid #e1e2f0;
        border-radius: 4px;
        box-shadow: 0 0 5px 0 rgba(42, 45, 48, 0.12);
        transition: all 0.3s ease;
        text-allign: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    h1 {
        opacity: 1;
        margin-top: 20px;
        text-align: center;
        text-transform: capitalize;
        font-size: calc(1rem + 0.3vw);
        font-weight: 600;
        color: var(--color-primary);
        color: rgb(151, 21, 21);

    }
    form {
        opacity: 1;
        margin-top: calc(1rem + 0.9vw);
    }

    .row {
        opacity: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .row label {
        opacity: 1;
        font-size: 12px;
        color: var(--color-black);
        font-weight: 400;
        margin-bottom: 2px;
    }

    .row input {
        opacity: 1;
        flex: 1;
        padding: 8px 10px;
        border: 1px solid #d6d8e6;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        transition: all 0.2s ease-out;
    }

    .row input:focus {
        outline: none;
        box-shadow: inset 2px 2px 5px 0 rgba(42, 45, 48, 0.12);
    }

    .row input::placeholder {
        color: var(--color-black);
        opacity: 0.7;
    }

    .texts {
        display: flex;
        flext-direction: column;
        text-align: center;

    }

    button {
        opacity: 1;
        width: 50%;
        min-width: 90px;
        padding: 8px;
        font-size: 16px;
        letter-spacing: 1px;
        background-color: #800000;
        color: var(--color-white);
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin: 15px auto 0;
        margin-left: 70px;
        transition: background 0.2s ease-out;
    }

    button:hover {
        background-color:  #620e10 ;
    }
    button:disabled {
        background: var(--color-gray);
        color: var(--color-black);
        cursor: not-allowed;
    }

    @media (max-width: 458px) {
        .container {
            width: 90%;
            padding: 30px 0;
        }
        form {
            padding: 0 20px;
        }
    }
    p .link {
        text-transform: capitalize;
        color: rgb(151, 21, 21);
    }
    p .link:hover {
        text-decoration: underline;
    }

    .container * {
        opacity: 1 !important; /* Ensure elements inside container are not transparent */
    }
`;

export default Login;
