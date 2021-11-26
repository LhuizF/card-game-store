import React from 'react';
import Logo from '../../card-logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

import { MainHeader, MenuContainer } from './styled';

export default function Header(): JSX.Element {
    return (
        <MainHeader>
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} />
                </Link>
            </div>

            <MenuContainer>
                <nav className="top-container">
                    <h2>Card Game Shop</h2>
                    <ul>
                        <li>
                            <FaUserCircle size={24} />
                            <Link to="login">Login</Link>
                        </li>
                        <li>
                            <FaShoppingCart size={24} />
                            <Link to="cart">Carrinho</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="cards-brands">
                    <li>
                        <Link to="cards/magic#">Magic</Link>
                    </li>
                    <li>
                        <Link to="cards/pokemon">Pokémon</Link>
                    </li>
                    <li>
                        <Link to="cards/yugioh">Yu-Gi-Oh!</Link>
                    </li>
                </ul>
            </MenuContainer>
        </MainHeader>
    );
}
