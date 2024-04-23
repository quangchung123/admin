import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";

const Content = ({children}) => {
    return (
        <div className="min-h-screen grid grid-cols-customCol">
            <div className="col-span-1 min-h-screen bg-white border-x">
                <Sidebar />
            </div>
            <div className="col-span-1">
                <div className="h-[10%] bg-white">
                    <Header />
                </div>
                <div className="h-[90%]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Content;
