import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../features/auth/Login";

function Page()  {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Page;