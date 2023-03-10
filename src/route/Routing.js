import Home from "../home/Home";
import HouseLandPage from "../pages/HouseLandPage";
import VayKdTheChap from "../pages/VayKdTheChap";
import VayMuaOTo from "../pages/VayMuaOTo";
import VayMuaNhaDuAn from "../pages/VayMuaNhaDuAn";
import VayTieuDung from "../pages/VayTieuDung";
import Combo from "../pages/Combo";
const Routing = [
    {
        path: "/",
        Component: Home,
        exact: true,
    },
    {
        path: "/vaymuanha",
        Component: HouseLandPage,

    },
    {
        path: "/vaykinhdoanhthechap",
        Component: VayKdTheChap,

    },
    {
        path: "/vaymuaoto",
        Component: VayMuaOTo,

    },
    {
        path: "/vaymuanhaduan",
        Component: VayMuaNhaDuAn,

    },
    {
        path: "/vaytieudungthechap",
        Component: VayTieuDung,

    },
    {
        path: "/combouudai",
        Component: Combo,

    },

];

export default Routing;
