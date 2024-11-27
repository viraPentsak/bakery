import React from "react";
import {classNames} from "../helpers";

interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string
}

const Card: React.FC<CardProps> = (props) => {
    const {title, subtitle, description, children} = props;
    const className = classNames("p-4", props.className);
    return (
        <div className={className}>
            <div className="pb-10 lg:pb-14">
                {title && <h4 className="text-lg md:text-5xl pt-2 pb-3 font-serif font-bold">{title}</h4>}
                {subtitle && <div className="text-sm uppercase text-leather-400 font-serif font-bold">{subtitle}</div>}
            </div>
            {description && <div>{description}</div>}
            {children}
        </div>
    );
};

export default Card;