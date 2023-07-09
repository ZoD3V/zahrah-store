import React, { useEffect, useState } from "react";
import { DataMenu } from "./Data";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import { AiOutlineShopping } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const [mobileMenu, setMobile] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200 && !mobileMenu) {
      if (window.scrollY > lastScrollY) {
        setShow("translate-y-[80px] md:-translate-y-[80px]");
      } else {
        setShow("shadow-[0_-1px_4px_rgba(0,0,0,.15)] md:shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.screenY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${
        mobileMenu
          ? "w-full h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 fixed bottom-0 md:top-0 transition-transform duration-300 shadow-[0_-1px_4px_rgba(0,0,0,.15)] md:shadow-sm rounded-t-md md:rounded-none"
          : `w-full h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 fixed bottom-0 md:top-0 transition-transform duration-300 ${show} shadow-[0_-1px_4px_rgba(0,0,0,.15)] md:shadow-sm rounded-t-md md:rounded-none`
      }`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold italic">
          {/* <i className="bx bx-basket"></i> */}
          STORE.
        </Link>

        <div className="flex items-center gap-2 text-black">
          <Menu />

          <div className="relative w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
            <AiOutlineShopping className="text-[22px] md:text-[23px]" />
            <div className="h-[14px] md:h-[18px] w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>

          <div className="relative md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
            <BiMenuAltRight
              className="text-[20px]"
              onClick={() => setMobile(true)}
            />
          </div>
        </div>
      </Wrapper>

      <div
        className={`${
          mobileMenu
            ? "absolute w-full bottom-0 left-0 md:hidden p-5 shadow-[0_-1px_4px_rgba(0,0,0,.15)] bg-white rounded-t-lg overflow-hidden duration-300 transition-all"
            : "absolute w-full -bottom-44 left-0 md:hidden p-5 shadow-[0_-1px_4px_rgba(0,0,0,.15)] bg-white rounded-t-lg overflow-hidden duration-300 transition-all"
        }`}
      >
        <div className="grid grid-cols-2 gap-4 w-full text-sm text-black container mx-auto">
          {DataMenu.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Link to={item.link} className="cursor-pointer font-semibold flex flex-col items-center justify-center gap-2">
                  <div className="text-[16px]">{item.icon}</div>
                  <div>{item.name}</div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-end items-end cursor-pointer container mx-auto px-5 py-1">
          <VscChromeClose
            className="text-[20px]"
            onClick={() => setMobile(false)}
          />
        </div>
      </div>
    </header>
  );
}
