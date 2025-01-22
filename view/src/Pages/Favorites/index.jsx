import { useContext } from 'react'
import { favoriteContext } from '../../Context/favoriteContext';
import Container from 'react-bootstrap/esm/Container';
import { MdDelete } from "react-icons/md";


function Favorites() {


    let { favorite, setFavorite } = useContext(favoriteContext)

    function handleDeleteFavorite(id) {
        let filteredFavorite = favorite.filter(item => item.id !== id)
        setFavorite(filteredFavorite)
    }

    return (
        <Container className='women-section'>
            <div className="header-text">
                <h1>
                    Favorites</h1>
            </div>
            <div className="women-cards">
                {
                    favorite.map((product) => (
                        <div className="women-card" key={product.id}>
                            <img src={product.image} alt="" />
                            <h3>{product.name}</h3>
                            <h2>${product.price}</h2>
                            <a href="" onClick={() => handleDeleteFavorite(product)}> <MdDelete /></a>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default Favorites
