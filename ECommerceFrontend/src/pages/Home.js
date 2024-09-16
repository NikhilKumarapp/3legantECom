import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import NewBar from "../features/navbar/NewBar";
import ProductList from "../features/product/components/ProductNewList";
import Footer from "../features/common/Footer";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;