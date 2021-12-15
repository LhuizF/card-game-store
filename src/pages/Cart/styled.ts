import styled from 'styled-components';

export const HeadCard = styled.div`
    display: grid;
    width: 98%;
    grid-template-columns: repeat(5, 1fr);
    font-size: 18px;
    font-weight: 600;

    p {
        padding: 0 20px;
        text-align: center;

        &:last-child {
            text-align: left;
            padding: 0 10px;
        }
    }
`;

export const ItemCard = styled.div`
    display: grid;
    width: 98%;
    grid-template-columns: repeat(5, 1fr);
    padding: 16px 0;

    img {
        width: 100px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        height: fit-content;

        &:last-child {
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const SetAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        padding: 5px 10px;
        border: 1px solid black;
        margin: 0 8px;
    }
`;
