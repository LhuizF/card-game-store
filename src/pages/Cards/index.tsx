import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { CardsList } from './styled';
import { CardMagic } from '../../interfaces/card';

import { MdOutlineAddShoppingCart } from 'react-icons/md';

// usar class abstrata
interface Set {
    card_count: number;
    code: string;
    icon_svg_uri: string;
    id: string;
    name: string;
    released_at: string;
    search_uri: string;
    set_type: string;
}

export default function DisplayCards(): JSX.Element {
    const [cards, setCards] = useState<CardMagic[]>([]);
    const [currentSet, setCurrentSet] = useState<Set>();
    const [numId, setNumId] = useState(0);

    const getSet = useCallback(
        async (sets: Set[]) => {
            setCurrentSet(sets[numId]);

            const { data } = await axios.get(sets[numId].search_uri);

            setCards(data.data);
        },
        [numId, setCurrentSet]
    );

    useEffect(() => {
        async function getData() {
            const { data } = await axios.get('https://api.scryfall.com/sets');

            const sets: Set[] = data.data.filter((set: Set) => {
                return set.set_type === 'expansion' && set.card_count > 0;
            });

            getSet(sets);
        }

        getData();
    }, [getSet]);

    return (
        <CardsList>
            {cards.length > 0
                ? cards.map((card: CardMagic) => {
                      const newCard = new CardMagic(card);

                      return (
                          <div className="card-container" key={newCard.getId()}>
                              <div className="card-img-container">
                                  <img src={newCard.getImage()} alt="" />
                              </div>
                              <h3>{newCard.getName()}</h3>
                              <div className="card-details">
                                  {/* <p>tipo: {newCard.getType()}</p> */}
                                  <p>Price: {newCard.getPrice()}</p>
                                  <img src={currentSet?.icon_svg_uri} alt="" />
                              </div>
                              <div className="btn-add-cart">
                                  <button>Adicionar ao carrinho</button>
                                  <MdOutlineAddShoppingCart size={24} />
                              </div>
                          </div>
                      );
                  })
                : null}
        </CardsList>
    );
}
