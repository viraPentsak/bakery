export interface I_GeneralLink {
    name: string;
    link: string;
    icon?: string;
}

export type Currency = { code: "USD", symbol: "$" } | { code: "UAH", symbol: "₴" };

interface HasID {
    id: string;
}

export interface I_Price {
    currency: Currency;
    amount: number;
}

export interface I_MenuItem {
    title: string;
    description: string;
    price: I_Price;
}

export interface I_Ingredient {
    name: string;
    description: string;
    photo?: string;
}

export interface I_Receipt extends HasID {
    title: string;
    subtitle?: string;
    description: string;
    vegan: boolean;
    lactoseFree: boolean;
    glutenFree: boolean;

    ingredients: I_Ingredient[] | [];
    time: {
        prep: number;
        cook: number;
    };
    photoMain?: string;
    photo: string[] | [];
}