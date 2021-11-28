import { type } from 'os';
import { Card, CardMagicProtocol, Prices, Images } from './card-protocol';

export class CardMagic implements Card, CardMagicProtocol {
    id: string;
    name: string;
    layout: string;
    type_line: string;
    prices: Prices;

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
    }

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getType(): string {
        return this.type_line;
    }
    getPrice(): string {
        const priceBrl = 5.61 * Number(this.prices.usd);
        return priceBrl.toFixed(2);
    }
    getImage(): string {
        if (!this.image_uris) {
            return this.card_faces[0].image_uris.border_crop;
        }

        return this.image_uris.border_crop;
    }
}
