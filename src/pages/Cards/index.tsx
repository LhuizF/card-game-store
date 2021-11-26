import React, { useEffect } from 'react';
import axios from 'axios';

import { CardsList } from './styled';

interface Set {
    block?: string;
    booster?: string[];
    code: string;
    name: string;
    onlineOnly: false;
    releaseDate: Date;
    type: string;
}

export default function Cards(): JSX.Element {
    useEffect(() => {
        async function getData() {
            const { data } = await axios.get(
                'https://api.magicthegathering.io/v1/sets'
            );

            const sets = data.sets.filter((set: Set) => {
                return set.type === 'expansion';
            });

            sets.sort((a: Set, b: Set) => {
                const aa = new Date(a.releaseDate);
                const bb = new Date(b.releaseDate);
                if (aa < bb) return 1;
                return -1;
            });
            console.log(sets);
        }

        getData();
    });

    return (
        <CardsList>
            <div className="card-container">
                <div className="card-img-container">
                    <img src="" alt="" />
                </div>
                <div className="card-details">
                    <h3></h3>
                    <p>typo</p>
                    <p>Preço</p>
                </div>
                <button>Adicionar ao carrinho</button>
            </div>
        </CardsList>
    );
}
