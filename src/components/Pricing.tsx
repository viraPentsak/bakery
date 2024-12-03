import React from "react";
import {I_Price} from "@/interfaces";
import {formatLocalePrice} from "@/helpers";

interface PricingProps {
    title: string;
    description: string;
    price: I_Price;
}

const Pricing: React.FC<PricingProps> = (
    {title, description, price}) => {
    return (
        <div className="">
            <div className="text-3xl font-serif font-bold leading-none pb-2.5">
                {title}
            </div>
            <div className="opacity-80 pb-3">
                {description}
            </div>
            <div className="text-4xl text-straw-300 font-serif ">
                {formatLocalePrice(price)}
            </div>
        </div>
    );
};

export default Pricing;