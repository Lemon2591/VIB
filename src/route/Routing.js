import Home from "../home/Home";
import HouseLandPage from "../pages/HouseLandPage";
const Routing = [
    {
        path: "/",
        Component: Home,
        exact: true,
    }, {
        path: "/vaymuanha",
        Component: HouseLandPage,

    },

];

export default Routing;
