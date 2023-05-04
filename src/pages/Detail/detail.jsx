import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation,Link } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <section className="container mx-auto">
      <div className="flex items-center mt-12 mx-4">
        <BsArrowLeft className="mr-2" /> <Link to="/">Home</Link>
      </div>
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <h2 className="text-3xl font-semibold truncate">{data.name}</h2>
          <span className="text-xl">$ {data.price}</span>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="relative item rounded-lg h-full overflow-hidden">
            <img src={data.image} alt={data.name} className="w-full h-full" />
          </div>
        </div>

        <div className="flex-1 px-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h2 className="text-3xl font-semibold">{data.name}</h2>
              <div className="flex mt-4 mr-2">
                {Array.from({ length: data.rating }, (_, index) => (
                  <AiFillStar key={index} />
                ))}
                {Array.from({ length: 5 - data.rating }, (_, index) => (
                  <AiOutlineStar key={data.rating + index} />
                ))}
              </div>
              <p className="text-xl pt-4">$ {data.price}</p>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="inline-flex space-x-1 items-center">
                <span
                  className={`w-3 h-3 rounded-full ${
                    data.isOpen ? "bg-green-400" : "bg-orange-400"
                  }`}
                ></span>
                <p className="text-xs text-slate-600 uppercase">
                  {data.isOpen ? "open now" : "closed"}
                </p>
              </div>
              <button className="px-8 py-2 bg-blue-900 hover:bg-blue-800 duration-200 text-white mt-2 uppercase">
                Order Now
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-medium">Description:</h3>
            <p className="text-gray-700">{data.description}</p>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default Detail
