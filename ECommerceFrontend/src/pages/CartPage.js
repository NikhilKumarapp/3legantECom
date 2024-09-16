import Cart from "../features/cart/Cart";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import Home from "../features/common/HomePage";
import ProductList from "../features/product/components/ProductList";

function CartPage() {
    return <div>
        <NavBar>
        <Cart></Cart>  
        </NavBar>
        <Footer></Footer>
        
    </div>;
}

export default CartPage;