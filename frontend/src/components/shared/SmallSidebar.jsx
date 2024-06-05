import React from "react";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import DashboardNavLinks from "./DashboardNavLinks";
import { useDashboardContext } from "../../Layout/DashboardLayout";
import { useUserContext } from "../../context/UserContext";

const SmallSidebar = () => {
    const { user } = useUserContext();
    const { showSidebar, setShowSidebar } = useDashboardContext();

    return (
        <Wrapper>
            <div
                className={
                    showSidebar
                        ? "sidebar-container show-sidebar"
                        : "sidebar-container"
                }
                onClick={() => setShowSidebar(!showSidebar)}
            >
                <div className={showSidebar ? "content show" : "content"}>
                    <button type="button" className="close-btn">
                        <FaTimes />
                    </button>
                    <header className="flex justify-center">
                        <div className="profile">
                            <h6 className="text-sm">
                                {user?.username}
                            </h6>
                            <p className="text-sm">
                                {user?.role}
                            </p>
                        </div>
                    </header>
                    <DashboardNavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    @media (min-width: 992px) {
        display: none;
    }
    .sidebar-container {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        opacity: 0;
        transition: all 0.3s linear;
        visibility: hidden;
    }
    .show-sidebar {
        z-index: 99;
        opacity: 1;
        visibility: visible;
    }
    .content {
        background: white;
        opacity: 0.8;
        width: 90%;
        max-width: 350px;
        border-radius: 6px;
        padding: 2rem 1rem;
        position: relative;
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        transform: scale(0);
        transition: all 0.3s linear;
    }
    .show {
        transform: scale(1);
    }
    .close-btn {
        position: absolute;
        top: -10px;
        left: -10px;
        background: #ffffffdb;
        border-color: transparent;
        font-size: 1.1rem;
        color: var(--color-danger);
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
    }
    .nav-links {
        width: 100%;
        padding-top: 1.2rem;
        display: flex;
        flex-direction: column;
    }
    .nav-link {
        display: flex;
        align-items: center;
        color: rgb(151, 21, 21);
        padding: 0.5rem 0;
        margin: 0.1rem 0;
        padding-left: 2.5rem;
        text-transform: capitalize;
        transition: all 0.3s linear;
        font-weight: 400;
        font-size: 16px;
        opacity: 0.8;
    }
    .nav-link:hover {
        background-color: rgba(0, 0, 0, 0.05);
        opacity: 0.9;
    }
    .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        display: grid;
        place-items: center;
    }
    .active {
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
        background-color: rgba(0, 0, 0, 0.04);
        opacity: 0.9;
    }
    .text-sm {
        font-weight: bold;
        text-transform: capitalize;
    }
`;

export default SmallSidebar;
