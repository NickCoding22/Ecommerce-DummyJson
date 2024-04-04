import { Link } from 'react-router-dom';

function ShoppingHeader () {
    return (
        <header>
            <Link to={`/`}>
                <h4>InnoCaption Eccommerce</h4>
            </Link>
            <nav id = "header-nav">
                <ul>
                    <Link to={'/shopping'}>
                        Products
                    </Link>
                </ul>
                <ul>
                    <Link to={'/cart'}>
                        Shopping Cart
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default ShoppingHeader;