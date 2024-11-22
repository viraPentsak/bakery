import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "./Logo";

interface NavLogoProps {
    className?: string;
    activeClassName?: string;
    logoClassName?: string;
    href: string,
    destination: string
}

const NavLogo: React.FC<NavLogoProps> = (props) => {
    return (
        <NavLink to={props.href}
                 className={isActive => isActive ? props.activeClassName : props.className}>
            <span className="sr-only">{props.destination}</span>
            <Logo className={props.logoClassName}/>
        </NavLink>
    );
};

export default NavLogo;