import { useCart } from "./CartBuilder"

function CartBox (props) {
    const {addOne, removeOne} = useCart();
    return(
        <div className = "cart-box">
            <p>Item: {props.name}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Total Price: {props.totalPrice}</p>
            <button className = "change-button" type="button" onClick={() => {addOne(props.id)}}>Add to Cart</button>
            <button className = "change-button" type="button" onClick={() => {removeOne(props.id)}}>Remove from Cart</button>
        </div>
    );
}

export default CartBox;