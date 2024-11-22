import React from "react";
import Footer from "./Footer";
import Header from "./Header.tsx";

import {Outlet} from "react-router-dom";
import {useInView} from "react-intersection-observer";

export interface OutletProps {
    inViewRef: (node?: Element | null) => void;
}

const Layout: React.FC = () => {
    const [ref, inView] = useInView();

    return (
        <div className="page text-gray-600">
            <Header inView={inView}/>
            <div className="main min-h-screen">
                <Outlet context={{inViewRef: ref}}/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;