function Product({ cartFunction }) {

    const addAmountToCart = (event) => {
        let amount = event.target.parentNode.children[1].lastChild.value;
        cartFunction(amount);
        event.preventDefault();
    };

    return (
        <div>
            <h2>Product Name</h2>

            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" defaultValue={0} min={0}/>
            </div>

            <button onClick={addAmountToCart}>Add to cart</button>
        </div>
    )
}

export default Product;