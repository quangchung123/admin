import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import logo from "../assets/image/logo.png";

const Content = ({children}) => {
    return (
        <div className="min-h-screen grid grid-cols-customCol">
            <aside className="col-span-1 min-h-screen bg-white border-x">
                <div className="">
                    <div className="flex justify-center items-center px-2 py-4">
                        <a href="/admin" className="mr-3.5">
                            <img src={logo} alt="logo"/>
                        </a>
                        <button className="ml-4">
                            <i className="bi bi-list text-3xl"></i>
                        </button>
                    </div>
                    <div className="box-border mx-2">
                        <Sidebar />
                    </div>
                </div>
            </aside>
            <div className="col-span-1">
                <div className="h-[75px] bg-white border">
                    <Header />
                </div>
                <div className="h-[100vh - 75px] bg-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Content;
