const inicialState: InicialState = {
    listCard: []
};

interface InicialState {
    listCard: any[];
}

interface Action {
    type: string;
    payload?: any;
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
