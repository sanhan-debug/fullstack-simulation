import Container from 'react-bootstrap/Container';
import '../Navbar/navbar.css'
import { IoMenu } from "react-icons/io5";

function Navbar() {
    return (
        <>
            <Container>
                <div className="navbar">
                    <div className="logo">
                        <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
                    </div>

                    <div className="links">

                        <ul>
                            <IoMenu className='menu' />
                            <li><a href="">HOME</a></li>
                            <li><a href="">CATEGORY</a></li>
                            <li><a href="">MEN</a></li>
                            <li><a href="">WOMEN</a></li>
                            <li><a href="">LATEST</a></li>
                            <li><a href="">PAGES</a></li>
                        </ul>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Navbar
