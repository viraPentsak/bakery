import React from "react"
import {NavLink} from "react-router-dom";

const Page404: React.FC = () => {
    return (
        <div className="main min-h-screen flex flex-col justify-center text-center">
            <h3 className="text-xl text-center font-bold p-5">
                This is not the page you are looking for
            </h3>
            <div>Get thee to the nunnery, ahem, to the <NavLink to="/">Home page</NavLink></div>
        </div>
    );
};

export default Page404;