import React from "react";
import Navigation from "../Navigation.tsx";
import {getNavLinks} from "../../actions";
import NavLogo from "../NavLogo.tsx";

const FooterNav: React.FC = () => {
    const activeClassName = "after:w-full";
    const listClassName: string = "flex flex-row justify-between leading-4";

    const linkClassName: string = [
        "after:border-t-2 after:block after:w-0 after:mx-auto hover:after:w-full after:transition-[width] leading-none after:border-gray",
        "font-serif font-bold",
        "uppercase text-sm/none ",
        "block p-5 md:p-6 xl:px-8",
        "text-center",
        "text-gray"
    ].join(" ");

    const linkFetcherLimited = async (start?: boolean) => {
        const data = await getNavLinks();
        const length = data.length;
        if (length < 2) {
            return data;
        }

        const halfItems = Math.round(length / 2);

        if (start) {
            return data.slice(0, halfItems);
        }

        return data.slice(halfItems);
    }

    return (<div className="grid grid-cols-5 gap-3">
            <Navigation listClassName={listClassName}
                        className="col-span-2 border-t border-b"
                        linksFetcher={() => linkFetcherLimited(true)}
                        linkClassName={linkClassName}
                        activeClassName={activeClassName}/>

            <div className="col-span-1">
                <NavLogo href="/"
                         className="w-16 lg:w-32 max-h-16"
                         destination="Home page link"
                         logoClassName="w-16 lg:w-32 max-h-16 p-2  mx-auto"
                         activeClassName="text-gray"/>
            </div>

            <Navigation listClassName={listClassName}
                        className="col-span-2 border-t border-b"
                        linksFetcher={linkFetcherLimited}
                        linkClassName={linkClassName}
                        activeClassName={activeClassName}/>
        </div>
    );
};

export default FooterNav;