import React from "react";
import Navigation from "../Navigation.tsx";
import {getNavLinks} from "../../hooks";

const listClassName: string = "flex flex-row justify-items-center leading-4";
const listItemClassName: string = "flex-grow";

const linkClassName: string = [
    "border border-transparent hover:border-white hover:bg-white/20 leading-none",
    "font-serif font-bold",
    "relative",
    "uppercase text-sm ",
    "leading-none",
    "block p-5 md:p-7",
    "text-center",
    "text-white"
].join(" ");

const HeaderNav: React.FC = () => {
    const activeClassName = "border border-white bg-white/20 ";

    return (<Navigation listClassName={listClassName}
                        linksFetcher={getNavLinks}
                        listItemClassName={listItemClassName}
                        className={linkClassName}
                        activeClassName={activeClassName}/>
    );
};

export default HeaderNav;