import {ASSET_URL} from "../constants.ts";

export default function (url: string | undefined): string {
    if (!url) return "";

    if (url.includes(ASSET_URL)) {
        return url.replace(/^\//, "");
    }

    const newURL = ASSET_URL + "/" + url.replace(/^\//, "");

    return newURL;
}