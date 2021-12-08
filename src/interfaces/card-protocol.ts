export interface Card {
    getId(): string;
    getName(): string;
    getType(): string;
    getPrice(): string;
    getImage(): string;
}

export interface CardMagicProtocol {
    id: string;
    name: string;
    printed_name: string;
    type_line: string;
    prices: Prices;
    layout: string;
    rarity: 'common' | 'uncommon' | 'rare' | 'mythic';
    card_faces?: {
        image_uris: Images;
    }[];
    image_uris?: Images;
}

export type Prices = {
    eur: string;
    usd: string;
    usd_foil: string;
};

export type Images = {
    border_crop: string;
};

//common rare uncommon mythic
