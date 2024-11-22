import React from "react";

interface FooterProps {
    className?:string;
}

const Footer:React.FC<FooterProps> = (props) => {
    return (
        <footer className={props.className}>
            <div className="container max-w-screen-xl p-5">
                Footer with menu
            </div>
        </footer>
    );
};

export default Footer;