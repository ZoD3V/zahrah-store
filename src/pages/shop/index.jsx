import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useFetch } from "../../../services/hook/useFetch";
import Product from "../../components/Product/Product";

const ShopPage = () => {
  const [queryCat, setQuearyCat] = useState([]);
  const [querySubCat, setQuearySubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `${`/products?populate=*${queryCat
      .map((item) => `&[filters][categories][id]=${item}`)
      .join("")}${querySubCat
      .map((item) => `&[filters][sub_categories][id]=${item}`)
      .join("")}`}`
  );

  const dataCat = useFetch(
    `/products?populate=categories&populate=sub_categories&sub&fields[0]=categories&fields[1]=sub_categories`
  );

  const arrayCategories = dataCat?.data;

  const dataCategories = arrayCategories
    ?.flatMap((item) =>
      item.attributes.categories.data.map((category) => ({
        title: category.attributes.title,
        id: category.id,
      }))
    )
    ?.filter(
      (value, index, self) =>
        self.findIndex((item) => item.title === value.title) === index
    );

  const dataSubCategories = arrayCategories
    ?.flatMap((item) =>
      item.attributes.sub_categories.data.map((category) => ({
        title: category.attributes.title,
        id: category.id,
      }))
    )
    ?.filter(
      (value, index, self) =>
        self.findIndex((item) => item.title === value.title) === index
    );

  const handleQueryCat = (value) => {
    setQuearyCat(
      queryCat.includes(value)
        ? queryCat.filter((item) => item !== value)
        : [...queryCat, value]
    );
  };

  const handleQuerySubCat = (value) => {
    setQuearySubCat(
      querySubCat.includes(value)
        ? querySubCat.filter((item) => item !== value)
        : [...querySubCat, value]
    );
  };

  return (
    <>
      <Navbar />
      <div className="pt-0 md:pt-20">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <div
            className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            style={{
              backgroundImage: `url(/assets/images/background-paint.jpg)`,
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl lg:tracking-widest sm:max-w-xl max-w-xs">
                Explore The Collection!
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] pt-12 container mx-auto px-5 h-screen">
          {/* Left */}
          <div className="w-full md:w-auto flex-[1] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <h3 className="text-md font-bold">Category</h3>
            {/* <div className="h-[1px] bg-gray-300 my-4 w-[35%]"></div> */}
            <hr className="my-4 w-[35%]" />
            <div className="flex flex-wrap gap-2">
              {dataCategories.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <button
                    onClick={() => {
                      handleQueryCat(item.id);
                    }}
                    className={`${
                      queryCat.includes(item.id)
                        ? "rounded-md text-sm text-white p-2 bg-black border border-gray-300 font-semibold"
                        : "hover:text-gray-700 rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 font-semibold"
                    }`}
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>

            <div className="my-8"></div>

            <h3 className="text-md font-bold">Sub Category</h3>
            {/* <div className="h-[1px] bg-gray-300 my-4 w-[35%]"></div> */}
            <hr className="my-4 w-[35%]" />
            <div className="flex flex-wrap gap-2">
              {dataSubCategories.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <button
                    onClick={() => {
                      handleQuerySubCat(item.id);
                    }}
                    className={`${
                      querySubCat.includes(item.id)
                        ? "rounded-md text-sm text-white p-2 bg-black border border-gray-300 font-semibold"
                        : "hover:text-gray-700 rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 font-semibold"
                    }`}
                  >
                    {item.title}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* left */}

          {/* Right */}
          <div className="flex-[1.7] py-3">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
              {/* productcard? */}
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
            </div>
          </div>
          {/* Right */}
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default ShopPage;
