import React from "react";
import Card, {CardProps} from "./Card";
import PretselSVG from "@/assets/svg/pretsel.svg?react"


const DescriptionHeader = () => {
    return (
        <div className="pt-4">
            <div className="flex flex-row font-serif text-sm justify-around">
                <span className="uppercase">est.</span>
                <span>1893</span>
            </div>
            <div className="border-t border-neutral-400 mt-5 -mx-5 relative pb-10">
                <i className="absolute top-0 -translate-y-2/4 left-0 border w-2.5 h-2.5 rounded-full block bg-straw-100"/>
                <i className="absolute top-0 -translate-y-2/4 right-0 border w-2.5 h-2.5 rounded-full block bg-straw-100"/>
                <i className="block w-16 h-16 -mt-8 p-2.5 bg-straw-100 mx-auto border rounded-full">
                    <PretselSVG className="max-w-full max-h-full text-neutral-400"/>
                </i>
            </div>
        </div>
    )
}

const decorClassName = `
before:block
before:absolute
before:inset-2.5
before:border
before:border-dashed
before:border-neutral-400
`;


const DescriptionCard: React.FC<CardProps> = ({children, ...restProps}) => {
    return (
        <div className="relative -mx-2.5">
            <div className={
                `bg-straw-100 p-12 text-center relative ${decorClassName} z-30 
                   bg-wheat-left bg-no-repeat bg-right-bottom 
                   mask-b-l-corner b-l-corner-flip after:bg-straw-50  after:shadow-lg shadow-black`}>
                <div className="relative">
                    <DescriptionHeader/>
                    <Card className="p-0" {...restProps}>
                        {children}

                    </Card>
                </div>
            </div>

            <div
                className={`${decorClassName} absolute w-8 top-8 bottom-8 -right-6 before:block bg-straw-300 z-10`}></div>
            <div
                className={`${decorClassName} absolute w-8 top-4 bottom-4 -right-3 before:block bg-straw-200 z-10`}></div>
        </div>

    );
};

export default DescriptionCard;