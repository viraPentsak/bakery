import React from "react";
import {NavLink, NavLinkRenderProps} from "react-router-dom";
import Logo from "./Logo";
import {classNames} from "../helpers";

interface NavLogoProps {
    className?: string;
    activeClassName?: string;
    logoClassName?: string;
    href: string,
    destination: string
}

const NavLogo: React.FC<NavLogoProps> = (props) => {
    const classNameHandler = (isActive: NavLinkRenderProps) => {
        return classNames(props.className, isActive ? props.activeClassName : "");
    }

    return (
        <NavLink to={props.href}
                 className={classNameHandler}>
            <span className="sr-only">{props.destination}</span>
            <Logo className={props.logoClassName}/>
        </NavLink>
    );
};

export default NavLogo;