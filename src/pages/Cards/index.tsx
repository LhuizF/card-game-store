import React, { useEffect, useState, useCallback } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PageControl, ButtonNavigate } from './styled';
import MainContainer from '../../components/containers/MainContainer';
import CardContainer from '../../components/containers/CardContainer';
import ButtonIcon from '../../components/containers/Button';

import { addItem } from '../../store/Cart/actions';

import useApiReq from '../../hooks/useApiReq';

import { SetMagic, SetPokemon } from '../../interfaces/Set';
import { CardMagic, CardPokemon } from '../../interfaces/Card';

type SetTypes = SetPokemon | SetMagic;
type CardTypes = CardPokemon | CardMagic;

export default function DisplayCards(): JSX.Element {
    const [page, setPage] = useState(1);
    const [idSet, setIdSet] = useState(0);
    const [currentSet, setCurrentSet] = useState<SetTypes>();

    const dispatch = useDispatch();

    const { tcg } = useParams();

    const { sets, cardsList, getCardsMagic, setNewTcg } = useApiReq();

    useEffect(() => {
        if (sets.length <= 0) return;

        setCurrentSet(sets[idSet]);
    }, [sets, idSet]);

    // melhorar
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
                            // aqui
                            setNewTcg(
                                sets[e.target.selectedIndex].getCode(),
                                1,
                                tcg
                            );
                        }}
                    >
                        {sets.map((set: SetMagic | SetPokemon) => {
                            return (
                                <option key={set.getCode()}>
                                    {set.getName()}
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
                                // aqui
                                getCardsMagic(sets[idSet].getCode(), page - 1);
                            }}
                        >
                            anterior
                        </button>
                    </ButtonNavigate>

                    <p>{page}</p>

                    <ButtonNavigate>
                        <button
                            onClick={() => {
                                // aqui
                                window.scrollTo(0, 0);
                                setPage(page + 1);
                                getCardsMagic(sets[idSet].getCode(), page + 1);
                            }}
                        >
                            próximo
                        </button>
                    </ButtonNavigate>
                </PageControl>

                <CardContainer>
                    <>
                        {cardsList.map((card: CardTypes) => (
                            <div className="card" key={card.getId()}>
                                <div className="card-img-container">
                                    <img src={card.getImage()} alt="" />
                                </div>
                                <h3>{card.getName()}</h3>
                                <div className="card-details">
                                    <p>R$:{card.getPrice()}</p>
                                    <img src={currentSet.getIcon()} alt="" />
                                </div>
                                <ButtonIcon color="#d9534f">
                                    <button
                                        onClick={() => dispatch(addItem(card))}
                                    >
                                        Adicionar ao carrinho
                                    </button>
                                    <MdOutlineAddShoppingCart size={24} />
                                </ButtonIcon>
                            </div>
                        ))}
                    </>
                </CardContainer>
            </>
        </MainContainer>
    );
}
