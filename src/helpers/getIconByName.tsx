import React from "react";
import {IconType} from "react-icons";
import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiQuestionMark} from "react-icons/bi";

const icons: { [index: string]: IconType } = {
    twitter: BiLogoTwitter,
    facebook: BiLogoFacebook,
    instagram: BiLogoInstagram,
    questionMark: BiQuestionMark
};

export default function (name: string | undefined, className?: string): React.ReactNode | null {
    if (name && (name in icons)) {
        const Icon = icons[name];
        return <Icon className={className}/>
    }

    return null;
}