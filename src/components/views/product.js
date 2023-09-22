//Stateless
// React Hook
import { useState } from "react";
function Product(props) {
    const product = props.product;
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count+1);
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{count}</p>
            <button onClick={add} type="button">Add</button>
        </div>
    )
}
export default Product;