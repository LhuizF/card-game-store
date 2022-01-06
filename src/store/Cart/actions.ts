export function addItem(payload: any) {
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
