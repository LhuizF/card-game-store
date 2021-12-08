import styled from 'styled-components';
import Colors from '../../../style/Colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .card {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
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
    }
`;
