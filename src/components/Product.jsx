function Product() {
    return (
        <div>
            <h2>Product Name</h2>

            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" defaultValue={0} min={0}/>
            </div>

            <button>Add to cart</button>
        </div>
    )
}

export default Product;