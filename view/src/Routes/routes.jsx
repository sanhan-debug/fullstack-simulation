
import Root from "../Components/Root";
import AddPage from "../Pages/AddPage";
import Basket from "../Pages/Basket";
import Detail from "../Pages/Detail";
import Favorites from "../Pages/Favorites";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";



const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/addpage",
                element: <AddPage />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/*",
                element: <NotFound />
            },
            {
                path: "/favorites",
                element: <Favorites />
            }

        ]
    }
]

export default ROUTES