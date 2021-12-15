import { Card } from '../../interfaces/card';

export function addItem(payload: Card) {
    return {
        type: 'ADD_ITEM',
        payload
    };
}

export function removeItem(payload: any) {
    return {
        type: 'REMOVE_ITEM',
        payload
    };
}
