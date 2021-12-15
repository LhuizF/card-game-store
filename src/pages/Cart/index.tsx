import React from 'react';

import { HeadCard, ItemCard, SetAmount } from './styled';

import {
    MdAddCircleOutline,
    MdRemoveCircleOutline,
    MdDelete
} from 'react-icons/md';

import MainContainer from '../../components/containers/MainContainer';

export default function Cart(): JSX.Element {
    return (
        <MainContainer>
            <>
                <h2>Carrinho</h2>
                <HeadCard>
                    <p>Card</p>
                    <p>Nome</p>
                    <p>Quantidade</p>
                    <p>unidade</p>
                    <p>Total</p>
                </HeadCard>
                <ItemCard>
                    <div>
                        <img
                            src="https://c1.scryfall.com/file/scryfall-cards/large/front/4/a/4a86f291-ad36-4b3f-a27c-f09a59b6e960.jpg?1632719822"
                            alt=""
                        />
                    </div>
                    <div>Nome da cartinha</div>
                    <SetAmount>
                        <button>
                            <MdRemoveCircleOutline size={24} />
                        </button>
                        <p>1</p>
                        <button>
                            <MdAddCircleOutline size={24} />
                        </button>
                    </SetAmount>
                    <div>R.50</div>
                    <div>
                        r 150
                        <button>
                            <MdDelete size={22} color="#CD0D0C" />
                        </button>
                    </div>
                </ItemCard>
            </>
        </MainContainer>
    );
}
