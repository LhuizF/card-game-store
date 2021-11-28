import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { CardsList } from './styled';
import { CardMagic } from '../../interfaces/card';

import { MdOutlineAddShoppingCart } from 'react-icons/md';

// usar class abstrata
interface Expansion {
    card_count: number;
    code: string;
    icon_svg_uri: string;
    id: string;
    name: string;
    released_at: string;
    search_uri: string;
    set_type: string;
    next_page: string;
    numID: number;
}

interface CardLIst {
    has_more: boolean;
    total_cards: number;
    next_page: string;
    data: CardMagic[];
}

export default function DisplayCards(): JSX.Element {
    const [expansions, setExpansions] = useState<Expansion[]>(); // lista com toda as expansão
    const [numId, setNumId] = useState(0); // número atual da expansão
    const [cardsList, setCardsList] = useState<CardLIst>(); // lista de cartas da expansão atual
    const [page, setPage] = useState(1); // numero atual da pagina sendo exibida

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get('https://api.scryfall.com/sets');

            const expansions: Expansion[] = data.data.filter(
                (set: Expansion) => {
                    return set.set_type === 'expansion' && set.card_count > 0;
                }
            );

            expansions.forEach(function (a: Expansion, b: number): void {
                a.numID = b;
            });
            setExpansions(expansions);

            if (expansions === undefined) return;
            const url = expansions[numId].search_uri;
            nextPage(url);
        }

        getData();
    }, [numId]);

    const nextPage = async (url: string) => {
        const { data } = await axios.get(url);
        setCardsList(data);
    };

    const prevPage = async () => {
        const { data } = await axios.get(
            `https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=set&page=${
                page - 1
            }&q=e%3A${expansions ? expansions[numId].code : null}&unique=prints`
        );
        setCardsList(data);
    };

    if (cardsList === undefined || expansions === undefined) return <></>;

    return (
        <CardsList>
            <div>
                <h2>Selecionar expansão</h2>
                <select
                    onChange={(e) => {
                        setPage(1);
                        setNumId(e.target.selectedIndex);
                    }}
                >
                    {expansions.map((set: Expansion) => (
                        <option key={set.id} value={set.numID}>
                            {set.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="cards-container">
                {cardsList.data.map((card: CardMagic) => {
                    const newCard = new CardMagic(card);

                    return (
                        <div className="card" key={newCard.getId()}>
                            <div className="card-img-container">
                                <img src={newCard.getImage()} alt="" />
                            </div>
                            <h3>{newCard.getName()}</h3>
                            <div className="card-details">
                                {/* <p>tipo: {newCard.getType()}</p> */}
                                <p>Price: {newCard.getPrice()}</p>
                                <img
                                    src={expansions[numId].icon_svg_uri}
                                    alt=""
                                />
                            </div>
                            <div className="btn-add-cart">
                                <button>Adicionar ao carrinho</button>
                                <MdOutlineAddShoppingCart size={24} />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="pages-controles">
                <button
                    onClick={() => {
                        if (page === 1) return;
                        window.scrollTo(0, 0);
                        setPage(page - 1);
                        prevPage();
                    }}
                >
                    anterior
                </button>
                <p>{page}</p>
                <button
                    onClick={() => {
                        if (!cardsList.has_more) return;
                        window.scrollTo(0, 0);
                        setPage(page + 1);
                        nextPage(cardsList.next_page);
                    }}
                >
                    próximo
                </button>
            </div>
        </CardsList>
    );
}
