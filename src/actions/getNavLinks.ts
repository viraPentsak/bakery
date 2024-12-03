import {I_GeneralLink} from "../interfaces";
import {menuLinks} from "./../../metadata.json";

const getNavLinks = (): I_GeneralLink[] => {

    return menuLinks;
}

export default getNavLinks;