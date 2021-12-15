import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { Set, SetMagic } from '../interfaces/Set';

export default function useApiReq<T>(tcg: T | string) {
    const [sets, setSets] = useState<SetMagic[]>([]);
    const [cardsList, setCardsList] = useState<CardList>();

    const getCardsMagic = useCallback(async (code: string, page: number) => {
        const url = `https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=set&page=${page}&q=e%3A${code}`;
        try {
            const { data } = await axios.get(url + '+lang%3Apt&unique=prints');
            setCardsList(data);
        } catch (e) {
            const { data } = await axios.get(url);
            setCardsList(data);
        }
    }, []);

    useEffect(() => {
        async function getData() {
            if (tcg === 'pokemon') {
                const { data } = await axios.get(
                    'https://api.pokemontcg.io/v2/sets'
                );

                data.data.sort((a: any, b: any) => {
                    return a.releaseDate < b.releaseDate ? 1 : -1;
                });

                //setSets(data.data);
                //console.log(expansions);
                // getPage(expansions[numId].id);
                return;
            }

            if (tcg === 'magic') {
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

                setSets(expansions);
                getCardsMagic(expansions[0].code, 1);
            }
        }

        getData();
    }, [tcg, getCardsMagic]);

    return {
        sets,
        cardsList,
        setCardsList,
        getCardsMagic
    };
}
