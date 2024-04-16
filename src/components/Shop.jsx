import Product from './Product'
import { useOutletContext } from 'react-router-dom';

function Shop() {
    const callbackFuntion = useOutletContext();

    return (
        <div>
            <h1>Shop Page</h1>
            <Product
                cartFunction={callbackFuntion}/>
        </div>
    )
}

export default Shop;