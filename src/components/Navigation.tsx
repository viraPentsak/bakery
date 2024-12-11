import React from "react";
import Link, {LinkProps} from "./Link";
import clsx from "clsx";
import {I_GeneralLink} from "../interfaces";
import getIconByName from "../helpers/getIconByName.tsx";
import {useLinks} from "../hooks";

interface NavigationProps extends Omit<LinkProps, "to" | "children"> {
    listClassName?: string;
    linkClassName?: string;
    linksFetcher: () => I_GeneralLink[] | Promise<I_GeneralLink[]>;
    iconClassName?: string;
}

const Navigation: React.FC<NavigationProps> = (
    {
        className,
        listClassName,
        linkClassName,
        linksFetcher,
        iconClassName,
        ...rest
    }) => {
    const links = useLinks(linksFetcher);

    const linkCN = clsx("transition", linkClassName, {"text-white": !linkClassName});

    return (
        <nav className={className}>
            <ul className={listClassName}>
                {links && links.map(link => {
                    const icon = getIconByName(link.icon, iconClassName);
                    return <li key={link.link}>
                        <Link className={linkCN}{...rest} to={link.link}>
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