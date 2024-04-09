import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <h1>Nav Bar</h1>

            <div>
                <button>Cart</button>
                <span>1 item</span>
            </div>

            <Link to="home">Home Page</Link>
            <Link to="shop">Shop Page</Link>
        </nav>
    )
}

export default Navigation;