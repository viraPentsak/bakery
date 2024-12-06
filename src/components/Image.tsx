import React, {ImgHTMLAttributes} from "react";

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "className"> {
    src?: string;
    alt?:string;
    className?:string;
}

const Image: React.FC<ImageProps> = (props) => {
    if(!props.src) return null;
    return (<img {...props}/>);
};

export default Image;