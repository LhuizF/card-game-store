import styled from 'styled-components';
import Colors from '../../style/Colors';

export const CardsList = styled.main`
    margin: 20px auto;
    width: 98%;
    background-color: ${Colors.backgroundContainer};
    color: #000;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .card-container {
        width: 200px;
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        text-align: center;

        .card-img-container {
            img {
                width: 100%;
            }
        }

        .card-details {
            display: flex;
            justify-content: space-between;
            width: 80%;

            img {
                width: 20px;
            }
        }

        .btn-add-cart {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #d9534f;
            width: 100%;
            color: #fff;
            margin-top: 8px;
            border-radius: 5px;
            padding: 0 0 0 5px;

            button {
                background-color: inherit;
                color: inherit;
                border: none;
                font-size: 16px;
            }

            svg {
                background-color: #ff605c;
                border-radius: 0 5px 5px 0;
                padding: 5px 0;
                width: 34px;
            }
        }
    }
`;
