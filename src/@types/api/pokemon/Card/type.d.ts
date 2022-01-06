interface CardPokemonProtocol {
    id: string;
    name: string;
    supertype: string;
    set: SetPokemon;
    number: string;
    rarity: string;
    images: { small: string; large: string };
    cardmarket: cardmarket;
}

type legalitie = 'Legal' | 'Banned' | 'not present';
type cardmarket = {
    url: string;
    updatedAt: string;
    prices: {
        averageSellPrice: number;
        avg1: number;
        avg7: number;
        avg30: number;
        lowPrice: number;
        lowPriceExPlus: number;
        reverseHoloAvg1: number;
        reverseHoloAvg7: number;
        reverseHoloAvg30: number;
        reverseHoloLow: number;
        reverseHoloSell: number;
        reverseHoloTrend: number;
        trendPrice: number;
    };
};
