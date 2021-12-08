import styled from 'styled-components';

export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    margin-top: 8px;
    border-radius: 5px;
    padding: 0 0 0 5px;
    cursor: pointer;

    button {
        background-color: inherit;
        color: inherit;
        font-size: 16px;
        height: 100%;
        width: 100%;
    }

    svg {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 0 5px 5px 0;
        padding: 5px 0;
        width: 34px;
    }
`;
