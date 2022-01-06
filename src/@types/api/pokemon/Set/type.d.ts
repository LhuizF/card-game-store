interface SetPokemon {
    id: string;
    images: { symbol: string; logo: string };
    legalities: { unlimited: string; standard?: string; expanded?: string };
    name: string;
    printedTotal: number;
    ptcgoCode: string;
    releaseDate: string;
    series: string;
    total: number;
    updatedAt: string;
}
