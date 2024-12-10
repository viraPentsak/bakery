import {I_Receipt} from "../interfaces";
import data from "./../../static-data/receipts.json";
const receipts: I_Receipt[] = data;

const getReceipt = (id: string): I_Receipt | undefined => {
    return receipts.find((receipt: I_Receipt) => {
        return receipt.id === id;
    });
};

export const getFirstReceipt = (): I_Receipt => receipts[0];

export default getReceipt;