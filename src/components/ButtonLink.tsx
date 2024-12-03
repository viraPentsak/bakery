import React from "react";
import Link, {LinkProps} from "./Link.tsx";
import {classNames} from "../helpers";

interface ButtonLinkProps extends LinkProps{
    type?: "primary" | "secondary"
}

const ButtonLink: React.FC<ButtonLinkProps> = ({type = "primary", className, ...props}) => {
    const commonStyle = "uppercase inline-block font-serif font-bold text-lg leading-6 border py-3 px-6 md:px-10 xl:px-14 2xl:px-16 transition-colors";

    const primaryStyling = classNames(commonStyle, "text-leather-400 border-gray-600 hover:bg-gray-600 hover:text-white", className);
    const secondaryStyling = classNames(commonStyle, "border-dashed border-white/50 bg-gray-600/50 hover:bg-gray-600/80 hover:border-solid", className);
    return <Link className={type === "primary" ? primaryStyling : secondaryStyling}
                 {...props}/>
};

export default ButtonLink;