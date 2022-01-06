export interface CardProtocol {
    getId(): string;
    getName(): string;
    getType(): string;
    getPrice(): string;
    getImage(): string;
}

export class CardMagic implements CardProtocol, CardMagicProtocol {
    id: string;
    name: string;
    printed_name: string;
    layout: string;
    type_line: string;
    prices: Prices;
    rarity: 'common' | 'uncommon' | 'rare' | 'mythic';
    image_uris: Images;

    card_faces: {
        image_uris: Images;
    }[];

    constructor(card: CardMagic) {
        this.id = card.id;
        this.name = card.name;
        this.layout = card.layout;
        this.type_line = card.type_line;
        this.prices = card.prices;
        this.image_uris = card.image_uris;
        this.card_faces = card.card_faces;
        this.printed_name = card.printed_name;
        this.rarity = card.rarity;
    }

    getId(): string {
        return this.id;
    }
    getName(): string {
        if (this.printed_name) {
            return this.printed_name;
        }
        return this.name;
    }
    getType(): string {
        return this.type_line;
    }
    getPrice(): string {
        if (this.rarity === 'common') return '0,10';
        if (this.rarity === 'uncommon') return '0,90';
        if (this.rarity === 'rare') return '5,00';
        if (this.rarity === 'mythic') return '10,00';
        return '?';
    }
    getImage(): string {
        if (!this.image_uris) {
            return this.card_faces[0].image_uris.border_crop;
        }

        return this.image_uris.border_crop;
    }
}

export class CardPokemon implements CardPokemon, CardPokemonProtocol {
    id: string;
    name: string;
    supertype: string;
    set: SetPokemon;
    number: string;
    rarity: string;
    images: { small: string; large: string };
    cardmarket: cardmarket;

    constructor(card: CardPokemon) {
        this.id = card.id;
        this.name = card.name;
        this.supertype = card.supertype;
        this.set = card.set;
        this.number = card.number;
        this.rarity = card.rarity;
        this.images = card.images;
        this.cardmarket = card.cardmarket;
    }

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getType(): string {
        return this.supertype;
    }
    getPrice(): string {
        return this.cardmarket?.prices
            ? `${this.cardmarket.prices.averageSellPrice}`
            : '0,00';
    }
    getImage(): string {
        return this.images.large;
    }
}
