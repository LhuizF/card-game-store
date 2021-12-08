import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { CardMagic } from '../../interfaces/card';

import { PageControl, ButtonNavigate } from './styled';
import {
    MdOutlineAddShoppingCart,
    MdNavigateNext,
    MdNavigateBefore
} from 'react-icons/md';

import MainContainer from '../../components/containers/MainContainer';
import CardContainer from '../../components/containers/CardContainer';
import ButtonIcon from '../../components/containers/Button';

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
    digital: boolean;
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

    const getPage = useCallback(
        async (code: string) => {
            const url = `https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&order=set&page=${page}&q=e%3A${code}`;
            try {
                const { data } = await axios.get(
                    url + '+lang%3Apt&unique=prints'
                );
                setCardsList(data);
            } catch (e) {
                const { data } = await axios.get(url);
                setCardsList(data);
            }
        },
        [page]
    );

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get('https://api.scryfall.com/sets');

            const expansions: Expansion[] = data.data.filter(
                (set: Expansion) => {
                    return (
                        set.set_type === 'expansion' &&
                        set.card_count > 0 &&
                        set.digital == false
                    );
                }
            );

            setExpansions(expansions);
            getPage(expansions[numId].code);
        }

        getData();
    }, [getPage, numId]);

    if (cardsList === undefined || expansions === undefined) return <></>;

    return (
        <MainContainer>
            <>
                <div>
                    <h2>Selecionar expansão</h2>
                    <select
                        onChange={(e) => {
                            setPage(1);
                            setNumId(e.target.selectedIndex);
                        }}
                    >
                        {expansions.map((set: Expansion) => (
                            <option key={set.id}>{set.name}</option>
                        ))}
                    </select>
                </div>

                <PageControl>
                    <ButtonNavigate>
                        <button
                            onClick={() => {
                                if (page === 1) return;
                                window.scrollTo(0, 0);
                                setPage(page - 1);
                            }}
                        >
                            anterior
                        </button>
                    </ButtonNavigate>

                    <p>{page}</p>

                    <ButtonNavigate>
                        <button
                            onClick={() => {
                                if (!cardsList.has_more) return;
                                window.scrollTo(0, 0);
                                setPage(page + 1);
                            }}
                        >
                            próximo
                        </button>
                    </ButtonNavigate>
                </PageControl>

                <CardContainer>
                    <>
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
                                        <p>R$:{newCard.getPrice()}</p>
                                        <img
                                            src={expansions[numId].icon_svg_uri}
                                            alt=""
                                        />
                                    </div>
                                    <ButtonIcon color="#d9534f">
                                        <button
                                            onClick={() => console.log('aqui')}
                                        >
                                            Adicionar ao carrinho
                                        </button>
                                        <MdOutlineAddShoppingCart size={24} />
                                    </ButtonIcon>
                                </div>
                            );
                        })}
                    </>
                </CardContainer>
            </>
        </MainContainer>
    );
}

//
