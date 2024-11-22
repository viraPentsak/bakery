import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderBurgerNav from "./HeaderBurgerNav.tsx";
import NavLogo from "./../NavLogo";
import SocialLinks from "../SocialLinks";
import {classNames} from "./../../helpers";

interface I_HeaderProps {
    inView?: boolean
}

const Header: React.FC<I_HeaderProps> = ({inView}) => {

    const className = classNames(
        "fixed top-0 w-full z-header transition-colors bg-straw-950",
        inView ? "bg-gray-600/30" : "bg-gray-800"
    )

    return (
        <div className={className}>
            <div className="container xl:max-w-screen-xl">
                <div className="grid md:grid-cols-6 gap-4 align-middle items-center">
                    <div className="col-span-1">
                        <NavLogo href="/"
                                 destination="Home page link"
                                 logoClassName="w-16 md:w-32 max-h-16 p-2"
                                 activeClassName="text-white"/>
                    </div>
                    <div className="col-span-4 hidden md:blo ck">
                        <HeaderNav/>
                    </div>
                    <div className="col-span-1  hidden md:b lock">
                        <SocialLinks
                            className="text-white active:text-white p-2 border border-transparent hover:border-white hover:bg-white/20"
                            wrapperClassName="justify-end"/>
                    </div>
                    <div className="col-span-5 md:hi dden">
                        <HeaderBurgerNav/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;