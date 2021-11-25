import styled from 'styled-components';

export const MainHomeDisplay = styled.main`
    margin: 20px auto;

    .banner-container {
        display: flex;
        width: 100%;
    }

    .banner {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 600px;
        overflow: hidden;
        background-color: rgba(24, 24, 24, 0.8);
        transition: background-color 500ms ease-in-out;

        &:hover {
            background-color: transparent;

            img {
                transform: scale(1.1);
            }
        }
    }

    img {
        transition: transform 500ms ease-in-out;
    }

    .logo {
        width: 220px;
        display: block;
        position: absolute;
        z-index: -1;
    }

    .banner-img {
        width: 100%;
        height: 100%;
        max-height: 700px;
        object-fit: cover;
        position: relative;
        z-index: -2;
    }

    .show {
        background-color: transparent;

        img {
            transform: scale(1.1);
        }
    }
`;
