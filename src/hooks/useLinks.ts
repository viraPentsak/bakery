import {I_GeneralLink} from "../interfaces";
import {useEffect, useState} from "react";

type LinksFetcher = () => I_GeneralLink[] | Promise<I_GeneralLink[]>;

const useLinks = (fetcher: LinksFetcher): I_GeneralLink[] | undefined => {
    const [links, setLinks] = useState<I_GeneralLink[] | undefined>(undefined);

    useEffect(() => {
        const fetchLinks = async () => {
            const data = await fetcher();

            setLinks(data);
        };

        fetchLinks().catch(console.error);
    }, []);

    return links;
}

export default useLinks;