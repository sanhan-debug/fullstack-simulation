// import Container from 'react-bootstrap/Container';
import '../Hero/hero.css'
function Hero() {
  return (
  <>
    <div className="background">
        <div className="img">
            <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
        </div>

        <div className="text">
            <h1 ><span>Flat</span> 75%Off</h1>
            <h1 className='second'>IT’S HAPPENING <br />
            THIS SEASON!</h1>
            <a href="#">PURCHASE NOW</a>
        </div>
    </div>
  
  </>
  )
}

export default Hero
