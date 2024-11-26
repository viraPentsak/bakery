import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderBurgerNav from "./HeaderBurgerNav.tsx";
import NavLogo from "./../NavLogo";
import SocialLinks from "../SocialLinks";
import {classNames} from "./../../helpers";
import {useUi} from "../../context/uiContext.tsx";

interface I_HeaderProps {
    inView?: boolean
}

const Header: React.FC<I_HeaderProps> = ({inView}) => {
    const {menuOpen} = useUi();

    const className = classNames(
        "fixed top-0 w-full z-header transition-colors bg-straw-950",
        inView ? "bg-gray-600/30" : "bg-gray-800",
        menuOpen ? "bg-gray-800" : "",
    )

    return (
        <div className={className}>
            <div className="container xl:max-w-screen-xl">
                <div className="grid md:grid-cols-6 gap-4 items-center h-[--header-height] lg:h-[--header-height-lg] ">
                    <div className="col-span-1 self-center ">
                        <NavLogo href="/"
                                 className="w-16 lg:w-32 max-h-16"
                                 destination="Home page link"
                                 logoClassName="w-16 lg:w-32 max-h-16 p-2"
                                 activeClassName="text-white"/>
                    </div>
                    <div className="col-span-4 hidden lg:block">
                        <HeaderNav/>
                    </div>
                    <div className=" col-span-1 col-end-7 self-center hidden lg:block">
                        <SocialLinks
                            linkClassName="text-white p-2"
                            wrapperClassName="justify-end"/>
                    </div>
                    <div className="col-span-3 col-end-7 lg:hidden justify-self-end ">
                        <HeaderBurgerNav/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;