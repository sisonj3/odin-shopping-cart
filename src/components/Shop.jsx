import Product from './Product'
import { useOutletContext } from 'react-router-dom';

function Shop() {
    const [callbackFuntion, products] = useOutletContext();

    console.log(products);

    return (
        <div>
            <h1>Shop Page</h1>
            <Product
                cartFunction={callbackFuntion}/>
        </div>
    )
}

export default Shop;