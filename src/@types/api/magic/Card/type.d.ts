interface CardMagicProtocol {
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

type Prices = {
    eur: string;
    usd: string;
    usd_foil: string;
};

type Images = {
    border_crop: string;
};
