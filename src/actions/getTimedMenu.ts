import {I_MenuItem} from "../interfaces";

const menu: I_MenuItem[] = [
    {
        title: "Full breakfast",
        description: "Duis ut tortor, et risus, vulputate pretium",
        price: {
            amount: 1249,
            currency: {
                code: "USD",
                symbol: "$"
            }
        }
    }, {
        title: "Toast & Jam",
        description: "Suspendisse, tempus, nterdum",
        price: {
            amount: 490,
            currency: {
                code: "USD",
                symbol: "$"
            }
        }
    }, {
        title: "Muffins",
        description: "Duis ut tortor, et risus, vulputate pretium",
        price: {
            amount: 1249,
            currency: {
                code: "USD",
                symbol: "$"
            }
        }
    },
]

const getTimedMenu = (): I_MenuItem[] => {
    return menu;
}

export default getTimedMenu;