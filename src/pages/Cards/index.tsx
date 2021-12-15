import React, { useEffect, useState, useCallback } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Card } from '../../interfaces/card';
import { PageControl, ButtonNavigate } from './styled';
import MainContainer from '../../components/containers/MainContainer';
import CardContainer from '../../components/containers/CardContainer';
import ButtonIcon from '../../components/containers/Button';

import { addItem } from '../../store/Cart/actions';

import useApiReq from '../../hooks/useApiReq';

import { Set } from '../../interfaces/Set';

export default function DisplayCards(): JSX.Element {
    const [page, setPage] = useState(1);
    const [idSet, setIdSet] = useState(0);
    const [currentSet, setCurrentSet] = useState<Set>();

    const dispatch = useDispatch();

    const { tcg } = useParams();

    const { sets, cardsList, getCardsMagic } = useApiReq(tcg);

    useEffect(() => {
        if (sets.length <= 0) return;

        setCurrentSet(new Set(sets[idSet]));
    }, [sets, idSet]);

    if (
        cardsList === undefined ||
        sets === undefined ||
        currentSet === undefined
    )
        return <>Deu ruim</>;

    return (
        <MainContainer>
            <>
                <div>
                    <h2>Selecionar expansão</h2>
                    <select
                        onChange={(e) => {
                            setPage(1);
                            setIdSet(e.target.selectedIndex);
                            getCardsMagic(sets[e.target.selectedIndex].code, 1);
                        }}
                    >
                        {sets.map((set: Set) => {
                            const newSet = new Set(set);
                            return (
                                <option key={newSet.getCode()}>
                                    {newSet.getName()}
                                </option>
                            );
                        })}
                    </select>
                    {currentSet.getReleased()}
                </div>

                <PageControl>
                    <ButtonNavigate>
                        <button
                            onClick={() => {
                                if (page === 1) return;
                                window.scrollTo(0, 0);
                                setPage(page - 1);
                                getCardsMagic(sets[idSet].code, page - 1);
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
                                getCardsMagic(sets[idSet].code, page + 1);
                            }}
                        >
                            próximo
                        </button>
                    </ButtonNavigate>
                </PageControl>

                <CardContainer>
                    <>
                        {cardsList.data.map((card: Card) => {
                            const newCard = new Card(card);

                            return (
                                <div className="card" key={newCard.getId()}>
                                    <div className="card-img-container">
                                        <img src={newCard.getImage()} alt="" />
                                    </div>
                                    <h3>{newCard.getName()}</h3>
                                    <div className="card-details">
                                        <p>R$:{newCard.getPrice()}</p>
                                        <img
                                            src={currentSet.getIcon()}
                                            alt=""
                                        />
                                    </div>
                                    <ButtonIcon color="#d9534f">
                                        <button
                                            onClick={() =>
                                                dispatch(addItem(newCard))
                                            }
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
