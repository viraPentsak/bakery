import React from "react";
import Link, {LinkProps} from "./Link";
import clsx from "clsx";
import {I_GeneralLink} from "../interfaces";
import getIconByName from "../helpers/getIconByName.tsx";

interface NavigationProps extends Omit<LinkProps, "to" | "children"> {
    listClassName?: string;
    listItemClassName?: string;
    linksFetcher: () => I_GeneralLink[];
    iconClassName?: string;
}

const Navigation: React.FC<NavigationProps> = (
    {
        className,
        listClassName,
        listItemClassName,
        linksFetcher,
        iconClassName,
        ...rest
    }) => {
    const links = linksFetcher();

    const linkClassName = clsx("transition", className, {"text-white hover:text-leather-400": !className});

    return (
        <nav>
            <ul className={listClassName}>
                {links.map(link => {
                    const icon = getIconByName(link.icon, iconClassName);
                    return <li key={link.link} className={listItemClassName}>
                        <Link className={linkClassName}{...rest} to={link.link}>
                            {icon}
                            <span>{link.name}</span>
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    );
};

export default Navigation;