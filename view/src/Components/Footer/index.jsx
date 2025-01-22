
import "../Footer/footer.css"
function Footer() {
  return (

    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="footer-column newsletter">
        <h3>Newsletter</h3>
        <p>Stay updated with our latest</p>
        <form action="#">
          <input type="email" placeholder="Enter Email" />
          <button type="submit">&rarr;</button>
        </form>
      </div>
      <div className="footer-column instagram-feed">
        <h3>Instagram Feed</h3>
        <div>
          <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="Image 1" />
          <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="Image 2" />
          <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="Image 3" />
          <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="Image 4" />
          <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="Image 5" />
          <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="Image 6" />
          <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="Image 7" />
          <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="Image 8" />
        </div>
      </div>
      <div className="footer-column social-icons">
        <h3>Follow Us</h3>
        <p>Let us be social</p>
        <a href="#">&#xf09a;</a>
        <a href="#">&#xf099;</a>
        <a href="#">&#xf16d;</a>
        <a href="#">&#xf0d5;</a>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy; 2025 All rights reserved | This template is made with
           <a href="#">Colorlib</a>
        </p>
      </div>
    </footer>

  )
}

export default Footer