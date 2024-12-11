import {I_GeneralLink} from "../interfaces";
import {menuLinks} from "./../../metadata.json";

const getNavLinks = async (): Promise<I_GeneralLink[]> => {

    return Promise.resolve(menuLinks);
}

export default getNavLinks;