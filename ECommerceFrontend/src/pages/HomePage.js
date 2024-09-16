import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";
import Home from "../features/common/HomePage";

function HomePage() {
    return ( 
        <div>
            <NavBar>
                <Home></Home>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default HomePage;