import { FaAccusoft, FaList, FaListAlt, FaMonero, FaProductHunt, FaShoppingCart, MdListAlt, MdOutlineCategory, MdOutlineDashboardCustomize, MdOutlineLocalOffer, MdOutlineSupervisedUserCircle, MdReceiptLong } from "react-icons/md";
import DiscountComponent from "../ProductMgt/Discount/Discount";

export const nav_data = [
    {
        id: 0,
        icon: <MdOutlineDashboardCustomize size={'25px'}/>,
        text: "Dashboard",
        link: "#"
    },
    {
        id: 2,
        icon: <MdOutlineSupervisedUserCircle size={'22px'} />,
        text: "User",
        link: "#"
    },
    {
        id: 3,
        icon: <MdListAlt size={'22px'} />,
        text: "Customer",
        link: "#"
    },
    {
        id: 4,
        icon: <MdListAlt size={'22px'} />,
        text: "Product Handling",
        link: "#"
    },
    {
        id: 4,
        icon: <MdOutlineCategory size={'22px'} />,
        text: "Sales & Refund",
        link: "#"
    },
    {
        id: 5,
        icon: <MdOutlineLocalOffer size={'22px'} />,
        text: "Discount",
        link: "/pdiscount"
    },
    {
        id: 6,
        icon: <MdReceiptLong size={'22px'} />,
        text: "Product Report",
        link: "/pdeport"
    }
]