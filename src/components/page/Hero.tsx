import React from "react";
import classNames from "../../helpers/classNames.ts";

interface HeroProps {
    children?: React.ReactNode;
    className?: string;
    imgClassName?: string;
    contentClassName?: string;
}

const Hero: React.FC<HeroProps> = (
    {
        children,
        className,
        imgClassName,
        contentClassName
    }) => {
    const wrapperCN = classNames("hero", className);
    const contentCN = classNames("relative flex flex-col justify-center min-h-dvh max-h-3/4 overflow-hidden", contentClassName);
    const imageCN = classNames("hero-image absolute bg-center bg-cover inset-0", imgClassName);

    return (
        <div className={wrapperCN}>
            <div className="hero-inner relative">
                <div className={imageCN}/>
                {children && <div className={contentCN}>
                    {children}
                </div>}
            </div>

        </div>

    );
};

export default Hero;