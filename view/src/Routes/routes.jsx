
import Root from "../Components/Root";
import AddPage from "../Pages/AddPage";
import Basket from "../Pages/Basket";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";



const ROUTES = [
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/addpage",
                element:<AddPage/>
            },
            {
                path:"/detail/:id",
                element:<Detail/>
            },
            {
                path:"/basket",
                element:<Basket/>
            }

        ]
    }
]

export default ROUTES