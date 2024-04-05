import { Link } from 'react-router-dom';
import { useCart } from './Builders/CartBuilder.jsx';

function ShoppingHeader () {
    const {cart} = useCart();
    const getTotalAmount = () => {
        let t = 0;
        for (const p of cart.products) {
            t += p.quantity;
        }
        return t;
    };
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
                    <Link to={'/cart'} style={{display:"flex"}}>
                        Shopping Cart 
                        <div id = "shopping-count">{getTotalAmount()}</div>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default ShoppingHeader;