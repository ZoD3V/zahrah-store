import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Wrapper from "../../components/Navbar/Wrapper";
import { useFetch } from "../../../services/hook/useFetch";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [type, setType] = useState("all");
  const [activeMenu, setActiveMenu] = useState(1);

  const { data, loading, error } = useFetch(
    `${
      type === "all"
        ? `/products?populate=*&pagination[limit]=6`
        : `/products?populate=*&[filters][type][$eq]=${type}&pagination[limit]=6`
    }`
  );

  return (
    <>
      <Navbar />
      <Hero />
      <Wrapper className="">
        <div className="text-center max-w-[800px] mx-auto mb-[50px] mt-10 md:mt-15 md:mb-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Choose your style
          </div>
          <div className="text-sm md:text-md font-medium">
            ZahrahStore Clothing Store: Exclusive style, top-quality, and
            diverse collection. Discover unique clothing to showcase your
            confident and fashionable self.
          </div>
        </div>

        <div className="flex items-center justify-between sm:px-5">
          <div className="flex gap-0.5 sm:gap-2 items-center">
            <div
              className={`${
                activeMenu === 1
                  ? "py-1 px-2 text-white bg-black rounded-md cursor-pointer text-sm md:text-base"
                  : "py-1 px-2 text-black rounded-md cursor-pointer"
              }`}
              onClick={() => {
                setType("all");
                setActiveMenu(1);
              }}
            >
              All
            </div>

            <div
              className={`${
                activeMenu === 2
                  ? "py-1 px-2 text-white bg-black rounded-md cursor-pointer text-sm md:text-base"
                  : "py-1 px-2 text-black rounded-md cursor-pointer"
              }`}
              onClick={() => {
                setType("featured");
                setActiveMenu(2);
              }}
            >
              Featured
            </div>
            <div
              className={`${
                activeMenu === 3
                  ? "py-1 px-2 text-white bg-black rounded-md cursor-pointer text-sm md:text-base"
                  : "py-1 px-2 text-black rounded-md cursor-pointer"
              }`}
              onClick={() => {
                setType("trending");
                setActiveMenu(3);
              }}
            >
              Trending
            </div>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="text-sm md:text-base">Show All</div>
            <div className="group-hover:translate-x-[7px] duration-300">
              <AiOutlineArrowRight size={14} />
            </div>
          </Link>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0 justify-items-center">
          {error ? (
            <div className="col-span-full flex justify-center items-center">
              Something error
            </div>
          ) : loading ? (
            <div className="col-span-full flex justify-center items-center">
              Loading...
            </div>
          ) : (
            data.map((item) => {
              return <Product key={item.id} data={item} />;
            })
          )}
        </section>
      </Wrapper>
    </>
  );
};

export default HomePage;
