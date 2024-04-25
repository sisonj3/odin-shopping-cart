import Product from './Product'
import { useOutletContext } from 'react-router-dom';

function Shop() {
    const [callbackFuntion, products] = useOutletContext();

    console.log(products);

    return (
        <div>
            <h1>Shop Page</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Product
                            cartFunction={callbackFuntion}
                            name={product.title}
                            img={product.image}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Shop;