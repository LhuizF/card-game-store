import styled from 'styled-components';
import Colors from '../../style/Colors';

export const PageControl = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 20px 0;

    p {
        padding: 5px 10px;
    }
`;

export const ButtonNavigate = styled.div`
    display: flex;
    background-color: #059862;
    border-radius: 5px;
    padding: 5px 10px;

    button {
        font-size: 16px;
        background-color: transparent;
        padding: 0 5px;
    }
`;
