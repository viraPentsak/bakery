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