
import Container from "react-bootstrap/esm/Container";
import "../Gallery/gallery.css";

const Gallery = () => {
    return (
        <>
            <Container>
                <h1 style={{ textAlign: 'center' }}>New realeased Products for Women</h1>
                <p style={{ textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quos?</p>
                <div className="gallery">
                    <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
                    <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />
                </div>

            </Container>

        </>
    );
};

export default Gallery;