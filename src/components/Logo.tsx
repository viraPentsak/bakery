import React from "react"
import {SVGProps} from "react";
import LogoSrc from "@/assets/svg/logo.svg?react";
import {classNames} from "../helpers";

interface LogoProps {
    className?: string
}

const Logo: React.FC<SVGProps<SVGSVGElement> & LogoProps> = (props) => {
    const className = classNames("image w-32 h-auto", props.className);
    return (
        <>
            <LogoSrc className={className}/>
        </>
    )
}

export default Logo