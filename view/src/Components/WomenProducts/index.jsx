import Container from 'react-bootstrap/esm/Container'
import '../WomenProducts/women.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { favoriteContext } from '../../Context/favoriteContext'
import { CiHeart } from "react-icons/ci";

function WomenProducts() {

    let [data, setData] = useState([])
    let { favorite, setFavorite } = useContext(favoriteContext)

    function getData() {
        axios.get('http://localhost:3000/products')
            .then((res) => setData(res.data))
    }

    function handleAddFavorite(product) {
        let findFavorite = favorite.find(item => item.id == product.id)
        if (findFavorite) {
            alert("mehsul artiq favdir")
        } else {
            setFavorite([...favorite, product])
        }
    }

    console.log(data)
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Container className='women-section'>
                <div className="header-text">
                    <h1>
                        New realeased Products for Men</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className="women-cards">
                    {
                        data.map((product) => (
                            <div className="women-card" key={product.id}>
                                <img src={product.image} alt="" />
                                <h3>{product.name}</h3>
                                <h2>${product.price}</h2>
                                 <a href="" onClick={()=>handleAddFavorite(product)}> <CiHeart /></a>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}

export default WomenProducts
