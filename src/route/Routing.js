import Home from "../home/Home";
import DefaultLayout from "../layout/DefaultLayout";
import Loan from "../pages/Loan";
import Combo from "../pages/Combo";
const Routing = [
  {
    path: "/",
    dataKey: null,
    Component: Home,
    exact: true,
    DefaultLayout: null,
  },
  {
    path: "/vaymuanha",
    dataKey: "Real estate",
    Component: Loan,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/vaykinhdoanhthechap",
    dataKey: "Business",
    Component: Loan,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/vaymuaoto",
    dataKey: "Car",
    Component: Loan,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/vaymuanhaduan",
    dataKey: "House",
    Component: Loan,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/vaytieudungthechap",
    dataKey: "Consumption",
    Component: Loan,
    DefaultLayout: DefaultLayout,
  },
  {
    path: "/combouudai",
    dataKey: "Consumption",
    Component: Combo,
    DefaultLayout: null,
  },
];

export default Routing;
