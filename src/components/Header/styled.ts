import styled from 'styled-components';
import Colors from '../../style/Colors';

export const MainHeader = styled.header`
    background-color: ${Colors.mainColor};
    display: flex;

    .logo-container {
        height: 104px;
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100px;
        }
    }
`;

export const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    li {
        list-style: none;
    }

    .top-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 2;
        width: 95%;

        ul {
            display: flex;
            li {
                display: flex;
                align-items: flex-end;
                margin: 0 15px;
                font-size: 20px;

                svg {
                    margin-right: 4px;
                }
            }
        }
    }

    .cards-brands {
        display: flex;
        background-color: #878484;

        li {
            width: 100%;
            margin: 0;
            font-size: 20px;
            padding: 7px;
            text-align: center;
            transition: all 300ms ease-in-out;

            a {
                display: inline-block;
                width: 100%;
            }

            &:hover {
                background-color: #fff;
                color: #000;
            }
        }
    }
`;
