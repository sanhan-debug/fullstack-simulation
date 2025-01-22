
import Container from 'react-bootstrap/esm/Container'
import '../MenProducts/men.css'

function MenProduct() {
    return (
        <>

            <Container className='card-section'>
                <div className="header-text">
                    <h1>
                        New realeased Products for Men</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className="men-cards">
                    <div className="men-card">
                        <img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="" />
                        <h3>Long Sleeve shirt</h3>
                        <h2>$150.00</h2>
                    </div>
                    <div className="men-card">
                        <img src="https://preview.colorlib.com/theme/shop/img/l2.jpg" alt="" />
                        <h3>Long Sleeve shirt</h3>
                        <h2>$150.00</h2>
                    </div>
                    <div className="men-card">
                        <img src="https://preview.colorlib.com/theme/shop/img/l3.jpg" alt="" />
                        <h3>Long Sleeve shirt</h3>
                        <h2>$150.00</h2>
                    </div>
                    <div className="men-card">
                        <img src="https://preview.colorlib.com/theme/shop/img/l4.jpg" alt="" />
                        <h3>Long Sleeve shirt</h3>
                        <h2>$150.00</h2>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MenProduct
