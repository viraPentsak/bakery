import React from "react";
import {getSocialLinks} from "../hooks";
import Navigation from "./Navigation.tsx";
import {classNames} from "../helpers";


interface SocialLinksProps {
    linkClassName?: string;
    wrapperClassName?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
    const wrapperCN = classNames("flex flex-row flex-wrap gap-2 text-xl", props.wrapperClassName);
    const linkCN = classNames("block text-[0px] p-2 border border-transparent hover:border-white hover:bg-white/20 leading-none", props.linkClassName)

    return (
        <Navigation linksFetcher={getSocialLinks}
                    linkClassName={linkCN}
                    external
                    iconClassName="text-xl"
                    listClassName={wrapperCN}/>
    );
};

export default SocialLinks;