import {I_Receipt} from "../interfaces";
import receipts from "./../../static-data/receipts.json";

const getReceipt = (id: string): I_Receipt | undefined => {
    return receipts.find((receipt: I_Receipt) => {
        return receipt.id === id;
    });
};

export const getFirstReceipt = (): I_Receipt => receipts[0];

export default getReceipt;