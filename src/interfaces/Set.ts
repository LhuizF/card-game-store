export interface SetCard {
    getCode(): string;
    getName(): string;
    getIcon(): string;
    getReleased(): string;
}

export class SetMagic implements SetCard, SetMagic {
    card_count: number;
    code: string;
    icon_svg_uri: string;
    id: string;
    name: string;
    set_type: string;
    digital: boolean;
    released_at: string;

    constructor(set: SetMagic) {
        this.card_count = set.card_count;
        this.code = set.code;
        this.icon_svg_uri = set.icon_svg_uri;
        this.id = set.id;
        this.name = set.name;
        this.set_type = set.set_type;
        this.digital = set.digital;
        this.released_at = set.released_at;
    }

    getCode(): string {
        return this.code;
    }

    getName(): string {
        return this.name;
    }

    getIcon(): string {
        return this.icon_svg_uri;
    }

    getReleased(): string {
        const data = this.released_at;
        return data.split('-').reverse().join('/');
    }
}

export class SetPokemon implements SetCard, SetPokemon {
    id: string;
    images: { symbol: string; logo: string };
    legalities: {
        unlimited: string;
        standard?: string | undefined;
        expanded?: string | undefined;
    };
    name: string;
    printedTotal: number;
    ptcgoCode: string;
    releaseDate: string;
    series: string;
    total: number;
    updatedAt: string;

    constructor(set: SetPokemon) {
        this.id = set.id;
        this.images = set.images;
        this.legalities = set.legalities;
        this.name = set.name;
        this.printedTotal = set.printedTotal;
        this.ptcgoCode = set.ptcgoCode;
        this.releaseDate = set.releaseDate;
        this.series = set.series;
        this.total = set.total;
        this.updatedAt = set.updatedAt;
    }

    getCode(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getIcon(): string {
        return this.images.symbol;
    }

    getReleased(): string {
        const data = this.releaseDate;
        return data;
    }
}
