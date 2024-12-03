export interface I_GeneralLink {
    name: string;
    link: string;
    icon?: string;
}

export type Currency = { code: "USD", symbol: "$" } | { code: "UAH", symbol: "₴" };

export interface I_Price {
    currency: Currency;
    amount: number;
}

export interface I_MenuItem {
    title: string;
    description: string;
    price: I_Price;
}