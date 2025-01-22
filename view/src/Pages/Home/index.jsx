import Gallery from "../../Components/Gallery"
import Hero from "../../Components/Hero"
import MenProduct from "../../Components/MenProducts"
import WomenProducts from "../../Components/WomenProducts"


function Home() {
    return (
        <>
            <Hero />
            <Gallery />
            <MenProduct/>
            <WomenProducts/>
        </>
    )
}

export default Home
