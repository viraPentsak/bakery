import React from "react";
import {getSocialLinks} from "../hooks";
import Navigation from "./Navigation.tsx";
import {classNames} from "../helpers";


interface SocialLinksProps {
    className?: string;
    wrapperClassName?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
    const wrapperCN = classNames("flex flex-row flex-wrap gap-2 text-xl", props.wrapperClassName);

    return (
        <Navigation linksFetcher={getSocialLinks}
                    listItemClassName="block"
                    external
                    className="block text-[0px] text-white p-2 border border-transparent hover:border-white hover:bg-white/20 leading-none"
                    iconClassName="text-xl"
                    listClassName={wrapperCN}/>
    );
};

export default SocialLinks;