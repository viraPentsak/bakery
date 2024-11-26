import React from "react";
import Navigation from "../Navigation.tsx";
import {getNavLinks} from "../../hooks";



const HeaderNav: React.FC = () => {
    const activeClassName = "border border-white bg-white/20 ";
    const listClassName: string = "flex flex-row justify-between leading-4";

    const linkClassName: string = [
        "after:border-t-2 after:block after:w-0 after:mx-auto hover:after:w-full after:transition-[width] leading-none after:border-white",
        "font-serif font-bold",
        "uppercase text-sm ",
        "leading-none",
        "block p-5 md:p-6",
        "text-center",
        "text-white"
    ].join(" ");

    return (<Navigation listClassName={listClassName}
                        linksFetcher={getNavLinks}
                        linkClassName={linkClassName}
                        activeClassName={activeClassName}/>
    );
};

export default HeaderNav;