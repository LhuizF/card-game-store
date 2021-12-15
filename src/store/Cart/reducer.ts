import { Card } from '../../interfaces/card';

const inicialState: InicialState = {
    listCard: []
};

interface InicialState {
    listCard: Card[];
}

interface Action {
    type: string;
    payload?: Card;
}

function CartReducer(state = inicialState, action: Action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const newState = { ...state };
            if (action.payload === undefined) return;

            newState.listCard.push(action.payload);

            console.log(newState);
            return newState;
        }

        case 'REMOVE_ITEM': {
            console.log('Removendo');
            return state;
        }

        default:
            return state;
    }
}

export default CartReducer;
