// set global
export interface SetCard {
    getCode(): string;
    getName(): string;
    getIcon(): string;
    getReleased(): string;
}

export class SetMagic implements SetCard, setMagicProtocol {
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

export class Set extends SetMagic {}
