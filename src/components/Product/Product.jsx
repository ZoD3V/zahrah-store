import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const sub_Cat = data.attributes.sub_categories.data[0].attributes;

  return (
    <Link
      to={`/product/detail/${data.attributes.slug}`}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="relative aspect-square rounded-xl">
        <img
          alt="ecommerce"
          className="aspect-square object-cover rounded-md"
          src={
            data.attributes.thumbnail.data.attributes.url
          }
        />
        <div className="py-2 text-black/[0.9] w-70">
          <h2 className="font-semibold text-md truncate capitalize">
            {data.attributes.title}
          </h2>
          <div className="text-gray-500 font-medium text-sm">{sub_Cat.title}</div>
          <div className="flex items-center text-black pt-3">
            <p className="mr-2 text-md font-bold">Rp.{data.attributes.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
