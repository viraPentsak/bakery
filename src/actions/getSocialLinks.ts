import {I_GeneralLink} from "../interfaces";
import {socialLinks} from "./../../metadata.json";

const getSocialLinks = (): I_GeneralLink[] => {

    return socialLinks;
}

export default getSocialLinks;