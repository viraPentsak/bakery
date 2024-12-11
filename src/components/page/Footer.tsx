import React from "react";
import FooterNav from "./FooterNav.tsx";

interface FooterProps {
    className?:string;
}

const Footer:React.FC<FooterProps> = (props) => {
    return (
        <footer className={props.className}>
            <div className="container max-w-screen-xl p-5">
                <FooterNav/>
            </div>
        </footer>
    );
};

export default Footer;