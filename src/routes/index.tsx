import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

export default function MainRoutes(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}
