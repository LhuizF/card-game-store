import styled from 'styled-components';
import Colors from '../../style/Colors';

export const CardsList = styled.main`
    margin: 20px auto;
    width: 98%;
    background-color: ${Colors.backgroundContainer};
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cards-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .card {
            width: 200px;
            display: flex;
            flex-direction: column;
            padding: 10px 20px;
            margin: 5px;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;

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
                cursor: pointer;

                button {
                    background-color: inherit;
                    color: inherit;
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
    }

    .pages-controles {
        display: flex;
        width: fit-content;
        align-items: center;
        margin: 20px 0;

        p {
            padding: 5px 10px;
        }

        button {
            background-color: #059862;
            color: #fff;
            padding: 8px;

            &:first-child {
                border-radius: 6px 0 0 6px;
            }

            &:last-child {
                border-radius: 0 6px 6px 0;
            }

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`;
