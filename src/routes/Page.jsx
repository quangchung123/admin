import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../features/auth/Login";
import Test from "../features/admin/Test";

function Page()  {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Test />} />
        </Routes>
    );
};

export default Page;