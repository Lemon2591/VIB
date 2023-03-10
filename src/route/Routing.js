import Home from "../home/Home";
import DefaultLayout from "../layout/DefaultLayout";
import Loan from "../pages/Loan";
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
    path: "/vaykinhdoanh",
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
    path: "/vaytieudung",
    dataKey: "Consumption",
    Component: Loan,
    DefaultLayout: DefaultLayout,
  },
];

export default Routing;
