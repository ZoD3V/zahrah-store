import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Wrapper from "../../../components/Navbar/Wrapper";
import RelatedProduct from "../../../components/Product/RelatedProduct";
import ProductDetail from "../../../components/Product/detail/ProductDetail";
import { useFetch } from "../../../../services/hook/useFetch";
import ReactMarkdown from "react-markdown";

const DetailProduct = () => {
  let { slug } = useParams();

  const { data} = useFetch(
    `/products?populate=*&[filters][slug][$eq]=${slug}`
  );

  const product = data[0]?.attributes;
  const productSubCat = data[0]?.attributes?.sub_categories.data[0]?.attributes;

  return (
    <>
      <Navbar />
      <div className="w-full py-12 md:py-24">
        <Wrapper className="">
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* Left */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetail data={product?.img?.data} />
            </div>
            {/* left */}

            {/* Right */}
            <div className="flex-[1] py-3">
              <div className="text-[30px] font-semibold mb-2 capitalize leading-6">
                {product?.title}
              </div>

              <div className="text-lg font-semibold mb-5">
                {productSubCat?.title}
              </div>

              <div className="text-xl font-semibold mb-1">
                Price : Rp.{product?.price}
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-10">{`(does not include postage and others)`}</div>

              <div className="mb-[15px]">
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Avaiable Size</div>
                  <div className="text-md font-medium text-black/[0.5]">
                    Select Guide
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-10">
                {
                  product?.size?.data?.map((item,index)=>{
                    return (
                      <div key={index} className={`border rounded-md text-center py-2 font-semibold ${item.enabled ? "hover:border-black cursor-pointer" : "cursor-not-allowed bg-black/[0.1] opacity-50"}`}>
                  {item.size}
                </div>
                    )
                  })
                }
              </div>

              <div>
                <div className="text-lg font-bold mb-3">Product Details</div>
                <div className="text-md mb-6 markdown">
                  <ReactMarkdown>{product?.desc}</ReactMarkdown>
                </div>
              </div>

              <div className="flex justify-center gap-[7px] items-center w-full py-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-5 hover:opacity-75 cursor-pointer">
                <div className="font-semibold">Buy on</div>
                <div>
                  <img
                    src="/assets/images/tokopedia.png"
                    className="w-[30px] h-[30px]"
                    alt="tokopedia"
                  />
                </div>
              </div>
            </div>
            {/* Right */}
          </div>
          <RelatedProduct />
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
