import { AiOutlineHome, AiOutlineSend, AiOutlineShop } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
export const DataMenu = [
  { id: 1, name: "Home", link: "/", icon: <AiOutlineHome /> },
  { id: 2, name: "Shop", link: "/shop", icon: <AiOutlineShop /> },
  { id: 3, name: "About", link: "/about", icon: <AiOutlineSend /> },
  // { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", link: "/contact", icon: <BsPerson /> },
];