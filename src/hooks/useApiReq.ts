import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { SetMagic, SetPokemon } from '../interfaces/Set';
import { CardPokemon, CardMagic } from '../interfaces/Card';

type SetTypes = SetPokemon | SetMagic;
type CardTypes = CardPokemon | CardMagic;

export default function useApiReq() {
    const [sets, setSets] = useState<SetTypes[]>([]);
    const [cardsList, setCardsList] = useState<CardTypes[]>();

    const { tcg } = useParams();

    const getCardsPokemon = useCallback(async (id: string, page: number) => {
        const url = `https://api.pokemontcg.io/v2/cards/?q=set.id:${id}&page=${page}`;

        const { data } = await axios.get(url);

        const CardList = data.data.map(
            (card: CardPokemon) => new CardPokemon(card)
        );
        setCardsList(CardList);
    }, []);

    const getCardsMagic = useCallback(async (code: string, page: number) => {
        const url = `https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=set&page=${page}&q=e%3A${code}`;
        try {
            const { data } = await axios.get(url + '+lang%3Apt&unique=prints');

            const CardList = data.data.map(
                (card: CardMagic) => new CardMagic(card)
            );

            setCardsList(CardList);
        } catch (e) {
            const { data } = await axios.get(url);
            const CardList = data.data.map(
                (card: CardMagic) => new CardMagic(card)
            );

            setCardsList(CardList);
        }
    }, []);

    const getCardsYugioh = useCallback(async (code: string, page: number) => {
        console.log('Em breve');
    }, []);

    const setNewTcg = useCallback(
        async (code: string, page: number, tcg: string = '') => {
            if (tcg === 'pokemon') getCardsPokemon(code, page);
            if (tcg === 'magic') getCardsMagic(code, page);
            if (tcg === 'yugioh') getCardsYugioh(code, page);
        },
        []
    );

    useEffect(() => {
        async function getData() {
            switch (tcg) {
                case 'pokemon': {
                    const { data } = await axios.get(
                        'https://api.pokemontcg.io/v2/sets'
                    );

                    data.data.sort((a: any, b: any) => {
                        return a.releaseDate < b.releaseDate ? 1 : -1;
                    });

                    const setsPokemon = data.data.map(
                        (set: SetPokemon) => new SetPokemon(set)
                    );

                    setSets(setsPokemon);
                    getCardsPokemon(data.data[5].id, 1);
                    return;
                }

                case 'magic': {
                    const { data } = await axios.get(
                        'https://api.scryfall.com/sets'
                    );

                    const expansions: SetMagic[] = data.data.filter(
                        (set: SetMagic) => {
                            return (
                                set.set_type === 'expansion' &&
                                set.card_count > 0 &&
                                set.digital == false
                            );
                        }
                    );

                    const setsMagic = expansions.map(
                        (set: SetMagic) => new SetMagic(set)
                    );

                    setSets(setsMagic);
                    getCardsMagic(expansions[0].code, 1);
                    return;
                }

                case 'yugioh':
                    const { data } = await axios.get(
                        'https://db.ygoprodeck.com/api/v7/cardsets.php'
                    );
                    console.log(data);
                    return;

                default:
                    console.log('erro');
            }
        }

        getData();
    }, [tcg, getCardsMagic, getCardsPokemon]);

    return {
        sets,
        cardsList,
        setCardsList,
        getCardsMagic,
        setNewTcg
    };
}
