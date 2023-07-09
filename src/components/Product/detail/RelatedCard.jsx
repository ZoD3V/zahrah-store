import { Link } from "react-router-dom";

const RelatedCard = ({data}) => {
return (
    <Link to={`/product/detail/${data.attributes.slug}`} className="w-full group">
      <div className="relative overflow-hidden">
        <div className="overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-[250px] group-hover:scale-105 duration-300"
            src={data.attributes.thumbnail.data.attributes.url}
          />
        </div>
        <div className="py-2 text-black/[0.9] w-70">
          <h2 className="font-medium text-md truncate capitalize">
            {data.attributes.title}
          </h2>
          <div className="flex items-center text-black">
            <p className="mr-2 text-md font-bold">Rp.{data.attributes.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RelatedCard
