import { Link } from 'react-router-dom';

function ItemBox(props) {
    //console.log(props.id);
    return (
        <Link className = "item-box" to={`/shopping/${props.id}`}>
                <img src = {props.imageURL}></img>
                <p>{props.text}</p>
                <p>${props.price}</p>
        </Link>
    )
};

export default ItemBox;