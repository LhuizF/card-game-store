import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MainHomeDisplay } from './styled';
import useInterval from '../../hooks/useInterval';

export default function Home(): JSX.Element {
    const [id, setId] = useState(0);

    useInterval(() => {
        const banners = document.querySelectorAll('.banner');

        banners.forEach((banner) => {
            banner.classList.remove('show');
        });

        banners[id].classList.add('show');

        if (id === banners.length - 1) {
            setId(0);
        } else {
            setId(id + 1);
        }
    }, 2500);

    return (
        <MainHomeDisplay>
            <div className="banner-container">
                <Link to="magic" className="banner">
                    <img
                        className="logo"
                        src="https://www.icomedia.eu/wp-content/uploads/2021/03/MTG_Primary_LL_2c_Black_LG_V12-1.png"
                    />
                    <img
                        className="banner-img"
                        src="https://media.wizards.com/images/magic/daily/wallpapers/ArchangelofThune_M14_1280x960_Wallpaper.jpg"
                    />
                </Link>
                <Link to="pokemon" className="banner">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pokémon_Trading_Card_Game_logo.svg/1200px-Pokémon_Trading_Card_Game_logo.svg.png"
                    />
                    <img
                        className="banner-img"
                        src="https://assets.pokemon.com/assets//cms2/img/trading-card-game/_downloads/xy5/xy05-wallpaper1-1920-en.jpg"
                    />
                </Link>
                <Link to="yugioh" className="banner">
                    <img
                        className="logo"
                        src="https://static.wikia.nocookie.net/yugioh/images/6/61/Yugioh_Logo.png"
                    />
                    <img
                        className="banner-img"
                        src="https://cutewallpaper.org/21/yu-gi-oh-exodia-wallpaper/Yugioh-Wallpapers-Free-by-ZEDGEa_cent_.jpg"
                    />
                </Link>
            </div>
        </MainHomeDisplay>
    );
}
