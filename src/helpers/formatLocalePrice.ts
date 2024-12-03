import {I_Price} from "../interfaces";

const formatLocalePrice = (price: I_Price): string => {
    const amount = (price.amount / 100).toFixed(2);
    if (price.currency.code === "USD") {
        return price.currency.symbol + amount
    }
    return amount + price.currency.symbol;
}

export default formatLocalePrice;