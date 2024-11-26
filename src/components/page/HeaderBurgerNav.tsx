import React, {useEffect} from "react";
import Navigation from "../Navigation.tsx";
import {getNavLinks} from "../../hooks";
import {classNames} from "../../helpers";
import SocialLinks from "../SocialLinks.tsx";
import {useLocation} from "react-router-dom";
import {I_GeneralLink} from "../../interfaces";
import {useUi} from "../../context/uiContext.tsx";


interface BurgerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const MenuButton: React.FC<BurgerButtonProps> = (props) => {

    const {menuOpen} = useUi();


    const className = classNames(
        "block mr-2 relative h-8 w-12 lg:h-16 lg:w-16");

    const linesCN: string = "absolute block border-t-2 border-white right-0 transition duration-300";

    return <button {...props} className={className}>
        <span aria-hidden className={`${linesCN} w-12  top-0 origin-top-right ${menuOpen ? "-rotate-45 w-[43px]" : ""}`}></span>
        <span aria-hidden className={`${linesCN} right-0 top-2/4 transition-[width] ${menuOpen ? "w-0" : "w-12"}`}></span>
        <span aria-hidden
              className={`${linesCN} bottom-0 w-12  origin-bottom-right ${menuOpen ? "rotate-45  w-[43px]" : ""}`}></span>
        <span className="sr-only">Menu toggle</span>
    </button>
}

const HeaderBurgerNav: React.FC = () => {
    const {menuOpen, toggleMenu} = useUi();

    const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        toggleMenu();
    }

    const {pathname} = useLocation();

    useEffect(()=>{
        toggleMenu(false);
    },[pathname])


    const linkClassName: string = " text-amber-900 uppercase font-serif font-bold py-3 block";

    const wrapperClassName: string = `fixed inset-0 top-[--header-height] lg:top-[--header-height-lg] w-full bg-white text-center duration-300 transition ${menuOpen ? "translate-y-0" : "translate-y-full"}`;

    const linksFetcher = ():I_GeneralLink[] => {
        const links = getNavLinks();

        if(pathname === "/") return links;

        return [
            {
                "name": "home",
                "link": "/"
            },
            ...links
        ]
    }

    return (<>
            <MenuButton onClick={onClickHandler}/>
            <div className={wrapperClassName}>
                <Navigation listClassName="py-3"
                            linksFetcher={linksFetcher}
                            linkClassName={linkClassName}/>

                <SocialLinks
                    linkClassName="text-amber-900 p-2 border border-transparent hover:border-white hover:bg-white/20"
                    wrapperClassName="justify-center "/>
            </div>
        </>
    );
};

export default HeaderBurgerNav;