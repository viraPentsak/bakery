import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import {classNames} from "../helpers";

export interface LinkProps extends Omit<NavLinkProps, "className"> {
    className?: string;
    activeClassName?: string;
    external?: boolean;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = (
    {
        className,
        activeClassName,
        external = false,
        to,
        ...restProps
    }) => {

    const classNameHandler = ({isActive}: { isActive: boolean }) => {
        return classNames(className, isActive ? activeClassName : "");
    }
    if (external) {
        return <a href={to as string} className={className} target="_blank">{restProps.children}</a>
    }


    return (
        <NavLink className={classNameHandler} to={to} {...restProps}/>
    );
};

export default Link;