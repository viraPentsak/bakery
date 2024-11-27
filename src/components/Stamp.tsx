import React from "react";
import VignetteSVG from "@/assets/svg//vignette.svg?react";

interface StampProps {
    children?: React.ReactNode
}

const Stamp: React.FC<StampProps> = ({children}) => {

    return (
        <div className="relative top-2/4 -translate-y-32 mx-auto max-w-72 max-h-72 opacity-95">
            <VignetteSVG className="text-white max-w-72 max-h-72 xl:animate-spin-slow"/>
            <div className="flex flex-col items-center justify-center absolute inset-0 p-6">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Stamp;